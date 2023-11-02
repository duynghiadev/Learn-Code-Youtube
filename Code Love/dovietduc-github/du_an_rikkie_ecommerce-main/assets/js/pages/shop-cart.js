const tbodyCartTable = document.querySelector('.shop_cart_table tbody');
const btnUpdateCart = document.querySelector('.btn_update_cart');
const btnCheckOut = document.querySelector('.btn-fill-out');

let cartOfUserTemp;
if(getUserLogin()) {
    cartOfUserTemp = getUserLogin().cart;
}




function showCartOfUser() {
    let userIsLogginning = getUserLogin();
    let cartOfUser;
    if(userIsLogginning) {
        cartOfUser = userIsLogginning.cart || [];
    } else {
        cartOfUser = [];
    }
    
    

    let htmlResult = '';
    for(let i = 0; i < cartOfUser.length; i++) {
        let productCart = cartOfUser[i];
        htmlResult = htmlResult + `<tr data-product_id="${productCart.id}">
                <td class="product-thumbnail"><a href="#"><img src="${productCart.image}" alt="product1"></a></td>
                <td class="product-name" data-title="Product"><a href="#">${productCart.name}</a></td>
                <td class="product-price" data-title="Price">$${productCart.price}</td>
                <td class="product-quantity" data-title="Quantity"><div class="quantity">
                <input type="button" value="-" class="minus">
                <input type="text" name="quantity" value="${productCart.quantity}" title="Qty" class="qty" size="4">
                <input type="button" value="+" class="plus">
            </div></td>
                <td class="product-subtotal" data-title="Total">$${productCart.price * productCart.quantity}</td>
                <td class="product-remove" data-title="Remove"><a href=""><i class="ti-close"></i></a></td>
            </tr>`
    }
    // đuea vao container
    tbodyCartTable.innerHTML = htmlResult;
}

function renderCartByTmp(cartUpdateQuantity) {
    let htmlResult = '';
    for(let i = 0; i < cartUpdateQuantity.length; i++) {
        let productCart = cartUpdateQuantity[i];
        htmlResult = htmlResult + `<tr data-product_id="${productCart.id}">
                <td class="product-thumbnail"><a href="#"><img src="${productCart.image}" alt="product1"></a></td>
                <td class="product-name" data-title="Product"><a href="#">${productCart.name}</a></td>
                <td class="product-price" data-title="Price">$${productCart.price}</td>
                <td class="product-quantity" data-title="Quantity"><div class="quantity">
                <input type="button" value="-" class="minus">
                <input type="text" name="quantity" value="${productCart.quantity}" title="Qty" class="qty" size="4">
                <input type="button" value="+" class="plus">
            </div></td>
                <td class="product-subtotal" data-title="Total">$${productCart.price * productCart.quantity}</td>
                <td class="product-remove" data-title="Remove"><a href=""><i class="ti-close"></i></a></td>
            </tr>`
    }
    // đuea vao container
    tbodyCartTable.innerHTML = htmlResult;
}

function totalCartTmp(cartUpdateQuantity) {
    let totalCart = 0;
    for(let i = 0; i < cartUpdateQuantity.length; i++) {
        let quantity = cartUpdateQuantity[i].quantity;
        totalCart = totalCart + parseInt(quantity);
    }
    document.querySelector('.cart_count').innerText = totalCart;
}

function totalMoneyTmp(cartUpdateQuantity) {
    let totalMoney = 0;
    for(let i = 0; i < cartUpdateQuantity.length; i++) {
        totalMoney = totalMoney + (parseInt(cartUpdateQuantity[i].quantity) * cartUpdateQuantity[i].price);
    }

    document.querySelector('.cart_total_amount strong').innerText = '$' + totalMoney;
}

