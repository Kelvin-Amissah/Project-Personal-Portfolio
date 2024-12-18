
const hamburgerButton = document.querySelector('.nav');


const navigationMenu = document.querySelector('.nav ul');


hamburgerButton.addEventListener('click', () => {
 
  navigationMenu.classList.toggle('show');
});