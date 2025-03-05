const ball = document.querySelector('#ball')
console.log(ball)
ball.addEventListener("mousedown",handleMouseDown)
function handleMouseDown (event){
    ball.style.backgroundColor = 'red'
    ball.style.position = 'absolute'
    ball.style.zIndex = 10000

    document.body.append(ball)

    function moveBall(x,y){
        ball.style.left = x - ball.offsetWidth/2 + 'px'
        ball.style.top = y - ball.offsetHeight/2 + 'px'
    }

    function onMouseMove(event){
        moveBall(event.pageX, event.pageY)
    }

    document.addEventListener("mousemove",onMouseMove)

    function onMouseUp(event){
        document.removeEventListener("mousemove",onMouseMove)
    }
    ball.addEventListener("mouseup",onMouseUp)
}