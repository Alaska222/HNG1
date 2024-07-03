let currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]')
console.log(currentTimeUTC);

function setTime(){
    let today = new Date();
    let day = today.getDay();

    let hour = today.getUTCHours();
    let minute = today.getMinutes()
    let seconds = today.getSeconds()
    let amPm = hour< 12 ? 'am' : 'pm'

    currentTimeUTC.textContent = 'Current UTC Time' +  `${day}:  ${hour}: ${minute}: ${seconds}: ${amPm}`
}

setInterval(setTime,1000)


let today = new Date();

let day = today.getDay();

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = daysOfWeek[day];

document.querySelector('[data-testid="currentDay"]').textContent = "Today is: " + currentDay;
