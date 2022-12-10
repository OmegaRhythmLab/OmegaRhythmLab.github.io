//控制时间栏时间显示
var Year = document.querySelector(".Year"),
    Month = document.querySelector(".Month"),
    Days = document.querySelector(".Day"),
    TimeNews = [],//符合要求的新闻
    NewsAmount = 4;//显示新闻的数量

var TimeColumnText = document.querySelectorAll(".newsdates li p");
var Dates = new Date();

for(var i = 0;i < TimeColumnText.length;i++){
    TimeColumnText[i].innerHTML = Dates.getFullYear() + "年" + (Dates.getMonth() + 1 - i) + "月";
}

var chooseMonth = NewsdatesListOrder =>{
    var NewsIndexString = TimeColumnText[NewsdatesListOrder].innerHTML;
    Year.value = NewsIndexString.slice(0,4);
    //月份是两位数还是个位数
    Month.value = NewsIndexString.length == 8 ? NewsIndexString.slice(5,7) : NewsIndexString.slice(5,6);
    Days.value = "";
    inputing();
}

//新闻显示
var MainPart = document.querySelector(".Main_Part"),
    MoreBtn = document.querySelector(".morebtn");

//创建初始Li
if(TimeOrder.length <= NewsAmount){
    NewsAmount = TimeOrder.length;
    MoreBtn.remove();
}
for(var i = 0;i < NewsAmount;i++){
    createLi("Js/News/Img/"+AllTitles[i]+".png",AllNames[i],AllAuthors[i],false);
}

//根据时间搜索新闻
var inputing = () =>{
    TimeNews = TimeSearch(+Year.value,+Month.value,+Days.value);//根据时间搜索出应有的新闻
    NewsAmount = 4;
    MainPart.innerHTML = ""; 

    if(TimeNews == "illegal"){//输入格式有问题
        if(!Year.value && !Month.value && !Days.value){//输入的内容都被删干净辣(
            TimeNews = TimeOrder;
        }   
        else{
            createLi("Js/News/Img/illegal.png","","",true);
            return;
        }
    }

    if(TimeNews.length == 0){//没有符合条件的新闻
        createLi("Js/News/Img/empty.png","","",true);
    }
    else{//正常输出
        if(NewsAmount >= TimeNews.length){
            for(var i = 0;i < TimeNews.length;i++){
                var index = TimeNews[i];
                createLi("Js/News/Img/" + AllTitles[index] + ".png",AllNames[index],AllAuthors[index],false);
            }
        }
        else{
            for(var i = 0;i < NewsAmount;i++){
                var index = TimeNews[i];
                createLi("Js/News/Img/" + AllTitles[index] + ".png",AllNames[index],AllAuthors[index],false);
                MainPart.appendChild(MoreBtn);
            }
        }
    }
}

MoreBtn.onclick = ()=>{
    NewsAmount += 3;
    inputing();
}

function createLi(BGI,Title,Author,Empty){//在Main_Part创建Li
    var ListObject = document.createElement("li");
    if(ListObject){
        ListObject.setAttribute("class","NewsList");
        ListObject.style.backgroundImage = "url(" + BGI + ")";
        //创建li的子集
        var innerli = document.createElement("div");
        innerli.setAttribute("class","innerli");
        if(Empty){
            innerli.style.backgroundColor = "RGBA(0,0,0,0)";
        }

        //创建innerli的子集
        var innerh4 = document.createElement("h4");
        var innerh6 = document.createElement("h6");
        
        innerh4.innerHTML = Title;
        innerh6.innerHTML = "作者：" + Author;

        innerli.appendChild(innerh4);
        innerli.appendChild(innerh6);
        ListObject.appendChild(innerli);
        MainPart.appendChild(ListObject);

        ListObject.onclick = ()=> {
            localStorage.setItem("NewsIndex",AllNames.indexOf(Title));
            location.href = "ShowNews.html"
        }

        if(Empty){
            ListObject.onclick = null;
        }
    }
}

MoreBtn.remove();
MainPart.appendChild(MoreBtn);//把展开按钮放在最后