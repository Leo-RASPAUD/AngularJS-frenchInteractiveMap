const gulp = require('gulp'),
    serve = require('gulp-serve'),
    $ = require('gulp-load-plugins')({lazy: true}),
    connect = require('gulp-connect');

gulp.task('serve', function() {
    $.connect.server({
        root: ['webContent'],
        livereload: true,
        port: 9000,
        middleware: function(connect) {
            return [connect().use('/bower_components', connect.static('bower_components'))];
        }
    });
});