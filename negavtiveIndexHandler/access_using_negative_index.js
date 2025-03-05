const originalArr = [1, 2, 3]
let negativeIndexHandler= {
    get(target,prop){
        if(prop<0){
            return target[(target.length - (-prop)) % target.length]
        }
        else{
            return target[prop % target.length]
        }
    }
}
function wrap(array){
    return new Proxy(array, negativeIndexHandler)
}
const arr = wrap(originalArr)
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[-1])
console.log(arr[-2])
console.log(arr[-3])
console.log(arr[-4])