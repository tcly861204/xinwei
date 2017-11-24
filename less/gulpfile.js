var gulp = require('gulp'),
    less = require('gulp-less'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('cssnext'),
    precss = require('precss'),
    cssmin = require('gulp-minify-css'),
    rename = require("gulp-rename");
gulp.task('Less', function() {
    var processors = [autoprefixer({ "browsers": "> 5%" }), cssnext, precss];
    gulp.src('style/*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(cssmin())
        .pipe(rename(function(path) {
            path.dirname = path.basename;
            path.basename = "index";
            path.extname = ".wxss";
        }))
        .pipe(gulp.dest('../pages'));
});

gulp.task("default", function() {
    gulp.watch("style/*.less", ['Less']);
});