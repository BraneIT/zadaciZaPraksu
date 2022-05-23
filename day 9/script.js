//1.1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//for each:  It takes a callback function with elements, index parameter and array itself. The index and the array optional.
//map:  has the same parameters but it returns new array
//filter: it filters out items which full fill filtering conditions and return a new array.
//reduce:function takes accumulator, current, and optional initial value as a parameter and returns a single value;

//1.2
const callback = () =>
{

}



//1.3
countries.forEach((element) => console.log(element))
//1.4
names.forEach((element) => console.log(element));
//1.5
numbers.forEach((element) => console.log(element));
//1.6
let countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);
//1.7
let countiesLength = countries.map((country) => country.length);
console.log(countiesLength);
//1.8
let square = numbers.map((element)=> element **2)
console.log(square);
//1.9
let modName = names.map((element) => element.toUpperCase());
console.log(modName);
//1.10
let product = products.map((element)=> element.price)
console.log(product);
//1.11
let land = countries.filter((element) => element.includes("land"))
console.log(land);
//1.12
let six = countries.filter((element) => element.length == 6);
console.log(six);
//1.13
let six2 = countries.filter((element) => element.length >= 6);
console.log(six2);
//1.14
let start = countries.filter((element) => element.startsWith("E"))
console.log(start);
//1.15
let price = products.filter((element) => element.price);
console.log(price);
//1.16
let getStringLists = (...array) =>
{let string = "";
   for (i = 0; i<array.length;i++) {
     
    let check =array.every((name) => typeof name === 'string');     
    if (check == true) {
        string += array[i];
    }
   }
   console.log(string);
   return string;
}
getStringLists(1,"string");
//1.17
let sum = numbers.reduce((acc,cur) => acc + cur);
console.log(sum);
//1.18
let sentence = countries.reduce((acc,cur)=>acc +","+ cur);
console.log(`${sentence} are north European countries`);
//1.19
//every method in JavaScript is used to check whether all the elements of the array satisfy the given condition or not. The Array. 
//some method in JavaScript is used to check whether at least one of the elements of the array satisfies the given condition or not
//1.20
let name1 = names.some((element) => element.length > 7);
console.log(name1);
//1.21
let lands = countries.every((element) => element.includes("land"));
console.log(lands);
//1.22
// The only difference is that the find method returns the element value, 
//but the findIndex method returns the element index.
//1.23
let find = countries.find((element) => element.length == 6);
console.log(find);
//1.24
let find2 = countries.findIndex((element) => element.length == 6);
console.log(find2);
//1.25 
let norway = countries.findIndex((element) => element == "Norway")
console.log(norway);
//1.26
let russia = countries.findIndex((element) => element == "Russia")
console.log(russia);
//2.1

let price1 = products.map((element) => element.price).reduce((acc,cur) => acc+cur);
console.log(price1);

//2.2

// let p = products.reduce((acc,cur)=> acc + cur );
// console.log(p);