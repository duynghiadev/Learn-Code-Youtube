// 1. click ảnh con show ra ảnh to tương ứng
const imageSmallAll = document.querySelectorAll('.cursor')
const imageBig = document.querySelector('.mySlides img')

function handleClickShowImage(event)
{
	const clicked = event.target
	const srcImageSmall = clicked.getAttribute('src')

	// add src to image big
	imageBig.setAttribute('src', srcImageSmall)

	// 2.1 remove all class active
	imageSmallAll.forEach(function (imageSmallElement)
	{
		imageSmallElement.classList.remove('active')
	})

	// 2. chọn ảnh con đang click thêm class active
	clicked.classList.add('active')
}

imageSmallAll.forEach(function (imageSmallElement)
{
	imageSmallElement.addEventListener('click', handleClickShowImage)
})

