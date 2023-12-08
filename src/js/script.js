//SLIDER BANNER CODE
const slideContainer = document.querySelector(".slide-img");
const images = document.querySelectorAll(".slide-img img");
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  slideContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

  //dots current index active code
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active-dot", index === currentIndex);
  });

}

function goNext() {
  showSlide(currentIndex + 1);
}


function goPrev() {
  showSlide(currentIndex - 1);
}
setInterval(goNext, 5000);
const dotsContainer = document.querySelector(".dots-container");
for (let i = 0; i < images.length; i++) {
  const dot = document.createElement("div")
  dot.classList.add("dot")
  dotsContainer.append(dot)
  dot.addEventListener("click", () => showSlide(index))
}


//NAVIGATION MENU MOBILE NAV WORK
let mobileNav = document.querySelector(".mobile-navbar-btn")
let navHeader = document.querySelector(".header")
let toggleNavbar = () => {
  navHeader.classList.toggle("active")
}
mobileNav.addEventListener("click", () => {
  toggleNavbar()
})




//NAVIGATION BAR LOGIN TO HOVER SOME CONTENT VIEW
let loginBtn = document.querySelector("#login-btn");
let loginCard = document.getElementById("data");

loginBtn.addEventListener("mouseover", () => {
  loginCard.classList.add("hover-card")

});

loginCard.addEventListener("mouseleave", () => {
  loginCard.classList.remove("hover-card")
});

//NAVAGATION MENU SEACH INPUT CLICK TO SOME SCRIPT WORK DISPLAY NONE& BLOCK
let searchBox = document.getElementById("searchBox")
let recentSearchContainer = document.getElementById("recentSearchContainer")
searchBox.addEventListener("focus", () => {
  recentSearchContainer.classList.add("active")
})
document.addEventListener("click", (event) => {
  if (!searchBox.contains(event.target) &&
    !recentSearchContainer.contains(event.target)) {
    recentSearchContainer.classList.remove("active");
  }
});


let moreInfoBtn = document.querySelector("#card-hover-btn")
let moreInfoCard = document.querySelector("#carddata")
moreInfoBtn.addEventListener("mouseover", () => {
  moreInfoCard.classList.add("activemore")
})

moreInfoBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    moreInfoCard.classList.remove("activemore")
  }, 1000)
})

let dataRefresh=document.getElementById("data-refresh")
setTimeout(()=>{

  dataRefresh.style.opacity=1
},5000)

