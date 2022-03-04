const btnStart = document.querySelector('button.startGame');
const btnReset = document.querySelector('button.reset');
const crossSign = document.querySelector('.cross');
const circleSign = document.querySelector('.circle');
const boxesGame = document.querySelectorAll('.boxGame');
const boxesGameImg = document.querySelectorAll('.boxGame img');
let crossScore = [];
let circleScore = [];


function listenBoxCross(e) {
    console.log('igttt')
    let item = e.target;
    boxesGameImg.forEach(boxImg => {
        if ((item.dataset.id == boxImg.dataset.idimg) && (boxImg.classList.contains('boxCross'))) {
            crossScore.push(Number(item.dataset.id))
            boxImg.classList.add('active');
            boxesGame.forEach(box => {
                box.removeEventListener('click', listenBoxCross)
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

        alert('x win')
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

        alert('o win')

    }
}

function checkBoxCross() {
    console.log('git')
    boxesGame.forEach(box => {
        box.addEventListener('click', listenBoxCross)
    })

}

function checkBoxCircle() {
    boxesGame.forEach(box => {
        box.addEventListener('click', listenBoxCircle)
    })
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
}

btnStart.addEventListener('click', game);