const mainContentSelector = document.querySelector('.main_content');


function handleAddCart(event) {
    
    let clicked = event.target;
    let liClicked = clicked.closest('li.add-to-cart');

    if(liClicked) {
        event.preventDefault();
        // input
        let idProduct = liClicked.getAttribute('data-id_product');
        let products = JSON.parse(localStorage.getItem('products'));
        // lấy sản phẩm từ id_product truyền lên khi click
        let product = products.find(item => item.id === idProduct);
        // input
        let userIsLogginning = getUserLogin();
        // 1. Kiểm tra nếu user chưa login thì redirect đến màn hình login
        if(!userIsLogginning) {
            window.location.href = '/login.html';
        }

        // 2. chắc chắn đã login thì thực hiện logic add to cart
        // 2.1 Tạo ra value của cart [{san pham}]
        // user chưa có cart nghĩa là có tài khoản nhưng chưa từng mua hàng trên trang
        let cartOfUser = userIsLogginning.cart;
        
        let cart;
        // chưa có key cart hay lần đầu mua hàng
        if(!cartOfUser) {
            cart = [
                {...product, quantity: 1}
            ];
        }
        // Đã có key cart hay mua sản phẩm khac 
        else {
            // Kiểm tra sản phẩm chưa có trong giỏ hàng
            let productExit = cartOfUser.find(item => item.id === idProduct);
            // sản phẩm đã có trong giỏ hàng
            if(productExit) {
                cart = cartOfUser.map(
                    function(item) {
                        if(item.id === idProduct) {
                            item.quantity = item.quantity + 1;
                            return item;
                        } else {
                            return item;
                        }
                    }
                )
            }
            // sản phẩm chưa có trong giỏ hàng
            else {
                cart = [...cartOfUser, {...product, quantity: 1}];
            }
            
        }

        // 2.2. update user đang login hay có status là active
        // Thêm thuộc tính cart cho user đang active
        let users = JSON.parse(localStorage.getItem('users'));
        let userUpdateCart = users.map(
            function(item) {
                if(item.status === 'active') {
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


}





// 3. event + call function
mainContentSelector.addEventListener('click', handleAddCart);