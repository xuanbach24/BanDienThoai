document.addEventListener("DOMContentLoaded",function(){
    var storedUser = JSON.parse(localStorage.getItem("user"));
    document.getElementById("name3").value= storedUser.tentk;
    document.getElementById("phone3").value= storedUser.sdt;
  })