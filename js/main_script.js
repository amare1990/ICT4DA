let speakers = [
  {
    photo : './images/speakers/speaker-01.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Enterpreneural Legal Studies at harvard Law School',
    guide_bar: '<div class = "guide-bar guide-bar-speakers"> </div>',
    job_description: 'Benklers studies commons-based peer production, and publish his seminal book The wealth of Networks in 2006'
  },
  {
    photo : './images/speakers/speaker03.png',
    name: 'SohYeong Noh',
    title: 'Director of Art centre Nabi and a board member of CC Korea',
    guide_bar: '<div class = "guide-bar guide-bar-speakers"> </div>',
    job_description: 'As the main venue for new media art production in Korea, nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
  },
  {
    photo : './images/speakers/speaker02.png',
    name: 'Kiliniam Kohn',
    title: '',
    guide_bar: '<div class = "guide-bar guide-bar-speakers"> </div>',
    job_description: 'As the main venue for new media art production in Korea, nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
  },
  {
    photo : './images/speakers/speaker05.png',
    name: 'Lila Tritikov',
    title: 'Executive director of the Wikipedia Foundation',
    guide_bar: '<div class = "guide-bar guide-bar-speakers"> </div>',
    job_description: 'As the main venue for new media art production in Korea, nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
  },

  {
    photo : './images/speakers/speaker04.png',
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    guide_bar: '<div class = "guide-bar guide-bar-speakers"> </div>',
    job_description: 'As the main venue for new media art production in Korea, nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
  },
  {
    photo : './images/speakers/speaker3.png',
    name: 'Reyan Merkley',
    title: 'Chief Exective of Creative Commons, ex COO of Mozilla Foundation',
    guide_bar: '<div class = "guide-bar guide-bar-speakers"> </div>',
    job_description: 'As the main venue for new media art production in Korea, nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
  }
]

//const speakersContainer = document.querySelector('.speakers-container');
//const sectionDiv = document.createElement('div');
//sectionDiv.className = "speakers-container";
const cardContainer = document.querySelector('.card-container');

let numSpeakers;
const mediaQuery = window.matchMedia("(max-width: 767.98px)");
if(mediaQuery.matches) {
  numSpeakers = 2; 
}
else{
  numSpeakers = speakers.length;
}

console.log('Total speakers = ', numSpeakers);

for(let i = 0; i < numSpeakers; i++){
  const speakerCard = document.createElement('div');
  speakerCard.className = `card card${i+1}`;
  //console.log(speakerCard);
  speakerCard.innerHTML =  `
    <div class="card-photo card-photo${i+1}">
      <img src="${speakers[i].photo}" alt="">
    </div>
    <div class="card-body">
      <h3>${speakers[i].name}</h3>
      <p class = "speaker-title"> ${speakers[i].title} </p>
      <div class = "guide-bar-speakers"></div>
      <p class = "speaker-job-description"> ${speakers[i].job_description} </p>
    </div>
    </div>`;
    cardContainer.append(speakerCard);
}

const footerSection = document.querySelector('.footer ');
const btnMore = document.querySelector('.see-more-speakers');
btnMore.addEventListener('click', function(){
  for(let i = 2; i < speakers.length; i++){
    const speakerCard = document.createElement('div');
    speakerCard.className = `card card${i+1}`;
    //console.log(speakerCard);
    speakerCard.innerHTML =  `
      <div class="card-photo card-photo${i+1}">
        <img src="${speakers[i].photo}" alt="">
      </div>
      <div class="card-body">
        <h3>${speakers[i].name}</h3>
        <p class = "speaker-title"> ${speakers[i].title} </p>
        <div class = "guide-bar-speakers"></div>
        <p class = "speaker-job-description"> ${speakers[i].job_description} </p>
      </div>
      </div>`;
      cardContainer.append(speakerCard);
      footerSection.style.display = "block";
  }
  btnMore.style.display = "none";
});

//hamburger button Action

const wrapper = document.querySelector('.wrapper');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuMobile = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
console.log(navBar);

const conf = document.querySelector('.conference-description-container');
const programSection = document.querySelector('.main-program');
const speakerSection = document.querySelector('.section-speakers');

hamburger.addEventListener('click', function(){
  //console.log(homeSection, programSection, speakerSection);
  hamburger.style.display = "none";
  closeIcon.style.display = "block";
  programSection.style.display = "none";
  speakerSection.style.display = "none";
  conf.style.display = "none";
  //menuMobile.style.display = "block";
  navBar.style.display = "block";

});

closeIcon.addEventListener('click', function(){
  hamburger.style.display = "block";
  closeIcon.style.display = "none";
  navBar.style.display = "none";
  programSection.style.display = "block";
  speakerSection.style.display = "block";
  conf.style.display = "block";
});