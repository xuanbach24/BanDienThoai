var giohang = JSON.parse(localStorage.getItem("giohang")) || [];

function themvaogiohang(x) {
    event.stopPropagation();
    alert("Đã thêm vào giỏ hàng");

    if(x>=0 && x<=11){
        var item = mockdata[x];
        var hinh=item.image;
        var tensp=item.name;
        var dongia=item.price;
        var solg = 1;
    }else{
    var boxsp = x.parentElement.children;
    var hinh = boxsp[1].src;
    var tensp = boxsp[2].innerText;
    var dongia = boxsp[3].innerText.replace(/[^\d]/g, ''); // Loại bỏ các ký tự không phải số
    var solg = boxsp[5].value;
    }
    var sp = new Array(hinh, tensp, dongia, solg);
    giohang.push(sp);
    localStorage.setItem("giohang", JSON.stringify(giohang));
    console.log(giohang);
    Showcount();
}

function Showcount() {
    document.getElementById("count").innerHTML = giohang.length;
}

function updateQuantity(index, newQuantity) {
    giohang[index][3] = newQuantity;
    localStorage.setItem("giohang", JSON.stringify(giohang));
    Showallcard();
}

function remove(index) {
    giohang.splice(index, 1);
    localStorage.setItem("giohang", JSON.stringify(giohang));
    Showallcard();
    Showcount();
    alert("Xóa thành công");
}

function Showallcard() {
    var ttgt = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        var tt = parseFloat(giohang[i][2]) * parseInt(giohang[i][3]);
        tong += tt;
        ttgt += '<tr>' +
                '<td>' + (i + 1) + '</td>' +
                '<td><img src="' + giohang[i][0] + '" alt=""></td>' +
                '<td>' + giohang[i][1] + '</td>' +
                '<td>' + giohang[i][2] + 'VND' + '</td>' +
                '<td><input type="number" id="quantity-' + i + '" name="quantity" min="1" max="10" value="' + giohang[i][3] + '" onchange="updateQuantity(' + i + ', this.value)"></td>' +
                '<td><div>' + tt + 'VND' + '</div></td>' +
                '<td style="width:10px"><div onclick="remove(' + i + ')" style="padding:4px; color: white; background-color: red; border-radius: 999px; font-size: 14px; font-weight: bold; text-align: center; cursor: pointer">Xóa</div></td>' +
                '</tr>';
    }
    ttgt += '<tr>' +
            '<th colspan="5">Tổng Đơn Hàng :<br><button id="resetId" onclick="reset()" >Đặt hàng</button> </th>' +
            '<th>' + tong + 'VND' + '</th>' +
            '</tr>';
    document.getElementById("allcard").innerHTML = ttgt;
}



function reset() {
    var storedUser = JSON.parse(localStorage.getItem("user"));
    if(!storedUser || !storedUser.tentk){
        alert("Bạn Chưa Đăng Nhập hoặc Đăng kí !");
        window.location.href ="./signin.html";
        document.getElementById("allcard").innerHTML = "";
    giohang.length = 0;
    localStorage.setItem("giohang", JSON.stringify(giohang));
    document.getElementById("count").innerText = 0;
    window.setTimeout(dathang, 1500);
    }else{
    alert("Đặt Hàng Thành Công.");
    document.getElementById("allcard").innerHTML = "";
    giohang.length = 0;
    localStorage.setItem("giohang", JSON.stringify(giohang));
    document.getElementById("count").innerText = 0;
    window.setTimeout(dathang, 1500);}
}


function dathang() {
    window.open("form_giao_hang.html", "_blank");
}

function Showcard() {
    Showallcard();
}

function loadGiohang() {
    giohang = JSON.parse(localStorage.getItem("giohang")) || [];
    Showcount();
    if (document.getElementById("allcard")) {
        Showallcard();
    }
}

// Load giỏ hàng khi trang được tải
window.onload = loadGiohang;

//hiện ra trang chi tiết
function show_link(x){
    var link = ["./Chi tiết sản phẩm/ipx.html","./Chi tiết sản phẩm/ipxsm.html","./Chi tiết sản phẩm/ip11.html","./Chi tiết sản phẩm/ip11pm.html","./Chi tiết sản phẩm/ip12.html","./Chi tiết sản phẩm/ip12pm.html","./Chi tiết sản phẩm/ip13.html","./Chi tiết sản phẩm/ip13pm.html","./Chi tiết sản phẩm/ip14.html","./Chi tiết sản phẩm/ip14pm.html","./Chi tiết sản phẩm/ip15.html","./Chi tiết sản phẩm/ip15pm.html"];
    window.open(link[x],"_self");
}