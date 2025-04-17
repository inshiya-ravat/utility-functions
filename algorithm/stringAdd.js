function stringAdd(str1 , str2){
    let carry = 0
    let i = str1.length - 1
    let j = str2.length - 1
    let res = ""

    while(i>=0 || j>=0 || carry>0){
        const digitFromStr1 = i>=0 ? parseInt(str1[i]) : 0
        const digitFromStr2 = j>=0 ? parseInt(str2[j]) : 0
        const add = digitFromStr1 + digitFromStr2 + carry
        const val = add % 10
        carry = parseInt(add / 10)
        res = val + res
        i--
        j--
    }
    return res
}
console.log(stringAdd('999','99'))