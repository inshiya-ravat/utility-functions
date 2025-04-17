let name1={
    firstName : "Inshiya",
    lastName : "Ravat",
    nameFunc: function(){
        return this.firstName + this.lastName;
    }
}
let name2 = {
    firstName : "Harry",
    lastName : "Potter",
}

Function.prototype.mybind = function(thisReference){
    const funcSymbol = Symbol()
    let obj = {
        ...thisReference,
    }
    obj[funcSymbol] = this
    return obj[funcSymbol]()
}
console.log(name1.nameFunc.mybind(name2))