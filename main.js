// menu code
const blackBox = document.querySelector('.black-box');
const menuIcon = document.querySelector('.mobile-menu-icon');
const navegationMenu = document.querySelector('.main-header nav ul');
let navegationOpen = false;


menuIcon.addEventListener('click', toggleMenu);
blackBox.addEventListener('click', toggleMenu);

function toggleMenu(){

    navegationOpen = !navegationOpen;
    navegationMenu.style.transform = navegationOpen ? 'translate(0)' : 'translate(-100%) ';
    blackBox.style.display = navegationOpen ? 'block' : 'none';
    blackBox.style.zIndex = navegationOpen ? '0' : '-10';

    setTimeout(()=> {
        
        blackBox.style.opacity = navegationOpen ? '0.6' : '0';

    }, 0);
   
}


// change coffee code
const coffees = document.querySelectorAll('.cup');
const circle = document.querySelector('.landign-circle');
const selectedCoffe = document.querySelector('.selectedCoffe');

coffees.forEach(coffee => coffee.addEventListener('click', changeCoffe));

function changeCoffe() {

    selectedCoffe.setAttribute('src', `imgs/${this.id}.png`);

    if(this.id == 'coffee1') {
        circle.style.background = '#00704a';
    } else if (this.id == 'coffee2') {
        circle.style.background = '#f64a8a';
    } else {
        circle.style.background = '#c947f5';
    }

};

// window resise event
window.addEventListener('resize', ()=> {

    if(window.innerWidth > 730) {
        navegationOpen = false;
        navegationMenu.style.transform = 'translate(0)';
        blackBox.style.display = 'none';
        blackBox.style.opacity = '0';
    } 
    else if(window.innerWidth < 730 && navegationOpen == false) {
        navegationMenu.style.transform = 'translate(-100%)';
    } 

});