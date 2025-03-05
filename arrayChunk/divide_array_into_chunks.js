function chunk(arr, num){
    let result =[[]]
    let n = num
    let i=0
    let j=0
    while(n>=0 && i<arr.length){
        result[j].push(arr[i])
        i++        
        if(n==1 && (num!=1 || )){
            result[j+1]= new Array()
            n=num
            j++
        }
        else{
            n--
        }
    }
    return result
}
console.log(chunk([1, 2, 3, 4, 5], 1))
console.log(chunk([1, 2, 3, 4, 5], 2))
console.log(chunk([1, 2, 3, 4, 5], 3))
console.log(chunk([3,5,8,901,484,584,-9],5))