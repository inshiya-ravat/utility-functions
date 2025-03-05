let arr = [4,8,0,4,88,2,12,4,6,8,44,33,99,101]
let stack = []
let max = arr[0]
for (let a of arr){
    if(a > max || stack[stack.length - 2] < a){
        max = a
        stack.push(max)
    }
}
console.log(stack)
stack = stack.sort((a,b) => a-b)
console.log(stack)
console.log("2nd largest: ", stack[stack.length -2])

let second_max = max
for (let a of arr){
    if(a > max){
        second_max = max
        max = a
    }
    else if(second_max < a || second_max == max){
        second_max = a
    }
}
console.log(second_max)