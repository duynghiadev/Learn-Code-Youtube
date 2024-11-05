// CLOSEC START MODAL_________________________________________________________
const startCloseBtn = document.querySelector('.btn');
const startModal = document.querySelector('.js-modal');

function closeStartModal() {
    startModal.classList.add('js-close');
}

startCloseBtn.addEventListener('click', closeStartModal);



// BANNER____________________________________________________________________
var slider_ListImgs = document.querySelector('.container__slider #list-imgs')
var slider_Dots = document.querySelectorAll('.container__slider .container__banner__dot-btn')

var slider_NextBtn = document.querySelector('.container__slider .js_banner__next-btn')
var slider_PreBtn = document.querySelector('.container__slider .js_banner__pre-btn')

var slider_lenOfSlider = slider_Dots.length
var slider_lenOfImg = 796.66

var slider_active = 1
var slider_activeDot = 0

var slider_isDelayOnclick = false

var slider_timeTransitionImg = 500
var slider_delayTimeClick = 500
var slider_delayTimeInterval = 5000

function reloadSlider(buttonType) {
    if (!slider_isDelayOnclick) {
        let resetActive
        let resetActiveDot
        let resetX
        let activeGap
        let maxActiveToReset
        let maxActiveDotToReset

        switch (buttonType) {
            case 'next':
                resetActive = 1
                resetActiveDot = 0
                resetX = -slider_lenOfImg
                activeGap = 1
                maxActiveToReset = slider_lenOfSlider + 1
                maxActiveDotToReset = slider_activeDot < (slider_lenOfSlider - 1)
                break
            case 'pre':
                resetActive = slider_lenOfSlider
                resetActiveDot = slider_lenOfSlider - 1
                resetX = -slider_lenOfImg * slider_lenOfSlider
                activeGap = -1
                maxActiveToReset = 0
                maxActiveDotToReset = slider_activeDot > 0
                break
        }

        // Delay after click navigate button
        slider_isDelayOnclick = true
        setTimeout(() => {
            slider_isDelayOnclick = false
        }, slider_delayTimeClick)


        // Reload Image
        slider_active += activeGap
        if (slider_active == maxActiveToReset) {
            slider_ListImgs.style.transition = 'all 0.5s ease'
            slider_ListImgs.style.transform = `translateX(${-(slider_lenOfImg * slider_active)}px)`

            slider_active = resetActive

            setTimeout(() => {
                slider_ListImgs.style.transition = 'all 0s ease'
                slider_ListImgs.style.transform = `translateX(${resetX}px)`
            }, slider_timeTransitionImg)
        } else {
            console.log(slider_active)
            slider_ListImgs.style.transition = 'all 0.5s ease'
            slider_ListImgs.style.transform = `translateX(${-(slider_lenOfImg * slider_active)}px)`
            
            setTimeout(() => {
                slider_ListImgs.style.transition = 'all 0s ease'
            }, slider_timeTransitionImg)
        }


        // Dots update
        let slider_Dots = document.querySelectorAll('.container__slider .container__banner__dot-btn')
        let dotActiving = document.querySelector('.container__slider .container__banner__dots-list li.dot-active')

        if (maxActiveDotToReset) {
            slider_activeDot += activeGap
        } else {
            slider_activeDot = resetActiveDot
        }

        dotActiving.classList.remove('dot-active')
        slider_Dots[slider_activeDot].classList.add('dot-active')
    }

}

// Click event
slider_NextBtn.onclick = function() {
    console.log('yes')
    reloadSlider('next')

    clearInterval(slider_reset)
    slider_reset = setInterval(() => {
        reloadSlider('next')
    }, slider_delayTimeInterval)
}

slider_PreBtn.onclick = function() {
    console.log('yes')
    reloadSlider('pre')

    clearInterval(slider_reset)
    slider_reset = setInterval(() => {
        reloadSlider('next')
    }, slider_delayTimeInterval)
}


