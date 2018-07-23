var beep = require('beepbeep');
var log = require('fancy-log');

module.exports = function(err) {

    console.log('error');

    beep([0, 0]);
    log(err);
    this.emit('end');
};
