var fsm = require('./common').fsm;
var state = require('./common').state;

module.exports = {
    'bar()': function(assert){
        var sys = require('sys');
        var myState = new state();
        assert.ok(myState.setPayLoad({id:1}));
        var data = myState.getPayLoad();
        assert.ok(typeof data == 'object');
        assert.ok(data.id == 1); 
    }
};

