"use strict";
// let range = {
//     from: 1,
//     to: 5
// }

//for this range object to be iterable, add [Symbol.iterable] method to it

// range[Symbol.iterator] = function(){
//     return{
//         current : this.from,
//         last: this.to,
//         next(){
//             if(this.current <= this.last){
//                 return {done:false, value: this.current++}
//             }
//             else{
//                 return {done:true}
//             }
//         }
//     }
// }

// for (let num of range){
//     console.log(num)
// }

// function outer(){
//     var a =10;
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }

// outer()()
// console.log([1] == 1) //true
// console.log([1] == '1') //true
// console.log(['1'] == '1') //true
// console.log(['1'] == 1) //true
// console.log([1] == ['1']) //false
// console.log(new Boolean(true) == 1) //true
// console.log(new Boolean(true) == new Boolean(true)) //false
// console.log(Boolean(true) == '1') //true
// console.log(Boolean(false) == [0]) //true
// console.log(new Boolean(true) == '1') //true
// console.log(new Boolean(false) == [0]) //false
// console.log("______________")
// console.log(null == undefined) //true
// console.log(null == 0) //false
// console.log(null <= 0) //true
// console.log(undefined <= 0) //false

// let str = 'Hi';

// str[0] = 'h'; // error
// alert( str[0] ); // doesn't work


// function func (param1, param2){
//     return param1+param2
// }

// function memo(func){
//     return function ( ...args){
//         console.log(args)
//         return func(...args)
//     }
// }

// const memoed = memo(func)
// console.log(memoed(1,3))
// console.log(memoed(1,4))
// console.log(memoed(1,3))



// const func = (arg1, arg2) => {
//     return arg1 + arg2
// }
// const mul = (arg1,arg2) =>{
//     return arg1 * arg2
// }
// let obj = {
//     div(arg1,arg2){
//         return arg1/arg2
//     }
// }

// function memo(func1){
//     const map = new Map();
//     return function(...args){
//         let objKey = args.toString()
//         console.log("checking key", objKey)
//         if(map.has(objKey)){
//             console.log("fetching from map", objKey)
//             return map.get(objKey)
//         }
//         else{
//             console.log("calculation by calling function", objKey)
//             let ans = func1(...args)
//             map.set(objKey,ans)
//             return ans
//         }
//     }
// }

// const memoed = memo(func)
// const memoed2= memo(mul)
// const memoed3= memo(obj.div)

// console.log(memoed3(1,3))
// console.log(memoed3(1,4))    
// console.log(memoed3(1,3))

// console.log(memoed(1,3))
// console.log(memoed(1,4))    
// console.log(memoed(1,3))

// console.log(memoed2(2,3))
// console.log(memoed2(1,4))    
// console.log(memoed2(2,3))


// let set = new Set()
 
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
 
// function unique() {
//   values.map(value=>{
//      set.add(value)
//   })
//   console.log(set)
//   let s = new Set(...set)
//   return s
// }
 
// console.log(unique());

// let obj1 = {
//     name: "inshiya",
//     details :{
//         age : 21,
//     },
//     function : function(){
//         console.log("Hello, I'm a function!")
//     }
// }
// let obj2 = structuredClone(obj1)
// console.log(obj2 == obj1)
// obj2.details.age = 20
// console.log(obj1.details.age)
// console.log(obj2.details.age)

// function checkThis(){
//     alert(this)
// }
// checkThis()

// let anotherUser = {
//     name : "inshiya",
//     ref: this
// }
// console.log(anotherUser.ref)
// // -------------------------------------------------
// let user = {
//     name: "inshiya",
//     age: 21,
//     ref() {
//         return this
//     }
// }
// console.log(user.ref())
// // --------------------------------------------------
// let userOnlyWithName = {
//     name: "krisha"
// }
// function returnsThis (){
//     return this
// }
// console.log(returnsThis())
// // ---------------------------------------------------
// function objInsideFunction(){
//     return {
//         name: "kanya",
//         ref: this
//     }
// }
// let obj = objInsideFunction()
// console.log(obj.ref)

