import { timerSchedule } from "./events.js";

const timerCounter = document.querySelector(".timer_counter");


export function setTime (e) 
{
    const value = parseInt(e.target.textContent);
    if (value === 5 || value === 10 || value === 15 || value === 20) timerCounter.innerHTML = `${value}:00`
}


export function countDown () 
{
    let startingMinutes = Math.round(parseInt(timerCounter.innerHTML.trim(":"))*1);
    let time = startingMinutes * 60;

    const interval = setInterval(() => {
        
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        timerCounter.textContent = `${minutes}:${seconds}`;
    
        time--;

        if (time < 0) {
            clearInterval(interval);
            timerCounter.textContent = "0:00";
        }

    }, 1000);

    if(interval) 
    {
        document.querySelector(".timer_btn").removeEventListener("click", countDown) 
        timerSchedule.forEach(item => {
            item.removeEventListener("click", setTime);
        });
    }
}