var gulp = require('gulp'),
	less = require('gulp-less'),
	livereload = require('gulp-livereload');

gulp.task('compile-less', function () {
	gulp.src('app/css/styles.less')
		.pipe(less())
		.pipe(gulp.dest('app/css/'))
		.pipe(livereload());
});

gulp.task('default', function () {
	livereload.listen();
	gulp.watch(['app/css/styles.less'], ['compile-less']);
});