// in this exercise , you;ll refactor some ES5 into ES2015
//GIVEN THIS FUNCTION
// function filterOutOdds ()
// {
//     var nums = Array.prototype.slice.call( arguments );
//     return nums.filter( function ( num )
//     {
//         return num % 2 === 0;
// //     } );
// }
const filterOutOdds = ( ...nums ) => nums.filter( nums % 2 == 0 );

// ## ** findMin **

//     Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.;

findMin( 1, 4, 12, -3 ); // -3
findMin( 1, -1 ); // -1
findMin( 3, 1 ); // 1
const findMin = ( ...args ) => Math.min( args );