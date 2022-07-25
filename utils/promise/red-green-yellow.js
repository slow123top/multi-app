const task = (timer, light) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') {
                red()
            }
            else if (light === 'green') {
                green()
            }
            else if (light === 'yellow') {
                yellow()
            }
            resolve()
        }, timer)
    })
function step() {
    task(3000, 'red')
        .then(() => task(1000, 'green'))
        .then(() => task(1000, 'yellow'))
        .then(step)
}

function red() {
    console.log('红灯亮了');
}

function green() {
    console.log('绿灯亮了');
}

function yellow() {
    console.log('黄灯亮了');
}
step();


