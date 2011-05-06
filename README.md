jsMD5 は [RFC 1321 - The MD5 Message-Digest Algorithm] (http://tools.ietf.org/html/rfc1321) の JavaScript による実装です.

jsMD5 is an implementation of [RFC 1321 - The MD5 Message-Digest Algorithm] (http://tools.ietf.org/html/rfc1321) in JavaScript.

利用するには
    var md5 = require('./md5');
	var na = md5.digest(数値の配列);
	// na は数値配列
	var str = md5.digest_s(文字列);
	// str は文字列
のようにします.
数値の配列はダイジェストを取りたいバイト列およびダイジェスト計算を行った後のバイト列の, 各バイトを非符号整数にしたものの配列です.

To use this do as below:
    var md5 = require('./md5');
	var na = md5.digest(*array of numbers*);
	// na is an array of numbers
	var str = md5.digest_s(*string*);
	// str is an string
"array of numbers" is the array of unsigned integer of each bytes to digest or of each bytes of digested.

本ソフトゥアのライセンスは, 修正BSDライセンスとします.  

This software license is the New BSD License.  

_Copyright &copy; 2010 Yoshinori Kohyama All Rights Reserved._
