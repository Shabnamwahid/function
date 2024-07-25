// function greed(name:string, age:number,...husnain){
// console.log("Hello",name , age, husnain)
// }
// greed("husnain hedar",23 ,"Thursday Morning" , "Teacher")
// function greed(...hedar){
//       console.log("Hellow" , hedar)
// }
// greed("husnain hedar",23 ,"Thursday Morning" , "Teacher")
// function movie(name:String, releaseDate:number = 2024){
//     console.log(`this movie name is ${name} and release date is ${releaseDate}`)
// }
// movie("Winnie the pooh")
// movie("Tom and Jerry", 2023)
// const sayHello = (userName:string, age:number) => console.log(`Hello World ${userName} ${age}`);
//  sayHello("Miss Minal",23);
//  const sayHello = (userName:string) => {
//      let lastName = "arain"
//      return lastName;
//  }
//  let responce = sayHello("Hussnain");
//  console.log(responce);
// const calculater = (num1: number, num2: number) =>{
//     let result = num1 + num2;
// return result
// }
// let additoin = calculater(1+2)
// console.log(addition-2)
// let student = {
// userName:"Hussnain",
// age :14,
// class:"Thursday",
// role:"Teacher",
// };
// console.log("student")
// let sirHumza = {
//     userName:"Hamza Alvi",
//     age:28,
//     class:"friday",
//    roll:"Teacher",
// }
// console.log(sirHumza)
// let civic = {
// name: "civic",
// coloue:"white",
// modelNumber:2023,
// powerSiearing:false,
// hoursePower:"1200cc",
// }
// // console.log(`staff Email is: ${staff.email}`);
// console.log(Object.keys(civic).length);
// let student = {
// name:"Shabnam",
// age: 24,
//  gender:  "female",
//  email: "shabnam@gmail.com",
//  dob: "12345",
// };
// let car = {
// name:   "Carola",
// colour: "White",
//  model: 2024,
//  horsePower: "1200cc",
// }
// console.log(car);
//  let employee:{name: number, email: string, age: number} ={
//      name: 1234,
//      email: "shoaib@gmail,com",
//      age: 24,
//  }
//  console.log(employee);
// let sstTest: {testName: string, rollNumber: number, day: string, timings: string, thisMonday: boolean}={
// testName:  "sst",
// rollNumber: 2233,
// day: "Monday",
// timings: "08:00",
// thisMonday: true,
// };
// console.log(sstTest);
// type Employee = {
//     name: string,
//     age: number,
//     inAdmin: boolean,
// };
// let employee1:Employee={
//     name: "Miss Minahil",
//     age: 24,
//     inAdmin: true
// };
//     let employee2:Employee={
//         name: "Hamza Alvi",
//         age: 25,
//         inAdmin: true   
// };
// console.log("Employee ");
// type ModelNumber = number | string |boolean;
// type Cars = {
//  carName: string; 
//  color: string;
//  modelNumber: ModelNumber;
//  powerStearing?: boolean;  
// };
// let modelNumber1: ModelNumber = true;
// let car1: Cars = {
//     color: "white",
//     carName: "cultus",
//     modelNumber: 2022,
//     powerStearing: false
// }
// let car2: Cars = {
//     color: "white",
//  carName: "Mehran",
//     modelNumber: 2023,
// }
// type Faculty = "Students" | "Admin" | "teacher" |"TA"
// let userName:Faculty = "Students";
// type Products ={
// title: string;
// desc?: string;
// price: number;
// isAvailabe:boolean;
//  };
// const product = {
// title: "Watch",
// desc:"this is a watch",
// price: 200,
// isAvailabe: true,
// };
// const student = {
// name:"Hamza Alvi",
// standerd: "MSC",
// gender: "Male",
// address:{
//     street: "street 1",
//     postalCode: 1234,
//     city: "Karachi"
// }
// // };
// const product = {
//    title:  "shirt",
//     desc:  "this is a polo shirt",
//    price : 1000,
//    addinfo:{
//     color: "white",
//     size: "small",
//     qty:   5 ,
//    } 
// };
// type student ={
// bio:{
//     name: string
//     gender: string
//     dob: number
// },
// department:{
//     depName:string,
//     faculty: "bcom" | "bscs" | "ba"
// }
// }
// const student:student = {
//     bio:{
//     name: "Hamza Alvi",
//     dob:1997,
//     gender:"male",    
//     },
//    department:{
//     depName: "Commerce",
//     faculty: "bcom",
//    }
// }
// console.log(student.bio);
// console.log(object.entries(student.bio))
// // console.log(student.keys);
// const greet = () => {
//     // console.log("Hello Thursday Class");
// };
// greet()
//     const student = {
//      name: "Hamza Alvi" ,
//      dob: 1997,
//      gender: "male",
// //      greet: function(){
// console.log("Hello  Class");
//  },
// callName:function(){
//   console.log("Hello Hamza Alvi")  
//     addition: function (num1, num2){
//         return num1 + num2;
//     },
//     };
//     const addition=(num1,num2)=>{
//         return num1 + num2;
//     } 
//     let add1 = addition(4,6)
//    let add2 = student.addition(5,6);
//     console.log(add1)
// console.log(add2)
//     // }
//     // greet()
// student.callName();
// console.log(student.name)
// student.greet()
// student.callNaber
// Arrays
// const students =["hassnain", "abeeha", "ali"];
// console.log(students, "students");
// const number = [1, 2, 3, 4, 5, 6, ];
// const boolArray = [true, false, false];
// const mixarray  = [ "hassnain", 12345, false];
// console.log("Number:", number);
// let newArray:string[] = ['hussnain', 'abeeha',]
// let numberNew:number[] = [1, 2, 3, 4, 5, ]
// let arrayU:(string|number|boolean)[] = ['hussnain',123, false,'world', 4 , true]
// console.log(newArray[0]);
// let students:string[]= ["hussnain", "abeeha", "ali", "huma", "wahid"]
// console.log( students[2]);
// console.log(students[3]);
// let teachers: string[] = ["Hamza", "Maria"]
// console.log(teachers, "teachers before");
// teachers[0] ="Aziz"
// console.log(teachers, "teachers after");
//  let teachers: string[] = ["Hamza", "Maria", "hussnain"]
//   teachers.push("Dua")
//  teachers.push("Aziz")
//  console.log("teachers", teachers);
// 
//   teachers.pop()
//  teachers.pop()
//  teachers.pop()
// console.log(teachers);
// teachers.unshift("Ali")
// teachers.shift()
// console.log("teachers", teachers);
