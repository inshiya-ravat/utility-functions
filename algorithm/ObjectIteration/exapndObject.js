const obj1 = { 
    'a.b.c': [ 10, 11, 12 ], 
    'a.d': 'awesome' 
}
function expand(obj){
    let object = {}
    let tempObj = {}
    for(const [key,value] of Object.entries(obj)){
        const oneKey = key.split('.')
        for(let i=0;i<oneKey.length;i++){
            if(object[oneKey[i]] === undefined){
                tempObj[oneKey[i]] = ( i === oneKey.length-1 ? value :{})
                if(i>0 && i!=oneKey.length-1){
                    object[oneKey[i-1]] = tempObj
                }
                tempObj = tempObj[oneKey[i]]
            }else{
                tempObj = object[oneKey[i]]
            }
        }
    }
    return object
}
console.log(expand(obj1))