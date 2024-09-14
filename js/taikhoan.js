

function signin() {
    var tentkElement = document.getElementById("name");
    var sdtElement = document.getElementById("phone");
    var passwordElement = document.getElementById("password");
    var passwordElement2 = document.getElementById("passwordXN");

    var tentk = tentkElement.value;
    var sdt = sdtElement.value;
    var password = passwordElement.value;
    var passwordXN = passwordElement2.value;


    // Kiểm tra tên tài khoản
    if (tentk === "") {
        alert("Vui lòng nhập Họ và tên !!!");
        tentkElement.focus();
        return false;
    }
    if (tentk.length < 2) {
        alert("Vui lòng nhập đủ tên !");
        tentkElement.focus();
        return false;
    }

    // Kiểm tra số điện thoại
    if (sdt.length !== 10) {
        alert("Vui lòng nhập đúng số điện thoại!");
        sdtElement.focus();
        return false;
    }

    // Kiểm tra mật khẩu
    if (password.length < 6) {
        alert("Vui lòng nhập mật khẩu nhiều hơn 6 ký tự");
        passwordElement.focus();
        return false;
    }

    if (password !== passwordXN){
        alert("Mật Khẩu không trùng nhau");
        passwordElement2.focus();
        return false;
    }

    // Đăng nhập thành công
    alert("Đăng Ký thành công");
      var user = {
        tentk: tentk,
        sdt: sdt,
        password: password
    };
      localStorage.setItem("user", JSON.stringify(user));
    // Chuyển hướng sang trang Bài 6 và load data đã lưu ở sessionStorage
    window.location.href = './ShopSmartphone.html';
}

function signup(){
    var tentkElement = document.getElementById("name2");
    var sdtElement = document.getElementById("phone2");
    var passwordElement = document.getElementById("password2");

    var tentk = tentkElement.value;
    var sdt = sdtElement.value;
    var password = passwordElement.value;

    // Kiểm tra tên tài khoản
    if (tentk === "") {
        alert("Vui lòng nhập Họ và tên !!!");
        tentkElement.focus();
        return false;
    }
    if (tentk.length < 2) {
        alert("Vui lòng nhập đủ tên !");
        tentkElement.focus();
        return false;
    }

    // Kiểm tra số điện thoại
    if (sdt.length !== 10) {
        alert("Vui lòng nhập đúng số điện thoại!");
        sdtElement.focus();
        return false;
    }

    // Kiểm tra mật khẩu
    if (password.length < 6) {
        alert("Vui lòng nhập mật khẩu nhiều hơn 6 ký tự");
        passwordElement.focus();
        return false;
    }

    // Đăng nhập thành công
    alert("Đăng nhập thành công");
      var user = {
        tentk: tentk,
        sdt: sdt,
        password: password
    };
      localStorage.setItem("user", JSON.stringify(user));
    // Chuyển hướng sang trang Bài 6 và load data đã lưu ở sessionStorage
    window.location.href = './ShopSmartphone.html';

}


  function link(x){
    var y=["./signup.html","./signin.html"];
    window.open(y[x],'_self');
  }



  function login(){
    document.getElementById("login-main").addEventListener("click",function(){
        localStorage.removeItem("user");
        alert("Bạn Đã Đăng Xuất");
    })
    
  }

  function login_main(){
    var storedUser = JSON.parse(localStorage.getItem("user"));
    document.getElementById("login-main").style.display="block";

    if(!storedUser){
        document.getElementById("login-main").innerHTML='<a href="signup.html">Đăng Nhập</a><a href="./signin.html">Đăng kí</a>';

    }else{
        document.getElementById("login-main").innerHTML=`<a href="" class="dangxuat"><i class='bx bx-log-out'></i>Đăng Xuất</a>`;
        login();
    }
  }