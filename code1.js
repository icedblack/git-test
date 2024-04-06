console.log(111)
function debounce(fn,time){
    let timer;
    console.log('提交方法测试');
    console.log('dev分支');
    return function(){
        clearTimeout(timer);//清除定时器
        timer = setTimeout(()=>{
            fn.applay(this,...arguments)
        },time)
    }
}
