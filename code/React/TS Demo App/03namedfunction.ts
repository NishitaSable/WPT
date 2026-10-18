function increment(counter:number){
    return counter++ + "bye";
}
let result = increment(8)
console.log(result)


// write strongly typed do not infer

function sincrement(counter:number){
    return counter++ + "bye";
}
let sresult = increment(8)
console.log(sresult)