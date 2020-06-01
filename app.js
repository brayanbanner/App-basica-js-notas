const body = document.querySelector('body');
const swicth = document.querySelector('.swicth');

if(localStorage.getItem('dark') == 0){
	swicth.classList.add('dark');
	body.classList.add('dark');
}else {
	swicth.classList.remove('dark');
	body.classList.remove('dark');
}

swicth.addEventListener('click', dark2)

function dark2(){
	localStorage.setItem('dark', document.querySelector('body').classList.length)
	swicth.classList.toggle('dark');
	body.classList.toggle('dark');
}

document.querySelector('.btnToggle').addEventListener('click', function(){
	document.querySelector('.sidebar').classList.toggle('left');
});