
// let x = 5;
// let y = 3;


// increment (++)
// console.log(++x);
// console.log(x++);
// console.log(x);

// decrement (--)
// console.log(--x);
// x = x + 5;
// console.log(x);

// x += 5; 
// console.log(x);

// x = x * 3;
// x *= 3;
// console.log(x);

// strict Equality (Type + value)
//both of them muse be the same
// console.log(1 === 1);
// not like this
// console.log('1' === 1);


// lose Equality (value)
// it has type converting and convert it's type to make it true than check the Equality 
// console.log(1 == 1); //true
// console.log('1'== 1); //true
// console.log(true == 1);

// most of the time we must use  === this

//Ternary operator 

// if a customer has more than 100 points they are a gold customer, otherwise they are silver customer .

// let points = 110 // point customer gets suppose✔
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

// points > 100  comparison that produce boolean part this is condition part and if true 
// ? 'gold' : means else and set the type to silver 

// Falsy (false)
// contain these : 
//undefined 
//null
//0
//false
// ''
//NaN


// Anything that is not Falsy -> is Truthy

// exp false || true --> true why ? because 
// this is or and as long as one of condition are true it return true and hear false is falsy but true is true
// false || 1 || 2 --> 1 ? when the first truty is found the rest is ignored and it called short-circuiting

// practical exp : if in our app user has to pick the color or we going to use default color maybe the color of the t-shirt the want to buy 



// let useColor = 'red';
// let defaultColor = 'blue';
// let currentColor = useColor ||  defaultColor;
// console.log(currentColor);

// if user don't choose color it goes with default
// let useColor = undefined;
// let defaultColor = 'blue';
// let currentColor = useColor ||  defaultColor;
// console.log(currentColor);

// Bitwise 
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

// console.log(1 | 2); //Bitwise OR
// console.log(1 & 2 ); // Bitwise AND

// Read ,Write , Execute 

// 00000100 read = 4
// 00000110 read,write  = 2 
// 00000111 read,write,execute 1

// 00000100 read = 4
// 00000010 write  = 2 
// 00000001 execute  = 1

// we can use binary to decimal convertor to know the number of binary 


// const readPermission  = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// // myPermission = myPermission | readPermission | writePermission | executePermission; this give yes 
// myPermission = myPermission |  writePermission | executePermission; // this gives no 
// // we can give or take back permission with | bitwise operations

// let message = (myPermission & readPermission) ? 'yes' : 'no' ;

// console.log(message);

// challenge swap red with blue 
 let a = 'red';
 let b = 'blue';
 let c = a;
 a = b;
 b = c ;
 console.log(a);
 console.log(b);