slider_Dots.forEach(function(dot, index) {
    dot.onclick = function() {
        slider_ListImgs.style.transition = 'all 0.5s ease'
        slider_ListImgs.style.transform = `translateX(${-(slider_lenOfImg * (index + 1))}px)`

        setTimeout(() => {
            slider_ListImgs.style.transition = 'all 0s ease'
        }, slider_timeTransitionImg)

        slider_active = index + 1
        slider_activeDot = index

        let dotActiving = document.querySelector('.container__slider .container__banner__dots-list li.dot-active')

        dotActiving.classList.remove('dot-active')
        slider_Dots[slider_activeDot].classList.add('dot-active')

        clearInterval(slider_reset)
        slider_reset = setInterval(() => {
            reloadSlider('next')
        }, slider_delayTimeInterval)
    }  
})


// Loop event
var slider_reset = setInterval(() => {
    reloadSlider('next')
}, slider_delayTimeInterval)

// var seconds = 0
// setInterval(() => {
//     seconds++
//     console.log(`seconds: ${seconds}`)
// }, 1000)




// TIMING CLOCK____________________________________________________________________

// Declared
var hoursTens = document.querySelector('.hours-tens')
var hoursUnit = document.querySelector('.hours-unit')

var minutesTens = document.querySelector('.minutes-tens')
var minutesUnit = document.querySelector('.minutes-unit')

var secondsTens = document.querySelector('.seconds-tens')
var secondsUnit = document.querySelector('.seconds-unit')


time = 24*60*60 + 21*60 + 13

var hours = Math.floor(time / 3600)
var tensOfHours = Math.floor(hours / 10)
var unitOfHours = hours % 10

var minutes = Math.floor((time % 3600) / 60)
var tensOfMinutes = Math.floor(minutes / 10)
var unitOfMinutes = minutes % 10

var seconds = time % 60
var tensOfSeconds = Math.floor(seconds / 10)
var unitOfSeconds = seconds % 10


var isActive_SecondsUnit = false
var isActive_SecondsTens = false

var isActive_MinutesUnit = false
var isActive_MinutesTens = false

var isActive_HoursUnit = false
var isActive_HoursTens = false


// Function
function reloadUnit(timeRemain, typeOfTime, isActive) {
    let activeUnit = 10 - (timeRemain % 10)

    if (activeUnit == 10 && isActive) {
        typeOfTime.style.transition = 'all 0.5s ease'
        typeOfTime.style.transform = `translateY(${-16 * 10}px)`


        setTimeout(() => {
            typeOfTime.style.transition = 'all 0s ease'
            typeOfTime.style.transform = `translateY(${-16 * 0}px)` 
        }, 500)
    } else if (activeUnit != 10 && !isActive) {
        typeOfTime.style.transition = 'all 0.5s ease'
        typeOfTime.style.transform = `translateY(${-16 * activeUnit}px)`
    }
}

function reloadTens(timeRemain, typeOfTime, isActive) {
    let activeTens = 6 - (timeRemain % 6)

    if (activeTens == 6 && isActive) {
        typeOfTime.style.transition = 'all 0.5s ease'
        typeOfTime.style.transform = `translateY(${-16 * 6}px)`

        setTimeout(() => {
            typeOfTime.style.transition = 'all 0s ease'
            typeOfTime.style.transform = `translateY(${0}px)`
        }, 500)
    } else if (activeTens != 6 && !isActive) {
        
        typeOfTime.style.transition = 'all 0.5s ease'
        typeOfTime.style.transform = `translateY(${-16 * activeTens}px)`
    }
}

function initializationTime(listOfTime, valueOfTime, typeOfTime) {
    let activeTime
    if (typeOfTime == 'unit') {
        activeTime = 10 - valueOfTime
    } else if (typeOfTime == 'tens') {
        activeTime = 6 - valueOfTime
    }

    if (valueOfTime == 0) {
        listOfTime.style.transform = `translateY(${-16 * 0}px)`
    } else {
        listOfTime.style.transform = `translateY(${-16 * activeTime}px)`
    }
}




