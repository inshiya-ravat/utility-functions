function  createArray(){
    console.log("array created!")
    let bigArray =  new Array(7000).fill("😄");
    return function(index){
        console.log(bigArray[index])
    }
}
let arr = createArray()
arr(688);
arr(1000);
arr(6500);