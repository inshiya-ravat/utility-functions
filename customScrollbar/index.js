function handleSlide(event){ 
    const scrollBorder = document.getElementById("scroll-border") 
    const scrollContainer = document.querySelector(".scroll-container") 
    const mainContainer = document.querySelector(".main-container") 

    const maxScrollBorderCanMove = scrollContainer.clientWidth - scrollBorder.clientWidth 
    const maxMainScroll = mainContainer.scrollWidth - mainContainer.clientWidth 

    function moveAt(x){ 
        let boundedX = Math.max(0, Math.min(x, maxScrollBorderCanMove)) 
        scrollBorder.style.left = boundedX + "px" 
        //set scrollbar position according to the scroll border
        let scrollRatio = boundedX / maxScrollBorderCanMove 
        mainContainer.scrollLeft = scrollRatio * maxMainScroll 
    } 
    
    function onMouseMove(event){ 
        let scrollContainerRect = scrollContainer.getBoundingClientRect() 
        let x = event.pageX - scrollContainerRect.left 
        moveAt(x) 
    } 
    
    document.addEventListener("mousemove",onMouseMove) 
    scrollBorder.addEventListener("mouseup", function () { 
        console.log("mouse up") 
        document.removeEventListener("mousemove", onMouseMove) 
    }) 
}