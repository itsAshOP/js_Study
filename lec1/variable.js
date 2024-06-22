/*
primitive 
dataTypes
number.boolean,string,undefine,bigint,symbol.
*/

let age = 28;
// data type number
let FullName = "aayush"
// data type string
let price = 100.30;
// data type boolen
let x = BigInt("1234");
// data type BigInt
let y = Symbol("hello!");
// data type Symbol
let a 
// data type undefine


/*
NON-primitive 
dataType
object, function,array
*/

// now we are making a student detail using object

/*
what is object??
--> Object is collection of variables.
*/

const student = {
    FullName : "saksham",
    age : 12,
    cgpa : 7.2,
    ispass : true,
};

student.age = "Aayush"


console.log(student.FullName);

console.log(student["age"]);

/*
How to access key
object[key_name"...."]
object.keyname
*/

const instaID ={
    name: "shradhakhapra",
    isfollow : true,
    chat: "Message",
    posts: 195,
    followers: 56900,
    following:4,
    username:"Shradha Khapra",
    job: "Apna College",
    preWork:"Ex-microsoft,DRDO",
    bio: "To educate someone is the highest privilege",

};