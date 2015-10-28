# charset-encoder-js
Simple charset encoder with JavaScript.

## Features
- convert from Shift-JIS Uint8Array to Unicode Strings.
- no other encoding support but might support someday.

## How to use
```
<script src="build/charsetencoder.min.js"></script>
<script>
var encoder = new CharsetEncoder();
var shiftJisArray = new Uint8Array([0x82, 0xa0, 0x82, 0xa2, 0x82, 0xa4]);
console.log(encoder.s2u(shiftJisArray)); // あいう
</script>
```
