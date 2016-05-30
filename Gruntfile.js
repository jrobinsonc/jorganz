module.exports = function(grunt) {
    "use strict";


    grunt.option("filename", 'jquery.jorganz.js');


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: true
            },
            all: [
                "src/<%= grunt.option('filename') %>",
            ]
        },

        uglify: {
            files: {
                "dist/<%= grunt.option('filename').replace('.js', '.min.js') %>": "src/<%= grunt.option('filename') %>",
            },
            options: {
                quote_style: 3,
                banner: '/*! jOrganz v<%= pkg.version %> | ' +
                '(c) JoseRobinson.com | ' +
                'https://raw.githubusercontent.com/jrobinsonc/jorganz/master/LICENSE */',
            },

            dev: {
                options: {
                    mangle: false,
                    beautify: true,
                    compress: false,
                    preserveComments: 'all',
                },
                files: '<%= uglify.files %>'
            },
            dist: {
                options: {
                    sourceMap: true,
                },
                files: '<%= uglify.files %>'
            }
        },

        jscs: {
            src: "src/<%= grunt.option('filename') %>",
            options: {
                config: ".jscsrc",
                verbose: true
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-jscs");


    grunt.registerTask('validate', ['jshint:all', 'jscs']);
    grunt.registerTask('dist', ['validate', 'uglify:dist']);
    grunt.registerTask('dev', ['validate', 'uglify:dev']);
    grunt.registerTask('default', ['dev']);
}