// initialization
initializationTime(hoursTens, tensOfHours, 'unit')
initializationTime(hoursUnit, unitOfHours, 'unit')

initializationTime(minutesTens, tensOfMinutes, 'tens')
initializationTime(minutesUnit, unitOfMinutes, 'unit')

initializationTime(secondsTens, tensOfSeconds, 'tens')
initializationTime(secondsUnit, unitOfSeconds, 'unit')


// Loop event
setInterval(() => {
    if (time > 0) {
        time--
        console.log(time)

        let hours = Math.floor(time / 3600)
        let tensOfHours = Math.floor(hours / 10)
        let unitOfHours = hours % 10

        let minutes = Math.floor((time % 3600) / 60)
        let tensOfMinutes = Math.floor(minutes / 10)
        let unitOfMinutes = minutes % 10

        let seconds = time % 60
        let tensOfSeconds = Math.floor(seconds / 10)
        let unitOfSeconds = seconds % 10




        if (unitOfSeconds == 0) {
            isActive_SecondsUnit = true

        } else {
            isActive_SecondsUnit = false
        }

        if (seconds == 9) {
            isActive_SecondsTens = true
        } else {
            isActive_SecondsTens = false
        }


        if (seconds == 59 && unitOfMinutes == 0) {
            isActive_MinutesUnit = true
        } else {
            isActive_MinutesUnit = false
        }

        if (minutes == 9 && seconds == 59) {
            isActive_MinutesTens = true
        } else {
            isActive_MinutesTens = false
        }


        if (minutes == 59 && seconds == 59 && unitOfHours == 0) {
            isActive_HoursUnit = true
        } else {
            isActive_HoursUnit = false
        }

        if (hours == 9 && minutes == 59 && seconds == 59) {
            isActive_HoursTens = true
        } else {
            isActive_HoursTens = false
        }


        reloadUnit(unitOfSeconds, secondsUnit, isActive_SecondsUnit)
        reloadTens(tensOfSeconds, secondsTens, isActive_SecondsTens)

        reloadUnit(unitOfMinutes, minutesUnit, isActive_MinutesUnit)
        reloadTens(tensOfMinutes, minutesTens, isActive_MinutesTens)

        reloadUnit(unitOfHours, hoursUnit, isActive_HoursUnit)
        reloadUnit(tensOfHours, hoursTens, isActive_HoursTens)
    }
}, 1000)



// ZOOM NAV BUTTON - CATEGORY__________________________________________________________

var navBtnCategory = document.querySelectorAll('.container__category .container__nav-btn')
var navContainerCategory = document.querySelector('.container__category .container__nav-btn__container')
var categoryList = document.querySelector('.container__category-list')

categoryList.onmousemove = function() {
    navBtnCategory.forEach(function (nav){
        nav.style.transform = 'scale(2)'
    })
}
categoryList.onmouseout = function() {
    navBtnCategory.forEach(function (nav){
        nav.style.transform = 'scale(1)'
    })
}

navContainerCategory.onmousemove = function() {
    navBtnCategory.forEach(function (nav){
        nav.style.transform = 'scale(2)'
    })
}
navContainerCategory.onmouseout = function() {
    navBtnCategory.forEach(function (nav){
        nav.style.transform = 'scale(1)'
    })
}


// CLICK EVENT OF NAV BUTTON - CATEGORY______________________________________________________

var nextNavBtnCategory = document.querySelector('.container__category .container__nav-btn:last-child')
var preNavBtnCategory = document.querySelector('.container__category .container__nav-btn:first-child')

nextNavBtnCategory.onclick = function() {
    categoryList.style.transform = 'translateX(-480px)'
    
    setTimeout(() => {
        preNavBtnCategory.style.display = 'block'
        nextNavBtnCategory.style.display = 'none'
    }, 500);
}

