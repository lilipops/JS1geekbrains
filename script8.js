// HOMEWORK LESSON 3 EXERCISE 2
const io = require('console-read-write');
function countBasketPrice(products) {
    let price = 0
    for (let i = 0; i <  products.length; i++) {
        for (let g = 1; g < (products[i].length - 1);g++) {
            
            price += (products[i][g]) * (products[i][g+1])
            
        }
        
    } 
    return price
}

async function main() {
    let products = [
        ['car', 1, 100],
        ['house', 2, 200],
        ['yatch', 3, 300],
    ]
    console.log("The basket price is " + countBasketPrice(products))
  
    


}

main();