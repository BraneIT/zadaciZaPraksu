//1.1
// let age = Number(prompt("enter your age"));
// age>18
// ?console.log("you are old enoguh drive")
// :console.log(`you are left with ${18-age}years to drive`);

//1.2
// let myAge = Number(prompt("enter my age"));
// let yourAge = Number(prompt("enter your age"));
// myAge<yourAge
// ?console.log(`you are older than me by ${yourAge- myAge}`)
// : console.log(`I am older than you by ${myAge - yourAge}`);

//1.3
let a = 4;
let b = 3;
if(a>b)
console.log(`${a} is greater than ${b}`);
else
console.log(`${b} is greater than ${a}`);

a>b
?console.log(`${a} is greater than ${b}`)
:console.log(`${b} is greater than ${a}`);

//1.4
let broj = 5;
broj%2==0
?console.log(`${broj} is even number`)
:console.log(`${broj} is an odd number`);

//2.1
let grade  = 79;
if(grade>=80)
console.log("A");
else if (grade>=70)
console.log("B");
else if (grade >=60)
console.log("C");
else if(grade >=50)
console.log("D");
else if(grade <=49)
console.log("F");

//2.2
// let season = prompt("unesite trenutni mjesec");
// switch(season)
// {
//     case "September":
//     console.log("Autumn"); break;
//     case "October":
//     console.log("Autumn"); break;
//     case "November":
//     console.log("Autumn"); break;
//     case "December":
//     console.log("Winter"); break;
//     case "January":
//     console.log("Winter"); break;
//     case "February":
//     console.log("Winter"); break;
//     case "March":
//     console.log("Spring"); break;
//     case "April":
//     console.log("Spring"); break;
//     case "May":
//     console.log("Spring"); break;
//     case "June":
//     console.log("Summer"); break;
//     case "July":
//     console.log("Summer"); break;
//     case "August":
//     console.log("Summer"); break;
//     default: console.log("niste uneli tacan mjesec");
// }

//2.3

// let dan = prompt("Unesite dan");
// let d=dan.toLowerCase();
// switch(d)
// {
//     case "monday":
//         console.log(`Monday is a working day`);break;
//     case "tuesday":
//         console.log(`Tuesday is a working day`);break;
//     case "wednesday":
//         console.log(`Wednesday is a working day`);break;
//     case "thursday":
//         console.log(`Thursday is a working day`);break; 
//     case "friday":
//         console.log(`Friday is a working day`);break;
//     case "saturday":
//         console.log(`Saturday is a working day`);break;
//     case "sunday":
//         console.log(`Sunday is a working day`);break;   
//     default: console.log("You didn't enter a day");
// }

//3
let mj = prompt("Unesite mjesec");
let m = mj.toLowerCase();
// if(m == "january"|| m =="march"|| m == "may"|| m == "july"|| m == "august"|| m == "december")
// console.log(`${m} has 31 days`);
// else if(m== "april"||m=="june"|| m=="september"|| m== "november")
// console.log(`${m} has 30 days`);
// else console.log(`${m} has 28 days`);

switch(m)
{
    case "january": console.log("January has 31 days");break;
    case "february": console.log("February has 28 days");break;
    case "march": console.log("March has 31 days");break;
    case "april": console.log("April has 30 days");break;
    case "may": console.log("May has 31 days");break;
    case "june": console.log("June has 30 days");break;
    case "july": console.log("July has 31 days");break;
    case "august": console.log("August has 31 days");break;
    case "september": console.log("September has 30 days");break;
    case "october": console.log("October has 31 days");break;
    case "november": console.log("November has 30 days");break;
    case "december": console.log("December has 31 days");break;
    default:console.log("You didn't enter right mounth");
}
//3.1
let prestupna;
let g = prompt("Unesite godinu");
g%4===0
?prestupna = true
:prestupna = false;

console.log(prestupna);
if(prestupna == true)
{
    switch(m)
{
    case "january": console.log("January has 31 days");break;
    case "february": console.log("February has 29 days");break;
    case "march": console.log("March has 31 days");break;
    case "april": console.log("April has 30 days");break;
    case "may": console.log("May has 31 days");break;
    case "june": console.log("June has 30 days");break;
    case "july": console.log("July has 31 days");break;
    case "august": console.log("August has 31 days");break;
    case "september": console.log("September has 30 days");break;
    case "october": console.log("October has 31 days");break;
    case "november": console.log("November has 30 days");break;
    case "december": console.log("December has 31 days");break;
    default:console.log("You didn't enter right mounth");
}
}
else
{
switch(m)
{
    case "january": console.log("January has 31 days");break;
    case "february": console.log("February has 28 days");break;
    case "march": console.log("March has 31 days");break;
    case "april": console.log("April has 30 days");break;
    case "may": console.log("May has 31 days");break;
    case "june": console.log("June has 30 days");break;
    case "july": console.log("July has 31 days");break;
    case "august": console.log("August has 31 days");break;
    case "september": console.log("September has 30 days");break;
    case "october": console.log("October has 31 days");break;
    case "november": console.log("November has 30 days");break;
    case "december": console.log("December has 31 days");break;
    default:console.log("You didn't enter right mounth");
}
}
