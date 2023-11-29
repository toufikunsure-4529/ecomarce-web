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
