// Q1  DATA TYPE 
//  1. boolean
//  2. number
//  3. string
//  4. undeifiend
//  5. symbol
//  6. null
//  7. bignit 

//  Q2 VAR ,LET ,ConsT
       
//         var----->    in var value can be reassign  not redeclare its an global scope
//         let-----> in let value can can be reassign but we can redeclare the value  its an block scope     
//         const----> in const both resign and redclare can not be done  

// Q3  == means compare the value
//     === means compare the value and data type

// Q4  Prototypal inheritance is a type of inheritance where objects inherit directly from other objects.
//  This is the primary inheritance model in JavaScript

// Q 5 CLOSURES
// // IN Closures we can get the information about the outer function from the inner function 



// Q6  null is said to be empty
//    undefiend ---  the value is NOT CALL  
//  ex var number( "apple", " ","grapes ")
    // console .log (number)
     


//  Q7  THIS KEYWORD 
//   The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.
// const test = {
//     prop: 42,
//     func: function () {
//       return this.prop;
//     },
//   };
//   console.log(test.func());                                      
  


//  Q9 PROMISE ARE USED TO manage multiple asychoronus ope,prventing callback hell.
//  they present the function feature value and failure and success of the function


// Q10 sycnchoronus code asycnchoronus code
    //   synnchoronous code are line by line code it excute the code line by line  
    // asycnchoronus code sometime work as  a synchoronous code 

    // Q12 

// Q14 try-catch 
//  try syntax: try{}
// catch syntax : catch (err){}


//  Q11  hosting
//   hosting is  even if the value is declared,we can get another value from the bottom to the top of the function
  
    // Q 8 // Event Delegation is basically a pattern to handle events efficiently. 
// Instead of adding an event listener to each and every similar element, 
// we can add an event listener to a parent element and call an event on a particular target using the 
// target property of the event object.

// Q12
// An event loop is something that pulls stuff out of the queue and places it onto
//  the function execution stack whenever the function stack becomes empty. 
// The event loop is the secret by which JavaScript gives us an illusion of being multithreaded even though it is single-threaded.





                    //   CODE

// const products = [
// {  name:"laptop", category: "electronic",price: 1000},
// { name:"shirt", categoryegory: "clothing",price: 50},
// { name:"laptop", category: "electronic",price: 500},
// {name:"shoes", category: "clothing",price: 80},
// ];


// function filterandtransformproducts  (products , category)    {
//     const filterpoducts = products.filter (products.category === category);
//     const transformedproducts = filterpoducts.map (products => '${products.name}-$${products.price}');
     
//     return transformedproducts;
// }
// console.log(filterandtransformproducts(products,"electronic"));


//   Q2 
//         const orders = [
//     { orderId: 1, tableNumber: 2, amount: 30 },
//     { orderId: 2, tableNumber: 1, amount: 20 },
//     { orderId: 3, tableNumber: 2, amount: 50 },
//     { orderId: 4, tableNumber: 3, amount: 40 },
//     { orderId: 5, tableNumber: 1, amount: 10 },
//   ];
  
//   function sumByTable(orders) {
//     const tableSums = {};
  
//     for (const order of orders) {
//       const { tableNumber, amount } = order;
  
//       const numericTableNumber = Number(tableNumber);
  
//       if (!tableSums[numericTableNumber]) {
//         tableSums[numericTableNumber] = 0;
//       }
  
//       tableSums[numericTableNumber] += amount;
//     }
  
//     return tableSums;
//   }
  
//   console.log(sumByTable(orders));
  


// Q3 //const students = [
  //{ name: "Alice", subjects: ["Math", "Science"] },
  //{ name: "Bob", subjects: ["English", "Math"] },
  //{ name: "Charlie", subjects: ["Math", "History"] },
  //{ name: "David", subjects: ["Science", "History"] }
  //];
  //function countSubs(students) {
  //let subCounts = {};
  
  //for (let student of students) {
  //    for (let subject of student.subjects) {
  //        if (subCounts[eachsubject]) {
  //            subCounts[eachsubject]++;
  //        } else {
  //            subCounts[subs] = 1;
  //        }
  //    }
  //}
  
  //return subCounts;
  //}
  //console.log(countSubs(students));


// Q4
// const inventory = [
//     {name:"laptop", quantity: 5, price :1000},
//     {name:"shirt" , quantity: 0, price :50},
//     {name:"phone" ,quantity: 10, price :500,}
//     {name:"shoes" ,quantity: 3, price :80},
// ];
// function inventoryvalue (inventory){
// return inventory .reduce ((sum,item)=>{
//     if (item.quantity > 0) {
//        sum =sum +item.quantity*item.price
//     }
//   return sum ;

// },0);
// }
// console.log(inventoryvalue(inventory));

// Q5
// transactions = [
//     { userId: 1, amount: 50, date: "2023-01-01" },
//     { userId: 2, amount: 20, date: "2023-01-02" },
//     { userId: 1, amount: 100, date: "2023-01-03" },
//     { userId: 3, amount: 150, date: "2023-01-04" },
//     { userId: 2, amount: 30, date: "2023-01-05" },
//   ];
//   function topSpenders(transactions) {
//       const totals = {};
//       const counts = {};
  
//       for (const transaction of transactions) {
//         const { userId, amount } = transaction;
        
//         if (!totals[userId]) {
//           totals[userId] = 0;
//           counts [userId] = 0;
//         }
    
//         totals[userId] += amount;
//         counts[userId] += 1;
//       }
    
//       const validUsers = Object.keys(totals).filter(userId => counts [userId] > 1);
    
//       validUsers.sort((a, b) => totals[b] - totals[a]);
    
//       return validUsers.map(Number);
//     }
    
//     console.log(topSpenders(transactions));


// 
// Q6

//   const employees = [
//   { name: "John", department: "Engineering", salary: 1000 },
//   { name: "Jane", department: "Marketing", salary: 1500 },
//   { name: "Jim", department: "Engineering", salary: 500 },
//   { name: "Jack", department: "HR", salary: 800 }
// ];

// function getHighEarningEmployees(employees, minSalary) {
//   const highEarningEmployees = [];
//   employees.forEach(employee => {
//     if (employee.salary >= minSalary) {
//       highEarningEmployees.push(employee);
//     }
//   });
//   return highEarningEmployees;
// }

// const highEarningEmployees = getHighEarningEmployees(employees, 1000);
// console.log(highEarningEmployees);
    


// Q9

// //  const employees = [
// // 	{name: "John",department: "Engineering",salary: 1000,projects: ["Project A", "Project B"],},
// // 	{name: "Jane",department: "Marketing",salary: 1500,projects: ["Project B", "Project C"],},
// // 	{name: "Jim",department: "Engineering",salary: 500,projects: ["Project A"],},
// // 	{name: "Jack",	department: "HR",salary: 800,projects: ["ProjectC", "Project A"],},
// // ];
// // function projectSummary(employees) {
// // 	let A = {};
// // 	employees.forEach((employee) => {
// // 		employee.projects.forEach((proj) => {
// // 			if (!A[proj]) A[proj] = { totalSalary: 0, names: [] };
// // 			A[proj].totalSalary += employee.salary;
// // 		A[proj].names.push(employee.name);
// // 		});
// // 	});
// // 	return A;
// // }
// // console.log(projectSummary(employees));