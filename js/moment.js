const futureDate = new Date("February 05 2018 16:00")
const today = new Date()
const msPerDay = 86400000
const msPerHour = 3600000
const msPerMinute = 60000
const msPerSecond = 1000
let days, hours, minutes, seconds


remainder = (futureDate - today);
[days, remainder] = [Math.floor(remainder / msPerDay), remainder % msPerDay];
[hours, remainder] = [Math.floor(remainder / msPerHour), remainder % msPerHour];
[minutes, remainder] = [Math.floor(remainder / msPerMinute), remainder % msPerMinute];
seconds = Math.floor(remainder / msPerSecond);

setInterval(() => {
    if (seconds === 0) {
        seconds = 59
        minutes--
        if (minutes === 0) {
            minutes = 59
            hours--
            if (hours === 0) {
                hours = 23
                days--
            }
        }
    } else {
        seconds--
    }
    document.getElementById("minutes").textContent = ` ${minutes} Minutes`
    document.getElementById("hours").textContent = ` ${hours} Hours`
    document.getElementById("days").textContent = ` ${days} Days`
    document.getElementById("seconds").textContent = ` ${seconds} Seconds`
}, 1000)