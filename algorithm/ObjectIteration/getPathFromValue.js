const obj = {
    a: {
      b: {
        c: 20,
      },
      d: 20,
    },
  };
  
  function getPathFromValue(obj, val) {
    const paths = []
      function fn(obj,path){
          let tracedPath = "no path found"
          for(const [key,value] of Object.entries(obj)){
              const newPath = path ? `${path}.${key}` : key
              if(value === val){
                  tracedPath = newPath
                  return tracedPath;
              }
              else if((value && typeof value === 'object') && !(Array.isArray(value))){
                  console.log("called for: ",value)
                  const result = fn(value,newPath)
                  if(result){
                      paths.push(result)
                  }
              }
          }
      }
      fn(obj,"")
      return paths
  }
  console.log(getPathFromValue(obj,20))