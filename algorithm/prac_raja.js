// Implement a function groupBy(array, iteratee) that takes an array and an iteratee function, and groups the values in the array based on the iteratee.
 
function groupBy(arr, func){
    const map = new Map();
    arr.forEach(element => {
        const result = func(element)
        if(map.has(result)){
            let value = map.get(result)
            value.push(element)
            map.set(result, value)
        }else{
            map.set(result,[element])
        }
    });
    console.log(map)
}
 
groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
 
groupBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// => { '3': [{ n: 3 }, { n: 3 }], '5': { n: 5 } }