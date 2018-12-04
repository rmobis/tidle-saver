const ini = require('ini'),
	TOML = require('@iarna/toml'),
	mapValues = require('lodash/mapValues');

let saveGame = process.argv[2];
saveGame = ini.parse(Buffer.from(saveGame, 'base64').toString('ascii'));

saveGame.INI = mapValues(saveGame.INI, v => ini.parse(Buffer.from(v, 'base64').toString('ascii')));

console.log(TOML.stringify(saveGame));
