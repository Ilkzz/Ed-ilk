const navbar = document.getElementById('navbar');
const navContainer = document.getElementById('nav-container');
const navA = document.getElementsByClassName('nav-a');
const logoText = document.querySelectorAll('.st1');
const navArr = Array.from(navA);
let scrolled = false;

const mainMenu = document.querySelector('.main-menu');

window.onscroll = () => {
    if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        setTimeout(() => {
            logoText.forEach((logo => {
                logo.style.fill = '#ffffff';
            }));
            navContainer.style.marginTop = "2rem";
            navbar.style.minHeight = "10vh";
            navbar.style.zIndex = '1000';
            navArr.forEach((nav) => {
                nav.style.color = '#f4f4f4';
            });
            // openMenu.style.color = '#fff';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        setTimeout(() => {
            logoText.forEach((logo => {
                logo.style.fill = '#333';
            }));
            navContainer.style.marginTop = "4rem";
            navbar.style.minHeight = "15vh";
            navArr.forEach((nav) => {
                nav.style.color = '#13212e';
            });
            // openMenu.style.color = '#333';
            scrolled = false;
        }, 200);

    }
};