
// 固定的上课和下课时间（每节课）
const classTimes = [
    { startTime: "08:10", endTime: "08:55" },
    { startTime: "09:05", endTime: "09:50" },
    { startTime: "09:50", endTime: "10:15" },
    { startTime: "10:15", endTime: "11:00" },
    { startTime: "11:10", endTime: "11:45" },
    { startTime: "14:10", endTime: "14:50" },
    { startTime: "15:00", endTime: "15:40" },
    { startTime: "15:50", endTime: "16:30" },
    { startTime: "16:40", endTime: "17:20" },
    { startTime: "18:20", endTime: "21:50" }
];
// 自动定时播报
function startAutoSpeech() {
    setInterval(() => {
        const currentTime = new Date();
        const now = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

        // 遍历固定的课程时间
        classTimes.forEach(classTime => {
            // 上课时间播报
            if (now === classTime.startTime) {
                const msg = new SpeechSynthesisUtterance("上课时间已到，上课时间已到");
                window.speechSynthesis.speak(msg);
            }
            // 下课时间播报
            if (now === classTime.endTime) {
                const endMsg = new SpeechSynthesisUtterance("下课时间已到，老师，您辛苦了");
                window.speechSynthesis.speak(endMsg);
            }
        });
    }, 60000);  // 每60秒检测一次
}
function welcome() {
    //tts
    const utterance = new SpeechSynthesisUtterance("欢迎使用");
    speechSynthesis.speak(utterance);
}
welcome();