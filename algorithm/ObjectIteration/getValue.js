const obj = {
    a: {
      b: {
        c: [10, 11, 12],
      },
      d:"awesome"
    },
  };
   
  function get (obj,str,newVal){
    return str.split('.').reduce((acc,key)=>{
        return acc && acc[key] != undefined ? acc[key] : undefined;
    },obj)
  }
  console.log(get(obj,"a.b.c")) // [1,2,3]
  console.log(get(obj,"a.b.d")) // "awesome"
  console.log(get(obj,"a.b.c.1")) // 11