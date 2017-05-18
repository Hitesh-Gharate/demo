var gulp = require('gulp');

path  ={

	'bower':'./bower_components'
}
gulp.task('style',function(){

	console.log('style task run');
});
gulp.task('js',function(){

	console.log('js task run');
});
gulp.task('default',['style','js']);


