function set(obj, str,newVal){
    const givenKeys =  str.split('.')
    for(let i =0 ;i<givenKeys.length-1;i++){
        obj = obj[givenKeys[i]]
    }
    const newObj= obj[givenKeys[givenKeys.length-1]] = newVal
    return newObj
}
console.log(set(obj,"a.b.c",[1,2,3]))