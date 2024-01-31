// Used only at largest breakpoint
let travelingRight = true
let travelingDown = true
const symbol = document.querySelector('.symbol')
const cssVars = document.documentElement.style
cssVars.setProperty('--translateX', '0px')
cssVars.setProperty('--translateY', '0px')

const getRootX = () => parseFloat(cssVars.getPropertyValue('--translateX'))
const getRootY = () => parseFloat(cssVars.getPropertyValue('--translateY'))

setInterval(() => {
	if (window.innerWidth >= 1920) {
		const symbolCoords = symbol.getBoundingClientRect()

		const isAtTop = symbolCoords.top <= 1
		const isAtRight = (symbolCoords.right) >= (window.innerWidth - 1)
		const isAtBottom = (symbolCoords.bottom) >= (window.innerHeight - 1)
		const isAtLeft = symbolCoords.left <= 1
	
		if (isAtTop) {
			travelingDown = true
		} else if (isAtBottom) {
			travelingDown = false
		}
		
		if (isAtRight) {
			travelingRight = false
		} else if (isAtLeft) {
			travelingRight = true
		}

		const newX = travelingRight ? getRootX() + 5 : getRootX() - 5
		const newY = travelingDown ? getRootY() + 5 : getRootY() - 5
		
		cssVars.setProperty('--translateX', newX + 'px')
		cssVars.setProperty('--translateY', newY + 'px')
	}
}, 40)


// Resize observer, just to keep animations synced during resizes.
const onResize = () => {
	symbol.style.animationPlayState = 'paused'
	
	setTimeout(() => { 
		symbol.style.animationPlayState = 'running'
	}, 200)
}

const observer = new ResizeObserver(onResize)
observer.observe(document.querySelector('body'))