// function f(...args){
//     console.log(...args)
//     console.log(f.length)
//     console.log("this function is useless")
// }
// f(1,2,3,4,5,6)

// function f(){
//     console.log("hi")
// }
// console.log(f.__proto__.__proto__== Object.prototype )


// const GITHUB_API = "https://api.github.com/users/InshiyaRavat"
// const user = fetch(GITHUB_API)
// console.log(user)
// user.then(function(data){
//     console.log(data)
// })

// let arr = [10,10,10,10]
// let arr = [15,10,10,5,7]
// let arr = [5,10,10,15,7]
// let arr = [4,0,8,4,2,12,4,6,8]
// let arr = [4,8,0,4,88,2,12,4,6,8,44,33,99,101]
// let stack = []
// let max = arr[0]
// for (let a of arr){
//     if(a > max || stack[stack.length - 2] < a){
//         max = a
//         stack.push(max)
//     }
// }
// console.log(stack)
// stack = stack.sort((a,b) => a-b)
// console.log(stack)
// console.log("2nd largest: ", stack[stack.length -2])

// let second_max = max
// for (let a of arr){
//     if(a > max){
//         second_max = max
//         max = a
//     }
//     else if(second_max < a || second_max == max){
//         second_max = a
//     }
// }
// console.log(second_max)

// class User{
//     constructor (name) {
//         this.name = name
//         console.log(name, "prined from constructor")
//     }
//     static sayHi(){
//         console.log("hi to ",this.name)
//     }
// }
// const user1 = new User("Inshiya")
// User.sayHi()
// console.log(User.sayHi) // wont print because function is just returned and not called to execute
// //fi we do const b = USer.sayHi; b(); then it will give error because now this keyword poiunts to window and window has no b
// console.log(typeof user1)
// console.log(typeof User)
// console.log(User === User.prototype.constructor)
// console.log(User.sayHi === User.prototype.sayHi)


// class Parent{
//     givePocketMoney(){
//         return 20
//     }
// }
// class Child extends Parent{
//     get pocketMoney(){
//         console.log("recieved pocket money: ", this.pm)
//     }
//     set pocketMoney(money){
//         this.pm = money
//     }
// }
// const child1 = new Child()
// child1.pocketMoney = child1.givePocketMoney()
// console.log(child1.pocketMoney)


// let testMixin = {
//     sayHi(){
//         console.log("hi from mixin")
//     }
// }
// class User {
//     constructor(){
//         console.log("constructor of user")
//     }
//     sayBye(){
//         console.log("user says bye")
//     }
// }
// // const user1 = new User()
// Object.assign(User.prototype, testMixin)
// user1.sayBye()
// user1.sayHi()
// console.log(user1.__proto__ === testMixin.__proto__)


// document.body.style.background = 'red'; // make the background red
// setTimeout(() => document.body.style.background = '', 3000);

// for ( let el of document.body.children){
//     console.log(el)
// }

// let elements = document.querySelectorAll('ul > li:last-child');

//   for (let elem of elements) {
//     alert(elem.textContent); // "test", "passed"
//   }

// // access elements from array using negavtive indexes
// function arrayElement(){
//     const arr = [2,3,4,5,7,9]
//     return function(negativeIndex){
//         let len = arr.length
//         return arr[len - negativeIndex]
//     }
// }
// const retrieveElement = arrayElement()
// console.log(retrieveElement(3))

// let div = document.querySelector('div')
// div.outerHTML = '<p>A new element</p>'
// let a = div.outerHTML
// console.log(div.outerHTML)

// class User{
//     constructor (name) {
//         this.name = name
//         console.log(name, "prined from constructor")
//     }
//     static sayHi(){
//         console.log("hi to ",this.name)
//     } 
// }
// const user1 = new User("Inshiya")
// console.log(User.sayHi === User.prototype.sayHi)



