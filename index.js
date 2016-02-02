'use strict';

var fs = require('fs');
var extend = require('extend');
var path = require('path');
var jade = require('jade');

function getFiles(options) {
	options = extend({
		path: './',
		extension: '.html',
		name: 'result',
		title: 'project-map'
	}, options);
	var dir = options.path;
	console.log(options);

	walker(dir, function(error, result) {
		if (error) {
			throw error;
		}

		var data = {
			title: options.title,
			list: []
		};

		for (var i = 0, count = result.length; i < count; i += 1) {
			if (path.extname(result[i]) === options.extension) {
				data.list.push(result[i].replace(dir + '/', ''));
			}
		}

		jade.renderFile(__dirname + '/result.jade', {pretty: true, data: data}, function(error, html) {
			if (error) {
				console.log('error:\n' + error);
			}

			fs.writeFile(dir + '/' + options.name + '.html', html, function(err) {
				if (err) {
					return console.log(err);
				}
			});
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

module.exports = getFiles;
