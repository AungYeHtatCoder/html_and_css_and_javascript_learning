'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelector('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++){
	btnOpenModal[i].addEventListener('click', function() {
		document.querySelector('.modal').classList;
	});

}

btnCloseModal.addEventListener('click', function() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
});

const openModal = function() {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

for (let i = 0; i <btnOpenModal.length; i++) {
	btnOpenModal[i].addEventListener('click',openModal);
}

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('Keydown'(e) {
	console.log(e);
	if (e.key === 'Escape') {
		if (closeModel.classList.contains('hidden')) {
			closeModel();
		}
	}
});
