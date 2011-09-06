English
=======

What is this
------------

jsMD5 is an implementation of [RFC 1321 - The MD5 Message-Digest Algorithm] (http://tools.ietf.org/html/rfc1321) in JavaScript.

Usage
-----

To use this do as below:

    var md5 = require('./md5');
    var na = md5.digest(<array of numbers>);
    // na is an array of numbers
    var str = md5.digest_s(<string>);
    // str is an string

"array of numbers" is an array of unsigned integer of each bytes to digest or of each bytes of digested.

License
-------

Copyright (c) 2011, Yoshinori Kohyama (http://algobit.jp/)  
All rights reserved.  

Redistribution and use in source and binary forms, with or  
without modification, are permitted provided that the following  
conditions are met:  

Redistributions of source code must retain the above copyright  
notice, this list of conditions and the following disclaimer.  
Redistributions in binary form must reproduce the above  
copyright notice, this list of conditions and the following  
disclaimer in the documentation and/or other materials provided  
with the distribution.  
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND  
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,  
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF  
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE  
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR  
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,  
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT  
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF  
USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED  
AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT  
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING  
IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF  
THE POSSIBILITY OF SUCH DAMAGE.  


Japanese
========

これは何
--------

jsMD5 は [RFC 1321 - The MD5 Message-Digest Algorithm] (http://tools.ietf.org/html/rfc1321) の JavaScript による実装です.

使い方
------

利用するには

    var md5 = require('./md5'); 
    var na = md5.digest(数値の配列); 
    // na は数値配列
    var str = md5.digest_s(文字列);
    // str は文字列

のようにします.
数値の配列はダイジェストを取りたいバイト列およびダイジェスト計算を行った後のバイト列の, 各バイトを非符号整数にしたものの配列です.

ライセンス
----------

修正 BSD ライセンスです.
上記英文だけが法律的に有効です.
参考のため以下に日本語訳を掲載します.

Copyright (c) 2011, Yoshinori Kohyama (http://algobit.jp/)  
All rights reserved.  

ソースコード形式であれバイナリ形式であれ、変更の有無に関わらず、  
以下の条件を満たす限りにおいて、再配布および使用を許可します:  

ソースコード形式で再配布する場合、上記著作権表示、 本条件書およ  
び下記責任限定規定を必ず含めてください。  
バイナリ形式で再配布する場合、上記著作権表示、 本条件書および下  
記責任限定規定を、配布物とともに提供される文書 および/または  
他の資料に必ず含めてください。  
本ソフトウェアは著作権保持者によって、”現状のまま” 提供される  
ものとします。 本ソフトウェアについては、明示黙示を問わず、 商  
用品として通常そなえるべき品質をそなえているとの保証も、 特定の  
目的に適合するとの保証を含め、何の保証もなされません。 事由のい  
かんを問わず、 損害発生の原因いかんを問わず、且つ、 責任の根拠  
が契約であるか厳格責任であるか (過失その他) 不法行為であるか  
を問わず、 著作権保持者も寄与者も、 仮にそのような損害が発生す  
る可能性を知らされていたとしても、 本ソフトウェアの使用から発生  
した直接損害、間接損害、偶発的な損害、 特別損害、懲罰的損害また  
は結果損害のいずれに対しても (代替品またはサービスの提供; 使  
用機会、データまたは利益の損失の補償; または、業務の中断に対す  
る補償を含め) 責任をいっさい負いません。  

このソフトウェアと文書に含まれる意見や結論はそれらの著作者による  
ものであって、 著作者の公式な方針を、明示黙示を問わず、 あらわ  
しているものととってはならない。  
