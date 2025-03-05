function $(elemId){
    let element = document.getElementById(elemId)
    
    return {
        element: element,
        css: function (property, value){
            element.style.setProperty(property,value)
            return this
        }
    }
}

$("#button").css("color", "#fff").css("background-color", "#000").css("font-weight", "bold");