
const players = ['sachin', 'virat', 'dhoni','yuvi']
const indices = [1,3]

function arrayExcept(players, indices) {
   const player = players.map(play =>{
        return play[1,3]
    })   
    return player
    }

console.log(arrayExcept(players, indices)) // ['sachin','dhoni']
