function nameFunc(city, state){
    return this.firstName + this.lastName + " from " + city + ', ' + state;
}
let name1={
    firstName : "Inshiya",
    lastName : "Ravat",
}
let name2 = {
    firstName : "Harry",
    lastName : "Potter",
}

Function.prototype.myCall = function(thisReference,arg1,arg2){
    let obj = {
        ...thisReference,
        func : nameFunc
    }
    return obj.func(arg1,arg2)
}
Function.prototype.myApply = function(thisReference,args){
    const funcSymbol = Symbol()
    let obj = {
        ...thisReference,
    }
    obj[funcSymbol] = nameFunc
    console.log(obj[funcSymbol]())
    return obj[funcSymbol](...args)
}
nameFunc.myCall(name1,'Dahod','Gujarat')
nameFunc.myApply(name1,['Dahod','Gujarat'])