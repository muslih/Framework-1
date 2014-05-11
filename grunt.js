module.export = function (grunt) {
	grunt.initConfig({
		min: {
			dist: {
				src: 'public/js/plugins.js';
				dst: 'public/js/plugins.min.js';
			}
		}
	});
};