// function $(elemId){
//     return new ElementStyling(elemId)
// }
// class ElementStyling {
//     constructor(elemId){
//         this.obj = document.getElementById(elemId)
//         console.log("from constructor: ",this.obj)
//     }
//     css(property, value){
//         this.obj.style.setProperty(property,value)
//         console.log("from css function: ",this.obj)
//         return this
//     }
// }
// $("#button").css("background-color", "#000").css("font-weight", "bold").css("color", "#fff");

// function $(elemId){
//     let element = document.getElementById(elemId)
    
//     return {
//         element: element,
//         css: function (property, value){
//             element.style.setProperty(property,value)
//             console.log(this)
//             return this
//         }
//     }
// }

// $("#button").css("color", "#fff").css("background-color", "#000").css("font-weight", "bold");



// calculator(100).add(5).multiply(10).subtract(20).add(200).value()
// function calculator(initialValue){
//     return {
//         ans : initialValue,
//         add: function (a){
//             this.ans += a
//             return this
//         },
//         subtract: function(a){
//             this.ans -= a
//             return this
//         },
//         multiply: function(a){
//             this.ans *= a
//             return this
//         },
//         divide: function(a){
//             this.ans /= a
//             return this
//         },
//         value: function(){
//             console.log(this.ans)
//         }
//     }
// }


// const originalArr = [1, 2, 3]
// let negativeIndexHandler= {
//     get(target,prop){
//         if(prop<0){
//             return target[(target.length - (-prop)) % target.length]
//         }
//         else{
//             return target[prop % target.length]
//         }
//     }
// }
// function wrap(array){
//     return new Proxy(array, negativeIndexHandler)
// }
// const arr = wrap(originalArr)
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[-1])
// console.log(arr[-2])
// console.log(arr[-3])
// console.log(arr[-4])

// const promise = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("inside promise")
//         reject("rejected")
//     },2000)
// })
// promise.then(() => console.log("promise is resolved"))
//     .catch((error) => console.log(error))


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Promise 1 rejected')
//     },2000)
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 2 resolved')
//     },3000)
// })
// const promise3 = new Promise ((resolve,reject) => {
//     setTimeout(() =>{ 
//         resolve("Promise 3 resolved")
//     },4000)
// })
// promise1.then((msg)=>{
//     console.log(msg)
//     return promise2
// }).then((msg) => {
//     console.log(msg)
//     return promise3
// }).then((msg)=> {
//     console.log(msg)
//     console.log("all promises resoved")
// })
// Promise.allSettled([promise1, promise2, promise3]).then((msges)=>{
//     console.log(msges)
//     console.log("all promises are resolved")
// })
// .catch((err)=>{
//     console.log(err)
// })

// let user = {
//     name: "sdfsfs",
//     age: 10,
   
//     [Symbol.toPrimitive](hint) {
//         console.log("inside primitive")
//       console.log(hint);
//       return hint === "string" ? this.toString() : this.valueOf();
//     },
   
//     toString() {
//       return this.name;
//     },
   
//     valueOf() {
//         console.log("a number")
//       return this.age;
//     },
// };
// console.log(typeof(user.name));

// class Animal{}
// class Rabbit extends Animal{}
// let rabbit = new Rabbit()
// console.log(rabbit.prototype)
// console.log(Rabbit.prototype)
// console.log(Animal.prototype)
// console.log(rabbit.__proto__)
// console.log(rabbit.__proto__.__proto__)


// [[1], [2], [3], [4], [5]]
// chunk([1, 2, 3, 4, 5], 2)
// [[1, 2], [3, 4], [5]]
// 
// [[1, 2, 3], [4, 5]]

