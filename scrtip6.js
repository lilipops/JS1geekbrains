// ZADANIE 8


const io = require('console-read-write');
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      
      
        
        return x * pow(x, n - 1)
      
    }
  }
  

async function main() {
    console.log(pow(5,4))

}

main();