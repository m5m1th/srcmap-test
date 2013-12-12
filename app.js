var fs = require('fs');
var SourceMapConsumer = require('source-map').SourceMapConsumer;

var rawSourceMap = JSON.parse(fs.readFileSync('./scripts.js.map', "utf8"));

var smc = new SourceMapConsumer(rawSourceMap);

console.log(smc.originalPositionFor({
	line: 1,
	column: 10232
}));
