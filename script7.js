// LESSON 3 HOMEWROK
const io = require('console-read-write');

async function main() {
    
    let num = 0
    while (num <= 100) {
        let probar = true
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                probar = false
                break
            }
            
        }
        if (probar) {
            console.log(num)
        }
        num++
    }
}

main();