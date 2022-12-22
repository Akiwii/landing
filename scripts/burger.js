let nav = document.querySelector('#nav');
let burg = document.querySelector("#burger");
burg.onclick = function(){
	nav.classList.toggle('active');
	burg.classList.toggle('active-btn');
}