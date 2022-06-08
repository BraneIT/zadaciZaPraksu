//1.1
const set = new Set();
console.log(set);
//1.2
let nums = [1,2,3,4,5,6,7,8,9,10]
const numbers = new Set();
for (let i = 1; i <= nums.length; i++) {
    numbers.add(i)


}
console.log(numbers);
//1.3
numbers.delete(1);
console.log(numbers);

//1.4
numbers.clear()
console.log(numbers);
//1.5
let string = ["I", "you", "we", "they", "he"];
const strings  = new Set();
console.log(string);
//1.6
// const countries = ['Finland', 'Sweden', 'Norway'];
// const countriesInfo = new Map();
// let countrieslength = 0;
// for (let i = 0; i < countries.length; i++) {
//     countrieslength = countries[i].length;
//     countriesInfo.set(countries[i], countrieslength)
    
// }
// console.log(countriesInfo);
//2.1
// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// let c = [[...a], [...b]]

// const A = new Set (a)
// const B = new Set (b)
// const C = new Set (c)

// console.log(C);
//2.2
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const A = new Set (a);
const B = new Set (b);

let c = a.filter((num) => B.has(num));
console.log(c);


// day 11
const scienceConstants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
let [ e, pi, gravity, humanBodyTemp, waterBoilingTemp] = scienceConstants;
console.log( e, pi, gravity, humanBodyTemp, waterBoilingTemp);
let [fin, est, sw, den, nor] = countries;
console.log(countries);
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

for (const key of users) {
    console.log(key);
}
let less = "";
for (const element of users) {
    if(element.skills.length< 2)
    less = element.name;
}
console.log(less);
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name,[...skills], [HTMLScore, CssScore, jsScore, reactScore]] = student;
console.log(name,skills, jsScore, reactScore);

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
  function convertArrayToObjectt(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      if (arr[i] !== undefined) rv[i] = arr[i];
    return rv;
  }

  console.log( convertArrayToObjectt(students));

  console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
  console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
  ) 
console.warn("This is warning!");
console.error("This is error");
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names);
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(user);
const countries1 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countries1.length; i++) {
  console.log(countries1[i][0], countries1[i][1])
}
console.timeEnd('Regular for loop');
console.info('30 Days Of fullStack challenge might be released')

console.group("Names");
console.log(names);
console.groupEnd();
console.assert(10>10*2, "10 is lower than 20")



// class Animal {
//   constructor(name, age, color, legs)
//   { this.name = name;
//     this.age = age;
//     this.color = color;
//     this.legs = legs;

//   }
//    Type () 
//    {
//      let type = prompt("Enter a type of animal")
//      if(type == "Dog")
//      console.log("This animal is dog");
//      else
//      console.log("This animal is cat");
//    } 
// }

// class Dog extends Animal
// {
//   constructor(name, age, color, legs,gender)
//   {
//     super(name, age, color, legs)
//     this.gender = gender;
//   }
//   SaySomething()
//   {
//     console.log("I am a child class");
//   }
//   Type () 
//    {
//      let type = prompt("Enter a type of animal")
//      if(type == "Dog")
//      console.log("This animal is dog");
//      else 
//      console.log("This animal is cat");
     
//      let pronoun = this.gender == 'Male' ? 'He' : 'She'
//    } 
// }
// class Cat extends Animal
// {
//   SaySomething()
//   {
//     console.log("I am a child class");
//   }

