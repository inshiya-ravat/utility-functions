const obj = {
    a: {
      b: {
        c: [10,20],
      },
      d: 10,
    },
  };
  
  function countKeyWithValue(obj, val) {
      let count = 0
      function fn(obj){
          for(const [key,value] of Object.entries(obj)){
                if(Array.isArray(value)){
                    let isDifferent =false
                    if(value.length !== val.length){
                        isDifferent = true
                    }
                    else{
                        for(let i=0;i<value;i++){
                            if(value[i] !== vall[i]){
                                isDifferent = true
                            }
                        }
                    }
                    if(!isDifferent){
                        count++
                    }
                }
              else if(value === val){
                  count++
              }
              else if((value && typeof value === 'object') && !(Array.isArray(value))){
                  console.log("called for: ",value)
                  fn(value)
              }
          }
      }
      fn(obj)
      return count
  }
  console.log(countKeyWithValue(obj,[10,20]))