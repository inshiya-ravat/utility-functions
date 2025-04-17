const body = document.querySelector(".body")
// let set = new Set()
function getTagNames(body,set){
    const htmlEl = body.children
    for(let a of htmlEl){
        if(a.children.length === 0){
            set.add(a.tagName)
        }
        else{
            set.add(a.tagName)
            getTagNames(a,set)
        }
    }
    return set
}
const set = getTagNames(body,new Set())
console.log(set)
import {ERROR} from './constant.js'
console.log(ERROR)