// Đây là cách 1: viết theo kiểu truyền thống ✅

// 1. click button toggle (addEvent)
// 2. show hide div (add-remove class)

// const buttonSelector = document.querySelector('.btn') // element object
// const divSelectorToggle = document.querySelector('.my-style')
//
// function handleClickToggle() {
// 	divSelectorToggle.classList.toggle('hide')
// }
//
// buttonSelector.addEventListener('click', handleClickToggle)

// Đây là cách 2: viết theo kiểu OOP trong Javascript ✅

function Toggle(options) {
	const container = options.container
	const containerSelector = document.querySelector('.' + container)
	console.log(containerSelector)

// 1. save variable can access in function (querySelector, querySelectorAll)
	const buttonSelector = containerSelector.querySelector('.btn')
	const divSelector = containerSelector.querySelector('.my-style')

	function handleClickToggle() {
		divSelector.classList.toggle('hide')
	}

	// 2. add listener
	function initEvent() {
		buttonSelector.addEventListener('click', handleClickToggle)
	}

	initEvent()
}

let instanceToggle = new Toggle({
	container: 'container_toggle'
})

let instanceToggle2 = new Toggle({
	container: 'container_toggle_2'
})