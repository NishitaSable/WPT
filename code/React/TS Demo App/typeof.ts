function formatValue(value: string | number):string{
    if(typeof value === 'string' ){
        return value.trim().toUpperCase()
    }else{
        return value.toFixed(2);
    }
}
const result1 = formatValue('hello');// "HELLO"
const result2 = formatValue(42.1234);
console.log(typeof(result2))



