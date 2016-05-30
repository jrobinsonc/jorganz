module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: {
                src: [
                    'src/jquery.jorganz.js',
                ],
                options: {
                    jshintrc: true
                }
            }
        },

        uglify: {
            files: {
                'dist/jquery.jorganz.min.js': ['src/jquery.jorganz.js']
            },
            options: {
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
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('dist', ['jshint:all', 'uglify:dist']);
    grunt.registerTask('dev', ['jshint:all', 'uglify:dev']);
    grunt.registerTask('default', ['dev']);
}
