// we return function in curry function.
// function which we are returning always returns a function (so no way to stop currying)
// and we add toString in returning function that calls original function with all the collected arguments (which are stored in array)
function multiply(b,a){
    return b*a
}
function curry(func){
    let result;

    function curried(b){
        if(result === undefined){
            result = b;
        }
        else{
            result = func(result, b);
        }
        return curried;
    }
    curried.toString = function(){
        return result.toString();
    }
    return curried;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(4)(5)(4)(1))