// function chunk(arr, num){
//     let result =[[]]
//     let n = num
//     let i=0
//     let j=0
//     while(n>=0 && i<arr.length){
//         result[j].push(arr[i])
//         i++        
//         if(n==1 && (num!=1 || )){
//             result[j+1]= new Array()
//             n=num
//             j++
//         }
//         else{
//             n--
//         }
//     }
//     return result
// }
// console.log(chunk([1, 2, 3, 4, 5], 1))
// console.log(chunk([1, 2, 3, 4, 5], 2))
// console.log(chunk([1, 2, 3, 4, 5], 3))
// console.log(chunk([3,5,8,901,484,584,-9],5))

// class Animal {}
// class Dog extends Animal {}

// console.log(Dog.__proto__===Animal)// true
// console.log(Dog.constructor===Function) // true
// console.log(Dog.__proto__.constructor===Function) // true
// console.log(Dog.prototype.constructor===Dog) // true
// const dog2=new Dog.prototype.constructor(); //Dog class
// const dog3=new Dog.__proto__();  // Animal class

// console.log(dog2 instanceof Dog) // true
// console.log(dog3 instanceof Dog) // false


// const ball = document.querySelector('#ball')
// console.log(ball)
// ball.addEventListener("mousedown",handleMouseDown)
// function handleMouseDown (event){
//     ball.style.backgroundColor = 'red'
//     ball.style.position = 'absolute'
//     ball.style.zIndex = 10000

//     document.body.append(ball)

//     function moveBall(x,y){
//         ball.style.left = x - ball.offsetWidth/2 + 'px'
//         ball.style.top = y - ball.offsetHeight/2 + 'px'
//     }

//     function onMouseMove(event){
//         moveBall(event.pageX, event.pageY)
//     }

//     document.addEventListener("mousemove",onMouseMove)

//     function onMouseUp(event){
//         document.removeEventListener("mousemove",onMouseMove)
//     }
//     ball.addEventListener("mouseup",onMouseUp)
// }

// let myLocalStorage={
//     setItem(token ,value, time){
//         let expiresIn = Date.now() + time
//         let data = {
//             value : value,
//             expiry : expiresIn,
//         }
//         localStorage.setItem(token, JSON.stringify(data))
//     },
//     getItem(token){
//         let item = JSON.parse(localStorage.getItem(token))
//         if(!item){
//             return "Key doesn't exists"
//         }
//         if(Date.now() > item.expiry){
//             return "Time expred to access the key"
//         }
//         return item.value
//     }
// }
// myLocalStorage.setItem("token", "value", 1000)
// console.log(myLocalStorage.getItem("token"))

// setTimeout(()=>{
//     console.log(myLocalStorage.getItem("token"))
// },3000) // null
// setTimeout(()=>{
//     console.log(myLocalStorage.getItem("token"))
// },6000)
// setTimeout(()=>{
//     console.log(myLocalStorage.getItem("token"))
// },9000)
// setTimeout(()=>{
//     console.log(myLocalStorage.getItem("token"))
// },10000)


// function check(str1, str2){
//     str1 = str1.toLowerCase().trim()
//     str2 = str2.toLowerCase().trim()
//     if(str1.length != str2.length){
//         return "Not Equal due to different length"
//     }
//     const map = new Map()
//     for(let s of str1){
//         if(map.has(s)){
//             let currentCount = map.get(s)
//             map.set(s,++currentCount)
//         }
//         else{
//             map.set(s,1)
//         }
//     }
//     for(let s of str2){
//         if(map.has(s)){
//             let cnt = map.get(s)
//             map.set(s,--cnt)
//         }
//         else{
//             return "Not Equal"
//         }
//     }
//     for(let s of str1){
//         if(map.get(s) !== 0){
//             return "Not Equal"
//         }
//     }
//     return "Equal"
// }

// console.log(check("",""))


