onmessage = event =>{
    if(event.data === 'start'){
        console.log("work satrted")
        for(let i=0;i<10000000000;i++){
            continue;
        }
        console.log("work completed")
        postMessage("hello, I tried to block the main thread!")
    }
}