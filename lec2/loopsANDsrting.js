// print 1 to 5
// for (let i = 1; i <= 5; i++) {
//     console.log("i =", i);
// }
// console.log("loop has been ended");

// ---------------------------------------------
// let i = 0;
// while (i<=5) {
//     console.log("i=",i);
//     i++;
// }

// ----------------------------------------------
// print sum 1 to 5

// let sum = 0;
// let n =100;
// for (let count = 1; count <=n; count++) {
//     sum = sum + count

// }
// console.log("sum =",sum);


//------------------------------------------------
// for-of & in loop

// let str = ("javascript");

// let size = 0;
// for (let val of str) {
//     console.log("val=",val);
//     size++;
// }

// console.log("size=",size);



// let student = {
//     stdName :"Aayush Anil Gurav",
//     cgpa:8.79,
//     ispass:true
// };
// for (let key in student) {
//     console.log("key=",key,"value=",student[key]);
// }


// printing even number 1 to 100
// for (let i = 2; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log("i=", i)
//     }

// }

// console.log("odd number 1 to 100");

// for (let i = 2; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log("i=", i)
//     }

// }


// game
// let gameNum = 45;
// let userNum = prompt("enter the number");

// while(gameNum != userNum){
//     userNum = prompt("you enter worng number");

// }

// console.log("you enter right number<3");


// string
// let str = "AayushAnilGurav";
// console.log(str[5]);


// templete literals
// let specialString = `this is a literal type templete`;
// console.log(typeof specialString);

// string interpolation
// let obj = {
//     item: "ballon",
//     price: 50

// };

// let output = `the cost of one packet ${obj.item} was ${obj.price} rupees`;

// console.log(output);

// using escape character
// let str="apna\t\ncollege";
// console.log(str.length);

//method
// toUpperCase
// let str = "AayushAnilGurav";
// let newStr=str.toUpperCase();
// let newStr=str.toLowerCase();
// str = str.toUpperCase();
// console.log(str);
// console.log(newStr);

// trimMethod
// let str ="    Jai shree ram ";
// console.log(str.trim());

// sliceMethod
// let str="0123456789";
// console.log(str.slice(1,5));

// concatStringMethod
// let strOne = "myNameisAntoyni";
// let strTwo = "chupp!!!";
// let res = "!@#"+strOne+strTwo;
// console.log(res);

// repalceMethod
// let strOne = "mymyNameisAntoyni";
// let strTwo = "chupp!!!";
// let res = strOne.replaceAll("my" ,"your");
// console.log(res);

// charAtIndex
// let str="iLoveJs!!!";
// console.log(str.charAt(5));

// pricticeQ1
// let fullName = prompt ("enter a fullname here");

// let userName = "@" + fullName + fullName.length;
// console.log(userName);
