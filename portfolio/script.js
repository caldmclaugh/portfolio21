let toggleNavStatus = false;

let toggleNav = function() {
  let getMenu = document.querySelector(".nav-menu");
  let getMenuUl = document.querySelector(".nav-menu ul");
  let getMenuLinks = document.querySelectorAll(".nav-menu a");
  let getMenuIcon = document. querySelector(".btn-toggle-nav img");

  if(toggleNavStatus === false) {
    getMenuUl.style.visibility ="visible";
    getMenu.style.width="100%";


    let arrayLength = getMenuLinks.length;
    for (let i=0; i < arrayLength; i++) {

      getMenuLinks[i].style.opacity = "1";
      getMenuIcon.style.background = "#E3EFFA";
      getMenuIcon.style.padding = "1rem";
      getMenuIcon.style.margin = "0 -1rem 0 0";

}
    toggleNavStatus = true;
    }

    else if(toggleNavStatus === true) {

      getMenu.style.width="0";
      getMenuIcon.style.background = "white";



      let arrayLength = getMenuLinks.length;
      for (let i=0; i < arrayLength; i++) {
        getMenuLinks[i].style.opacity = "0";
}
        getMenuUl.style.visibility ="hidden";

      toggleNavStatus = false;
      }
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

const scrollToTopButton = document.getElementById("js-top");

const scrollFunc = () => {
  let y = window.scrollY;

  if (y >1000) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className - "top-link hide";
  }
};

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}

window.addEventListener("scroll", scrollFunc);
