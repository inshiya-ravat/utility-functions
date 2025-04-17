const obj1 = {
    a: {
      b: {
        c: [10, 11, 12],
      },
      d:"awesome"
    },
  };
function get(obj,str){
    const s = str.split('.');
    let r = obj[s[0]]
    for(let i=1;i<s.length;i++){
      r = r[s[i]]
    }
    console.log(r)
}
get(obj1,"a.b.c") // [1,2,3]
get(obj1,"a.d") // "awesome"
get(obj1,"a.b.c.1") // 11