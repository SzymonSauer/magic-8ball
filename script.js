const questionArea = document.querySelector('.question-area');
const ball = document.querySelector('.ball-img');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const ballBtn = ball.firstElementChild;
const input = questionArea.firstElementChild.nextElementSibling;
const answers = [
	'It is certain.',
	'It is decidedly so.',
	'Without a doubt.',
	'Yes definitely.',
	'You may rely on it.',
	'As I see it, yes.',
	'Most likely.',
	'Outlook good.',
	'Yes.',
	'Signs point to yes.',
	'Reply hazy, try again.',
	'Ask again later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',
	"Don't count on it.",
	'My reply is no.',
	'My sources say no.',
	'Outlook not so good.',
	'Very doubtful.',
];
const randomIndexValue = (Math.random() * answers.length).toFixed(0);
const showAnswer = () => {
	const randomIndexValue = (Math.random() * answers.length).toFixed(0);

	if (randomIndexValue == Math.max(answers.length)) {
		randomIndexValue--;
	}

	answer.textContent = `${answers[randomIndexValue]}`;
};

const addAnimationClass = () => {
	ball.firstElementChild.classList.add('shake-animation');
};

const removeAnimationClass = () => {
	ball.firstElementChild.classList.remove('shake-animation');
};

const ballAnimation = () => {
	addAnimationClass();
	setTimeout(removeAnimationClass, 1500);
};

const main = (input) => {
	if (input.value == '') {
		error.textContent = 'You have to ask the question.';
		error.style.display = '';
		answer.textContent = '';
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent =
			'You must put a question mark at the end of the question.';
		error.style.display = '';
		answer.textContent = '';
	} else {
		error.style.display = 'none';
		showAnswer();
	}
};

ballBtn.addEventListener('click', function () {
	ballAnimation();
	main(input);
});
