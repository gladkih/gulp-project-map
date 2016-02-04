'use strict';

var fs = require('fs');
var extend = require('extend');
var jade = require('jade');
var cheerio = require('cheerio');

function getFiles(options) {
	options = extend({
		path: './',
		extension: '.html',
		name: 'result',
		title: 'project-map'
	}, options);

	var dir = options.path;
	walker(dir, function(error, result) {

		if (error) {
			throw error;
		}

		var data = {
			title: options.title,
			list: []
		};
		var len = result.length;

		Promise.prototype.thenReturn = function(value) {
			return this.then(function() {
				return value;
			});
		};

		function readFile(filePath) {
			return new Promise(function(resolve) {
				getTitle(filePath, options.path, function(title) {
					data.list.push(title);
					resolve();
				});
			});
		}

		Promise.resolve(0).then(function loop(i) {
			if (i < len) {
				return readFile(result[i])
					.thenReturn(i + 1)
					.then(loop);
			}
		}).then(function() {
			writeResultFile(options, data);
			console.log('done');
		}).catch(function(error) {
			console.log('error', error);
		});

	});
}

/**
 * Write result file
 * @param options
 * @param data
 */
function writeResultFile(options, data) {
	jade.renderFile(__dirname + '/result.jade', {pretty: true, data: data}, function(error, html) {
		if (error) {
			console.log('error:\n' + error);
		}

		fs.writeFile(options.path + '/' + options.name + '.html', html, function(err) {
			if (err) {
				return console.log(err);
			}
		});
	});
}

function walker(directory, callback) {
	var results = [];
	fs.readdir(directory, function(error, list) {
		if (error) {
			return callback(error);
		}
		var i = 0;
		(function next() {
			var file = list[i];
			i += 1;
			if (!file) {
				return callback(null, results);
			}
			file = directory + '/' + file;
			fs.stat(file, function(error, stat) {
				if (stat && stat.isDirectory()) {
					walker(file, function(error, res) {
						results = results.concat(res);
						next();
					});
				} else {
					results.push(file);
					next();
				}
			});
		})();
	});
}

/**
 *
 * @param url
 * @param removePath
 * @param callback
 */
function getTitle(url, removePath, callback) {
	callback = callback ? callback : function() {
	};
	fs.readFile(url, 'utf8', function(error, data) {
		url = url.replace(removePath + '/', '');
		var _fileInfo = {
			title: url,
			link: url
		};
		if (error) {
			callback(_fileInfo);
		}
		var $ = cheerio.load(data);
		var _title = $('title');

		_fileInfo.title = _title.text() || url;
		callback(_fileInfo);
	});
}

module.exports = getFiles;
