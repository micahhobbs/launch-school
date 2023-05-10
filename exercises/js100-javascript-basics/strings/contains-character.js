// Write code that checks whether the string byteSequence contains the character x.

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));

// It's a great exercise to try to implement the functionality of String.prototype.includes() yourself.

function includesV2(sequence, char) {
    let includes = false; 
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === char) {
            includes = true;
        }
    }
    return includes;
}

console.log(includesV2(byteSequence, 'x'));