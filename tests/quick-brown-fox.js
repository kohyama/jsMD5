(function () {
  "use strict";

  var md5 = require('../lib')
    , data = 'The quick brown fox jumped over the lazy dog.'
    ;

  console.log("'" + data + "':", md5.digest_s(data));
}());
