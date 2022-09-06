function numbers(num) {
    let object = {}
    if (isNaN(num)) {
        console.log("please write a number ")
    } else if (num < 0 || num > 999 ) {
        
        console.log('please write a number from 0 to 999')
        
        return object
    } else {
        let numbers=['units', 'tens', 'hundreds']
        let i = 0;
        
        for(let i = 0; num!=0; i++ ) {
            object[numbers[i]] = num % 10
            num = (num - num % 10) / 10
        } 
    }   return object

}
console.log(numbers("heloo"))
console.log(numbers(256))
console.log(numbers(12))


