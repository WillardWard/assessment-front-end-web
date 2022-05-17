let favColor = document.querySelector('#color');
let favPlace = document.querySelector('#place');
let favRitual = document.querySelector('#ritual');

function alertColor(evt) {
	evt.preventDefault();
	
	alert('Black');
}

function alertPlace(evt) {
	evt.preventDefault();
	
	alert('Tokyo');
}

function alertRitual(evt) {
	evt.preventDefault();
	
	alert('Meditate');
}

favColor.addEventListener('click', alertColor);
favPlace.addEventListener('click', alertPlace);
favRitual.addEventListener('click', alertRitual);