preNavBtnCategory.onclick = function() {
    categoryList.style.transform = 'translateX(0px)'
    
    setTimeout(() => {
        preNavBtnCategory.style.display = 'none'
        nextNavBtnCategory.style.display = 'block'
    }, 500);
}


// ZOOM NAV BUTTON - TOP SEARCH______________________________________________________

var navBtnTopsearch = document.querySelectorAll('.container__top-search .container__nav-btn')
var navContainerTopsearch = document.querySelector('.container__top-search .container__nav-btn__container')
var topsearchList = document.querySelector('.container__top-search__list-products')

topsearchList.onmousemove = function() {
    navBtnTopsearch.forEach(function (nav){
        nav.style.transform = 'scale(2)'
    })
}
topsearchList.onmouseout = function() {
    navBtnTopsearch.forEach(function (nav){
        nav.style.transform = 'scale(1)'
    })
}

navContainerTopsearch.onmousemove = function() {
    navBtnTopsearch.forEach(function (nav){
        nav.style.transform = 'scale(2)'
    })
}
navContainerTopsearch.onmouseout = function() {
    navBtnTopsearch.forEach(function (nav){
        nav.style.transform = 'scale(1)'
    })
}



// CLICK EVENT OF NAV BUTTON - TOP SEARCH______________________________________________________

var nextNavBtnTopsearch = document.querySelector('.container__top-search .container__nav-btn:last-child')
var preNavBtnTopsearch = document.querySelector('.container__top-search .container__nav-btn:first-child')
var topsearchActive = 0

nextNavBtnTopsearch.onclick = function() {
    topsearchActive++
    console.log('active: ', topsearchActive)
    topsearchList.style.transform = `translateX(${-1200 * topsearchActive}px)`

    setTimeout(() => {
        preNavBtnTopsearch.style.display = 'block'
        if (topsearchActive == 2) {
            nextNavBtnTopsearch.style.display = 'none'
        }
    }, 500);
}

preNavBtnTopsearch.onclick = function() {
    topsearchActive--
    console.log('active: ', topsearchActive)
    topsearchList.style.transform = `translateX(${-1200 * topsearchActive}px)`
    
    setTimeout(() => {
        nextNavBtnTopsearch.style.display = 'block'
        if (topsearchActive == 0) {
            preNavBtnTopsearch.style.display = 'none'
        }
    }, 500);
}



// ZOOM NAV BUTTON - FLASH SALE________________________________________________________________

var flashSale_navBtnContainer = document.querySelector('.container__flash-sale .container__flash-sale__content-products')
var flashSale_navBtns = document.querySelectorAll('.container__flash-sale .container__nav-btn')

flashSale_navBtnContainer.onmousemove = function() {
    flashSale_navBtns.forEach(function (nav){
        nav.style.transform = 'scale(2)'
    })
}
flashSale_navBtnContainer.onmouseout = function() {
    flashSale_navBtns.forEach(function (nav){
        nav.style.transform = 'scale(1)'
    })
}



// CLICK EVENT OF NAV BUTTON - FLASH SALE______________________________________________________

var flashSale_nextBtn = document.querySelector('.container__flash-sale .container__nav-btn:last-child')
var flashSale_preBtn = document.querySelector('.container__flash-sale .container__nav-btn:first-child')
var flashSale_productsList = document.querySelector('.container__flash-sale .container__flash-sale__content-products__list')

var flashSale_active = 0

flashSale_nextBtn.onclick = function() {
    flashSale_active++
    flashSale_productsList.style.transform = `translateX(${-1200 * flashSale_active}px)`

    setTimeout(() => {
        flashSale_preBtn.style.display = 'block'
        if (flashSale_active == 2) {
            flashSale_nextBtn.style.display = 'none'
        }
    }, 500);
}

