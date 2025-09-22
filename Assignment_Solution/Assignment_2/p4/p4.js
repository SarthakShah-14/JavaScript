let alarmTime = null;
let alarmTimeout;

function updateCurrentTime() {
    const now = new Date();
    document.getElementById("current-time").innerText = now.toLocaleTimeString();
    
    if (alarmTime && now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) === alarmTime) {
        alert("Alarm Ringing!");
        alarmTime = null;
    }
}

function setAlarm() {
    alarmTime = document.getElementById("alarm-time").value;
    if (!alarmTime) {
        alert("Please set a valid alarm time.");
        return;
    }
    alert("Alarm set for " + alarmTime);
}

function clearAlarm() {
    if (!alarmTime) {
        alert("No alarm is set to clear.");
        return;
    }
    alarmTime = null;
    alert("Alarm cleared.");
}

setInterval(updateCurrentTime, 1000);