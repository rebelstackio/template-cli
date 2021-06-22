const _fs = require('fs');
const { Pool } = require('pg');

function loadConfig ( configFile, optionsConnectionstring ) {

	let connectionstring = false;
	let jsonConnString = false;

	if ( _fs.existsSync( configFile ) ) {
		jsonConnString = JSON.parse( _fs.readFileSync( configFile ) )['connectionstring'];
	}

	connectionstring = jsonConnString || optionsConnectionstring;

	if ( connectionstring ) {
		return connectionstring;
	} else {
		return {
			user: process.env['PGUSER'],
			host: process.env['PGHOST'],
			database: process.env['PGDATABASE'],
			password: process.env['PGPASSWORD'],
			port: process.env['PGPORT']
		};
	}

}

function pgConnection ( connectionConfig ) {

	let config = {};

	if ( typeof connectionConfig === 'string' ) {
		config.connectionString = connectionConfig;
	} else if ( typeof connectionConfig === 'object' ) {
		config = connectionConfig
	}

	return new Pool(config);

}


module.exports = {
	pgConnection,
	loadConfig
}