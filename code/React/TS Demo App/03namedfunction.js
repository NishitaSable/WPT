"use strict";
function increment(counter) {
    return counter++ + "bye";
}
let result = increment(8);
console.log(result);
// write strongly typed do not infer
function sincrement(counter) {
    return counter++ + "bye";
}
let sresult = increment(8);
console.log(sresult);
