let hamburger = document.getElementById('ham');
let links = document.getElementById('links');
let exit = document.getElementById('exit');
let linksOpen = document.getElementById('linksOpen');
let lineOpen = document.getElementById('lineOpen');
let iconsOpen = document.getElementById('iconsOpen');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');

function toggleOn(){
  links.style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
  links.style.transform = 'translate(0, 0)';
  linksOpen.style.opacity = 1;
  lineOpen.style.opacity = 1;
  iconsOpen.style.opacity = 1;
  line1.style.transform = 'rotate(45deg)';
  line2.style.transform = 'rotate(-45deg)';
  links.style.transitionDelay = '0s';
  line1.style.transitionDelay = '1s'
  line2.style.transitionDelay = '1s'
  line1.style.opacity = 1;
  line2.style.opacity = 1;
  linksOpen.style.transitionDelay = '.5s';
  lineOpen.style.transitionDelay = '.5s';
  iconsOpen.style.transitionDelay = '.5s';
}

function toggleOff(){
  links.style.visibility = 'hidden';
  links.style.transform = 'translate(-100%, 0)';
  links.style.transitionDelay = '1s';
  linksOpen.style.transitionDelay = '.5s';
  lineOpen.style.transitionDelay = '.5s';
  iconsOpen.style.transitionDelay = '.5s';
  linksOpen.style.opacity = 0;
  lineOpen.style.opacity = 0;
  iconsOpen.style.opacity = 0;
  line1.style.transform = 'rotate(0deg)';
  line2.style.transform = 'rotate(0deg)';
  document.body.style.overflow = 'auto';
  line1.style.transitionDelay = '0s';
  line2.style.transitionDelay = '0s';
  line1.style.opacity = 0;
  line2.style.opacity = 0;
}

let submitBtn = document.getElementById('submit');

function redirect(){
  window.location = "http://ezeedesignco.com/index.html"
}
