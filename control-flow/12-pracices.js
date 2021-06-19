// Hour 
//if else
const Hour = 10;

if (Hour >= 6 && Hour < 12) {
    console.log('good morning');
} else if (Hour >= 12 && Hour < 18) {
    console.log('good afternoon');
} else
    console.log('good evening');

//Switch
let shirt = 'shirt';

switch (shirt) {
    case 't-shirt':
        console.log('faramarz wear red t-shirt');
        break;
    case 'shirt':
        console.log('faramarz wear blue shirt');
        break;
    default:
        break;
}

// write that with if else 
// unlike java that people often use switch hear in javascript more like using if else

if (shirt === 't-shirt')
    console.log('faramarz wear red t-shirt');
else if (shirt === 'shirt')
console.log('faramarz wear blue shirt');
