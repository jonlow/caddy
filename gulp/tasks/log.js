var gulp   = require('gulp'),
    fs = require('fs');


gulp.task('log', function() {

	eval(fs.readFileSync('src/scripts/startup.js').toString());	

	var menuStatus = COURSEPROPS.openMenu ? "Open" : "Closed";

	console.log("Menu is " + menuStatus);
  
});
