function checkform() {
  var name = document.getElementById("name3");
  var phone = document.getElementById("phone3");
  var diachi = document.getElementById("diachi3");
  if (name.value != "") {
    if (name.value.length < 2) {
      alert("Vui lòng nhập đủ tên !");
      name.focus();
      return false;
    } else {
      if (phone.value.length != 10) {
        alert("Vui Lòng nhập đúng số điện thoại!");
        phone.focus();
        return false;
      } else {
        if(diachi.value ==""){
          alert("Vui Lòng nhập địa chỉ");
          diachi.focus();
          return false;
        }else{
          alert("Đăng Kí Thành Công");
          xuat();
        }
        }
      }
  } else {
    alert("Vui Lòng nhập Họ và tên !!!");
    name.focus();
  }
}




function xuat(){
  document.getElementById("nguoinhan").innerHTML=document.getElementById("name3").value;
  document.getElementById("sdt").innerHTML=document.getElementById("phone3").value;
  document.getElementById("diachinhan").innerHTML=document.getElementById("diachi3").value;
  document.getElementById("yeucaukhac").innerHTML=document.getElementById("yeucau").value;
  document.getElementById("xuat").style.display="block";

}
