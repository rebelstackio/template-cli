module.exports = [
	{
		name: 'source',
		command: ['-src, --source <source>', 'Data source for the parsing', false]
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