flashSale_preBtn.onclick = function() {
    flashSale_active--
    flashSale_productsList.style.transform = `translateX(${-1200 * flashSale_active}px)`
    
    setTimeout(() => {
        flashSale_nextBtn.style.display = 'block'
        if (flashSale_active == 0) {
            flashSale_preBtn.style.display = 'none'
        }
    }, 500);
}




// CLICK EVENT OF NAV BUTTON - SHOPEE MALL______________________________________________________
var shopMall_nextBtn = document.querySelector('.container__shop-mall .container__nav-btn:last-child')
var shopMall_preBtn = document.querySelector('.container__shop-mall .container__nav-btn:first-child')
var shopMall_productsList = document.querySelector('.container__shop-mall .container__shop-mall__content__products-list')

shopMall_nextBtn.onclick = function() {
    shopMall_productsList.style.transform = 'translateX(-50%)'
    
    setTimeout(() => {
        shopMall_preBtn.style.display = 'block'
        shopMall_nextBtn.style.display = 'none'
    }, 500);
}

shopMall_preBtn.onclick = function() {
    shopMall_productsList.style.transform = 'translateX(0px)'
    
    setTimeout(() => {
        shopMall_preBtn.style.display = 'none'
        shopMall_nextBtn.style.display = 'block'
    }, 500);
}


// SLIDER SHOP MALL - SHOPEE MALL___________________________________________________________________
var shopMall_listImgs = document.querySelector('.container__shop-mall .container__shop-mall__content__slider__list-imgs')
var shopMall_dots = document.querySelectorAll('.container__shop-mall .container__shop-mall__content__slider__dot')

var shopMall_sliderNextBtn = document.querySelector('.container__shop-mall .container__shop-mall__content__slider-nav-btn:last-child')
var shopMall_sliderPreBtn = document.querySelector('.container__shop-mall .container__shop-mall__content__slider-nav-btn:first-child')

var shopMall_active = 1
var shopMall_activeDot = 0

var shopMall_isDelayOnClick = false

var shopMall_widthOfImg = 390
var shopMall_lenOfImg = shopMall_dots.length

var shopMall_delayTimeClick = 500
var shopMall_delayTimeInterval = 5000

function shopMall_reloadSlider(buttonType) {
    if (!shopMall_isDelayOnClick) {
        let resetActive
        let resetActiveDot
        let resetX
        let activeGap
        let maxActiveToReset
        let maxActiveDotToReset

        switch (buttonType) {
            case 'next':
                activeGap = 1
                maxActiveToReset = shopMall_lenOfImg + 1
                resetActive = 1
                resetActiveDot = 0
                maxActiveDotToReset = shopMall_activeDot < (shopMall_lenOfImg - 1)
                break
            case 'pre':
                activeGap = -1
                maxActiveToReset = 0
                resetActive = shopMall_lenOfImg
                resetActiveDot = shopMall_lenOfImg - 1
                maxActiveDotToReset = shopMall_activeDot > 0
                break
        }


        // Delay after click navigate button
        shopMall_isDelayOnClick = true
        setTimeout(() => {
            shopMall_isDelayOnClick = false
        }, shopMall_delayTimeClick)


        //Reload image
        shopMall_active += activeGap

        shopMall_listImgs.style.transition = 'all 0.5s ease'
        shopMall_listImgs.style.transform = `translateX(${-(shopMall_widthOfImg * shopMall_active)}px)`
        setTimeout(() => {
            if (shopMall_active == maxActiveToReset) {
                shopMall_active = resetActive

                shopMall_listImgs.style.transition = 'all 0s ease'
                shopMall_listImgs.style.transform = `translateX(${-(shopMall_widthOfImg * shopMall_active)}px)`
            }
        }, 500)


        // Dots update
        let shopMall_dots = document.querySelectorAll('.container__shop-mall .container__shop-mall__content__slider__dot')
        let dotActiving = document.querySelector('.container__shop-mall .container__shop-mall__content__slider__dot.shopMall_dot-active')

        if (maxActiveDotToReset) {
            shopMall_activeDot += activeGap
        } else {
            shopMall_activeDot = resetActiveDot
        }

        dotActiving.classList.remove('shopMall_dot-active')
        shopMall_dots[shopMall_activeDot].classList.add('shopMall_dot-active')
    }
}

