
function show_img(x){
    var img = x.parentElement.children;
    var hinh = img[0].src;
    var goc = document.getElementById("img");
    goc.src = hinh ;
}

function buy(x){
    var buy = ["Bạn đã mua hàng thành công !","Bạn Đã Mua trả góp !", "Bạn đã mua qua thẻ !"];
    alert(buy[x]);
    document.getElementById("addtocart").click();
    // window.setTimeout(dathang,1000);
}


function dathang(){
    window.open("../form_giao_hang.html","_blank");
}



