const time = document.querySelector('.time');

let hours = 0;
let minutes = 0;
let seconds = 0;

//Stoper function

export const stoper = () => {
    seconds++;
    if(seconds === 60) {
        minutes++;
        seconds = 0;
        if(minutes === 60) {
            hours++
            minutes = 0;
        }
    }
    time.textContent = `${hours < 10 ? '0': ''}${hours}:${minutes < 10 ? '0':''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}