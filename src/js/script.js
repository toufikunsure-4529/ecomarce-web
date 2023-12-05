let loginBtn = document.querySelector("#login-btn");
let loginCard = document.getElementById("data");

loginBtn.addEventListener("mouseover", () => {
  loginCard.classList.add("hover-card")

});


loginCard.addEventListener("mouseleave", () => {
  loginCard.classList.remove("hover-card")
});




//search data to recent seach show div
let searchBox = document.getElementById("searchBox")
let recentSearchContainer = document.getElementById("recentSearchContainer")
searchBox.addEventListener("focus", () => {
  recentSearchContainer.classList.add("active")
})
document.addEventListener("click", (event) => {
  if (!searchBox.contains(event.target) && !recentSearchContainer.contains(event.target)) {
    recentSearchContainer.classList.remove("active");
  }
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


//recent search container store product
let trendingProduct = [
  {
    images: "https://rukminim1.flixcart.com/image/100/100/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=90",
    productName: "Vivo t2x 5g"
  },
  {
    images: "https://rukminim1.flixcart.com/image/100/100/xif0q/mobile/p/r/b/nord-ce-3-lite-5g-ce2099-oneplus-original-imagzj42cctpjjze.jpeg?q=90",
    productName: "OnePlus Mobile 5G"
  },
  {
    images: "https://rukminim1.flixcart.com/image/100/100/xif0q/mobile/b/t/n/-original-imagqxtvyqzy7jbz.jpeg?q=90",
    productName: "Keypad Phone"
  },
  {
    images: "https://rukminim1.flixcart.com/image/100/100/xif0q/mobile/6/a/d/-original-imagrqg4uruhwuza.jpeg?q=90",
    productName: "Infinix Mobile"
  },
  {
    images: "https://rukminim1.flixcart.com/image/100/100/xif0q/mobile/2/p/8/-original-imagg2a4rmk94gay.jpeg?q=90",
    productName: "OnePlus Mobile "
  },
]

let trendingProductsContainer = document.getElementById("trendingProductsContainer");
let terndingProductHtml = "";
trendingProduct.forEach((item) => {

  terndingProductHtml += `
   <ul>
       <a href="https://www.flipkart.com/search?q=vivo+mobiles+5g&as=on&as-show=on&otracker=AS_Query_PredictiveAutoSuggest_3_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_3_0_na_na_na&as-pos=3&as-type=PREDICTIVE&suggestionId=vivo+mobiles+5g&requestId=4455d02b-6cd6-4fc2-a22a-6f154a6c99fd&as-searchtext=vivo%20mobiles%205g" target="_blank"> <li><img src="${item.images}" alt="${item.productName}"><span>${item.productName}</span></li></a>
   </ul>`
})

trendingProductsContainer.innerHTML = terndingProductHtml;

