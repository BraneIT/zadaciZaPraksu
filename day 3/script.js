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
//2.3
// let l = parseFloat(prompt("Unesite visina"));
// let w = parseFloat(prompt("Unesite sirinu"));
// let area = l * w;
// let perimeter = 2 * (l + w);
// console.log(area);
// console.log(perimeter);

//2.4
// const pi = 3.14;
// let r = parseInt(prompt("Unesite poluprecnik"));
// let area = pi * r * r
// console.log(area);
// let circumference = 2 * pi * r;
// console.log(circumference);
 
// //2.8
// let x = Number(prompt("Unesite x"));
// let y = x*x + 6 * x + 9;

//2.9
// let hours = Number(prompt("Unesite broj sati"));
// let rate = Number(prompt("Unesite satnicu"));
// let plata = rate * hours *7;
// console.log(`Vasa sedmicna plata iznosi ${plata}`);

// let ime = prompt("unesite ime")
// ime.length <= 7
// ? console.log("vase ime je kratko")
// : console.log("vase ime je dugacko");

//2.11
firstName.length > lastName.length
?console.log(`your firstname, ${firstName} is longer than your family name ${lastName}`)
:console.log(`your lastname, ${lastName} is longer than your first name ${firstName}`);

//2.12
let myAge = 30;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you`);

//2.13

// let datum = Number(prompt("Unesite godinu rodjenja"))
// let sad = new Date();
// let god = sad.getFullYear();
// god - datum > 18
// ?console.log(`you are ${god - datum}, and you are allowed to drive`)
// :console.log(`you are ${god - datum}, You will be allowed to drive after ${18 -(god - datum) } years`);

//2.14

// let godine = Number(prompt("Unesite broj godina"));
// let sekunde = godine * 331556926;
// let feb = godine % 4;
// let ukupno = sekunde + feb;
// console.log(sekunde);

//2.15


let sad = new Date();
let g = sad.getFullYear();
let m = sad.getMonth() +1 ;
let d = sad.getDate();
let h = sad.getHours();
let min = sad.getMinutes();
console.log(d);
function provjeraDan(dan) {
    if(dan < 10)
    dan = "0" + dan;
    return dan;
    
}
function provjeraMjesec(mjesec) {
    if(mjesec<10)
    mjesec = "0" + mjesec;
    return mjesec;
}

console.log(`${g}-${provjeraMjesec(m)}-${provjeraDan(d)} ${h}:${min}`);
console.log(`${provjeraDan(d)}-${provjeraMjesec(m)}-${g} ${h}:${min}`);
console.log(`${provjeraDan(d)}/${provjeraMjesec(m)}/${g} ${h}:${min}`);



console.log(sad);
//3
const provjeraSati = (sat) =>
{
    if (sat<10) 
        sat = "0" + sat;
        return sat;
    
}
const provjeraMinuta = (min) =>
{
    if (min<10) 
        min = "0" + min;
      return min;  
    
}

console.log(`${g}-${provjeraMjesec(m)}-${provjeraDan(d)} ${provjeraSati(h)}:${provjeraMinuta(min)}`);