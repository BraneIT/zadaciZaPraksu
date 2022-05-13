//1.1
let array = [];
//1.2
let arrayNumbers = [1, 5, 6, 10, 3.14, 9, 65];
//1.3
console.log(arrayNumbers.length);
//1.4
console.log(arrayNumbers[0]);
console.log(arrayNumbers[3]);
console.log(arrayNumbers[6]);
//1.5
let mixedDataTypes = ["string", 1, true, [1,6], {name:"Branislav", lastName:"Panic"}, null];
console.log(mixedDataTypes);
//1.6
let itCompanies =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
//1.7
console.log(itCompanies);
//1.8
console.log(itCompanies.length);
//1.9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
//1.10
itCompanies.forEach(element => {
    console.log(element);
});
//1.11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
//1.12
console.log(`${itCompanies[0]},${itCompanies[1]},${itCompanies[2]},${itCompanies[3]},${itCompanies[4]},${itCompanies[5]} and ${itCompanies[6]} are big companies`);
//1.13
// let company = prompt("enter a name of company");
//  itCompanies.includes(company)
// ?console.log(company)
// :console.log("Company is not found");
//1.14
itCompanies.forEach(element => {
    if(element.includes("oo"))
    console.log(element);
});
//1.15
console.log(itCompanies.sort());
//1.16
console.log(itCompanies.reverse());
//1.17
console.log(itCompanies.slice(0,3));
//1.18
console.log(itCompanies.slice(4,7));
//1.19
console.log(itCompanies.slice(2,5));
//1.20
itCompanies.shift();
console.log(itCompanies);
//1.21
itCompanies.splice(2,1)
console.log(itCompanies);
//1.22
itCompanies.pop()
console.log(itCompanies);
//1.23
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies);
//2.1
// importScripts(web_techs.js);
// importScripts(countries.js);
//2.2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
var punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var finalString = punctuationless.replace(/\s{2,}/g," ");
console.log(text.split(" "));
//2.3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
let alergic = prompt("Are you alergic to honey?");
if(alergic == "yes")
shoppingCart.splice(4,1);
shoppingCart.splice(3,1,"Green Tea")
console.log(shoppingCart);
//2.6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
//2.7
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
let avgages = 0;
for (let i = 0; i < ages.length; i++) {
    
    avgages += ages[i]
    
}
avgages /= ages.length
console.log(avgages);