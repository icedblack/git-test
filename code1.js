console.log(111)
function debounce(fn,time){
    let timer;
    return function(){
        clearTimeout(timer);//qingchu
        timer = setTimeout(()=>{
            fn.applay(this,...arguments)
        },time)
    }
}
