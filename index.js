#!/usr/bin/env node

'use strict';

const _path = require('path');
const _fs = require('fs');

if (_fs.existsSync(_path.resolve(process.cwd(), '.env'))) {
	require('dotenv').config({path: _path.resolve(process.cwd(), '.env')});
}

require('./src/settings');