// const promise = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("inside promise")
//             resolve("rejected")
//         },2000)
//     })
//     const promise1 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("inside promise1")
//             resolve("rejected1")
//         },2000)
//     })
//     const promise2 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("inside promise2")
//             resolve("rejected2")
//         },2000)
//     })
//     const promise3 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("inside promise3")
//             resolve("rejected3")
//         },2000)
//     })

// promise.then((msg)=>{
//     console.log(msg)
//     return promise2
// }).then((msg)=>{
//     console.log(msg)
// })


// async function async1(){
//     console.log(1)  
//     await async2() 
//     console.log(2)  
//   }
  
//   async function async2(){
//     console.log(3) 
//   }
  
//   console.log(4)
  
//   setTimeout(function(){
//     console.log(5) 
//   }, 0)
  
//  await async1() 
  
//   new Promise(function(resolve){
//     console.log(6)  
//     resolve()  
//   }).then(function(){ 
//     console.log(7)  
//   })
  
//   console.log(8)

// function compress(str){
//     // aabbcca - a2b2c2a1
//     let res = str.charAt(0)
//     let count= 1
//     let j=0
//     for(let i =1; i<str.length;i++){
//         if(str.charAt(i) == res.charAt(j)){
//             ++count
//         }
//         else{
//             res += String(count)+ str.charAt(i)
//             count = 1
//             j=j+2
//         }
//     }
//     return res + count
// }
// console.log(compress("aaaaaaaaaaaabbbbbbbbbbbbbbcccccccccccccaaaaaaaaaacccccccccccc")


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1 rejected')
//     },2000)
// })
// // console.log(promise1.__proto__)
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Promise 2 resolved')
//     },3000)
// })
// const promise3 = new Promise ((resolve,reject) => {
//     setTimeout(() =>{ 
//         resolve("Promise 3 resolved")
//     },4000)
// })
// promise1.then((msg)=>{
//     console.log(msg)
//     return promise2
// }).then((msg) => {
//     console.log(msg)
//     return promise3
// }).then((msg)=> {
//     console.log(msg)
//     console.log("all promises resoved")
// })
// Promise.allSettled([promise1, promise2, promise3]).then((msges)=>{
//     console.log(msges)
//     console.log("all promises are settled")
// })
// .catch((err)=>{
//     console.log(err)
// })

// Promise.myAll = function(promiseArr){
//   return new Promise((resolve, reject)=>{
//     let count = 0
//     promiseArr.forEach(promise => {
//       Promise.resolve(promise).then(()=>{
//         count++
//         console.log(count)
//         if(count === promiseArr.length){
//           resolve("all promises resolved")
//         }
//       }).catch((error)=>{
//         console.error(error)
//         reject("promise(s) got rejected")
//       })
//     })
//   })
// }

// Promise.myAll([promise1,promise2,promise3])
//   .then((msg)=>console.log(msg))
//   .catch((err)=>console.error(err))


// class Animal {
//   name;
//   age;
//   makeSound(){
//     console.log("makes sound")
//   }
//   static canWalk(){
//     console.log("yes")
//   }
// }
// class Rabbit extends Animal{
//   isWhite(){
//     console.log("yes")
//   }
// }
// const a = new Animal()
// const r = new Rabbit()
// console.log(Animal.prototype)
// console.log(Animal.__proto__)
// console.log(Rabbit.prototype)
// console.log(Rabbit.__proto__)
// console.log(a.prototype)
// console.log(r.prototype)
// console.log(a.__proto__)
// console.log(r.__proto__)
// console.log(Rabbit.prototype.prototype === Animal.prototype)
// console.log(Animal.prototype.__proto__)
// console.log(a.__proto__.__proto__ === Animal.prototype.prototype)

// function abc(){}
// console.log(typeof abc)

// console.log(Animal.prototype.constructor === Animal)
// console.log(Animal.prototype.constructor.__proto__ === Animal.__proto__)


//valid parantheses
//(((())))

