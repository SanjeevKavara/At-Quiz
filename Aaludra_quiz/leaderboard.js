
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const firstContainer = document.querySelector('.crown_container');
const secondContainer = document.querySelector('.crown_silver_container');
const thirdContainer = document.querySelector('.crown_bronze_container');
const scoreContainer = document.querySelector('.score_container');



document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.querySelector('.backQuiz');
    backBtn.addEventListener('click', loginPage);

    function loginPage() {
        window.location.href = './index.html';
    }
});



const leader = () => {




    const rawArray = localStorage.getItem('leaderboard') //getting the leaderboard array from localstorage
    const parsedArray = JSON.parse(rawArray); //converting it to JSON

    parsedArray.sort((a, b) => b.score - a.score); //sorting the leaderboard array

    if (parsedArray.length >= 1)
        first.innerHTML = `${parsedArray[0].name} --> ${parsedArray[0].score}/15`;
    else
        firstContainer.style.display = 'none';

    if (parsedArray.length >= 2)
        second.innerHTML = `${parsedArray[1].name} --> ${parsedArray[1].score}/15`;
    else
        secondContainer.style.display = 'none';

    if (parsedArray.length >= 3)
        third.innerHTML = `${parsedArray[2].name} --> ${parsedArray[2].score}/15`;
    else
        thirdContainer.style.display = 'none';


    let cntr = 0;

    console.log(parsedArray)
    parsedArray.forEach((x) => {

        if (cntr++ > 2) {
            scoreContainer.innerHTML += `
            <div class="score_sub_container">
            <div class="rank">
              ${cntr}
            </div>
            <div class="name">
              ${x.name}
            </div>
            <div class="score"><b>${x.score}/15</b></div>

          </div>        `
        }

        // lead.innerHTML += `<li>${x.name} -- ${x.score}</li>`

    })

   
}








leader()