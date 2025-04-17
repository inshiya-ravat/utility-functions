function check(str1, str2){
    str1 = str1.toLowerCase().trim()
    str2 = str2.toLowerCase().trim()
    if(str1.length != str2.length){
        return "Not Equal due to different length"
    }
    const map = new Map()
    for(let s of str1){
        if(map.has(s)){
            let currentCount = map.get(s)
            map.set(s,++currentCount)
        }
        else{
            map.set(s,1)
        }
    }
    for(let s of str2){
        if(map.has(s)){
            let cnt = map.get(s)
            map.set(s,--cnt)
        }
        else{
            return "Not Equal"
        }
    }
    for(let s of str1){
        if(map.get(s) !== 0){
            return "Not Equal"
        }
    }
    return "Equal"
}

console.log(check("",""))