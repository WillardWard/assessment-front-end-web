console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function mouseImg(evt){
	evt.preventDefault();
	alert('You have a beautiful smile!')
}

let img = document.querySelector('img');

img.addEventListener('mouseover', mouseImg);