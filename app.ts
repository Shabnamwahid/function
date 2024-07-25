//No:1  element
// const names = ["Hamza", "Ali", "Jawad"];
// names.splice(1,0)
// console.log(names,"names");

//No:2 Add 1  element no delet
// const names = ["Hamza", "Ali", "Jawad"];
// names.splice(1,0,"Bilal")
// console.log(names,"names");

//No:3 Add 1  element & Delet  2 element
// const names = ["Ravi", "Indus", "Sutlaj"];
// names.splice(1,2,"Chenab", "Kabul")
// console.log(names,"names");

//No:4  Delet 1  element & Delet  2 element
// const names = ["Ravi", "Indus", "Sutlaj"];
// // names.splice(0,1)
// // console.log(names,"spilce 1");
// names.splice(1,1);
// console.log(names,"spilce 2");


//No:5  tupple
// type Cars = [string,string,string,string,string,];
// let cars:Cars=["corola", "civic", "Suzuki", "Mehran", "cultus".];
// console.log(cars);

//No:6
// const multiArr = [1, 2, 3,4,[1, 2, 4, 5 ]]
// const names=["Hamza"]
// console.log(names[0]);
// console.log(multiArr[4], "Arrays");

//No:7  
// const multiArr = [1, 2, 3,4,[6] ]
// console.log(multiArr[4], "Arrays");

//No:8 
// type MultiArray = [number,number,number,[string,string,]];
// let names: MultiArray=[1, 2, 4, ["Mehran", "cultus"]];
// console.log(names);

//No:9
// const nestedArray = [1, 2, 4, ["Mehran", "cultus"]];
// console.log(nestedArray[3][0], "nasted array");

//No:10 union(|), intersection(&)
let package :string | number | boolean
type Intersection = {
    name:string;
    class:string;
}
type Intersection2={
    dob:number
}
let intersec : Intersection = {
name:"abc",
class:"Thursday",
}
let intersec2 :Intersection & Intersection2 = {

    name:"abc",
    class:"thursday",
    dob:123,
}
//
let userName: string = "Hamza";
let userName2 = "Hamza" as string

let number = 123456 as number | string;
// let userName ="Hamza" as string

// variables
// data types
// const and let
//  inquirer
// all operators from the slides
// conditions (IF Else)
// functions (functions, arrow functions and return)
// anonymous function
// default argument
//  local and global variables
// rest parameters
// objects with nested objects)
// array
// array methods (push, pop, shift, unshift, slice and splice)
// type alias
// union, literal and intersection
// tuples
// explicit castin