const FLAPPY_LEFT = 250

let SCROLL_SPEED = 0.33
const WIDTH = 1920
const SHAKE = 20
const SHAKE_TIME = 500

function Sprite(path, frames = 1) {
    const files = Array(frames).fill(true).map((_, n) => `${path}${n}.png`)
    return files.map(f => {
        const im = new Image()
        im.src = f
        return im
    })
}

export default class View {
    constructor() {
        this.bg = Sprite('assets/green')
        this.flappy = Sprite('assets/EddieFlap', 4)
        this.brent = Sprite('assets/brent')
        this.beer = Sprite('assets/beer', 3)
        this.empty = Sprite('assets/empty')
    }
    render(game, ctx) {
        
        const flappyFrame = Math.floor(performance.now() / 150) % this.flappy.length
        const flappy = this.flappy[flappyFrame]
        const brent = this.brent[0]
        const empty = this.empty[0]
        const beerFrame = Math.floor(performance.now() / 200) % this.beer.length
        const beer = this.beer[beerFrame]
        const score = game.score()
        const scroll = (game.flappy.x * SCROLL_SPEED) % WIDTH
        const justDied = game.flappy.death > 0 && performance.now() < game.flappy.death + SHAKE_TIME
        ctx.save()
        if (justDied) {
            ctx.translate(Math.random() * SHAKE, Math.random() * SHAKE)
        }
        ctx.drawImage(this.bg[0], -scroll, 0)
        ctx.drawImage(this.bg[0], -scroll + WIDTH, 0)
        ctx.save()
        ctx.translate(FLAPPY_LEFT - game.flappy.x, 0)
        ctx.drawImage(flappy, game.flappy.x - flappy.width * 0.6, game.flappy.y - flappy.height * 0.5)
        game.brents.forEach(s => {
            if (s.x < game.flappy.x - 300 || s.x > game.flappy.x + 2000) return
            ctx.drawImage(brent, s.x - brent.width * 0.5, s.y - brent.height * 0.55)
        })
        game.beers.forEach(c => {
            if (c.collected) {
                ctx.drawImage(empty, c.x - beer.width * 0.5, c.y - beer.height * 0.5)
                return;
            }
            if (c.x < game.flappy.x - 300 || c.y > game.flappy.x + 2000) return
            ctx.drawImage(beer, c.x - beer.width * 0.5, c.y - beer.height * 0.5)
        })
        ctx.restore()
        ctx.fillStyle = '#f99'
        ctx.font = '92px bold verdana'
        ctx.textBaseline = 'top'
        ctx.align = 'left'

        //not started yet
        if (!justDied && !game.started || game.gameOver) {
            ctx.font = '100px bold verdana'
            ctx.fillText('Tap to Flap!', 10, 10);

        }
        //playing
        if (!justDied && game.started && !game.gameOver) {
            ctx.font = '92px bold verdana'
            ctx.fillText(`Beers: ${score}`, 10, 10)
        }

        //dieing 
        if (justDied) {
            ctx.font = '420px bold verdana'
            ctx.fillText('Breeeeent!', 30, 250);
        }

        if (game.started && game.paused) {            
            ctx.font = '420px bold verdana'
            ctx.fillText('Paused!', 300, 350);
        }
        //game over
        if (!justDied && game.started && game.gameOver) {
            this.drawStats(ctx, game)
        }

        ctx.font = '42px bold verdana'
        if (game.flappy.death) {
            const time = game.startTime ? Math.round((game.flappy.death - game.startTime) / 1000) : 0
            ctx.fillText(`Time: ${time}; Flaps ${game.flaps} `, 10, 1020);
        } else {
            const time = game.startTime ? Math.round((performance.now() - game.startTime) / 1000) : 0
            ctx.fillText(`Time: ${time}; Flaps ${game.flaps} `, 10, 1020);

        }

        ctx.font = '92px bold verdana'
        ctx.align = 'right'
        ctx.fillText(`High Score: ${game.stats.highScore}`, 1300, 10)

        ctx.restore()
    }
    drawStats(ctx, game) {
        ctx.save()

        ctx.lineWidth = 4
        ctx.strokeStyle = '#f99'
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        const rectX = 100
        const rectY = 125
        const rectWidth = 1700
        const rectHeight = 880
        this.roundRect(ctx, rectX, rectY, rectWidth, rectHeight, 50, true)
        ctx.beginPath();
        ctx.moveTo(rectX + 35, rectY + 120);
        ctx.lineTo(rectX + rectWidth - 35, rectY + 120);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(rectX + (rectWidth / 2), rectY + 120);
        ctx.lineTo(rectX + (rectWidth / 2), rectY + rectHeight - 50);
        ctx.closePath();
        ctx.stroke();

        ctx.font = '92px bold verdana'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = '#f99'
        ctx.fillText('Brent-tistics:', rectX + (rectWidth / 2), rectY + 70)
        //sub heading
        ctx.font = '62px verdana'
        ctx.fillText('Last Game', rectX + (rectWidth / 4), rectY + 170)
        ctx.fillText('All Time', rectX + ((rectWidth / 4) * 3), rectY + 170)
        //Last game stats
        let centeredX = rectX + (rectWidth / 4)
        ctx.font = '52px verdana'
        ctx.textAlign = 'right'
        ctx.fillText(`Flaps:`, centeredX - 10, rectY + 250)
        ctx.fillText(`Beers:`, centeredX - 10, rectY + 310)
        ctx.fillText(`Time:`, centeredX - 10, rectY + 370)
        ctx.fillText(`Flaps/Min:`, centeredX - 10, rectY + 430)
        ctx.fillText(`Beers/Min:`, centeredX - 10, rectY + 490)
        ctx.fillText(`Died By:`, centeredX - 10, rectY + 550)

        ctx.textAlign = 'left'
        ctx.fillText(`${game.flaps.toLocaleString()}`, centeredX, rectY + 250)
        ctx.fillText(`${game.score().toLocaleString()}`, centeredX, rectY + 310)
        const time = Math.round((game.flappy.death - game.startTime) / 1000)
        ctx.fillText(`${time.toLocaleString()} Secs`, centeredX, rectY + 370)

        const bpm = Math.round(game.score() / (time / 60))
        const fpm = Math.round(game.flaps / (time / 60))
        ctx.fillText(`${fpm.toLocaleString()}`, centeredX, rectY + 430)
        ctx.fillText(`${bpm.toLocaleString()}`, centeredX, rectY + 490)
        ctx.fillText(`${game.flappy.deathBy}`, centeredX, rectY + 550)
        //all time stats
        centeredX = rectX + (rectWidth / 4) * 3
        ctx.font = '52px verdana'
        ctx.textAlign = 'right'
        ctx.fillText(`Games Played:`, centeredX - 10, rectY + 250)
        ctx.fillText(`Flaps Flapped:`, centeredX - 10, rectY + 310)
        ctx.fillText(`Beers Drank:`, centeredX - 10, rectY + 370)
        ctx.fillText(`Time Wasted:`, centeredX - 10, rectY + 430)
        ctx.fillText(`Brents Hit:`, centeredX - 10, rectY + 490)
        ctx.fillText(`Falls Fallen:`, centeredX - 10, rectY + 550)
        ctx.fillText(`Songs Played:`, centeredX - 10, rectY + 610)
        ctx.textAlign = 'left'

        ctx.fillText(`${this.formatNumber(game.stats.brentDeaths + game.stats.fallingDeaths)}`, centeredX, rectY + 250)
        ctx.fillText(`${this.formatNumber(game.stats.flaps)}`, centeredX, rectY + 310)
        ctx.fillText(`${this.formatNumber(game.stats.drinks)}`, centeredX, rectY + 370)

        const hrs = ~~(game.stats.playTime / 3600);
        const mins = ~~((game.stats.playTime % 3600) / 60);
        if (hrs > 1) {
            ctx.fillText(`${hr} Hours ${mins} Mins`, centeredX, rectY + 430)
        } else {
            ctx.fillText(`${mins} Minutes`, centeredX, rectY + 430)
        }

        ctx.fillText(`${this.formatNumber(game.stats.brentDeaths)}`, centeredX, rectY + 490)
        ctx.fillText(`${this.formatNumber(game.stats.fallingDeaths)}`, centeredX, rectY + 550)
        ctx.fillText(`${game.stats.songs.toLocaleString()}`, centeredX, rectY + 610)
        ctx.restore()

    }
    formatNumber(num) {

        if (num > 100000) {
            return (num / 1000).toFixed(2).toLocaleString() + ' K'
        }
        return num.toLocaleString();
    }
    roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke == 'undefined') {
            stroke = true;
        }
        if (typeof radius === 'undefined') {
            radius = 5;
        }
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (stroke) {
            ctx.stroke();
        }
        if (fill) {
            ctx.fill();
        }
    }
}