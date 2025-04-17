// [].reverse (reverse mutates original array)

Array.prototype.myReverse = function(){
    const reversedArr = []
    arr = this
    for(let i= arr.length-1; i>=0 ; i--){
        reversedArr.push(arr[i])
    }
    console.log(reversedArr)
}
let arr = [1,2,[3,4]]
arr.myReverse()
console.log(arr.reverse())