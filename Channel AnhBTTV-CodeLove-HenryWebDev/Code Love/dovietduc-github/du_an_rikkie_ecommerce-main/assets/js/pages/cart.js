function getUserLogin() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userLoggin = users.find(item => item.status === 'active');
    return userLoggin;
}


// function tính toán tổng carts
function totalCartsNumber() {
    // Lấy thông tin user đang login
    let userLogin = getUserLogin();
    // Lấy cart của user
    if (userLogin) {
        let cartOfUser = userLogin.cart || [];
        // Tính toán tổng số sản phẩm trong giỏ hàng (tổng quantity)
        let totalCart = 0;
        for(let i = 0; i < cartOfUser.length; i++) {
            let quantity = cartOfUser[i].quantity;
            totalCart = totalCart + parseInt(quantity);
        }
        // Hiển thị số lượng
        document.querySelector('.cart_count').innerText = totalCart;
    }
    
}



// 3. event + call function
// Hiển thị total cart
totalCartsNumber();