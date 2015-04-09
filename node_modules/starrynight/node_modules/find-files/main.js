var fs = require('fs'),
	walk = require('walk'),
	path = require('path'),
	cwd = process.cwd();

var findFiles = function(name, options, cb) {
	if (!cb) {
		cb = function(msg) {
			console.log('Matching directories: ', msg);
		};
	}

	var ignoreDirs = options.ignoreDirs || [];
	var requireExts = options.requireExts || false;
	var startDir = options.root || cwd;
	var matches = [];

	var matchesQuery = function(filename) {
		var query = new RegExp(name, 'ig');
		if (query.test(filename)) {
			return true;
		}
		return false;
	};

	walker = walk.walk(startDir);
	walker.on('files', function(root, files, next) {
		var skipDir = false;
		ignoreDirs.forEach(function(dir){
			if(root.indexOf(dir) >= 0) {
				next();
				skipDir = true;
			}
		});
		if(skipDir) {
			return;
		}
		console.log(root);
		files.forEach(function(item) {
			if(!requireExts || requireExts.indexOf(path.extname(item.name)) >= 0) {
				if (matchesQuery(item.name)) {
					matches.push({
						name: item.name,
						filepath: path.join(root, item.name)
					});
				}
			}
		});
		next();
	});

	walker.once('end', function() {
		if (matches.length === 0) {
			console.log('no matches found');
		}
		cb(matches);
	});
};
module.exports = findFiles;