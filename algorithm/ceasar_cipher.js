// Implement a function that takes a string and a shift value and returns a new string where each letter is shifted by the provided amount.
function cipher(str,shiftBy){
    let resultStr = ""
    for(let s of str){
        const ascii = s.charCodeAt(0)
        console.log(ascii)
        const newCode = Number(ascii) + shiftBy
        console.log(newCode)
        resultStr += String.fromCharCode(newCode)
    }
    console.log(resultStr)
}

cipher("ATTACKATONCES",4)