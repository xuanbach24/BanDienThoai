var 
mockdata = [{
    id: '1',
    image: './image/ipx.jpg',
    name: 'IPHONE X 256GB CHÍNH HÃNG VN/A BẢN ĐẸP',
    price: '7970000đ'
},{
    id: '2',
    image: './image/xsm.jpg',
    name: 'IPHONE XS MAX 256GB CHÍNH HÃNG VN/A </',
    price: '8950000đ'
},{
    id: '3',
    image: './image/11.jpg',
    name: 'IPHONE 11 256GB CHÍNH HÃNG VN/A BẢN ĐẸP',
    price: '10970000đ'
},{
    id: '4',
    image: './image/11prm.jpg',
    name: 'IPHONE 11 PRO MAX 256GB CHÍNH HÃNG VN/A ',
    price: '12150000đ'
},{
    id: '5',
    image: './image/12.jpg',
    name: 'IPHONE 12 256GB CHÍNH HÃNG VN/A BẢN ĐEPH',
    price: '13970000đ'
},{
    id: '6',
    image: './image/12prm.jpg',
    name: 'IPHONE 12 PRO MAX 256GB CHÍNH HÃNG VN/A ',
    price: '15970000đ'
},{
    id: '7',
    image: './image/13.jpg',
    name: 'IPHONE 13 256GB CHÍNH HÃNG VN/A BẢN ĐẸP',
    price: '14970000đ'
},{
    id: '8',
    image: './image/13prm.jpg',
    name: 'IPHONE 13 PRO MAX 256GB CHÍNH HÃNG VN/A ',
    price: '18970000đ'
},{ 
    id: '9',  
    image: './image/14.jpg',
    name: 'IPHONE 14 256GB CHÍNH HÃNG VN/A BẢN ĐẸP',
    price: '15970000đ'
},{
    id: '10',
    image: './image/14prm.jpg',
    name: 'IPHONE 14 PRO MAX 256GB CHÍNH HÃNG VN/A ',
    price: '20970000đ'
},{
    id: '11',
    image: './image/15.jpg',
    name: 'IPHONE 15 256GB CHÍNH HÃNG VN/A BẢN ĐẸP',
    price: '16970000đ'
},{
    id: '12',
    image: './image/15prm.jpg',
    name: 'IPHONE 15 PRO MAX 256GB CHÍNH HÃNG VN/A ',
    price: '25970000đ'
}
]


document.addEventListener("DOMContentLoaded", function() {
    var product = document.querySelector(".box-search-main");

    mockdata.forEach(item => {
        var newproduct = document.createElement('div');
        newproduct.classList.add('box-search');
        newproduct.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="search-right">
                <div class="name">${item.name}</div>
                <div class="price">${item.price}</div>
            </div>`;
        product.appendChild(newproduct);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.querySelector(".search-main input");
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            let txtsearch = e.target.value.trim().toLowerCase();
            let listproduct = document.querySelectorAll(".box-search");

            listproduct.forEach(item => {
                if (item.innerText.toLowerCase().includes(txtsearch)) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }
            });
        });
    }
});

function showSearchBox() {
    document.getElementById("tim").style.display = "block";
  }

function none(){
    document.getElementById("tim").style.display = "none";
    document.getElementById("login-main").style.display="none";
}


  document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách sản phẩm sau khi đã lọc
    var filteredProducts = document.querySelectorAll(".box-search");

    // Thêm sự kiện "click" cho mỗi sản phẩm
    filteredProducts.forEach((product, index) => {
        product.addEventListener('click', function() {
            // Khi sản phẩm được click, gọi hàm show_link với chỉ số tương ứng
            show_link(index);
        });
    });
});

function show_link(x) {
    var link = ["./Chi tiết sản phẩm/ipx.html","./Chi tiết sản phẩm/ipxsm.html","./Chi tiết sản phẩm/ip11.html","./Chi tiết sản phẩm/ip11pm.html","./Chi tiết sản phẩm/ip12.html","./Chi tiết sản phẩm/ip12pm.html","./Chi tiết sản phẩm/ip13.html","./Chi tiết sản phẩm/ip13pm.html","./Chi tiết sản phẩm/ip14.html","./Chi tiết sản phẩm/ip14pm.html","./Chi tiết sản phẩm/ip15.html","./Chi tiết sản phẩm/ip15pm.html"];
    window.open(link[x],"_blank");
}