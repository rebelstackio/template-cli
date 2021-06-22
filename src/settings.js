const program = require('commander');
const _options = require('./options');
const Parse = require('./parse');
const nunjucks = require('nunjucks');

program.version(
	require('../package.json').version
);

const parse = program.command('parse [templates...]')
	.description('Run query and parse results')
	.usage('[options] <template> [templates...]');

_options.forEach(function (option) {
	parse.option(...option.command);
});

async function parseAction (templates, options) {
	if ( options['verbose'] ) {
		console.log('lydbHelper command line interface');
		console.log(`Version: ${program.version()}`);
		console.log(`Usage: ${parse.usage()}\n`);
		console.log('Options: \n');
		_options.forEach(function (option) {
			console.log(`--${option.name}: ${options[option.name]}`);
		});
	}

	const source = options.source || (await optionalSource());

	if ( source ) {
		nunjucks.configure({ autoescape: true });
		nunjucks.parseTemplate = nunjucks.renderString;
	}

	const res = await new Parse({
		templates,
		connectionstring: options.connectionstring,
		configfile: options.configfile,
		source: source.replace(/^\s+|\s+$/g, ''),
		run: options.run,
		silent: options.silent
	}, nunjucks).parse();

	if ( !options['silent'] ) {
		if ( options['run'] ) {
			console.log(JSON.stringify({
				rows: res[0].rows
			}));
		} else {
			for (let i = 0; i < res.length; i++) {
				console.log(res[i]);
			}
		}
	}
}

parse.action(async function (templates, options) {
	try {
		await parseAction(templates, options);
	} catch (error) {
		console.error(error);
	} finally {
		process.exit(0);
	}
});

function optionalSource () {
	return new Promise(function (resolve, _) {
		process.stdin.on('data', function (data) {
			resolve(data.toString());
		});
	});
}

program.parse(process.argv);

module.exports = program;