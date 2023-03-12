//! CallBack

function loadScript(src,CallBack){
    let script=document.createElement('script')
    script.src=src;
    //!ONLOAD
    script.onload=function(){
        console.log(`Loaded script with SRC: ${src}`)
        CallBack(null,src);
    }
    //!onerror
    script.onerror=function(){
        console.log(`Error loading script with SRC: ${src}`);
        CallBack(newError("Src got some error"))
    }
    document.body.appendChild(script)
}


function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    alert('Hello World !'+src)
}

function goodMornig(error,src){
    if(error){
        console.log(error)
        return
    }
    alert('Good moring'+src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello)