const quesCount = document.getElementById('quesCount');
const question = document.getElementById('question');
const options = document.getElementById('options');
const option = document.querySelectorAll('.option');
const option0 = document.getElementById('option0');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const next = document.querySelector('.next');
const scoreboard = document.getElementById('scoreboard');
const quizContainer = document.querySelector('.questions');

let i = 1;
let score = 0;
let questionBank = [];


//Shuffle the option array
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};


const displayQuestion = (questionBank) => {



    const optionarray = [...questionBank[i - 1].wrong_answer]
    optionarray.push(questionBank[i - 1].correct_answer)  // inserting the correct answer in the array

    const shuffleOption = shuffle(optionarray) //shuffling the array


    question.innerHTML = 'Q.' + (i) + ' ' + questionBank[i - 1].question;
    option0.innerHTML = shuffleOption[0];
    option1.innerHTML = shuffleOption[1];
    option2.innerHTML = shuffleOption[2];
    option3.innerHTML = shuffleOption[3];
    quesCount.innerHTML = "Question" + ' ' + (i) + ' ' + 'of' + ' ' + questionBank.length;


}
const currObj = {
    'name': localStorage.getItem('name'),
    'score': 0
}
//storing the users
const userinfo = localStorage.getItem('leaderboard')
const users = JSON.parse(userinfo); //string to JSON

//function to calculate scores
function calcScore(e) {
    

    if (e.innerHTML == questionBank[i-1].correct_answer && score < questionBank.length) {
        score = score + 1;
        currObj.score = score;
       

    }
    console.log(e.innerHTML +'---'+ score);

    setTimeout(nextQuestion, 300);
}

function nextQuestion() {
    if (i < questionBank.length) {
        i = i + 1;
        if (i >= questionBank.length)
            next.innerText = 'Show LeaderBoard';

        // console.log(i);
        displayQuestion(questionBank);
    }
    else {
        // points.innerHTML = score + '/' + questionBank.length;


        users.push(currObj) //push current user into the leaderboard array
        const jsonarray = JSON.stringify(users) // stringify it to change it to string format for storing it in local storage
        localStorage.setItem('leaderboard', jsonarray) //seting the array as value for leaderboard key in local storage
        // leader()
        
        window.location.href = './leaderboard.html';
       
    }
}



next.addEventListener('click', nextQuestion);



const ques = () => {
    fetch('http://localhost:8080/Quiz')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            questionBank = []
            questionBank = [...data]



            console.log(questionBank)
            displayQuestion(questionBank)
        })
}




ques();