// let marks=[34,36,55];
// console.log(marks);
// console.log(marks.length);

// let heroes=["ram","lakshman","mahadev","hanuman"];
// console.log(heroes);

// let fruit = ["mango","banana","jackfruit"];
//  fruit[1] = "apple"; this is to replace a element
// fruit[3] = "pear"; this is to add a element 


// alert(fruit[fruit.length-1]);


// for over arry(in array)-----------------------------------------
// let heroes=["ram","lakshman","mahadev","hanuman"];
// for (let index = 0; index < heroes.length; index++) {
//     console.log(heroes[index]);
    
// }
// console.log(heroes[2]);

// for of loop(in array)---------------------------------------------
// let cities=["mumbai","delhi","pune","nashik","satara"];

// for(let city of cities){
//     console.log(city);
// }

// push & pop method in Array--------------------------------------
// let student =["onakr","dhamdeep","aayushOG","divya","supriya"];
// let newLength=student.pop();
// let newLegth=student.push("drusty");
// console.log(student);

// toString method in Array-------------------------
// let fruit = ["mango","banana","jackfruit"];
// console.log(fruit);
// console.log(fruit.toString());


// concat method in Array----------------------
// let omiMarks=[90,95,78,35];
// let deepMarks=[97,78,67,34];
// let combineArray = omiMarks.concat(deepMarks);
// console.log(combineArray);
// console.log(omiMarks);
// console.log(deepMarks);


// let omiMarks=[1,2,3,4,5,6,7];

// omiMarks.splice(2,2,108,109);

// PQ
let compines =["BLOOMBERG","MICROSOFT","UBER","GOOGLE","IBM","NETFLIX"];

compines.splice(0,1);
// compines.splice(3,1,"OLA");
compines.splice(6,"AMAZON");
console.log(compines);
