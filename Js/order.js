//几个是所有json的信息
var AllTitles = ["Baile","CheCheChe","LiLiLi","TextTextText"]; 
var AllNames = ["终于成功辣","小心被当做行走的五十万","中华人民共和国今天成立了","TextTextText"]; 
var AllTimes = [+"20221129",+"20221006",+"20211108",+"20221121"]; 
var AllAuthors = ["起个名真难","起个名真难","起个名真难","起个名真难"]; 
var AllImportance = ["important","important","common","important"]; 
var AllContents = ["终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣终于成功辣","TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText","TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText","TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText"]; 

var TimeOrder = ArrSort(AllTimes);//时间顺序

function ArrSort(All){//输出:角标的顺序
    var markers = new Array(All.length);
    var Arr = [];

    for(var i = 0;i < All.length;i++){//把All写入Arr
        Arr.push(All[i]);
    }

    Arr.sort((x,y)=>{//排序
        return y-x;
    });

    for(var i = 0;i < All.length;i++){
        markers[i] = All.indexOf(Arr[i]);
        for(var j = 0;j < i;j++){//检查重复项
            if(markers[j] == markers[i]){
                markers[i]++;
            }
        }
    }

    return markers;
}

//根据时间搜索
function TimeSearch(Year,Month,Day){
    var result = [];
    if(Year > new Date().getFullYear || Month > 12 || Day > 31){
        return "illegal";
    }
    //三种搜索方式：年月日，年月，年
    if(Year && !Month && !Day){//年搜索
        for(var i = 0;i < AllTimes.length;i++){
            AllTimes[i].toString().substring(0,4) == Year ? result.push(i) : i = i;
        }
        
    }
    else if(Year && Month && !Day){//年月搜索
        for(var i = 0;i < AllTimes.length;i++){
            AllTimes[i].toString().substring(0,4) == Year && AllTimes[i].toString().substring(4,6) == Month ? result.push(i) : i = i;
        }
    }
    else if(Year && Month && Day){//年月日搜索
        for(var i = 0;i < AllTimes.length;i++){
            AllTimes[i].toString().substring(0,4) == Year && AllTimes[i].toString().substring(4,6) == Month && AllTimes[i].toString().substring(6,8) == Day ? result.push(i) : i = i;
        }
    }
    else{
        return "illegal";
    }
    
    return result;
}