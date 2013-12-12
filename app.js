var SourceMapConsumer = require('source-map').SourceMapConsumer;

var rawSourceMap = require('./srcmap.json');

var smc = new SourceMapConsumer(rawSourceMap);

//console.log(smc.sources);

console.log(smc.originalPositionFor({
	line: 2,
	column: 8536
}));