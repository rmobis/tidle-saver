const fs = require('fs'),
	ini = require('ini'),
	TOML = require('@iarna/toml'),
	mapValues = require('lodash/mapValues');

let saveFile = process.argv[2];
let saveGame = TOML.parse(fs.readFileSync(saveFile));

saveGame.INI = mapValues(saveGame.INI, v => Buffer.from(ini.stringify(v), 'ascii').toString('base64'));

saveGame = Buffer.from(ini.stringify(saveGame), 'ascii').toString('base64');

console.log(saveGame);
