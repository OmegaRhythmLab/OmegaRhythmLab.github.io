//控制手机端nav的展开与收起
var hid = document.querySelector(".hid");
var show = document.querySelector(".nav_right_last p");
var isappear = false;
function navappear(){
    if(!isappear){
        hid.style.display = "block";
        isappear = !isappear;
        show.innerHTML = "收起";
    } 
    else{
        hid.style.display = "none";
        isappear = !isappear;
        show.innerHTML = "展开";
    } 
}

//加载完在显示
document.onreadystatechange = ()=> {
    if(document.readyState == "complete"){
        var waiting = document.querySelector(".waiting"),
            container = document.querySelector(".container");

        container.style.display = "block";
        waiting.style.display = "none";
    }
}