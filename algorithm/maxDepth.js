const stack =[]
function getMaxDepth(str){
    let maxDepth = -1;
    for( let s of str){
        if(s === '('){
            stack.push(s)
            if(maxDepth < stack.length){
                maxDepth = stack.length;
            }
        }else if(s === ')'){
            if(stack.length === 0) {
                console.log("false");
                return;
            }
            const top = stack[stack.length -1]
            console.log(top)
            if(top === '('){
                stack.pop();
            }
        }
    }
    if(stack.length === 0){
        console.log("true")
        console.log(maxDepth)
    }
    else{
        console.log("false")
    }
}
// getMaxDepth("(1+(2*3)+((8)/4))+1")
// getMaxDepth("(1)+((2))+(((3))))")
getMaxDepth("()())")