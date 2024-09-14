var full = new Date("December 30,2024 23:59:59").getTime()
setInterval(function(){
    var now = new Date().getTime()
    var D = full - now
    var day= Math.floor(D/(1000*60*60*24));
    var hours= Math.floor(D/(1000*60*60));
    var minute = Math.floor(D/(1000*60));
    var second = Math.floor(D/(1000));
    hours %=24;
    minute %=60;
    second %=60;

    document.getElementById("days").innerText = day;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minute").innerText = minute;
    document.getElementById("second").innerText = second;
    document.getElementById("NBD").innerText="Duy Nhất 30/10 - 30/12";
},1000)