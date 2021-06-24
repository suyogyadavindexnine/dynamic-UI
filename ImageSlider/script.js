let count = 0;

let srcimage = document.getElementById("srcimage");
let prevbtn = document.getElementById("prevbtn");
let nextbtn = document.getElementById("nextbtn");

nextbtn.onclick = () => {
    if (count == 2) {
        count = 0;
    } else {
        count++;
    }
    changeImg();
}

prevbtn.onclick = () => {
    if (count == 0) {
        count = 2;
    } else {
        count--;
    }
    changeImg();
}

function changeImg() {
    switch (count) {
        case 0:
            srcimage.src = './assets/rock.jpeg';
            break;
        case 1:
            srcimage.src = './assets/paper.jpeg';
            break;
        case 2:
            srcimage.src = './assets/scissors.jpeg';
            break;
    }
}