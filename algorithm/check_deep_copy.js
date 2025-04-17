// Write a function that compares two objects and returns true if they are deeply equivalent (have the same values for the same keys)
const obj = {
    name:'inshiya',
    bday:{
        month:5,
        date: 11,
        year:2003,
    }
}
const obj2 = {
    name:'inshiya',
    bday:{
        month:5,
        date: 21,
        year:2003,
    }
}

function compareObj(obj1, obj2){
    const obj1Entries = Object.entries(obj1)
    const obj2Entries = Object.entries(obj2)

    if(obj1Entries.length !== obj2Entries.length) return false;

    for(let  i=0;i<obj1Entries.length;i++){
        for(let j=0;j<obj1Entries[i].length;j++){
            console.log(obj1Entries[i][j],obj2Entries[i][j])
            if(typeof obj1Entries[i][j] === 'object' && typeof obj2Entries[i][j] === 'object'){
                console.log("calling again")
                return compareObj(obj1Entries[i][j], obj2Entries[i][j])
            }
            else if(obj1Entries[i][j] !== obj2Entries[i][j]){
                return false
            }
        }
    }
    return true
}
console.log(compareObj(obj,obj2))