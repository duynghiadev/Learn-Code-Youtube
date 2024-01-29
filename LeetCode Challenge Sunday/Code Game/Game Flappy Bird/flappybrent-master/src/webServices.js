const FLAPPY_API = 'https://flappybrent.azurewebsites.net/api'
export default class WebServices {
    constructor() {

    }

    async RandomUserNameAsync() {
        try {
            const response = await fetch('https://randomuser.me/api/?inc=name&nat=us,dk,fr,gb,es')
            const data = await response.json()                        
            const name = `${data.results[0].name.first} ${data.results[0].name.last}`
            return name
        } catch (error) {
            console.error(error)
            console.error('Erroring making a stupid name for you.')
            return "Breeeeeeent"
        }

    }

    async PostUserScore(data) {
        try {
            const response = await fetch(`${FLAPPY_API}/player/stats`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(data)
            })
            const json = await response.json()            
            return json
        } catch (error) {
            alert("Erroring sending your score.. Did Brent build the backend?")
            console.error(error)            
        }

    }
}