module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			desktop: {
				src: ['css/src/style.scss'],
				dest: 'css/style.css'
			}
		},
		uglify: {
			all: {
				files: [
					{
						expand: true,
						cwd: 'js/dest',
						src: ['*.js'],
						dest: 'js/',
						ext: '.min.js'
					}
				]
			}
		},
		concat: {
			dist: {
				src: ['js/src/enemies.js', 'js/src/player.js', 'js/src/input.js', 'js/src/sprite.js', 'js/src/ressources.js', 'js/src/core.js', 'js/src/enemyMovement.js', 'js/src/combat.js'],
				dest: 'js/dest/compiled.js',
			},
		},
		watch: {
			sass: {
				files: ['css/src/*.scss'],
				tasks: ['sass:desktop']
			},
			concat: {
				files: ['js/src/*.js'],
				tasks: ['concat']
			},
			uglify: {
				files: ['js/dest/*.js'],
				tasks: ['uglify']
			}
		}
	});


	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('sentry', 'watch');
	grunt.registerTask('default', ['sass', 'concat', 'uglify']);

};