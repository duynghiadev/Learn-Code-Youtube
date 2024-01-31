const ulTabSelector = document.querySelector('.product_tab_click');



function handleShowProductByTab(event) {
    let clicked = event.target;
    if(clicked.classList.contains('product_item_tab')) {
        let productType = clicked.getAttribute('data-type');

        // 1. Lấy tất cả sản phẩm ở localStorage
        let products = JSON.parse(localStorage.getItem('products')) || [];
        let productFilterByType = products.filter(
            function(item) {
                if(item.type === productType) {
                    return true;
                } else {
                    return false;
                }
            }
        );

        // Giới hạn 8 phần tử
        let productFilterByTypeLimit = productFilterByType.slice(0, 8);

        // 2. Hiển thị ảnh theo productFilterByType
        // 2.1 xây dựng cấu trúc sản phẩm
        // Hàm trả về html theo objett fileter
        let resultHtml = renderProduct(productFilterByTypeLimit);

        let objMapping = {
            new_arrival: '#arrival',
            best_seller: '#sellers',
            feature: '#featured',
            special_offer: '#special'
        }
        let idContainer = objMapping[productType] + ' ' + '.shop_container';
        document.querySelector(idContainer).innerHTML = resultHtml;
        
    }
    
}

function renderProduct(productFilterByType) {
    let resultHtml = '';
    for(let i = 0; i < productFilterByType.length; i++) {
        let productItem = productFilterByType[i];
        resultHtml = resultHtml + 
        `<div class="col-lg-3 col-md-4 col-6">
            <div class="product">
                <div class="product_img">
                    <a href="/shop-product-detail.html?id=${productItem.id}">
                        <img src="${productItem.image}" alt="product_img1">
                    </a>
                    <div class="product_action_box">
                        <ul class="list_none pr_action_btn">
                            <li class="add-to-cart" data-id_product="${productItem.id}">
                                <a href="">
                                    <i class="icon-basket-loaded"></i> 
                                    Add To Cart
                                </a>
                            </li>
                            <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                            <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                            <li><a href="#"><i class="icon-heart"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="product_info">
                    <h6 class="product_title"><a href="/shop-product-detail.html?product_id=${productItem.id}">${productItem.name}</a></h6>
                    <div class="product_price">
                        <span class="price">$${productItem.price}</span>
                        <del>$55.25</del>
                        <div class="on_sale">
                            <span>35% Off</span>
                        </div>
                    </div>
                    <div class="rating_wrap">
                        <div class="rating">
                            <div class="product_rate" style="width:80%"></div>
                        </div>
                        <span class="rating_num">(21)</span>
                    </div>

                </div>
            </div>
        </div>`;
    }
    return resultHtml;
}


function loadProductFeature(){
    // 1. Lấy tất cả sản phẩm ở localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let productFilterByType = products.filter((item) => item.type === 'feature');

    // Lấy 12 object
    let productFilterByTypeLimit = productFilterByType.slice(0, 12);

    // 2. Xây dựng html
    let resultHtmlArr = [];
    for(let i = 0; i < productFilterByTypeLimit.length; i++) {
        let productItem = productFilterByTypeLimit[i];
        let htmlItem = `<div class="item">
            <div class="product">
                <div class="product_img">
                    <a href="/shop-product-detail.html?id=${productItem.id}">
                        <img src="${productItem.image}">
                    </a>
                    <div class="product_action_box">
                        <ul class="list_none pr_action_btn">
                            <li data-id_product="${productItem.id}" class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i> Add To Cart</a></li>
                            <li><a href="shop-compare.html" class="popup-ajax"><i class="icon-shuffle"></i></a></li>
                            <li><a href="shop-quick-view.html" class="popup-ajax"><i class="icon-magnifier-add"></i></a></li>
                            <li><a href="#"><i class="icon-heart"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="product_info">
                    <h6 class="product_title"><a href="/shop-product-detail.html?id=${productItem.id}">${productItem.name}</a></h6>
                    <div class="product_price">
                        <span class="price">$${productItem.price}</span>
                        <del>$55.25</del>
                        <div class="on_sale">
                            <span>35% Off</span>
                        </div>
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
        // đẩy html của mỗi item vào trong mảng
        resultHtmlArr.push(htmlItem);
    }

    // convert array to html
    let resultHtml = resultHtmlArr.join('');
    // đưa vào nội dung slider
    document.querySelector('.product_slider').innerHTML = resultHtml;

}


// 3. add event
// hàm show dữ liệu sản phẩm nổi bật
loadProductFeature();
// click thay đổi dữ liệu theo tab

ulTabSelector.addEventListener('click', handleShowProductByTab);
// Hàm tự động click vào tab đầu tiên
document.querySelector('a[href="#arrival"]').click();
// Khi trang load thay mầu cho icon

