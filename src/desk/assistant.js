const classTimes = [
    { startTime: "08:10", endTime: "08:55" },
    { startTime: "09:05", endTime: "09:50" },
    { startTime: "09:50", endTime: "10:15" },
    { startTime: "11:10", endTime: "11:45" },
    { startTime: "14:10", endTime: "14:50" },
    { startTime: "15:00", endTime: "15:40" },
    { startTime: "15:50", endTime: "16:30" },
    { startTime: "16:40", endTime: "17:20" },
    { startTime: "18:20", endTime: "21:50" },
    //{ startTime: "23:10", endTime: "23:12" }
];

function startAutoSpeech() {
    const currentTime = new Date();
    const now = `${padZero(currentTime.getHours())}:${padZero(currentTime.getMinutes())}`;
    classTimes.forEach(classTime => {
        if (now === classTime.startTime) {
            const msg = new SpeechSynthesisUtterance("上课时间已到，上课时间已到");
            speechSynthesis.speak(msg);
        }
        if (now === classTime.endTime) {
            const endMsg = new SpeechSynthesisUtterance("下课时间已到，老师，您辛苦了");
            speechSynthesis.speak(endMsg);
        }
    });
}

// 补充零的辅助函数
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

function welcome() {
    const utterance = new SpeechSynthesisUtterance("欢迎使用");
    speechSynthesis.speak(utterance);
}

welcome();
startAutoSpeech();
setInterval(startAutoSpeech, 60000);