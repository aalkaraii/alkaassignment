// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };
function ageGroup(fun){
  if(fun.age>=0&&fun.age<=12){
console.log("Child");
  }
else if(fun.age>=13&&fun.age<=19){
console.log("Teen");
  }
else if(fun.age>=20&&fun.age<=59){
console.log("Adult");
}
else{
console.log("Senior");
}
}
ageGroup(person1);

// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };
function func(expenses){
  arr=Object.values(expenses);
let total=0;
arr.forEach((item)=>{
total+=item;
  
})
return total;
}
console.log(func(expenses10));


// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
function number(student){
  result=Object.values(student)
   return  result;
  }
  console.log(number(students3));

// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };
function number(details){
  let tot=Object.values(details);
if ( tot!=null){
return true;
}else{
 return false;
}
 
}
console.log(number(details4));

// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };

// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };
function func(scores){
  score=Object.values(scores);

return Math.max(...score);
}
console.log(func(scores6));

// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };
function func(employeess){
  avg =(employeess.emp1.salary+employeess.emp2.salary+employeess.emp3.salary)/3;
  return avg;
}
console.log(func(employees7));

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };
function func(data){
  let array=Object.values(data)
return array.sort();
}
console.log(func(data8))


// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };
function func(order){
  let totalCost=order.price*order.quantity;
    return totalCost;
  }
  console.log(func(order9));
  

// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };
function func(expenses){
  arr =Object.values (expenses);
let total=0;
arr.forEach((item)=>{
total+=item;
  
})
return total;
}
console.log(func(expenses10));