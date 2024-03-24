console.log(111)
function debounce(fn,time){
    let timer;
    return function(){
        clearTimeout(timer);//清除定时器
        timer = setTimeout(()=>{
            fn.applay(this,...arguments)
        },time)
    }
}