// Click event
shopMall_sliderNextBtn.onclick = function() {
    shopMall_reloadSlider('next')

    clearInterval(shopMall_resetSlider)
    shopMall_resetSlider = setInterval(() => {
        shopMall_reloadSlider('next')
    }, shopMall_delayTimeInterval);
}

shopMall_sliderPreBtn.onclick = function() {
    shopMall_reloadSlider('pre')

    clearInterval(shopMall_resetSlider)
    shopMall_resetSlider = setInterval(() => {
        shopMall_reloadSlider('next')
    }, shopMall_delayTimeInterval); 
}

shopMall_dots.forEach(function(dot, index) {
    dot.onclick = function() {
        shopMall_active = index + 1
        shopMall_activeDot = index

        shopMall_listImgs.style.transition = 'all 0.5s ease'
        shopMall_listImgs.style.transform = `translateX(${-(shopMall_widthOfImg * shopMall_active)}px)`

        let shopMall_dots = document.querySelectorAll('.container__shop-mall .container__shop-mall__content__slider__dot')
        let dotActiving = document.querySelector('.container__shop-mall .container__shop-mall__content__slider__dot.shopMall_dot-active')

        dotActiving.classList.remove('shopMall_dot-active')
        shopMall_dots[shopMall_activeDot].classList.add('shopMall_dot-active')

        clearInterval(shopMall_resetSlider)
        shopMall_resetSlider = setInterval(() => {
            shopMall_reloadSlider('next')
        }, shopMall_delayTimeInterval); 
    }
})

// Loop event
var shopMall_resetSlider = setInterval(() => {
    shopMall_reloadSlider('next')
}, shopMall_delayTimeInterval)




// OPEN CHAT MENU BUTTON - CHAT BOX MODAL___________________________________________________________
var chatBox_shopButton = document.querySelector('.chat-modal__container .chat-modal__shops__button')
var chatBox_buttonMenu = document.querySelector('.chat-modal__container .chat-modal__shops__button__menu')
var chatBox_isClickMenu = true

chatBox_shopButton.addEventListener('click', function() {

    if (chatBox_isClickMenu) {
        chatBox_buttonMenu.classList.add('open__chat-button-menu')
        chatBox_buttonMenu.classList.remove('close__chat-button-menu')
        chatBox_isClickMenu = false
        chatBox_buttonMenu.style.display = 'flex'
        
    } else {
        chatBox_buttonMenu.classList.remove('open__chat-button-menu')
        chatBox_buttonMenu.classList.add('close__chat-button-menu')
        chatBox_isClickMenu = true
        setTimeout(() => {
            chatBox_buttonMenu.style.display = 'none'
        }, 100)
    }
})


// FOCUS EVENT OF SEARCH BOX - CHAT BOX MODAL_______________________________________________________
var chatBox_searchBox = document.querySelector('.chat-modal__container .chat-modal__shops__input-box')
var chatBox_inputTag = document.querySelector('.chat-modal__container .chat-modal__shops__input')
var chatBox_searchButton = document.querySelector('.chat-modal__container .chat-modal__shops__button')

chatBox_inputTag.addEventListener('focusin', function() {
    chatBox_searchBox.style.border = '1px solid rgba(0, 0, 0, 0.5)'
    chatBox_searchButton.style.display = 'none'
})
chatBox_inputTag.addEventListener('focusout', function() {
    chatBox_searchBox.style.border = '1px solid rgba(0, 0, 0, 0.15)'
    chatBox_searchButton.style.display = 'flex'
})