// const closingBrackets = {
//     closeRound : ')',
//     closeCurly : '}',
//     closeSquare : ']'
// }
// function isValid(str){
//     let end;
//     let front;

//     for (let i=0;i<str.length;i++){
//         if(str[i] == ')'){
//             end = i
//             break
//         }
//     }
//     front = end - 1

//     while(front>=0 && end<str.length){
//         if(str[front] === '(' && str[end] !== ')'){
//             return false
//         }
//         front--
//         end++
//     }
//     if(front<0 && end>=str.length){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isValid(")("))


// function isValid(str){
//     const stack = []
//     for(let s of str){
//         console.log("incoming: ",s)
//         if(s === '('){
//             stack.push(s)
//             console.log("current stack after pushing: ", stack)
//         }
//         else if(s === ')'){
//             const bracket = stack.pop()
//             console.log("bracket removed from stack: ",bracket)
//             if(bracket === undefined){
//                 return false
//             }
//         }
//     }
//     if(stack.length === 0){
//         return true
//     }
//     else{
//         return false
//     }
// }


// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("promise 1 resolved")
//     },3000)
// })
// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("promise 2 resolved")
//     },2000)
// })
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("promise 3 resolved")
//     },1000)
// })
// const now = new Date()
// const arr=[]
// const promises = [promise1,promise2,promise3]
// function sequentialPromise(index){
//     if (index === 3) return console.log(arr)
//     promises[index].then((msg)=>{
//         console.log(msg)
//         arr.push(now.toLocaleString())
//         index++
//         sequentialPromise(index++)
//     })
// }

// console.log(sequentialPromise(0))

// get maximum nesting depth of nested parentheses
// "(1+(2*3)+((8)/4))+1"  => 3 (8 is in maximum parentheses depth)
// "(1)+((2))+(((3)))" => 3 (last digit 3 is in maximum parentheses depth)


//currying
// function add(a){
//     return (b)=>{
//         if(!b){
//             return a;
//         }
//         return add(a+b);
//     }
// }
// console.log(add(4)(5)(4)(1)())

// function curry(func) {
//     const totalArgs = func.length; //total number of function's arguments
//     return function curried(...newArgs) {
//       if (newArgs.length >= totalArgs) {
//         return func.apply(this, newArgs);
//       } else {
//         return curried.bind(this, ...newArgs);
//       }
//     };
//   }

// const obj1 = {
//     a: {
//       b: {
//         c: [10, 11, 12],
//       },
//       d:"awesome"
//     },
//   };
// function get(obj,str){
//     const s = str.split('.');
//     let r = obj[s[0]]
//     for(let i=1;i<s.length;i++){
//       r = r[s[i]]
//     }
//     console.log(r)
// }
// get(obj1,"a.b.c") // [1,2,3]
// get(obj1,"a.d") // "awesome"
// get(obj1,"a.b.c.1") // 11
// get(obj1,"a.a.a.a") // 11
//we have to implement a function that will halt the operation
//  for x amount of time if it fails for y count
 

// function circuitBreaker(){
//     let flag = true
//     return function breaker(){
//         console.log("inside breaker")
//         if(flag === true){
//             console.log("calling cb")
//             flag=false
//             console.log(circuitBreaker())
//         }
//         else{
//             console.log("not called")
//         }
//     }
// }

// const breakk = circuitBreaker()
// breakk()


// function myFunc(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject('promise')
//         },1000)
//     })
// }
 
// function circuitBreaker (func,  maxCount, haltTime){
//     let isHalted = false;
//     let count =0;
//     let timer  = null;
    
//     return function(){
//         return new Promise((resolve,reject)=>{
//             if(isHalted){
//                 reject("execution halted");
//                 return;
//             }

