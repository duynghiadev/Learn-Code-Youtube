
export default class Loader {
    constructor(loadingElement, gameElement, onLoaded) {
        this.totalImgs = 0
        this.loadedImgs = 0
        this.loadingElement = loadingElement
        this.gaemElement = gameElement
        this.onLoaded = onLoaded
        this.loadAssets()
    }


    loadAssets() {
        this.loadImg('assets/background0.png')
        this.loadImg('assets/brent0.png')
        this.loadImg('assets/empty0.png')
        this.loadImg('assets/green0.png')
        let i = 0
        for (i = 0; i < 3; i++) { this.loadImg(`assets/beer${i}.png`) }
        for (i = 0; i < 4; i++) { this.loadImg(`assets/EddieFlap${i}.png`) }
        for (i = 0; i < 3; i++) { this.loadImg(`assets/beer${i}.png`) }

    }
    loadImg(a) {
        this.totalImgs++
        const im = new Image()
        im.src = a
        im.onload = () => this.imagesLoaded()
    }
    imagesLoaded() {
        this.loadedImgs++;
        if (this.loadedImgs === this.totalImgs) {
            this.onLoaded()
        }
    }

}
