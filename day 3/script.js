//1.1
let firstName = "Branislav";
let lastName = "Panic";
let country = "Serbia";
let city = "Novi Sad";
let age = 22;
let year = 2022;
let isMarried = false;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof year);
console.log(typeof isMarried);

//1.2
if('10'==10)
console.log("jednaki");
else
console.log("nisu jednaki");

//1.3
let broj = parseInt(9.8)
broj == 10
?console.log("jednaki")
:console.log("nisu jednaki");

//1.4

// console.log(4<3);
// console.log("jedan"=="dva");
// console.log("10"===10);
// console.log(4<5);
// console.log(5%2==1);
// console.log(10 === 10);

//1.5

4 > 3   //true
console.log(4 > 3 ,"4>3");
4 >= 3  //true
console.log(4 >= 3,"4 >= 3");
4 < 3   //false
console.log(4 < 3, "4 < 3");
4 <= 3  //false
console.log(4 == 4,"4 == 4");
4 == 4      //true
console.log(4 === 4, "4 === 4");
4 === 4         //true
console.log(4 != 4,"4 != 4" );
4 != 4          //false
console.log(4 !== 4,  "4 !== 4");
4 !== 4      //false
console.log(4 != '4', "4 != '4'");
4 != '4'        //false
console.log(4 == '4', "4 == '4'");
4 == '4'       //true
console.log(4 === '4', "4 === '4'");
4 === '4'       //false


// Find the length of python and jargon and make a falsy comparison statement.
let python = "python";
let jargon = "jargon";
console.log(python.length != jargon.length);
//1.6
4 > 3 && 10 < 12 //true 
console.log("4 > 3 && 10 < 12",4 > 3 && 10 < 12);
4 > 3 && 10 > 12    //false 
console.log("4 > 3 && 10 > 12 ",4 > 3 && 10 > 12 );
4 > 3 || 10 < 12    //true  
console.log("4 > 3 || 10 < 12 ",4 > 3 || 10 < 12 );
4 > 3 || 10 > 12    //true
console.log("4 > 3 || 10 > 12",4 > 3 || 10 > 12);
!(4 > 3)    //false
console.log("!(4 > 3) ",!(4 > 3) );
!(4 < 3)    //true
console.log("!(4 < 3)",!(4 < 3));
console.log("!(false) ",!(false) );
!(false)    //true
console.log("!(4 > 3 && 10 < 12)",!(4 > 3 && 10 < 12));
!(4 > 3 && 10 < 12) //false
console.log("!(4 > 3 && 10 > 12)",!(4 > 3 && 10 > 12));
!(4 > 3 && 10 > 12) //true
console.log("!(4 === '4')  ",!(4 === '4')  );
!(4 === '4')    //true

// There is no 'on' in both dragon and python  //false

//1.7
const now = new Date()
const dan = now.getDate();
const mjesec = now.getMonth();
const godina = now.getFullYear();
console.log(now.getFullYear())
console.log(now.getMonth());

console.log(`${dan}, ${mjesec}, ${godina}`);
console.log(now.getHours());
console.log(now.getMinutes());
const allSeconds = Date.now();
console.log(allSeconds);

//2.1

// let h = prompt("unesite visinu trougla");
// let base = prompt("unesite bazu trougla");

// let area = 0.5 *h *base;
// console.log(area);
//2.2
// let a =parseInt( prompt("unesite stranicu a"));
// let b = parseInt(prompt("unesite stranicu b"));
// let c =parseInt( prompt("unesite stranicu c"));

// let perimeter = a + b + c;
// console.log(perimeter);

let l = parseFloat(prompt("Unesite visina"));
let w = parseFloat(prompt("Unesite sirinu"));
let area = l * w;
let perimeter = 2 * (l + w);
console.log(area);
console.log(perimeter);
