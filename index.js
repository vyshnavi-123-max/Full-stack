//console.log("Hello, World!");
//function sayHello() {
   // console.log("Hello from sayHello function!");
//}
//sayHello();
//console.log("This is a simple Node.js script.");//
// Exporting the sayHello function for potential use in other modules


//console.log("one");
//console.log("two");
//setTimeout(() => {
  //  console.log("Hello world!");
//}, 5000); // 5000 milliseconds = 5 seconds
//console.log("three");
// Exporting the sayHello function for potential use in other modules
//console.log("four");


//function sum(a,b){
   // console.log(a+b);
//}
//function calculator(a,b,ds){
 //   ds(a,b);
//}
//calculator(5,10,sum);


//console.log("one");
//console.log("two");
//const Hello=() => {
  //  console.log("Hello world!");
//}
//setTimeout(Hello, 5000); // 5000 milliseconds = 5 seconds
//console.log("three");
//console.log("four");
//<===============================================================>//

function getData(dataid){
    setTimeout(() => {
        console.log(`Data with id ${dataid} fetched successfully!`);
    }, 3000); // 3000 milliseconds = 3 seconds
}
getData(101);
getData(102);
getData(103);
//<===================================================>//
//getData(1,() => {
  //  console.log("Data with id 1 fetched successfully!");
  //  getData(2, () => {
  //      console.log("Data with id 2 fetched successfully!");
  //      getData(3, () => {
 //           console.log("Data with id 3 fetched successfully!");
//        });
  //  });
//});



//Asynchronous opertaion
setTimeout(() => {
    const success=false;
    if(success){
        console.log("Data fetched successfully!");
    }
    else{
        console.log("Error fetching data!");
    }   
}, 3000); // 3000 milliseconds = 3 seconds  
//mypromise
   then((data) => {
    console.log("promise resolved with data!",data);
  })
  .catch((error) => {
    console.log("promise rejected with error!",error);
  })