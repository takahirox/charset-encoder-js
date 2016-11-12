var CharsetEncoder = require('../build/charsetencoder');

var encoder = new CharsetEncoder.CharsetEncoder();
var inputArray = [
  0x82, 0xa0, // あ
  0x82, 0xa2, // い
  0x82, 0xa4, // う
  0x82, 0xa6, // え
  0x82, 0xa8  // お
];
var text = encoder.s2u(new Uint8Array(inputArray));

function toHexStrings(inputArray) {
  var hexArray = [];
  for (var i = 0, il = inputArray.length; i < il; i++) {
    hexArray.push('0x' + inputArray[i].toString(16));
  }
  return hexArray.join(',');
}

var expected = 'あいうえお';

console.log('CharsetEncoder.s2u() test');
console.log('Input: ' + toHexStrings(inputArray));
console.log('Expected: ' + expected);
console.log('Output: ' + text);

console.log(text === expected ? 'Success' : 'Fail');

return false;
