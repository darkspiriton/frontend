/*
*Dependencias
*/

var gulp = require('gulp'),
	stylus = require('gulp-stylus');

var path = {
    stylus: ['lib/*.styl'],
    css: 'public/css/'
};

gulp.task('estilos', function () {
    return gulp.src(path.stylus)
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest(path.css));
});
