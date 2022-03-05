const btnStart = document.querySelector('button.startGame');
const btnReset = document.querySelector('button.reset');
const crossSign = document.querySelector('.cross');
const circleSign = document.querySelector('.circle');
const boxesGame = document.querySelectorAll('.boxGame');
const boxesGameImg = document.querySelectorAll('.boxGame img');
const asideScore = document.querySelector('aside.score');
const asideScoreh2 = document.querySelector('aside.score h2');
const btnAside = document.querySelector('aside.score button');
let flagCross = false;
let falgCircle = false;
let crossScore = [];
let circleScore = [];


function listenBoxCross(e) {

    let item = e.target;
    boxesGameImg.forEach(boxImg => {
        if ((item.dataset.id == boxImg.dataset.idimg) && (boxImg.classList.contains('boxCross'))) {
            crossScore.push(Number(item.dataset.id))
            boxImg.classList.add('active');
            boxesGame.forEach(box => {
                box.removeEventListener('click', listenBoxCross);
                crossSign.classList.remove('active');
                flagCross = false;
            })
        }

    })

    if (
        ((crossScore.includes(1)) && (crossScore.includes(2)) && (crossScore.includes(3))) ||
        ((crossScore.includes(1)) && (crossScore.includes(4)) && (crossScore.includes(7))) ||
        ((crossScore.includes(1)) && (crossScore.includes(5)) && (crossScore.includes(9))) ||
        ((crossScore.includes(2)) && (crossScore.includes(5)) && (crossScore.includes(8))) ||
        ((crossScore.includes(3)) && (crossScore.includes(6)) && (crossScore.includes(9))) ||
        ((crossScore.includes(3)) && (crossScore.includes(5)) && (crossScore.includes(7))) ||
        ((crossScore.includes(4)) && (crossScore.includes(5)) && (crossScore.includes(6))) ||
        ((crossScore.includes(7)) && (crossScore.includes(8)) && (crossScore.includes(9)))

    ) {

        asideScoreh2.textContent = "Cross Win!!!"
        asideScore.classList.add('active');
    }


}

function listenBoxCircle(e) {

    let item = e.target;

    boxesGameImg.forEach(boxImg => {
        if ((item.dataset.id == boxImg.dataset.idimg) && (boxImg.classList.contains('boxCircle'))) {
            circleScore.push(Number(item.dataset.id))
            boxImg.classList.add('active');
            boxesGame.forEach(box => {
                box.removeEventListener('click', listenBoxCircle)
                circleSign.classList.remove('active');
                falgCircle = false
            })
        }
    })

    if (
        ((circleScore.includes(1)) && (circleScore.includes(2)) && (circleScore.includes(3))) ||
        ((circleScore.includes(1)) && (circleScore.includes(4)) && (circleScore.includes(7))) ||
        ((circleScore.includes(1)) && (circleScore.includes(5)) && (circleScore.includes(9))) ||
        ((circleScore.includes(2)) && (circleScore.includes(5)) && (circleScore.includes(8))) ||
        ((circleScore.includes(3)) && (circleScore.includes(6)) && (circleScore.includes(9))) ||
        ((circleScore.includes(3)) && (circleScore.includes(5)) && (circleScore.includes(7))) ||
        ((circleScore.includes(4)) && (circleScore.includes(5)) && (circleScore.includes(6))) ||
        ((circleScore.includes(7)) && (circleScore.includes(8)) && (circleScore.includes(9)))


    ) {
        asideScoreh2.textContent = "Circle Win!!!"
        asideScore.classList.add('active')
    }
}

function checkBoxCross() {
    crossSign.classList.add('active');
    flagCross = true;
    if (flagCross == falgCircle) {
        return crossSign.classList.remove('active');
    }
    boxesGame.forEach(box => {
        box.addEventListener('click', listenBoxCross)
    })


}

function checkBoxCircle() {
    circleSign.classList.add('active');
    falgCircle = true;
    if (flagCross == falgCircle) {
        return circleSign.classList.remove('active');
    }
    boxesGame.forEach(box => {
        box.addEventListener('click', listenBoxCircle)
    })
}

function playAgainGame() {
    asideScore.classList.remove('active')
}

function clearBoard() {
    boxesGameImg.forEach(boxImg => {
        boxImg.classList.remove('active')
    })

    crossScore = [];
    circleScore = [];

}

function game() {
    crossSign.addEventListener('click', checkBoxCross);
    circleSign.addEventListener('click', checkBoxCircle);
    btnReset.addEventListener('click', clearBoard);
    btnAside.addEventListener('click', playAgainGame);

}

btnStart.addEventListener('click', game);