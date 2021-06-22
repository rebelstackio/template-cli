module.exports = [
	{
		name: 'connectionstring',
		command: ['-c, --connectionstring <connectionstring>', 'Postgres connection string URI', false]
	},
	{
		name: 'configfile',
		command: ['-C, --configfile <configfile>', 'Configuration file', '/etc/pgrefresher/pgrefresher_config.json']
	},
	{
		name: 'source',
		command: ['-src, --source <source>', 'Data source for the parsing', false]
	},
	{
		name: 'run',
		command: ['--no-run', 'Prevents the client from running the queries on the templates']
	},
	{
		name: 'verbose',
		command: ['-vv, --verbose', 'produces more descriptive output', false]
	},
	{
		name: 'silent',
		command: ['-s, --silent', 'Does not produce stdout', false]
	}
];