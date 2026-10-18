"use strict";
// `keyof StringMap` resolves to `string` here
function createStringPair(property, value) {
    return { [property]: value };
}
console.log(JSON.stringify(createStringPair('greeting', 'hello')));
