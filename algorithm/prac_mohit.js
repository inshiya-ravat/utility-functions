// Implement a function compose that takes multiple functions as arguments and returns a new function that 
// applies those functions in reverse order. The output of one function becomes the input of the next function, creating a chain of function compositions.
 
// If there are no functions passed to the compose function, the default behavior is to return a new function that 
// simply returns the input it receives. In other words, the default behavior of compose without any functions results in a simple identity function.
 
// You may assume that all the functions accept a single parameter.
 
const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

function compose(...args){
    const reversedArr = args.reverse();
    return function(num){
        const result = reversedArr.reduce((acc, currentValue)=>{
            return currentValue(acc);
        },num)
        console.log(result)
    }
}
const composedFn = compose(subtract10, double, add1);
console.log(composedFn(3)); // (3 + 1) * 2 - 10 => -2