// ZOOM OUT CHAT BOX - CHAT BOX MODAL________________________________________________________________
var chatBox_chatArea = document.querySelector('.chat-modal__container .chat-modal__chat-erea')
var chatBox_header = document.querySelector('.chat-modal__container .chat-modal__header')
var chatBox_container = document.querySelector('.chat-modal__container')
var chatBox_zoomOutBtn = document.querySelector('.chat-modal__container .chat-modal__header__btn:first-child')
var chatBox_zoomInBtn = document.querySelector('.chat-modal__container .chat-modal__header__btn:nth-child(2)')
var chatBox_shopsContainer = document.querySelector('.chat-modal__container .chat-modal__shops-container')


chatBox_zoomOutBtn.onclick = function() {
    chatBox_zoomInBtn.style.display = 'inline-block'
    chatBox_zoomOutBtn.style.display = 'none'
    chatBox_chatArea.style.display = 'none'
    chatBox_header.style.width = '224px'  
    chatBox_container.style.width = '226px'
    chatBox_shopsContainer.style.borderRight = 'none'

    if (!chatBox_isClickMenu) {
        chatBox_buttonMenu.classList.remove('open__chat-button-menu')
        chatBox_buttonMenu.classList.add('close__chat-button-menu')
        chatBox_isClickMenu = true
        setTimeout(() => {
            chatBox_buttonMenu.style.display = 'none'
        }, 100)
    }
}

chatBox_zoomInBtn.onclick = function() {
    chatBox_zoomInBtn.style.display = 'none'
    chatBox_zoomOutBtn.style.display = 'inline-block'
    
    setTimeout(() => {
        chatBox_chatArea.style.animation = 'fade-out 0.2s ease'
        chatBox_chatArea.style.display = 'block'
    }, 150)
    
    chatBox_header.style.width = '640px'  
    chatBox_container.style.width = '642px'
    chatBox_shopsContainer.style.borderRight = '1px solid rgba(0, 0, 0, 0.15)'

    if (!chatBox_isClickMenu) {
        chatBox_buttonMenu.classList.remove('open__chat-button-menu')
        chatBox_buttonMenu.classList.add('close__chat-button-menu')
        chatBox_isClickMenu = true
        setTimeout(() => {
            chatBox_buttonMenu.style.display = 'none'
        }, 100)
    }
}


// HIDDEN CHAT BOX MODAL - CHAT BOX MODAL___________________________________________________________
var chatBox_hiddenBtn = document.querySelector('.chat-modal__container .chat-modal__header__btn:last-child')

chatBox_hiddenBtn.onclick = function() {
    chatBox_container.style.animation = 'zoomIn 0.5s ease'
    setTimeout(() => {
        chatBox_container.style.display = 'none'
        chatBoxBtn_container.style.display = 'flex'
        chatBox_container.style.animation = 'none'
    }, 300)
}


// OPEN CHAT BOX MODAL - CHAT BOX MODAL_____________________________________________________________
var chatBoxBtn_container = document.querySelector('.container__chat-box')

chatBoxBtn_container.onclick = function() {
    chatBox_container.style.display = 'grid'
    chatBoxBtn_container.style.display = 'none'
    chatBox_container.style.animation = 'zoomOut 0.3s ease'
}


// LOGIN ___________________________________________________________________________________________
// var header__loginBtn = document.querySelector('.header .header__navbar-login')

// header__loginBtn.addEventListener('click', function() {
//     window.location.href = 'login - main.html'
// })


// NAVIGATE TO PRODUCT INFORMATION - TODAY SUGGEST_________________________________________________________________
var todaySuggest__items = document.querySelectorAll('.container__to-day-sug .container__to-day-sug__products-item')

todaySuggest__items.forEach(function(item) {
    item.addEventListener('click', function() {
        window.location.href = 'product - page.html'
    })
})


