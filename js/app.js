// When the user scrolls the page, execute myFunction
window.onscroll = function() {navbar()};

// Get the header
var header = document.getElementById("header");
var mobile = document.querySelector(".mobile-menu");
var logo = document.getElementById("logo-img");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    mobile.classList.add("sticky-mobile");
    logo.src = '/images/logo.png';
  } else {
    header.classList.remove("sticky");
    mobile.classList.remove("sticky-mobile");
    logo.src = '/images/logo_alt.png';
  }
}




// scrollspy

document.addEventListener('DOMContentLoaded', function(){ 

  if(window.innerWidth < 768) return;
  
  // grab the sections (targets) and menu_links (triggers)
  // for menu items to apply active link styles to
  const sections = document.querySelectorAll(".page");
  const menu_links = document.querySelectorAll(".navbar a");
    
  const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    
  const sectionMargin = 200;

  let currentActive = 0;

  // listen for scroll events
  window.addEventListener("scroll", () => {
    
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1

    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      if(typeof menu_links[current] != 'undefined') makeActive(current);

    }
  });
}, false);


var nav = document.querySelector('#mobile-menu-toggle');

nav.addEventListener('click', function() {
  var mobileMenu = document.querySelector('.mobile-menu');

  if(mobileMenu.style.display == 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }

});


var mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-item');
for(var i = 0; i<mobileMenuLinks.length; i++) {
  mobileMenuLinks[i].addEventListener('click',function() {
    nav.click();
  });
}
