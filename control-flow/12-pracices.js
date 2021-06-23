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

 // while ---------
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

 // do-while loop 
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

// infinite loops

// while (true) {

// }
// let x = 0;
// do {
// // x++;
// } while (x < 5);


// for (let i = 0; i > 0; i++); 
// for (let i = 0; i < 0; ); 

// for-in 
const person = {
    name: 'Mosh',
    age: 30,
    wife: 'marta'
};
// key is string and can be anything 
for (let key in person)
//    console.log(key, person.key); it get undefined because the key is not defined in person object

   console.log(key, person[key]);


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
