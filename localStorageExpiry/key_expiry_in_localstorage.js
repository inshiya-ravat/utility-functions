let myLocalStorage={
    setItem(token ,value, time){
        let expiresIn = Date.now() + time
        let data = {
            value : value,
            expiry : expiresIn,
        }
        localStorage.setItem(token, JSON.stringify(data))
    },
    getItem(token){
        let item = JSON.parse(localStorage.getItem(token))
        if(!item){
            return "Key doesn't exists"
        }
        if(Date.now() > item.expiry){
            return "Time expred to access the key"
        }
        return item.value
    }
}
myLocalStorage.setItem("token", "value", 1000)
console.log(myLocalStorage.getItem("token"))

setTimeout(()=>{
    console.log(myLocalStorage.getItem("token"))
},3000) // null
setTimeout(()=>{
    console.log(myLocalStorage.getItem("token"))
},6000)
setTimeout(()=>{
    console.log(myLocalStorage.getItem("token"))
},9000)
setTimeout(()=>{
    console.log(myLocalStorage.getItem("token"))
},10000)