const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved')
    },2000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2')
    },3000)
})
const promise3 = new Promise ((resolve,reject) => {
    setTimeout(() =>{ 
        resolve("Promise 3 resolved")
    },4000)
})

Promise.myAll = function(promiseArr){
  return new Promise((resolve, reject)=>{
    let count = 0
    const result = []
    promiseArr.forEach((index,promise) => {
      promise.then((res)=>{
        count++
        result[index] = res
        if(count === promiseArr.length){
          resolve(result)
        }
      }).catch((error)=>{
        reject(`${error} got rejected`)
      })
    })
  })
}

Promise.allSettled([promise1,promise2,promise3])
  .then((msg)=>console.log(msg))
  .catch((err)=>console.error(err))