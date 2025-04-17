// [].flat()  (flat the original array and return copy of it)
// Array.prototype.myFlat = function(depth){
//     let flattennedArray = []
//     const arrr = this
//     // const flattennedArray = arrr.reduce((acc,curr)=>{
//     //     return acc.concat(curr)
//     // },[])
//     function addToFlattenArray(arr){
//         arr.forEach(element => {
//             if(Array.isArray(element) && depth){
//                 depth--
//                 addToFlattenArray(element)
//             }else{
//                 flattennedArray.push(element)
//             }
//         });
//         return;
//     }
//     addToFlattenArray(arrr)
//     return flattennedArray;
// }

// const arr = [[1,2,3,4,5],[3,4,[5,6,7]]]
// console.log(arr.myFlat(2))
