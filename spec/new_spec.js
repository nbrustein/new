'use strict'

describe('new', function() {

    var some, vars;

    beforeEach(function() {
        module('New');
                
        inject(function(){
        });
    });
    
    afterEach(function() {
    });

    // ### Documentation
    // lorem ipsum ...
    it('should do something at least', function() {
        expect("Did you write some tests?").toBe("Yes!");
    });

});
