const _fs = require('fs');

class Parse {
	constructor ( props, templateParser ) {
		this.props = props;
		this.templateParser = templateParser;
	}

	async parse () {
		const res = [];
		let sourceRows = [];

		if ( this.props.source ) {
			sourceRows = this.source();
		}

		for (let i = 0; i < this.props.templates.length; i++) {
			const rawQuery = _fs.readFileSync(this.props.templates[i], 'utf-8');
			let query = rawQuery;

			if ( this.props.source ) {
				for (let i = 0; i < sourceRows.length; i ++) {
					const row = sourceRows[i];
					query = this.fixedQuery( rawQuery, row );
					res.push( query );
				}
			} else {
				res.push( query );
			}
		}

		return res;
	}

	source () {
		return JSON.parse( this.props.source );
	}

	fixedQuery ( query, row ) {
		const replacementKeys = Object.keys(row);
		let newQuery = query;

		for (let i = 0; i < replacementKeys.length; i++) {
			const key = replacementKeys[i];

			const obj = {};
			obj[key] = row[key];

			newQuery = this.templateParser.parseTemplate(newQuery, obj);
		}

		return newQuery;
	}
}

module.exports = Parse;