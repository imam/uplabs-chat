var gulp = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('style', function(){
	return gulp.src('./style.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./dist'))
})

gulp.task('default', ['style'], function(){
	gulp.watch('style.styl', ['style'])
})

