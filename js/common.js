function getUrl(obj){
    return  "http://39.107.77.127:60601"+obj;
}

//    Ê±¼ä
function showTime(){
    var now=new Date();
    year=now.getFullYear();
    month=now.getMonth()+1;
    if(month<10){
        month="0"+month;
    }
    date=now.getDate();
    if(date<10){
        date="0"+date;
    }
    hours=now.getHours();
    if(hours<10){
        hours="0"+hours;
    }
    minutes=now.getMinutes()+15;
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(minutes>60){
        hours+=1;
        minutes-=60;
        minutes="0"+minutes;
    }
    seconds=now.getSeconds();
    if(seconds<10){
        seconds="0"+seconds;
    }
    $(".year").text(year+"."+month+"."+date);
    $(".hour").text(hours+":"+minutes+":"+seconds);
}
showTime();

//Ìø×ª
$(".point").click(function(){
    location.href="integral.html";
});
$(".maliang").click(function(){
    location.href="maliang.html";
});
$(".safeBox").click(function(){
    location.href="safeBox.html";
});



function get_hfs() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
get_hfs();

function throttle(method, context) {
    clearTimeout(method.timer);
    method.timer = setTimeout(function() {
        method.call(context);
    }, 100)
}
window.onresize = function() {
    throttle(get_hfs);
}