function handleProcessCart(event) {
    event.preventDefault();
    let clicked = event.target;
    // click vào dấu +
   
    if(clicked.classList.contains('plus')) {
        let inputSelector = clicked.closest('.quantity').querySelector('.qty');
        let valueInput = parseInt(inputSelector.value);
        inputSelector.value = valueInput + 1;

        // tăng khi click
        let idProduct = clicked.closest('tr').getAttribute('data-product_id');
        let cartUpdateQuantity = cartOfUserTemp.map(function(item) {
            if(item.id === idProduct) {
                item.quantity = parseInt(inputSelector.value);
                return item;
            } else {
                return item;
            }
        });
        
        // render cart again
        renderCartByTmp(cartUpdateQuantity);
        totalCartTmp(cartUpdateQuantity);
        totalMoneyTmp(cartUpdateQuantity);

        cartOfUserTemp = cartUpdateQuantity;


    } else if(clicked.classList.contains('minus')) {
        let inputSelector = clicked.closest('.quantity').querySelector('.qty');
        let valueInput = parseInt(inputSelector.value);
        if(valueInput === 1) {
            return;
        }

        inputSelector.value = valueInput - 1;

        // tính lại tiền
        let idProduct = clicked.closest('tr').getAttribute('data-product_id');
        let cartUpdateQuantity = cartOfUserTemp.map(function(item) {
            if(item.id === idProduct) {
                item.quantity = parseInt(inputSelector.value);
                return item;
            } else {
                return item;
            }
        });

        
        
        // render cart again
        renderCartByTmp(cartUpdateQuantity);
        totalCartTmp(cartUpdateQuantity);
        totalMoneyTmp(cartUpdateQuantity);

        cartOfUserTemp = cartUpdateQuantity;

    }
    // xóa cart nhưng chưa chọn button update 
    else if(clicked.classList.contains('ti-close')) {
        let idProduct = clicked.closest('tr').getAttribute('data-product_id');
        let cartUpdateQuantity = cartOfUserTemp.filter(item => item.id !== idProduct);

        renderCartByTmp(cartUpdateQuantity);
        totalCartTmp(cartUpdateQuantity);
        totalMoneyTmp(cartUpdateQuantity);

        // gán lại biến cartOfUserTemp
        cartOfUserTemp = cartUpdateQuantity;
    }

}

function totalMoneyCart() {
    let userIsLogginning = getUserLogin();
    let cartOfUser;
    if(userIsLogginning) {
        cartOfUser = userIsLogginning.cart || [];
    } else {
        cartOfUser = [];
    }
   

    let totalMoney = 0;
    for(let i = 0; i < cartOfUser.length; i++) {
        totalMoney = totalMoney + (cartOfUser[i].quantity * cartOfUser[i].price);
    }

    document.querySelector('.cart_total_amount strong').innerText = '$' + totalMoney;
}

function handleUpdateCart() {
    // 1. Lấy cart của user
    let userIsLogginning = getUserLogin();
    let cartOfUser = userIsLogginning.cart;

    let cartUpdate = [];
    for(let i = 0; i < cartOfUser.length; i++) {
        let cartItem = cartOfUser[i];
        let idProduct = cartOfUser[i].id;
        // 2 query lên trên để tìm ra tr chứa số lượng sản phẩm tương ứng
        let trProductWrapper = document.querySelector(`tr[data-product_id="${idProduct}"]`);

        // kiểm tra có tr đế lầy ra value input tương ứng
        if(trProductWrapper) {
            let inputSelector = trProductWrapper.querySelector('.qty');
            let valueInput = inputSelector.value;
            // Sửa đổi quantity ở cartItem
            cartItem.quantity = valueInput;
            // thêm object cartitem đã sửa đổi số lượng
            cartUpdate.push(cartItem);
        }
    }

    let users = JSON.parse(localStorage.getItem('users'));
    let userUpdateCart = users.map(
        function(item) {
            if(item.status === 'active') {
                item.cart = cartUpdate;
                return item;
            } else {
                return item;
            }
        }
    );

    // 2.3 cập nhật lại localStorage cho users
    localStorage.setItem('users', JSON.stringify(userUpdateCart));
    totalMoneyCart();
    totalCartsNumber();

}

function handleCheckout(event) {
    event.preventDefault();
    let userIsLogginning = getUserLogin();
    // tạo order
    const orders = [
        {
            user_id: userIsLogginning.id,
            cart: userIsLogginning.cart
        }
    ];
    let users = JSON.parse(localStorage.getItem('users'));
    let userUpdate = users.map(function(item) {
        if(item.status === 'active') {
            item.cart = [];
            return item;
        } else {
            return item;
        }
    })
    // lưu vào localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
    // reset cart to emty
    localStorage.setItem('users', JSON.stringify(userUpdate));

    // chuyển trang hoàn tất
    window.location.href = '/order-completed.html';
}

// Hiển thị table cart của user
showCartOfUser();
// Thêm sự kiện tăng giảm số lượng cart
tbodyCartTable.addEventListener('click', handleProcessCart);
// Tính tổng tiền trong gior hàng
totalMoneyCart();
// Thêm sự kiện upodate cart
btnUpdateCart.addEventListener('click', handleUpdateCart);

// thêm sự kiện checkout
btnCheckOut.addEventListener('click', handleCheckout);





