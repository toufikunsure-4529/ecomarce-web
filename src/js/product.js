//SECOND SECTION PRODUCT CONTAINER DYNAMACALLY ADDED DUE RE USE

let sectionCardItem = [
  {
    title: "Best of Electronic",
    ads: "https://rukminim1.flixcart.com/fk-p-flap/530/810/image/f02d24d019bc4f6f.jpeg?q=20"

  },
  {
    title: "Beauty, Food, Toys & more",
    ads: "/public/images/main-prod/offer-flight.jpg",
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
                        <a href="https://www.flipkart.com/offers-list/best-mobile?screen=dynamic&pk=themeViews%3DBBD23-Mob-best-deals-DT-OMU%3AApp-OMU~widgetType%3DdealCard~contentType%3Dneo" class="card-view-more"><ion-icon name="chevron-forward-outline"></ion-icon></a>
                        
                     </div>
                     <div class="product-container">
                        <!-- DYNAMICALLY JAVASCRIPT PRODUCT ADDED -->
                     </div>
                  </div>
               </div>
                 <div class="product-ads">
                  <div class="container">
                   <img src="${card.ads}" alt="Card Ads">
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
    price: "₹299",
    link:"https://www.flipkart.com/all/~cs-c0f5288930bc49bd620c509b30d0f83a/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&restrictLocale=true"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-2.jpeg",
    description: "Pendrives & SD Cards",
    price: "₹499",
    link:"https://www.flipkart.com/all/~cs-c0f5288930bc49bd620c509b30d0f83a/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&restrictLocale=true"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-3.jpeg",
    description: "Pendrives & SD Cards",
    price: "₹499",
    link:"https://www.flipkart.com/all/~cs-f9e043d95e21dfefd6342005c4c0a18e/pr?sid=clo,qvw,64a,vui&marketplace=FLIPKART&restrictLocale=true"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-4.jpeg",
    description: "Monitors",
    price: "₹499",
    link:"https://www.flipkart.com/all/~cs-724b150da313d7ea87b6f1f69a302235/pr?sid=upp,3t7&marketplace=FLIPKART&restrictLocale=true"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-4.jpeg",
    description: "Electric Cycle",
    price: "₹499",
    link:"https://www.flipkart.com/all/~cs-c0f5288930bc49bd620c509b30d0f83a/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&restrictLocale=true"
  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-6.jpeg",
    description: "Rider Helmets",
    price: "₹499",
    link:"https://www.flipkart.com/all/~cs-c0f5288930bc49bd620c509b30d0f83a/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&restrictLocale=true"

  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-7.jpeg",
    description: "Top Mirrorless Cameras",
    price: "₹499",
    link:"https://www.flipkart.com/all/~cs-c0f5288930bc49bd620c509b30d0f83a/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&restrictLocale=true"

  },
  {
    title: "Keyboard",
    images: "/public/images/main-prod/prod-7.jpeg",
    description: "Top Selling SD Cards",
    price: "₹499",
    link:"https://www.flipkart.com/all/~cs-c0f5288930bc49bd620c509b30d0f83a/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&restrictLocale=true"

  },
];

let productContainers = document.querySelectorAll(".product-container");
productContainers.forEach((container) => {
  product.forEach((product) => {
    let productHTML = `
    <div class="product-card">
    <a href="/home.html">

      <img src="${product.images}" alt="${product.description}">
      <div class="card-content">
        <p>${product.description}</p>
        <h2>From ${product.price}</h2>
      </div>
    </div>
    </a>
  `;
    container.innerHTML += productHTML;
  });
})