//             function fn(){
//                 func().then((msg)=>{
//                     count = 0;
//                     resolve(msg)
//                 })
//                 .catch((err)=>{
//                     if(count++ >=  maxCount){
//                         isHalted = true;
//                         console.log("halting execution now!!!-------------------------");
//                         console.log(haltTime)
//                         timer = setTimeout(()=>{
//                             isHalted = false;
//                             timer = null;
//                             count = 0;
//                             console.log(Date.now())
//                         },haltTime);
//                         reject(err)
//                     }else{
//                         console.log("calling again")
//                         fn();
//                     }
//                 })
//             }
//             fn()
//         })
//     }
// }
 
// const breaker = circuitBreaker(myFunc, 2, 3000);
// breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err))

// // setTimeout(()=>{
// //     breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
// // },1000);
// setTimeout(()=>{
//     console.log(Date.now())
//     breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
// },4900);

// setTimeout(()=>{
//     breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
// },6000);

// function multiply(...args){
//     let res =1;
//     for(let a of args){
//         res *= a
//     }
//     return res
// }
// function curry(func){
//     let result;

//     function curried(b){
//         if(result === undefined){
//             result = b;
//         }
//         else{
//             result = func(result, b);
//         }
//         return curried;
//     }
//     curried.toString = function(){
//         return result.toString();
//     }
//     return curried;
// }

// const curriedMultiply = curry(multiply);
// console.log(curriedMultiply(4)(5)(4)(1))

// function curry(func){
//     let arg = [];
//     function curried(...args){
//         arg.push(...args)
//         return curried
//     }
//     curried.toString = function(){
//         return func(...arg);
//     }
//     return curried
// }
// const curriedMultiply = curry(multiply);
// console.log(curriedMultiply(4)(5)(4)(1))

// function myFunc(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject('promise')
//         },1000)
//     })
// }
 
// function circuitBreaker (func,  maxCount, haltTime){
//     let isHalted = false;
//     let count =0;
//     let timer  = null;
    
//     return function(){
//         return new Promise((resolve,reject)=>{
//             if(isHalted){
//                 reject("execution halted");
//                 return;
//             }

//             function fn(){
//                 func().then((msg)=>{
//                     resolve(msg)
//                 })
//                 .catch((err)=>{
//                     if(count >=  maxCount){
//                         isHalted = true;
//                         console.log("halting execution now!!!-------------------------");
//                         timer = setTimeout(()=>{
//                             isHalted = false;
//                             timer = null;
//                             count = 0;
//                         },haltTime);
//                         reject(err)
//                     }else{
//                         console.log("calling again")
//                         count++
//                         fn();
//                     }
//                 })
//             }
//             fn()
//         })
//     }
// }
 
// const breaker = circuitBreaker(myFunc, 2, 3000);
// breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err))

// // setTimeout(()=>{
// //     breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
// // },1000);
 
// setTimeout(()=>{
//     breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
// },5100);

// setTimeout(()=>{
//     breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
// },6000);

// function myFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject()
//         }, 1000)
//     })
// }

// function circuitBreaker(func, maxCount, haltTime) {
//     let isHalted = false;
//     let count = 0;
//     let timer = null;

//     return function () {
//         return new Promise((resolve, reject) => {
//             if (isHalted) {
//                 // return;
//                 reject("execution halted");
//             }

//             function fn() {
//                 func().then((msg) => {
//                     resolve(msg)
//                 })
//                     .catch((err) => {
//                         if (count >= maxCount) {
//                             isHalted = true;
//                             console.log("halting execution now!!!-------------------------");
//                             timer = setTimeout(() => {
//                                 isHalted = false;
//                                 timer = null;
//                                 count = 0;
//                             }, haltTime);
//                             reject(err)
//                         } else {
//                             console.log("calling again...")
//                             count++;
//                             fn();
//                         }
//                     })
//             }
//             fn()
//         })
//     }
// }

// const breaker = circuitBreaker(myFunc, 2, 3000);
// breaker().then((msg) => console.log(msg)).catch((err) => console.error(err))

