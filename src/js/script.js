let loginBtn = document.querySelector("#login-btn");
let loginCard = document.getElementById("data");
let upArrow = document.querySelector(".arrow-up-icon")
let downArrow = document.querySelector(".arrow-down-icon")

loginBtn.addEventListener("mouseover", () => {
  downArrow.style.display = "none";
  upArrow.style.display = "block"
  loginCard.classList.add("hover-card")

});


loginCard.addEventListener("mouseleave", () => {
  loginCard.classList.remove("hover-card")
  downArrow.style.display = "block";
  upArrow.style.display = "none"
});



//slider images 
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


