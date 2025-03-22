//https://github.com/yunshaoyy
const classTimes = [
    { startTime: "08:10", endTime: "08:55" },
    { startTime: "09:05", endTime: "09:50" },
    { startTime: "10:15", endTime: "11:00" },
    { startTime: "11:10", endTime: "11:45" },
    { startTime: "14:10", endTime: "14:50" },
    { startTime: "15:00", endTime: "15:40" },
    { startTime: "15:50", endTime: "16:30" },
    { startTime: "16:40", endTime: "17:20" },
    { startTime: "18:20", endTime: "22:20" }
];

function startAutoSpeech() {
    const gaokaotime = document.getElementById("gaokao").innerText;
    const currentTime = new Date();
    const now = `${padZero(currentTime.getHours())}:${padZero(currentTime.getMinutes())}`;
    classTimes.forEach(classTime => {
        if (now === classTime.startTime) {
            const msg = new SpeechSynthesisUtterance(`上课时间到。${gaokaotime}`);
            speechSynthesis.speak(msg);
        }
        if (now === classTime.endTime) {
            const endMsg = new SpeechSynthesisUtterance(`下课时间到。${gaokaotime}`);
            speechSynthesis.speak(endMsg);
        }
    });
}

// 补充零的辅助函数
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

setInterval(startAutoSpeech, 60000);

loadtts();
function loadtts() {
    const loadttstext = new SpeechSynthesisUtterance(`${gaokaotime}`);
    speechSynthesis.speak(loadttstext);
}