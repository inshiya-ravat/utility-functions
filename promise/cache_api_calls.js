function fetchApi(path){
    return fetch(path)
}

function cachedApiCall(timeout){
    const map = new Map();
    const date = new Date();

    return function(path, obj){
        if(map.has(obj.keyword)){
            console.log("from cache")
            return map.get(obj.keyword);
        }
        else{
            const result = fetchApi(path);
            map.set(obj.keyword, result);
            if(date + timeout >= Date.now()){
                map.delete(obj.keyword)
            }
            console.log("from api call")
            return result;
        }
    }
}

const call = cachedApiCall(3000);
call('https://jsonplaceholder.typicode.com/todos/1',{
    keyword:'dev',
}).then((a)=>console.log(a));

setTimeout(()=>{
    call('https://jsonplaceholder.typicode.com/todos/1',{
        keyword:'dev',
    }).then((a)=>console.log(a));
},2500)

setTimeout(()=>{
    call('https://jsonplaceholder.typicode.com/todos/1',{
        keyword:'dev',
    }).then((a)=>console.log(a));
},4000)

// function fetchApi(path){
//     return fetch(path)
// }

// function cachedApiCall(timeout){
//     const map = new Map();
//     return async function(path, obj){
//         const now = Date.now();
//         if(map.has(obj.keyword)){
//             const {result, timestamp} = map.get(obj.keyword);

//             if(now - timestamp < timeout){
//                 console.log("from cache");
//                 return result;
//             }
//             else{
//                 map.delete(obj.keyword)
//             }
//         }
//         else{
//             const result = await fetchApi(path);
//             map.set(obj.keyword, {result, timestamp:now});
//             console.log("from api call")
//             return result;
//         }
//     }
// }

// const call = cachedApiCall(3000);
// call('https://jsonplaceholder.typicode.com/todos/1',{
//     keyword:'dev',
// }).then((a)=>console.log(a));

// setTimeout(()=>{
//     call('https://jsonplaceholder.typicode.com/todos/1',{
//         keyword:'dev',
//     }).then((a)=>console.log(a));
// },2500)

// setTimeout(()=>{
//     call('https://jsonplaceholder.typicode.com/todos/1',{
//         keyword:'dev',
//     }).then((a)=>console.log(a));
// },4000)