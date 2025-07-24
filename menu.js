const burgerNav =document.querySelector(' header .burger-nav');
const navList=document.querySelector('header nav ul');
burgerNav.addEventListener('click', ()=>{
	navList.classList.toggle('open');
});
