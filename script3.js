 var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 = (1 C = 0) potom a = 1 znachit a++ = 1 + 1 = (2)  префиксная форма возвращает новое значение
 d = b++; alert(d);           // 1 постфиксная форма возвращает старое значение b = 1 == c = 1

c = (2+ ++a); alert(c);      // 5 А уже равнялась двум поэтому 2 + 1  = 3 поэтому 2+ 3 = 5
d = (2+ b++); alert(d);      // ++ задействует только на следующем этапе
 alert(a);                    // 3 Потому что мы прибавили единицу два раза переменной A поэтому получается три
 alert(b);                    // 3 Мы перешли на следующий шаг поэтому Б++ уже прибавил единицу и он тоже начал равняется три


// VTOROE ZADANIE 

var a = 2;
var x = 1 + (a *= 2); // x = 5 (2 * 2 = 4 +1 = 5)

// TRETIE ZADANIE

let a = 10
let b = 15

if (a >= 0 && b >= 0) {
    console.log(Math.abs(a - b)) 
    
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else console.log(a + b)

