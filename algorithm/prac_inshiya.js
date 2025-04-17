// Implement a function countBy(array, iteratee) that creates an object composed of keys generated from the results of running
//  each element of array through iteratee. The corresponding value of each key is the number of times the key was returned by iteratee.
 
// => { '4': 1, '6': 2 }

// => { '3': 2, '5': 1 }

function countBy(arr, func){
    const map = new Map()
    arr.forEach(a => {
        const result = func(a);
        if(map.has(result)){
            const count = map.get(result);
            map.set(result, count+1)
        }
        else{
            map.set(result,1)
        }
    });
    console.log(map)
}
countBy([6.1, 4.2, 6.3], Math.floor);
countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);