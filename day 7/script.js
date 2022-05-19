//1.1-1.2
let fullName = () => 
{
    let name = "Branislav";
    let lastName = "Panic"
    console.log(`${name} ${lastName}`);
}
fullName();
//1.3
let sumNumbers = (a,b) => {
   
    let c;
    return c = a+b;
    
}
sumNumbers(5,6)
//1.4
// let areaOfRectangle = () => 
// {
//     let l =Number( prompt("Enter length"));
//     let w =Number( prompt("Enter width"));
//     let area = l *w;
//     return area;
    
// }
let areaOfRectangle = (l,w) => 
{
    
    let area = l *w;
    return area;
    
}
//1.5
let perimeterOfRectangle = (length,width) =>{
    let perimeter= 2*(length + width)
    return perimeter;
}
perimeterOfRectangle(10,15);
//1.6
let volumeOfRectPrism = (length, width, height)=>{
    let volume = length * width * height;
    return volume;
}
volumeOfRectPrism(10,5,6)
//1.7
let areaOfCircle = (r) =>
{
   let area = Math.PI * r * r
   return area
}
areaOfCircle(5);
//1.8
let circumOfCircle = (r) =>
{
    let circumference = 2*Math.PI*r;
    return circumference;

}
circumOfCircle(6);
//1.9
let  density = (m,v)=>
{
    let density= m/v
    return density;
}
density(10,2)
//1.10
let speed = (s,t) =>
{
    let speed = s/t;
    return speed;
}
speed(100,5)
//1.11
const gravity = 9.81;
let weight = (m) =>
{
    let weight = m * gravity;
    return weight;
}
console.log(weight(5));
//1.12
let convertCelsiusToFahrenheit = (c) =>
{
    let oF = (c * 9/5) + 32
    return oF;
}
console.log(convertCelsiusToFahrenheit(30));

//1.13
// let w = Number(prompt("Enter your weight"))
// let h = Number(prompt("Enter your height in meters"))
// let bMI;
// let bmi = () =>
// {
//     let bMI = w/h**2
//     if (bMI<18.5) 
//     console.log("Underweight");
// else if(bMI < 24.9)
//     console.log("Normal weight");
// else if(bMI < 29.9)
//     console.log("Overweight ");
// else if(bMI > 30)
// console.log("Obese");
   
//     return bMI;
// }
// console.log(bmi());
//1.14
// let season = prompt("Enter a mounth");
// let checkSeason = () =>
// {
//     if(season == "December" || season == "January" || season ==  "February")
//     console.log("Winter");
//     else if (season == "March" || season == "April" || season ==  "May")
//     console.log("Spring");
//     else if(season == "June" || season == "July" || season ==  "August")
//     console.log("summer");
//     else if(season == "September" || season == "October" || season ==  "November")
//     console.log("Autumn");
// }
// console.log(checkSeason());
//1.15
let  findMax = (a,b,c) =>
{
    let max = Math.max(a,b,c)
    return max
}
console.log(findMax(1,5,10));
//2.3
const array = [1,5,10,20];
let printArray =(array) =>
{
    for (const element of array) {
        console.log(element);
    }
}
printArray(array)
//2.4
const showDate = () =>
{
let date = new Date();
let y = date.getFullYear();
let m = date.getMonth()+1;
let d = date.getDate();
let min = date.getMinutes();
let h = date.getHours();
if(d <10)
{
    d = "0" + d;
}
if (m<10) {
    m = "0" + m;
}
console.log(`${y}/${m}/${d} ${h}:${min}`);
}
showDate();
//2.5
let swapValues = (one,two) =>
{
    
    let c;
    c = two;
    two = one;
    one = c;
    console.log(one,two);
    return one,two;
    
}
swapValues(3,5);
//2.6
let reverse = []
let reverseArray = (arr) =>
{   
    for (let i = 0; i < arr.length; i++) {           
        reverse.unshift(arr[i])
        
    }
    return reverse;
  }

console.log(reverseArray([1,5,6,7]));
//2.7

//2.8
let addItem = (x) =>
{
    array.unshift(x);
    return array
}
console.log(addItem(2));
//2.9
let index = array.indexOf(2);
console.log(index);
let removeItem = (a) =>
{
    if(index> -1) 
    array.splice(index, 1); 
    return array;
}
console.log(removeItem(index));
//2.10
let sumOfNumbers = (x) =>
{
    let sum = 0;
    for (let i = 0; i <x; i++) {
        sum += i;
        
    }
    return sum;
}
console.log(sumOfNumbers(6));
//2.11
let sum1 = 0;
let sumOfOdds = (x)=>
{
    for (let i = 0; i <= x; i++) {
        if (i%2!==0) {
            sum1 += i;
        }
        
    }
    return sum1;
}
console.log(sumOfOdds(9));

