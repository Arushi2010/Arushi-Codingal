let str="Hello123";
let a =/\d/;
console.log(a.test(str));


const script ="I Am Arushi";
const regex2=/Arushi/;
console.log(regex2.test(script));


const text ="my age is 14";
const regex3 =/\d+/g;
console.log(text.match(regex3));