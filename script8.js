// HOMEWORK LESSON 4 EXERCISE 2
const io = require('console-read-write');
const basket = {
    products: [
      { id: 123, name: "Car",
        cantidad: 4, precio: 3145 },
     
      { id: 456, name: "house",
        cantidad: 1, precio: 1000 },
     
      { id: 444, name: "Yatch",
        cantidad: 17, precio: 1500 }
    ], countBasketPrice() {
      return this.goods.reduce((totalprice, cartitems) => totalprice += cartitems.precio)
    }
  };
async function main() {
    
}

