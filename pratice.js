// for (let i = 0; i <=5; i++) {
//     console.log("i=",i);
// }
// console.log("loop has been ended");

// let i=0;
// while (i<=5) {
//     console.log("i=",i);
//     i++;
// }
// console.log("while loop has been ended");

let person = new Object();

person.firstName="aayush";
person.lastName="gurav";
person.age=28;

person.greet = function() {
    console.log("hello,"+this.firstName);
};
console.log(person.firstName);

person.greet();