const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');


const conf = document.querySelector('.conference-description-container');
const pastGSummit = document.querySelector('.past-global-summit');
//const speakerSection = document.querySelector('.section-speakers');
const navBar = document.querySelector('.navbar');
const partnersAbout = document.querySelector('.section-partners-about');
const footerAbout = document.querySelector('footer');

function mobileMenuAction(){
  hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    closeIcon.style.display = 'block';
    pastGSummit.style.display = "none";
    //speakerSection.style.display = "none";

    conf.style.display = "none";
    navBar.style.display = "block";
    partnersAbout.style.display = "none";
    footerAbout.style.display = "none";
  });

  closeIcon.addEventListener('click', () => {
    closeIcon.style.display = "none";
    hamburger.style.display = "block";
    
    navBar.style.display = "none";
    pastGSummit.style.display = "block";
    //speakerSection.style.display = "block";
    conf.style.display = "block";
    partnersAbout.style.display = "block";
    footerAbout.style.display = "block";
  });
}

  mobileMenuAction();



