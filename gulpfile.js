var gulp = require('gulp');

function getTask(task) {
	return require('./gulp/tasks/' + task)(gulp);
}

gulp.task('test', getTask('test'));