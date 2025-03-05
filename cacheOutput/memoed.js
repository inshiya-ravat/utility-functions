const func = (arg1, arg2) => {
    return arg1 + arg2
}
const mul = (arg1,arg2) =>{
    return arg1 * arg2
}
let obj = {
    div(arg1,arg2){
        return arg1/arg2
    }
}

function memo(func1){
    const map = new Map();
    return function(...args){
        let objKey = args.toString()
        console.log("checking key", objKey)
        if(map.has(objKey)){
            console.log("fetching from map", objKey)
            return map.get(objKey)
        }
        else{
            console.log("calculation by calling function", objKey)
            let ans = func1(...args)
            map.set(objKey,ans)
            return ans
        }
    }
}

const memoed = memo(func)
const memoed2= memo(mul)
const memoed3= memo(obj.div)

console.log(memoed3(1,3))
console.log(memoed3(1,4))    
console.log(memoed3(1,3))

console.log(memoed(1,3))
console.log(memoed(1,4))    
console.log(memoed(1,3))

console.log(memoed2(2,3))
console.log(memoed2(1,4))    
console.log(memoed2(2,3))