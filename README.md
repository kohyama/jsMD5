English
===

jsMD5 is an implementation of [RFC 1321 - The MD5 Message-Digest Algorithm] (http://tools.ietf.org/html/rfc1321) in JavaScript.

To use this do as below:

    var md5 = require('./md5')
      , na
      , str
      ;

    na = md5.digest(<array of numbers>);
    // na is an array of numbers

    str = md5.digest_s('The quick brown fox jumped over the lazy dog.');
    // str === '5c6ffbdd40d9556b73a21e63c3e0e904'

"array of numbers" is an array of unsigned integer of each bytes to digest or of each bytes of digested.

Japanese
===

jsMD5 は [RFC 1321 - The MD5 Message-Digest Algorithm] (http://tools.ietf.org/html/rfc1321) の JavaScript による実装です.

This software license is the New BSD License.  

利用するには

    var md5 = require('./md5')
      , na
      , str
      ; 

    na = md5.digest(数値の配列); 
    // na は数値配列

    str = md5.digest_s(文字列);
    // str は文字列

のようにします.
数値の配列はダイジェストを取りたいバイト列およびダイジェスト計算を行った後のバイト列の, 各バイトを非符号整数にしたものの配列です.

本ソフトゥアのライセンスは, 修正BSDライセンスとします.  