// // setTimeout(()=>{
// //     breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
// // },3000);
// setTimeout(()=>{
//     breaker().then((msg)=>console.log(msg)).catch((err)=>console.error(err));
// },5100);

// setTimeout(() => {
//     breaker().then((msg) => console.log(msg)).catch((err) => console.error(err));
// }, 6000);


// setTimeout(() => {
//     console.log("timeout after 5ms");
//   }, 0);

//   const por1 = new Promise((resolve, reject) => {
//     console.log("callling por1");
//     setTimeout(() => {
//       resolve("lll");
//     }, 0);
//   });
//   por1.then((data) => {
//     console.log(data);
//   });
//   queueMicrotask(() => {
//     for (let i = 0; i < 10_000; i++) {
//       console.log("queuemicro");
//     }
//   });


// new Promise((resolve, reject)=>{
//     return;
//     reject("rejected")
// }).then((msg=>console.log(msg))).catch((err)=>console.error(err))


// function myFn(){
//     return "returned from my Fn";
//   }
// myFn.toString = function(){
//   return "awesome function"
// }

// console.log(myFn); 

 /*The intersectionWith function takes a custom comparator function and multiple arrays as arguments. 
 It compares the elements of the arrays using the comparator function to determine equality. 
 The function returns a new array containing the elements that are present in all given arrays.*/
//  const arr1 = [
//     { x: 1, y: 2 },
//     { x: 2, y: 3 },
//   ];
//   const arr2 = [
//     { y: 2, x: 1 },
//     { x: 3, y: 4 },
//   ];
//   function intersectionWith(func, ...args){
//     const myArray = [...args]
//     for(let element of myArray){
//         for(let el of element){

//         }
//     }
//   }
//   const result = intersectionWith(
//     (a, b) => a.x === b.x && a.y === b.y,
//     arr1,
//     arr2,
//   ); // => [{ x: 1, y: 2 }]
 
// function DOMHelper(id){
//     const element = document.querySelector(id)
//     return{
//         hide: function(){
//             element.style.setProperty('display','none')
//             return this
//         },
//         addClass: function(className){
//             element.className = className
//             return this
//         },
//         on: function(event, handler){
//             element.addEventListener(event,handler)
//             return this
//         },
//         css: function(property, value){
//             element.style.setProperty(property,value)
//             return this
//         },
//         show: function(){
//             element.style.setProperty('display','inline')
//             return this
//         }
//     }
// }

// const element = DOMHelper('#ball')
//  .hide()
//  .addClass('highlight')
//  .on('click', () => alert('Clicked!'))
//  .css('color', 'blue')
//  .show();

// function ImmutableList(arr){
//     let ar = arr
//     return {
//         push:function(num){
//             ar.push(num)
//             return this
//         },
//         map: function(callBack){
//             ar = ar.map(callBack)
//             return this
//         },
//         filter: function(callBack){
//             ar = ar.filter(callBack)
//             return this
//         },
//         value: function(){
//             return ar
//         }
//     }
// }
// const res = ImmutableList([1, 2, 3])
//     .push(4)
//     .map(x => x * 2)
//     .filter(x => x > 5).push(100)
//     .map(x => x + " <-")
//     .value()
// console.log(res)
//     //  ["6 <-", "8 <-", "100 <-"] 

// new Promise((resolve, reject)=>{
//     resolve(1)
//     resolve(2)
//     reject("error")
// }).then((msg)=>console.log(msg)).catch((err)=>console.log(err))

// class Dog{
//     constructor(name){
//         this.name = name;
//     }
// }
// Dog.prototype.bark = function(){
//     console.log(`Woof ${this.name}`)
// }
// const pet = new Dog('M')
// pet.bark()
// delete Dog.prototype.bark
// pet.bark()

const fn = function(x,y){
    return this.a + x +y
}
const obj = {a:10}
const bound = fn.bind(obj,5)
console.log(bound.call({a:50},3))