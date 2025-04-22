const obj = {
    a: {
      b: {
        c: [10, 11, 12],
      },
      d:"awesome"
    },
  };
function compress(obj){
    const object ={}
    function fn(obj,path){
        for(const [key,value] of Object.entries(obj)){
            const newPath = path ? `${path}.${key}`:key
            if(value && typeof value === 'object' && !(value instanceof Array)){
                fn(value,newPath) 
            }else{ 
                object[newPath] = value
                return;
            }
        }
    }
    fn(obj,"")
    return object
}
console.log(compress(obj))