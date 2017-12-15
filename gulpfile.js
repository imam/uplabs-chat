var gulp = require('gulp')
var stylus = require('gulp-stylus')
var poststylus = require('poststylus')
var autoprefixer = require('autoprefixer')
var lost = require('lost')

gulp.task('style', function(){
	return gulp.src('./style.styl')
		.pipe(stylus({
			use: [
				poststylus([autoprefixer, lost])
			]
		}))
		.pipe(gulp.dest('./dist'))
})

gulp.task('default', ['style'], function(){
	gulp.watch('style.styl', ['style'])
})

