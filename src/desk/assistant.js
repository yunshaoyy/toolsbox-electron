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
    const gaokaotime = document.getElementById("gaokaosimple").innerText;
    const currentTime = new Date();
    const now = `${padZero(currentTime.getHours())}:${padZero(currentTime.getMinutes())}`;
    classTimes.forEach(classTime => {
        if (now === classTime.startTime) {
            const msg = new SpeechSynthesisUtterance(`上课时间到了。${gaokaotime}`);
            speechSynthesis.speak(msg);
        }
        if (now === classTime.endTime) {
            const endMsg = new SpeechSynthesisUtterance(`下课时间到了。${gaokaotime}`);
            speechSynthesis.speak(endMsg);
        }
    });
}

// 补充零的辅助函数
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

setInterval(startAutoSpeech, 60000);

setTimeout(load, 1000);
//延迟加载，防出错
function load() {
    let xianzai = new Date();
    document.getElementById("assistant").innerHTML = "高考倒计时与上下课播报已于" + xianzai.getFullYear() + "年" + (xianzai.getMonth() + 1) + "月" + xianzai.getDate() + "日" + xianzai.getHours() + "时" + xianzai.getMinutes() + "分" + xianzai.getSeconds() + "秒加载";
}