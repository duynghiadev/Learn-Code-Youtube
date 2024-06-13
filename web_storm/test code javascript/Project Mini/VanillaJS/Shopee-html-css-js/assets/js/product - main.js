// Replace img slideshow - Product box ___________________________________________________
var productBox_bannerMain = document.querySelector('.product-container__product-box .product-container__product-box__banner__main-img img')
var productBox_imgs = document.querySelectorAll('.product-container__product-box .product-container__product-box__banner__list-item')

var productBox_classifyItemList = document.querySelectorAll('.product-container__product-box .product-container__product-box__content__classify-item')

var productBox_presentImg = productBox_bannerMain.src


productBox_imgs.forEach(function(element) {
    element.onmouseover = function() {
        let newImg = element.style.backgroundImage
        let newImg_link = newImg.slice(5, - 2)
        console.log(newImg_link)
        productBox_bannerMain.src = newImg_link

        productBox_imgs.forEach(function(item) {
            item.style.border = 'none'
        })

        element.style.border = '2px solid var(--primary-color)'  
    }
});

productBox_classifyItemList.forEach(function(element, index) {
    element.onmouseover = function() {
        if (index >= 0 && index <= 3) {
            let newImg = productBox_imgs[index + 1].style.backgroundImage
            let newImg_link = newImg.slice(5, -2)

            productBox_bannerMain.src = newImg_link
        }
    }

    element.onmouseout = function() {
        productBox_bannerMain.src = productBox_presentImg
    }


    element.onclick = function() {
        let newImg = productBox_imgs[index + 1].style.backgroundImage
        let newImg_link = newImg.slice(5, -2)

        let activeItem = document.querySelector('.product-container__product-box .product-container__product-box__content__classify-item.product-container__item-active')

        activeItem.classList.remove('product-container__item-active')
        element.classList.add('product-container__item-active')

        productBox_presentImg = newImg_link
        productBox_bannerMain.src = newImg_link

        productBox_imgs.forEach(function(item) {
            item.style.border = 'none'
        })
        productBox_imgs[index + 1].style.border = '2px solid var(--primary-color)'  
        
    }
})



// NAVIGATION GOME PAGE ___________________________________________________________________
var header_logo = document.querySelector('.product-header .product-header__logo-img')

header_logo.addEventListener('click', function() {
    window.location.href = 'index - logged.html'
})



