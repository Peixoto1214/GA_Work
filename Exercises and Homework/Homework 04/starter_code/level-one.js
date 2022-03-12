/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');
//add a victory annoucement 
function declareWinner() {
  document.body.classList.add('game-over');
}
//increase score with every click inside dot
ballEl.addEventListener('click', function(){
  score +=10;

if (score < 100) {
   scoreEl.innerText = score;
} else { declareWinner();
}
});

