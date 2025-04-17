function myFunction(data) {

    return new Promise((resolve) => {
  
      setTimeout(() => {
  
        resolve(data);
  
      }, 100);
  
    });
  
  }
  function timeLimit(func,time){
    return function(...args){
        let isFinished =false
        return new Promise((resolve,reject)=>{
            func(args).then((data)=>{
                if(!isFinished)
                    resolve(data)
            }).catch((err)=>{
                if(!isFinished)
                    reject(err)
            })
            setTimeout(()=>{
                isFinished =true
                reject("time limit exceeded")
            },time)
        })
    }
  }
  
  let newFunction = timeLimit(myFunction, 500);
  
  newFunction("will resolve?")
  
    .then((data) => {
  
      console.log(data); // will resolve?
  
    })
  
    .catch((err) => {
  
      console.log(err);
  
    });
   
  newFunction = timeLimit(myFunction, 200);
  
  newFunction("will resolve?")
  
    .then((data) => {
  
      console.log(data);
  
    })
  
    .catch((err) => {
  
      console.log(err); //Time limit Exceed
  
    });