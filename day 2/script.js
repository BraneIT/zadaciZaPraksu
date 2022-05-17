//1.1
let challenge = "30 Days Of JavaScript";
 //1.2
 console.log(challenge);
//1.3
console.log(challenge.length);
//1.4
console.log(challenge.toUpperCase());
//1.5
console.log(challenge.toLowerCase());
//1.6
console.log(challenge.substring(0,8));
//1.7
console.log(challenge.substring(3,21));
//1.8
console.log(challenge.includes("Script"));
//1.9
console.log(challenge.split());
//1.10
console.log(challenge.split(""));
//1.11
let devs = "'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(devs.split(","));
//1.12
console.log(challenge.replace("JavaScript", "Python"));
//1.13
console.log(challenge.charAt(15));
//1.14
console.log(challenge.charCodeAt("J"));
//1.15
console.log(challenge.indexOf("a"));
//1.16
console.log(challenge.lastIndexOf("a"));
//1.17
let x = "You cannot end a sentence with because because because is a conjunction";
console.log(x.indexOf("because"));
//1.18
console.log(x.lastIndexOf("because"));
//1.19
console.log(x.search("because"));
//1.20
let trim = "  30 Days Of JavaScript  "
console.log(trim.trim());
//1.21
console.log(challenge.startsWith("30"));
//1.22
console.log(challenge.endsWith("Script"));
//1.23
console.log(challenge.match("a"));
//1.24
let days = "30 days";
let js = " of JavaScript";
console.log(days.concat(js));
//1.25
console.log(challenge.repeat(2));
//2.1
console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
//2.2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
//2.3
let deset = "10";
let deset2 = 10;
console.log(typeof deset);
console.log(typeof deset2);
let num = Number(deset);
deset == deset2
? console.log("Brojevi su isti")
: console.log("brojevi nisu isti");
//2.4
let broj = parseFloat(9.8)
let broj2 = Math.round(broj)
if (deset == broj2)
console.log("brojevi su isti");
else (console.log("brojevi nisu isti"))
//2.5
let Python = "Python";
let jargon = "Jargon";
console.log(Python.match("on"));
console.log(jargon.match("on"));
//2.6
let quote = "I hope this course is not full of jargon"
console.log(quote.match("jargon"));
//2.7

let randomNum = Math.floor(Math.random()*101)
console.log(randomNum);
//2.8
let ran = Math.floor(50+Math.random()*51)
console.log(ran);
//2.9
let r = Math.floor(Math.random()*251)
console.log(r);
//2.10
let string = "JavaScript";
console.log(string[Math.floor(Math.random()*string.length)]);
//2.11
console.log('1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');
//2.12
console.log(x.substring(30,54));
//3.1
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(love.match(/\love\b/gi));
//3.2
console.log(x.match(/because/gi));
//3.3
// let numberOfCharters = Number(prompt("Enter a length of id"))
// let numberOfIds = Number(prompt("Enter a number of id"))

// let userIdGeneratedByUser = () =>
// {

// }

function uid() {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
  };
  console.log(uid());