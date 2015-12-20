var beep = require('beepbeep');
var gutil = require('gulp-util');

module.exports = function(err) {

    beep([0, 0]);
    gutil.log(gutil.colors.green(err));
    this.emit('end');
};
