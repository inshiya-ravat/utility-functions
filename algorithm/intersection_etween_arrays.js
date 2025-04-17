function intersectionBy(func,...args){
    const map = new Map()
    const myArray = [...args]
    const result = []
    for(let element of myArray){
        for(let el of element){
            const op = func(el)
            if(map.has(op)){
                let {count, value} = map.get(op)
                count = count +1
                map.set(op, {count,value})
            }else{
                map.set(op,{count:1,value:el})
            }
        }
    }
    for(let [key,val] of map){
        if(val.count >= myArray.length){
            result.push(val.value)
        }
    }
    console.log(result)
}
const result = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); // => [2.4]
// Get the intersection based on the lowercase value of each string
const result2 = intersectionBy(
  (str) => str.toLowerCase(),
  ['apple', 'banana', 'ORANGE', 'orange'],
  ['Apple', 'Banana', 'Orange'],
);