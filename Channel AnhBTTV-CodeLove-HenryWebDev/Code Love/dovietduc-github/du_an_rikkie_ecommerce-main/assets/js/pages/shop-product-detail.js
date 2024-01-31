// Js cho trang chi tiết sản phẩm
const btnAddtocart = document.querySelector('.btn-addtocart');

function showProductDetail() {
    // 1. Lấy ra id sản phẩm
    const queryString = window.location.search;
    // tách chuỗi ra mảng
    const arrDetail = queryString.split('=');
    // lấy ra id sản phẩm 
    const productId = arrDetail[1];

    // 2. Lấy ra sản phẩm với produtId lấy được
    let products = JSON.parse(localStorage.getItem('products'));
    let product = products.find(item => item.id === productId);
    

    // 3. Thay đổi thông tin theo detail
    // image
    document.querySelector('.product-image img').setAttribute('src', product.image);
    // tên sản phẩm
    document.querySelector('.pr_detail .product_title a').innerText = product.name;
    // giá sản phẩm
    document.querySelector('.pr_detail .product_price span').innerText = '$' + product.price;

   
}

function showProductRealative() {
    const queryString = window.location.search;
    const arrParam = queryString.split('=');
    const idProduct = arrParam[1];
    // lấy ra sản phẩm
    const products = JSON.parse(localStorage.getItem('products'));
    const product = products.find(item => item.id === idProduct);
    const categoryId = product.category_id;

    const productRelative = products.filter(function (item) {
        if (item.category_id === categoryId && item.id !== idProduct) {
            return true;
        } else {
            return false;
        }
    });

    let htmlResult = '';
    productRelative.forEach(function (productItem) {
        htmlResult = htmlResult + `<div class="item">
            <div class="product">
                <div class="product_img">
                    <a href="shop-product-detail.html">
                        <img src="${productItem.image}" alt="product_img1">
                    </a>
                    <div class="product_action_box">
                        <ul class="list_none pr_action_btn">
                            <li class="add-to-cart" data-id_product="${productItem.id}"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html"><i class="icon-shuffle"></i></a></li>
                            <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                            <li><a href="#"><i class="icon-heart"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="product_info">
                    <h6 class="product_title"><a href="shop-product-detail.html">${productItem.name}</a></h6>
                    <div class="product_price">
                        <span class="price">$${productItem.price}</span>
                    </div>
                    <div class="rating_wrap">
                        <div class="rating">
                            <div class="product_rate" style="width:80%"></div>
                        </div>
                        <span class="rating_num">(21)</span>
                    </div>
                    <div class="pr_desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                    </div>
                    
                </div>
            </div>
        </div>`;
    });


    document.querySelector('.releted_product_slider').innerHTML = htmlResult;
}

function handleAddCartDetail(event) {
    let clicked = event.target;
    let inputSelector = clicked.closest('.cart_extra').querySelector('.qty');
    let quantity = inputSelector.value;

    const queryString = window.location.search;
    const arrParam = queryString.split('=');
    const idProduct = arrParam[1];
    let products = JSON.parse(localStorage.getItem('products'));
        // lấy sản phẩm từ id_product truyền lên khi click
    let product = products.find(item => item.id === idProduct);

    // get cart
    let userIsLogginning = getUserLogin();
    let cartOfUser = userIsLogginning.cart;
    let cart;
    // chưa có key cart hay lần đầu mua hàng
    if (!cartOfUser) {
        cart = [
            { ...product, quantity: 1 }
        ];
    }
    // Đã có key cart hay mua sản phẩm khac 
    else {
        // Kiểm tra sản phẩm chưa có trong giỏ hàng
        let productExit = cartOfUser.find(item => item.id === idProduct);
        // sản phẩm đã có trong giỏ hàng
        if (productExit) {
            cart = cartOfUser.map(
                function (item) {
                    if (item.id === idProduct) {
                        item.quantity = item.quantity + parseInt(quantity);
                        return item;
                    } else {
                        return item;
                    }
                }
            )
        }
        // sản phẩm chưa có trong giỏ hàng
        else {
            cart = [...cartOfUser, { ...product, quantity: parseInt(quantity) }];
        }

    }

    // 2.2. update user đang login hay có status là active
    // Thêm thuộc tính cart cho user đang active
    let users = JSON.parse(localStorage.getItem('users'));
    let userUpdateCart = users.map(
        function (item) {
            if (item.status === 'active') {
                item.cart = cart;
                return item;
            } else {
                return item;
            }
        }
    );

    // 2.3 cập nhật lại localStorage cho users
    localStorage.setItem('users', JSON.stringify(userUpdateCart));
    // show number cart
    totalCartsNumber();


}


// 3. event + call function
showProductDetail();
// Hiển thị sản phẩm liên quan
showProductRealative();
btnAddtocart.addEventListener('click', handleAddCartDetail);