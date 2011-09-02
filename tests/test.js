(function () {
  "use strict";

  var assert = require('assert')
    , crypto = require('crypto')
    , md5 = require('../lib')
    ;

  function test(data) {
    var md5sum = crypto.createHash('md5')
      ;

    md5sum.update(data);
    assert.strictEqual(md5sum.digest('hex'), md5.digest_s(data));
  }

  [
      ''
    , 'a'
    , 'abc'
    , 'message digest'
    , 'abcdefghijklmnopqrstuvwxyz'
    , 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    , '12345678901234567890123456789012345678901234567890123456789012345678901234567890'
    , 'The quick brown fox jumped over the lazy dog.'
  ].forEach(test);

  console.log('All tests pass');
}());
