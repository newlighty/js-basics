// Hour 
//if else
// const Hour = 10;

// if (Hour >= 6 && Hour < 12) {
//     console.log('good morning');
// } else if (Hour >= 12 && Hour < 18) {
//     console.log('good afternoon');
// } else
//     console.log('good evening');

// //Switch
// let shirt = 'shirt';

// switch (shirt) {
//     case 't-shirt':
//         console.log('faramarz wear red t-shirt');
//         break;
//     case 'shirt':
//         console.log('faramarz wear blue shirt');
//         break;
//     default:
//         break;
// }

// // write that with if else 
// // unlike java that people often use switch hear in javascript more like using if else

// if (shirt === 't-shirt')
//     console.log('faramarz wear red t-shirt');
// else if (shirt === 'shirt')
//     console.log('faramarz wear blue shirt');


/// for 

// for (let i = 0; i < 5; i++) {
//     console.log('hello world');

// }


// for (let i = 0; i< 20; i++){
//     console.log('what the ...');
// }


// for (let i = 1; i <= 5; i++) {
//     if (i % 2 !== 0) console.log(i);
    
//  }

//  for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) console.log(i);
    
//  }
// console.log('reverse number----------------')
//  for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) console.log(i);
    
//  }

 // while ---------------------/////////-------->
//  let x = 0;
//  while (x <= 10) {
//     if (x % 2 !== 0) console.log(x);
//     x++; 
//  }

//  let i = 5;
//  while (i >= 1) {
//      console.log(i);
//      i--;
//  }

//https://hackernoon.com/javascript-practical-coding-challenges-for-beginners-4bq3ugr 

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
     
//  }

 // do-while loop ----------------------///////////////////----------->

// do while always executed even it's condition evaluated to false

//  let x = 9;
//  while (x <= 5) {
//     if (x % 2 !== 0) console.log(x);
//     x++; 
//  }
// hear we changed the x to 9 and condition goes false  and no output 


//  let i = 9;
//  do {
//     if (i % 2 !== 0) console.log(i);
//     i++; 
//  } while (i <= 5);

// infinite loops------------------/////////////--------->

// while (true) {

// }
// let x = 0;
// do {
// // x++;
// } while (x < 5);


// for (let i = 0; i > 0; i++); 
// for (let i = 0; i < 0; ); 

// for-in   ---------------------///////////------------>

// const person = {
//     name: 'Mosh',
//     age: 30,
//     wife: 'marta'
// };
// key is string and can be anything 
// for (let key in person)
//    console.log(key, person.key); it get undefined because the key is not defined in person object

//    console.log(key, person[key]);


   // reminder 
   // Dot Notation 
//    person.name;

// Bracket Notation it used when the value of the key above maybe different in run time 
// person['name'];

// we use for in to iterate the property of object

// do it with array not common way also

// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
//     console.log(index, colors[index]);

// for-of : ----------------------->

// to iterate the elements or items in array


// const colors = ['red', 'green', 'blue', 'pink'];
// for (let color of colors)
// console.log(color);

// break

// let i = 0;
// while (i <= 10) {
//    if (i === 5) break;
//    i++;
// }
// console.log(i);

// with break we jump out of loop

// continue
// this is not used in modern js6 just for reference as to know if seen in others old code

// let i = 0;
// while (i <= 10) {
// if(i % 2 === 0) {
//    i++;
//    continue;
// }
// console.log(i);
// i++;
// }
 
// with continue jump to next iteration

// -----------------------------exercise 1- max--
// get the max number in the out put
//    const number a = max(5, 10);
   

// console.log(a , b);
// let number  = max(5, 10);
// console.log(number);
// function max(a, b) {
//    return (a > b) ? a : b;

// }

//for line condition it cleaner to write like this 
// if (a > b) return a; 
// else return b;

//  if (a > b) return a;
//    return b;

// and finally the cleanest form :
// return (a > b) ? a : b;

/////////////challenge-2 ---- landscape of portrait
// console.log(isLandscape(800, 600));

// function isLandscape(width, height) {
// return (width > height) ; // we use this instead of if else or ternary operation; because we just need true or false
// }

/////////////////////////// exercise 3 - fizzBuzz 

// Divisible by 3 => Fizz 
// Divisible by 5 => Buzz
// Divisible bt both 3 and 5 => FizzBuzz 
// not Divisible by 3 or 5 => input number
// Not a number => 'Not number'


// const output = fizzBuzz('16');
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== 'number')
//   return NaN;
  
//   if ((input % 3 === 0) && (input % 5 === 0))
//      return 'FizzBuzz';

//     if (input % 3=== 0)
//     return 'Fizz';