const cards = document.getElementsByClassName("product-card");
for (const card of cards) {
  card.addEventListener("click", () => {
    window.location = "/home.html"
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
    id: "featureProductNav_1",
    images: "/public/images/product/grocery.png",
    name: "Grocery",
    link: "https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&fm=neo%2Fmerchandising&iid=M_03f21949-3e1d-46f4-9876-0c7c9df85860_1_372UD5BXDFYS_MC.CBUR1Q46W5F1&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Grocery_CBUR1Q46W5F1&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=CBUR1Q46W5F1",
    subNavigation: false
  }
  ,
  {
    id: "featureProductNav_2",
    images: "/public/images/product/mobile.png",
    name: "Mobile",
    link: "https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_1d17bc77-57f3-4e98-a1c0-5a9e958de07f_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J",
    subNavigation: false
  }
  ,
  {
    id: "featureProductNav_3",
    images: "/public/images/product/fashion.png",
    name: "Fashion",
    link: "https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_9e704bef-8f79-4c0b-bd78-8720f264d1a1_1_372UD5BXDFYS_MC.6XNZG1FYFBZT&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear_6XNZG1FYFBZT&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=6XNZG1FYFBZT",
    subNavigation: true
  },
  {
    id: "featureProductNav_4",
    images: "/public/images/product/electronic.png",
    name: "Electronics",
    link: "https://www.flipkart.com/electronics-best-offers-store?fm=neo%2Fmerchandising&iid=M_9e704bef-8f79-4c0b-bd78-8720f264d1a1_1_372UD5BXDFYS_MC.KV8NA7Z3WYHI&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Electronics~Audio_KV8NA7Z3WYHI&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=KV8NA7Z3WYHI",
    subNavigation: true

  }
  ,
  {
    id: "featureProductNav_5",
    images: "/public/images/product/home-furniture.jpg",
    name: "Home & Furniture",
    link: "https://www.flipkart.com/india-ka-furniture-studio-store?fm=neo%2Fmerchandising&iid=M_955f943a-8f5f-428a-bbef-93536c617e9e_1_372UD5BXDFYS_MC.Q6I8NGK1VUG9&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Home%2B%2526%2BFurniture~Home%2BFurnishings_Q6I8NGK1VUG9&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=Q6I8NGK1VUG9",
    subNavigation: true
  }
  ,
  {
    id: "featureProductNav_6",
    images: "/public/images/product/applience.jpg",
    name: "Appliences",
    link: "https://www.flipkart.com/tvs-and-appliances-new-clp-store?fm=neo%2Fmerchandising&iid=M_955f943a-8f5f-428a-bbef-93536c617e9e_1_372UD5BXDFYS_MC.LO4IWVHA61BX&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Appliances_LO4IWVHA61BX&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L0_view-all&cid=LO4IWVHA61BX",
    subNavigation: false

  }
  ,
  {
    id: "featureProductNav_7",
    images: "/public/images/product/travel.png",
    name: "Travel",
    link: "https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_955f943a-8f5f-428a-bbef-93536c617e9e_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Travel_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321",
    subNavigation: false

  }
  ,
  {
    id: "featureProductNav_8",
    images: "/public/images/product/toys-beauty.png",
    name: "Beauty,Toys & More ",
    link: "https://www.flipkart.com/beauty-and-grooming/pr?sid=g9b&otracker=categorytree&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&fm=neo%2Fmerchandising&iid=M_955f943a-8f5f-428a-bbef-93536c617e9e_1_372UD5BXDFYS_MC.RXB0XORLSZ1I&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Beauty%252C%2BToys%2B%2526%2BMore~Beauty%2B%2526%2BPersonal%2BCare_RXB0XORLSZ1I&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=RXB0XORLSZ1I",
    subNavigation: true
  }
  ,
  {
    id: "featureProductNav_9",
    images: "/public/images/product/two-wheller.png",
    name: "Two Wheelers",
    link: "https://www.flipkart.com/two-wheelers-store?fm=neo%2Fmerchandising&iid=M_955f943a-8f5f-428a-bbef-93536c617e9e_1_372UD5BXDFYS_MC.SCJPZ04TFJJM&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Two%2BWheelers~Petrol%2BVehicles_SCJPZ04TFJJM&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L1_view-all&cid=SCJPZ04TFJJM",
    subNavigation: true

  }
]

let productListCotainer = document.querySelector(".product-content")
let productListHTML = ""

productList.forEach((productItem) => {
  productListHTML += `
    <a href="/home.html">
  <div class="prod-list">
      <div class="featureProduct_image">
                        <img src="${productItem.images}" alt="${productItem.title}">
                        </div> 
                        <p>${productItem.name}  ${productItem.subNavigation ? `<span><ion-icon name="chevron-up-outline" class="arrow-up-icon"></ion-icon></span>` : ""}</p></a>
                     </div>
  `
  productListCotainer.innerHTML = productListHTML
})


