function myFunc(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('promise')
        },1000)
    })
}
 
function circuitBreaker (func,  maxCount, haltTime){
    let isHalted = false;
    let count =0;
    let timer  = null;
    
    return function(){
        return new Promise((resolve,reject)=>{
            if(isHalted){
                reject("execution halted");
                return;
            }

            function fn(){
                func().then((msg)=>{
                    count = 0;
                    resolve(msg)
                })
                .catch((err)=>{
                    if(count++ >=  maxCount){
                        isHalted = true;
                        console.log("halting execution now!!!-------------------------");
                        console.log(haltTime)
                        timer = setTimeout(()=>{
                            isHalted = false;
                            timer = null;
                            count = 0;
                        },haltTime);
                    }else{
                        console.log("calling again")
                        fn();
                    }
                    reject(err)
                })
            }
            fn()
        })
    }
}
 
const breaker = circuitBreaker(myFunc, 2, 3000);
breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err))

// setTimeout(()=>{
//     breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
// },1000);
 
setTimeout(()=>{
    breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
},4900);

setTimeout(()=>{
    breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
},7000);
