//https://github.com/yunshaoyy
document.addEventListener('keydown', function (event) {
    if (event.key === 'PageUp') {
        const upEvent = new KeyboardEvent('keydown', {
            key: 'ArrowUp',
            code: 'ArrowUp',
            keyCode: 38,
            charCode: 0,
            bubbles: true,
            cancelable: true,
        });
        document.dispatchEvent(upEvent);
        event.preventDefault();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'PageUp') {
        const upEvent = new KeyboardEvent('keyup', {
            key: 'ArrowUp',
            code: 'ArrowUp',
            keyCode: 38,
            charCode: 0,
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(upEvent);
        event.preventDefault();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'PageDown') {
        const downEvent = new KeyboardEvent('keydown', {
            key: 'ArrowDown',
            code: 'ArrowDown',
            keyCode: 40,
            charCode: 0,
            bubbles: true,
            cancelable: true,
        });
        document.dispatchEvent(downEvent);
        event.preventDefault();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'PageDown') {
        const upEvent = new KeyboardEvent('keyup', {
            key: 'ArrowDown',
            code: 'ArrowDown',
            keyCode: 40,
            charCode: 0,
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(upEvent);
        event.preventDefault();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        upKeyPressed = true;
        event.preventDefault();
        window.close();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowUp') {
        upKeyPressed = false;
        event.preventDefault();
    }
});

/*
let isChecking = false; 
const targetStrings = [''];
function checkForStrings() {
    const bodyText = document.body.innerText;
    const foundString = targetStrings.find(target => bodyText.includes(target));
    if (foundString) {
        if (!isChecking) {
            isChecking = true;
            setTimeout(() => {
                const newBodyText = document.body.innerText;
                const stillFound = targetStrings.find(target => newBodyText.includes(target));
                if (stillFound) {
                    closewindow()
                } else {
                    isChecking = false; 
                }
            }, 5000);
        }
    }
}
    
window.onload = function () {
    setInterval(checkForStrings, 1000);
};

function closewindow() {
    window.close()
}
*/

const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
  closeWindow: () => ipcRenderer.send('close-app')
});