//1.1-1.3
const dog = {
    
};
//1.2
console.log(dog);
//1.3
dog.name = "Riki";
dog.legs = 4;
dog.color = "black";
dog.age = 3;
dog.bark= function ()
{
    return "woof,woof";

}


//1.4
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
//1.5
dog.breed = "German Shepherd";
dog.getDogInfo = function()
{
    
}

//2.1
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
 //2.1
let skills = "";
if(users.Alex.skills.length> skills)
        skills = "Alex"
else if(users.Asab.skills.length> skills)
        skills = "Asab"
else if(users.Brook.skills.length> skills)
        skills = "Brook"
else if(users.Daniel.skills.length> skills)
        skills = "Daniel"
else if(users.John.skills.length> skills)
        skills = "John"
else if(users.Thomas.skills.length> skills)
        skills = "Thomas" 
else if(users.Paul.skills.length> skills)
        skills = "Paul"
console.log(`user who has the most skills are ${skills}`);

//2.2
let count = 0;
for (const user in users) {

if(users[user].isLoggedIn == true){
  if (users[user].points >= 50) {
          count++;
  }
  
}

}
console.log(count);
//2.3
let count1 = 0;
for (const user in users) {
  
  if (users[user].skills.includes("MongoDB")&&users[user].skills.includes("Express")&&users[user].skills.includes("React")&&users[user].skills.includes("Node")) {
            count1++;

  }
  
}
console.log(`count1 ${count1}`);
//2.4
users["Branislav"] = {
  email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
}

console.log(users);
//2.5

 for (const key in users) {
  console.log(`${key}`);
     
   }
 //2.6
// let k = 0;
//  for (var key in users){
//   console.log(`${key} ${users[key]}`);
// }
//  for (let u = 0; u < users.length; u++) {      treba popraviti
   

//   for (const value in users[u]) {
//    console.log(`${value}`);
//     }
//   }
//3.1
const personAccount = {
  firstName:"Branislav",
  lastName: "Panic",
  incomes:1000,
  expenses:500,
  totalIncome : function()
  {
    let income = this.incomes - this.expenses
    console.log(income);
    return income;

  },
  addIncome : function(a)
  {
   console.log( this.incomes +=a);
  },
  addExpense : function(a)
  {
   console.log( this.expenses += a);
  },
  accountBalance : function()
  {
    console.log(this.incomes - this.expenses);
  }

}
personAccount.totalIncome();
personAccount.addIncome(300);
personAccount.addExpense(200);
personAccount.accountBalance();


  

