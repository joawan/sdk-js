/*global chai:false*/
/*global describe:false*/
/*global it:false*/
/*global SPiD:false*/

describe('SPiD.Log()', function() {

    var assert = chai.assert;

    it('SPiD.Log().enabled should return true', function() {
        var conf = {client_id : '4d00e8d6bf92fc8648000000', server: 'stage.payment.schibsted.se', prod:false, logging:true};
        SPiD.init(conf);
        assert.isTrue(SPiD.Log().enabled());
    });
    it('SPiD.Log().enabled should return false', function() {
        var conf = {client_id : '4d00e8d6bf92fc8648000000', server: 'stage.payment.schibsted.se', prod:false, logging:false};
        SPiD.init(conf);
        assert.isFalse(SPiD.Log().enabled());
    });
});