//2.12
let suma = 0;
let sumOfEven = (x)=>
{
    for (let i = 0; i <= x; i++) {
        
        if (i%2==0) {
            suma += i;
        }
        
    }
    
    return suma;
}
console.log(sumOfEven(10));

//2.13
let sumOdds = 0;
let sumEven = 0;
let evensAndOdds = (x) =>
{   if (x<0) 
    {
        console.log("You didn't enter right number");
    }
    for (let i = 0; i <=x; i++) 
    {
        if (i%2==0) {
            sumEven++;
        }
        else
            sumOdds++;
    }
    console.log(`Odd numbers ${sumOdds}`);
    console.log(`Even numbers ${sumEven}`);
}
evensAndOdds(100);
//2.14
const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4))
//2.15
let ip;
let randomUserIp = () =>
{
    console.log((Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255)));
}
randomUserIp();
//2.16
let randomMacAddress = () =>
{
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    return macAddress;
}
console.log(randomMacAddress());
//2.17
let randomHexaNumberGenerator = () =>
{
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

console.log(randomHexaNumberGenerator());
//3.1
// let idLength = Number(prompt("Enter a length of id"));
// let idNumber = Number(prompt("Enter a number of ids"));
// console.log(idLength);
// console.log(idNumber);

// function userIdGenerator()
// {  let uid;
//     for (let i = 0; i < idNumber; i++) {
        
//           uid = Math.random().toString(36).replace('0.','').slice(0,idLength);
//           console.log(uid);
//     }
    
    
// }

// userIdGenerator();
//3.2
let rgbColorGenerator = ()=>
{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    console.log(`rgb: ${r}, ${g}, ${b}`);

}
rgbColorGenerator();
//3.3

// let arrayOfHexaColors = () =>
// {   let length = Number(prompt("Enter a lenhtg of array"));
//     console.log(length);
//     let arrayOfColors = [];
//     for (i = 0; i<length;i++) {
//          element = '#'+Math.floor(Math.random()*16777215).toString(16);   
//         arrayOfColors.push(element)
//         }
//         console.log(arrayOfColors);
    
// }
// arrayOfHexaColors();
//3.4
// arrayOfRGBColors= () => {

//     let length = Number(prompt("Enter a lenhtg of array"));
//     let array = [];
//     for(let i=0; i<length; i++){
//         let r = Math.floor(Math.random() * 256);
//         let g = Math.floor(Math.random() * 256);
//         let b = Math.floor(Math.random() * 256);
    
//         array.push([r,g,b]);  
//     }
//     console.log(array);
// }
// arrayOfRGBColors();

//3.7
// let generateColors = () =>
// {
//     let type = prompt("Enter a type of color");
//     let length = prompt("Enter a number of colors");
//     let array = [];
//     if(type == "rgb")
//     {
//         for (let i = 0; i < length; i++) {
//             let r = Math.floor(Math.random() * 256);
//             let g = Math.floor(Math.random() * 256);
//             let b = Math.floor(Math.random() * 256);
        
//             array.push([r,g,b]);  
            
//         }
//         console.log(array);
//     }
//     else 
//     { 
//         for (let i = 0; i < length; i++) {

//             element = '#'+Math.floor(Math.random()*16777215).toString(16);
//             array.push(element)

//         }
//         console.log(array);

//     }

// }

// generateColors();
//3.10
let isEmpty = () =>
{
    let a = "asdf"
    if (a == "") {
        console.log(`this is empty variable`);
    }
}
isEmpty();
//3.12
let sumOfArrayItems = (...[array]) =>
{   let sum = 0;
     
    for (const element of array) {
        if (isNaN(element)) {
            
            console.log(`this item is not a number ${element}`);
        }
        else
        {   
            sum += element
        }
        
        
    }
    
    console.log(sum);
    return sum;
}
sumOfArrayItems([1,5,6])
//3.13
let average = (...[array]) =>
{   let sum = 0;
    let avg = 0;
    for (const element of array) {
        if (isNaN(element)) {
            
            console.log(`this item is not a number ${element}`);
        }
        else
        {   
            sum += element
        }
        
    }
    avg = sum / array.length
    console.log(avg);
    return avg

}
average([2,4,6]);

//3.14
let modifyArray = (...[array]) =>
{
    if (array.length>4) {
        array[4].toUpperCase()
    }
    else{
        console.log(`item is not found`);
    }
    console.log(array);
    return array;
}
modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);