// }
// let object1 = new Dog("Jacky", 3, "Black", 4,"Male")
// console.log(object1);
// console.log(object1.Type());
const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`

  // const usersObj = JSON.parse(usersText, undefined, 4)
  // console.log(usersObj)
  const usersObj = JSON.parse(usersText, (key, value) => {
    let newValue =
      typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
  })
  console.log(usersObj)

// const txt = JSON.stringify(users, undefined, 4)
// console.log(txt)

const user1 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

// let txt = JSON.stringify(user1, ['firstName', 'lastName', 'country', 'city'],4)
// console.log(txt);
const skills1 = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

let skl = JSON.stringify(skills1, undefined, 4);
console.log(skl);

let age = 250;
let isMarried = true
const student1 = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

let ag = JSON.stringify(age);
console.log(ag);
let married = JSON.stringify(isMarried);
console.log(married);
let stud = JSON.stringify(student1)
console.log(stud);
let std = JSON.stringify(student1, ['firstName','lastName','skills'],4)
console.log(std);

const txt = `{
  "Alex": {
      "email": "alex@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 30
  },
  "Asab": {
      "email": "asab@asab.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Redux",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 25,
      "isLoggedIn": false,
      "points": 50
  },
  "Brook": {
      "email": "daniel@daniel.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux"
      ],
      "age": 30,
      "isLoggedIn": true,
      "points": 50
  },
  "Daniel": {
      "email": "daniel@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Python"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "John": {
      "email": "john@john.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux",
          "Node.js"
      ],
      "age": 20,
      "isLoggedIn": true,
      "points": 50
  },
  "Thomas": {
      "email": "thomas@thomas.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "Paul": {
      "email": "paul@paul.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  }
}
`
let txt1 = JSON.parse(txt);

localStorage.setItem("firstName", "Branislav");
localStorage.setItem("lastName", "Panic");
localStorage.setItem("age", 22);
localStorage.setItem("country", "Serbia");
localStorage.setItem("city", "Novi Sad");

console.clear();
let student2 =
{
  firstName: 'Asabeneh',
  lastName : 'Doe',
  age: 250,
  country : "Serbia",
  skills: ['HTML', 'CSS', 'JS', 'React']
}
let ex = JSON.stringify(student2);

localStorage.setItem("Student", ex);
// const countriesAPI = 'https://restcountries.com/v2/all'
// const fetchData = async () => {
//   try {
//     const response = await fetch(countriesAPI)
//     const countries = await response.json()
//     console.log(countries)
//     countries.forEach(element => {
//       console.log(element.name);
//       console.log(element.population);
     
//     });
//   } catch (err) {
//     console.error(err)
//   }
// }
// console.log('===== async and await')
// fetchData()

const catsAPI = 'https://api.thecatapi.com/v1/breeds';
const fetchData = async () => {
  try {
    const response = await fetch(catsAPI)
    const cats = await response.json()
    cats.forEach(element => {
      console.log(element.name);
    });
  } catch (err) {
    console.error(err)
  }
}
fetchData()


let outerFunction = () =>
{
  let count = 0;
  let innerFunction = () =>
  {
    count++
    return count;
  }
  return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());


// function numbers2() {
//   let count = 0;
//   function plus() {
//     count++
//     return count
//   }
//   function minus() {
//     count--
//     return count;
//   }
//   function restart() {
//     count = 0;
//     return count
//   }
//   return{
//     plus: plus(),
//     minus : minus(),
//     restart : restart()
//   }
// }

// let inner = numbers2()
// console.log(inner.plus());
// console.log(inner.plus());
// console.log(inner.minus());
// console.log(inner.restart());

function kita() {
  let count = 0;
  function plusOne() {
      count++
      return count
  }
  function minusOne() {
      count--
      return count
  }
  function restart() {
      count = 0;
      return count
  }

  return {
      plusOne:plusOne(),
      minusOne:minusOne(),
      restart:restart()
  }
}
const innerFuncs = kita()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.restart)
console.clear();


let first = document.querySelector('p');
first.style.fontSize = '24px';
first.style.backgroundColor = 'blue'
let second = document.querySelector('#second');
second.style.fontSize = '30px'
const titles = document.querySelectorAll('p')
titles.forEach(element => {
  console.log(element);
});
titles[3].textContent = "Fourth paragraf"

titles[0].className = "First-class";
titles[0].id = "First-id"
titles[1].setAttribute('class', 'Second class');


second.style.fontSize = ('36px');
second.style.fontFamily = ('times new roman')
second.style.backgroundColor = ('green');
