
var ina=3;
    ShowSlide = function (){
        var slide =["./image/img-1.png","./image/img-2.png","./image/img-3.png","./image/img-4.png","./image/img-5.png","./image/img-6.png","./image/img-7.png","./image/img-8.png","./image/img-9.png","./image/img-10.png","./image/img-11.png","./image/img-12.png"];
            
        document.getElementById("img-slide1").src=slide[ina];
        document.getElementById("img-slide2").src=slide[ina+1];
        document.getElementById("img-slide3").src=slide[ina+2];
        ina++;
        if(ina==10){
            ina=0;
        }

    }
    setInterval(ShowSlide,2000);