//1.1
for (let i = 0; i <11; i++) {
    console.log(i);
}
let i =0;
while (i<11) {
    console.log(i);
    i++;
}

//1.2
for(let i = 10;i>0;i--)
{
    console.log(i);
}
let y =10
while(y>0){
    console.log(y);
    y--;
}
//1.3
// let x = prompt("Enter a number");
// for (let i = 1; i <= x; i++) {
//     console.log(i);
// }
//1.4
let x = "#"
console.log(x);
for (let i = 0; i <= 5; i++) {
   x += "#"
   console.log(x);
}
//1.5
for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${i} = ${i**2}`);
}
//1.6
console.log("i i^2 i^3");
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i**2} ${i**3}`);
    
}
//1.7
// for (let i = 0; i <= 100; i++) {
//     if(i%2==0)
//     console.log(i);
// }
//1.8
// for (let i = 0; i <= 100; i++) {
//     if(i%2!==0)
//     console.log(i);
// }
//1.9
let c = 0;
for (let i = 1; i <=100; i++){
        c += i
       
}
console.log(`The sum of all numbers from 0 to 100 is ${c}`);
//1.10
let odd = 0;
let even = 0;
for (let i = 0; i <=100; i++) {
    if (i%2==0) {
        even += i
    }
    else
    odd += i
    
}
console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`);
//1.11
let numbers = [even, odd];
console.log(numbers);
//1.12

let array = [];
for (let i = 1; i <=5 ; i++) {
    let randomNumbers = Math.floor(Math.random()*10+1);
   array.unshift(randomNumbers)
    
}
console.log(array);
//1.13

let array1 = Array(5);
for (let i = 1; i <array1.length ; i++) {
    let randomNumbers = Math.floor(Math.random()*10+1);
    if(randomNumbers !== array1[0] && randomNumbers !== array1[1] && randomNumbers !== array1[2]&& randomNumbers !== array1[3]&& randomNumbers !== array1[4] )
   array1.unshift(randomNumbers)
    
}
console.log(array1);
//1.14
let u = (Math.random() + 1).toString(36).substring(6);
console.log(u);
//2.1
let l = (Math.random()+1).toString(36);
console.log(l);
//2.2
const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code())

//2.3
let r = Math.round(Math.random()*255)
let g = Math.round(Math.random()*255)
let b = Math.round(Math.random()*255)

console.log(`rgb:${r} ${g} ${b}`);
//2.4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const newArr = []
for (const country of countries) {
    newArr.push(country.toUpperCase())
}
console.log(newArr);
//2.5
const newArr2 = [];
for (const element of newArr) {
    newArr2.push(element.length)
}
console.log(newArr2);
//2.6
const substringArr = []

for (const element of countries) {
    substringArr.push(element.substring(0,3).toUpperCase())
}
console.log(substringArr);

const countriesInfo = [];
for (let i = 0; i < countries.length; i++) {
    
       countriesInfo.push([newArr[i],substringArr[i],newArr2[i]])
    
    
}
console.log(countriesInfo);
//2.7
const lands =[]

for (let y = 0; y<countries.length;y++) {
    if (countries[y].includes("land")) {
        lands.push(countries[y])
    }
    
    
}
if(lands=="")
console.log("There are no countries with \"land\"" );
console.log(lands);
//2.9
let longest = ""
for (const country of countries) {
    if(country.length>longest.length)
    longest = country
}
console.log(longest);
//2.10
let short = [];
for (let g = 0;g<countries.length;g++) {
    if (countries[g].length==5) {
        short.push(countries[g])
    }
}
console.log(short);
//2.11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let long = "";
for (let u = 0; u < webTechs.length; u++) {
    if(webTechs[u].length>long.length)
    long = webTechs[u]
}
console.log(long);
//2.12
const webLength = []
const webInfo = [];
for (const techs of webTechs) {
    webLength.push(techs.length)
}
console.log(webLength);

for (let z = 0;z<webTechs.length;z++) {
    webInfo.push([webTechs[z], webLength[z]])
}
console.log(webInfo);
//2.14
for (const tech of webTechs) {
    console.log(tech);
}
//2.15
const fruit = ['banana', 'orange', 'mango', 'lemon'];
// for (let i = 0; i < fruit.length; i++) {
//     fruit.unshift(fruit[i]);
    
// }
console.log(fruit);
//2.16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for (let i = 0; i < fullStack.length ; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j]);
        
    }
      
  }
//3.1
console.log(countries.slice(0,countries.length).sort());