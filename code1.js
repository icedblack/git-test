console.log(111)
function debounce(fn,time){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.applay(this,...arguments)
        },time)
    }
}