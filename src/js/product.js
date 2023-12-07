//SECOND SECTION PRODUCT CONTAINER DYNAMACALLY ADDED DUE RE USE

let sectionCardItem = [
  {
    title: "Best of Electronic",
    ads: "/public/images/main-prod/offer-flight.jpg"
  },
  {
    title: "Beauty, Food, Toys & more",
    ads: "/public/images/main-prod/offer-flight.jpg"
  }

]

let sectionCardContainer = document.querySelector(".product-section")
let sectionCardHTML = "";
sectionCardItem.forEach((card) => {
  sectionCardHTML += `
      <div class="product-section-content">
         <div class="card-content">
                  <div class="container">
                     <div class="card-title">
                        <a href="/" class="product-title">${card.title}</a>
                     </div>
                     <div class="product-container">
                        <!-- DYNAMICALLY JAVASCRIPT PRODUCT ADDED -->
                     </div>
                  </div>
               </div>
                 <div class="product-ads">
                  <div class="container">
                     <img src="${card.ads}" alt>
                  </div>
               </div>
               </div>
  `
  sectionCardContainer.innerHTML = sectionCardHTML
})



//MAIN PRIODUCUT LIST ON AFTER SLIDER SECOND PRODUCT SECTION
let product = [
  {
    title: "Mouse",
    images: "/public/images/main-prod/prod-1.jpeg",
    description: "Wireless Gaming Mouse",
    price: "₹299"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-2.jpeg",
    description: "Mechanical Gaming Keyboard",
    price: "₹499"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-3.jpeg",
    description: "Mechanical Gaming Keyboard",
    price: "₹499"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-4.jpeg",
    description: "Mechanical Gaming Keyboard",
    price: "₹499"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-4.jpeg",
    description: "Mechanical Gaming Keyboard",
    price: "₹499"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-6.jpeg",
    description: "Mechanical Gaming Keyboard",
    price: "₹499"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-7.jpeg",
    description: "Mechanical Gaming Keyboard",
    price: "₹499"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-7.jpeg",
    description: "Mechanical Gaming Keyboard",
    price: "₹499"
  },
];

let productContainers = document.querySelectorAll(".product-container");
productContainers.forEach((container) => {
  product.forEach((product) => {
    let productHTML = `
    <div class="product-card">
      <img src="${product.images}" alt="${product.description}">
      <div class="card-content">
        <p>${product.description}</p>
        <h2>From ${product.price}</h2>
      </div>
    </div>
  `;
    container.innerHTML += productHTML;
  });
})


const cards = document.getElementsByClassName("product-card");
for (const card of cards) {
  card.addEventListener("click", () => {
    window.location = "/"
  });
}




//SEARCH PRODUCT TO CLICK SEARCH AFTER VIEW CONTENET PRODUCT RECCENT SEARCH
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





//Frist Product List
let productList = [
  {
    images: "/public/images/product/grocery.png",
    title: "Grocery",
    icon: ""
  }
  ,
  {
    images: "/public/images/product/mobile.png",
    title: "Mobile",
    icon: ""

  }
  ,
  {
    images: "/public/images/product/fashion.png",
    title: "Fashion",
    categories: ["Mens Top Wear", "Women Wastern", "Kides", "Men Footweare"],
    categoriesProduct: ["All", "Trimer", "Hair Dryers"],
    icon: `<ion-icon name="chevron-up-outline" class="arrow-up-icon"></ion-icon>`
  },
  {
    images: "/public/images/product/electronic.png",
    title: "Electronics",
    categories: ["Mens Top Wear", "Women Wastern", "Kides", "Men Footweare"],
    categoriesProduct: ["All", "Trimer", "Hair Dryers"],
    icon: `<ion-icon name="chevron-up-outline" class="arrow-up-icon"></ion-icon>`

  }
  ,
  {
    images: "/public/images/product/home-furniture.jpg",
    title: "Home & Furniture",
    categories: ["Mens Top Wear", "Women Wastern", "Kides", "Men Footweare"],
    categoriesProduct: ["All", "Trimer", "Hair Dryers"],
    icon: `<ion-icon name="chevron-up-outline" class="arrow-up-icon"></ion-icon>`

  }
  ,
  {
    images: "/public/images/product/applience.jpg",
    title: "Appliences",
    categories: ["Mens Top Wear", "Women Wastern", "Kides", "Men Footweare"],
    categoriesProduct: ["All", "Trimer", "Hair Dryers"],
    icon: `<ion-icon name="chevron-up-outline" class="arrow-up-icon"></ion-icon>`

  }
  ,
  {
    images: "/public/images/product/travel.png",
    title: "Travel",
    icon: ""


  }
  ,
  {
    images: "/public/images/product/toys-beauty.png",
    title: "Beauty,Toys & More ",
    categories: ["Mens Top Wear", "Women Wastern", "Kides", "Men Footweare"],
    categoriesProduct: ["All", "Trimer", "Hair Dryers"],
    icon: `<ion-icon name="chevron-up-outline" class="arrow-up-icon"></ion-icon>`

  }
  ,
  {
    images: "/public/images/product/two-wheller.png",
    title: "Two Wheelers",
    categories: ["Mens Top Wear", "Women Wastern", "Kides", "Men Footweare"],
    categoriesProduct: ["All", "Trimer", "Hair Dryers"],
    icon: `<ion-icon name="chevron-up-outline" class="arrow-up-icon"></ion-icon>`

  }
]

let productListCotainer = document.querySelector(".product-content")
let productListHTML = ""

productList.forEach((productItem) => {
  productListHTML += `
  <div class="prod-list">
                        <img src="${productItem.images}" alt="${productItem.title}">
                        <p>${productItem.title}<span>${productItem.icon}</span></p>
                     </div>
  `
  productListCotainer.innerHTML = productListHTML
})


