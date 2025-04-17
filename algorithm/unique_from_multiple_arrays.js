function intersectionBy(func,...args){
    const set = new Set()
    const opSet = new Set()
    const myArray = [...args]
    function iterateArray(arr){
        arr.forEach(element =>{
            if(Array.isArray(element)){
                iterateArray(element)
            }else{
                const op = func(element)
                if(!opSet.has(op)){
                    opSet.add(op)
                    set.add(element)
                }
            }
        })
    }
    iterateArray(myArray)
    console.log(set) 
}
const result = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); // => [2.4]
// Get the intersection based on the lowercase value of each string
const result2 = intersectionBy(
  (str) => str.toLowerCase(),
  ['apple', 'banana', 'ORANGE', 'orange'],
  ['Apple', 'Banana', 'Orange'],
);