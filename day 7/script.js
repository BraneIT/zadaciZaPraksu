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
let sum2 = 0;
let sumOfEven = (x)=>
{
    for (let i = 0; i <= x; i++) {
        if (i%2!==0) {
            sum2 += i;
        }
        
    }
    return sum2;
}
console.log(sumOfOdds(10));

//2.12