//     if (input % 5 === 0)
//     return 'Buzz';

//     return input;
// }

// the word is not matter algorithm does
//  const output = faramarzBayat(15);
//  console.log(output);

// function faramarzBayat(input) {
//    if (typeof input !== 'number')
//    return NaN;
  
//   if ((input % 3 === 0) && (input % 5 === 0))
//      return 'faramarzBayat';

//     if (input % 3=== 0)
//     return 'faramarz';

//     if (input % 5 === 0)
//      return 'Bayat';
// }

///////////// exercise 4  Demerit Point ------>

// speed Limit = 70 
// 5 -> 1 point 
// math.floor(1.3)
 
// checkSpeed(130);

// function checkSpeed(speed) {
//    const speedLimit = (70);
//    const kmPerPoint = 5;
// make code cleaner
//    if(speed <= speedLimit + kmPerPoint) 
//    console.log('Ok');
// else {
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12)
//   console.log('License suspended');
//   else
//   console.log('points', points);
// }

//cleaned code--->
// if(speed <= speedLimit + kmPerPoint) {
//    console.log('Ok');
//    return;
// }
// const points = Math.floor((speed - speedLimit) / kmPerPoint);
// if (points >= 12)
// console.log('License suspended');
// else
// console.log('points', points);
// }
///////////// exercise 5 Even and odd Numbers
// showNumber(10);

// function showNumber(limit) {
//    for (let i = 0; i <= limit ; i++) {
//    //   if (i % 2 === 0) console.log(i, 'even');
//    //    else (i, 'odd');

//    // cleaner code 
//    const message = (i % 2 === 0) ? 'EVEN' : 'Odd' ;
//    console.log(i, message);
//    }
// }


// ///////////// exercise 6 count Truthy.

// const array = [1, 2 ,3];
// console.log(countTruthy(array));

// function countTruthy(array) {
//    let count = 0;
//    for (let value of array) 
//    if (value)
//    count++;
//    return count;
// }

///////////// exercise 7 String Properties.

// const movie = {
//    title: 'a',
//    releaseYear: 2018,
//    rating: 4.5,
//    director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//  for (let key in obj)
// if (typeof obj[key] === 'string') // hear we ask to give us string but if yon change it to 'number' ..
//  console.log(key, obj[key]);
 
// }
// 

///////////// exercise  8 sum of multiples of 3 and 5 
// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//       sum += i;

//   return sum; 
// }

// this has nothing to do with practice just show me the result of loop that the sum of te number is amount of sum 33
// const limit = 10;
// let sum = 0;
// for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//     console.log(i);
    

   ///////////// exercise 9 grade 

   // const array = [100, 90, 50];

   // function calculateGrade(marks) {
   //    const average = calculateAverage(marks)

   //    // if (average >= 0 && average <= 59)
   //    //  return 'F';
   //    if (average < 60) return 'F';
   //    if (average < 70) return 'D';
   //    if (average < 80) return 'C';
   //    if (average < 90) return 'B';
   //    return 'A';
   // }

   // // calculate average in separated reuseable function
   // function calculateAverage(array) {
   //    let sum = 0;
   //    for (let value of array)
   //       sum += value;
   //    return  sum / array.length;
   // }

   // console.log(calculateGrade(array));


///////////// exercise 10 Stars 

// showStarts(18);

// function showStarts(rows) {
//    for (let row = 1; row <= rows; row++) {
//       let pattern = '';
//       for (let i = 0; i < row; i++)
//          pattern += '*';
//       console.log(pattern);
//    }
// }

///////////// exercise 11 prime Numbers


// عدد اول
//prime (whose factors are only 1 and itself composite)
// prime (whose factors are only 1 and itself) so it can not divided evenly i another number

// 12 = 1, 2, 3, 4, 6, 12
// can be divided evenly by its factors

// Composite اعداد مرکب
// 11 = 1, 11
// 13 = 1, 13
// showPrimes(10);

// function showPrimes(limit){
//    for(let number = 2; number <= limit; number++) {

//       let isPrime = true;
//       //find the factor of number
//       for (let factor = 2; factor < number; factor++) {
//         if (number % factor === 0) {
//             isPrime = false;
//             break;
//         }
       
//       }
//       if (isPrime) console.log(number);
//    }
// }

// same code but very cleaner----//\\-----
showPrimes(10);

function showPrimes(limit){
   for(let number = 2; number <= limit; number++) 
      if (isPrime(number)) console.log(number);
   
}



function isPrime (number){
  
   for (let factor = 2; factor < number; factor++) 
      if (number % factor === 0) 
       return false;
 return true;
}
// if (isPrime) console.log(number);