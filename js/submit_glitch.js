const buttonSplit = document.querySelector('.submit')
const letters = document.querySelectorAll('.letters-list li')
const lettersArray = Array.from(letters)
const ANIMATION_TIMEOUT = 300;
const LETTER_TIMEOUT = 50;
const SUB_LETTER_TIMEOUT = 150;

let letterTimeoutId = null;
let subLetterTimeoutIt = null;

buttonSplit.addEventListener('mouseenter', function(event) {
	lettersArray.forEach((letter, index) => {
  	const renderLetter = [ 
    	...JSON.parse(letter.dataset.letters),
    	letter.dataset.initial
    ];
       
    letterTimeoutId = setTimeout(function() {
    	renderLetter.forEach((char, index) => {
        subLetterTimeoutIt = setTimeout(() => {
        	letter.textContent = char
        }, index * SUB_LETTER_TIMEOUT)
      })
    }, ANIMATION_TIMEOUT + index * LETTER_TIMEOUT)
	})
});

buttonSplit.addEventListener('mouseleave', function(event) {
	lettersArray.forEach(letter => letter.textContent = '');
  clearTimeout(letterTimeoutId);
  clearTimeout(subLetterTimeoutIt);
});