module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify:{
			my_target:{
				files:{
					'_/js/script.js':['_/components/js/script.js','_/components/js/other.js']
				}//files
			}//my_target
		}, //uglify
		compass:{
			dev:{
				options:{
					config: 'config.rb'
				}//options
			}//dev
		},//compass
		watch:{
			options:{
				livereload:true
			},//options
			scripts: {
				files:['_/components/js/styles.js'],
				tasks: ['uglify']
			},//scripts
			sass:{
				files:['_/components/sass/styles.scss'],
				tasks: ['compass:dev']
			},//sass
			html:{
				files:['*.html']
			}
		}//watch
	}) //initConfig
	grunt.registerTask('default','watch');
}//exports