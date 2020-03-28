const word = document.getElementById('word'),
text = document.getElementById('text'),
scoreEl = document.getElementById('score'),
timeEl = document.getElementById('time'),
endgameEl = document.getElementById('end-game-container'),
settingsBtn = document.getElementById('settings-btn'),
settings = document.getElementById('settings'),
settingsForm = document.getElementById('settings-form'),
difficultySelect = document.getElementById('difficulty');
const small = document.getElementById('small');


let words = ['command', 'combine', 'hold', 'overwrite', 'holograph', 'redirect', 'multiple', 'chain', 'together', 'filter', 'adjacent', 'duplicate', 'directory', 'modification', 'combination', 'termination', 'mountain', 'append', 'script', 'expression', 'better', 'separation', 'environment', 'language', 'programming', 'immediately', 'qualification', 'specification', 'operation', 'comparison', 'pagination', 'clarification', 'spontaneous']

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Focus on text on start
text.focus();


//Start counting down
const timeInterval = setInterval(updateTime, 1000);



// Get random word from the words array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}



// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}



// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}



// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';


  if (time === 0) {
    clearInterval(timeInterval);
    // End Game
    gameOver();
  }
}


// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onClick="location.reload()">Reload</button>
  `;

  text.style.display = 'none';
  word.style.display = 'none';
  small.style.display = 'none';
  

  endgameEl.style.display = 'flex';
}




addWordToDOM();


// Event listeners
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    time += 5;

    updateTime();
  }
});