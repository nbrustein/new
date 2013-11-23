'use strict'

describe('NAME_DASHED', function() {

    var some, vars;

    beforeEach(function() {
        module('NAME_CAMELCASED');
                
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
