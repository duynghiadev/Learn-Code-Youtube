// 1. click ảnh con show ra ảnh to tương ứng
// Trong bài này mình sử dụng phương pháp Event Bubbling. Phương pháp đó thực chất là 1 design
// patterns trong Javascript

const container = document.querySelector('.container')
const imageSmallAll = document.querySelectorAll('.cursor')
const imageBig = document.querySelector('.mySlides')

function handleClickShowImageBig(event) {
	const clicked = event.target
	if (clicked.classList.contains('cursor')) {
		const srcImageSmall = clicked.getAttribute('src')
		// add src to image big
		imageBig.setAttribute('src', srcImageSmall)
		// 2.1 remove all class active
		imageSmallAll.forEach(function (imageSmallElement) {
			imageSmallElement.classList.remove('active')
		})

		// 2. chon ảnh con đang click thêm class active
		clicked.classList.add('active')
	}
}

// add event listener
container.addEventListener('click', handleClickShowImageBig)