//USER CLICK YES OR NO USER FEEDBACK FORM WILL BE DISPLAY
let askUserHelpYesBtn=document.getElementById("yes")
let askUserHelpNoBtn=document.getElementById("no")
let confirmContainer=document.querySelector(".confrimation-form")
let notConfirmContainer=document.querySelector(".not-Confirmform")

askUserHelpYesBtn.addEventListener("click",()=>{
  confirmContainer.classList.add("form-active")
  notConfirmContainer.classList.remove("form-active")
})

askUserHelpNoBtn.addEventListener("click",()=>{
  confirmContainer.classList.remove("form-active")
  notConfirmContainer.classList.add("form-active")
})


//PRODUCT DISPLAY CONTAINER DYNAMICLLY ADDED

let productData = [
  {
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/s/r/-original-imagpfbtmrr7spgc.jpeg?q=70",
    name: "MOTOROLA Edge 40 (Nebula Green, 256 GB)",
    review: "4.3",
    rating: "61239",
    reviewCont: "7,111",
    memory: "8 GB RAM | 256 GB ROM",
    camera: "50MP + 13MP | 32MP Front Camera",
    battery: "4400 mAh Battery",
    processor: "Dimensity 8020 Processor",
    price: "66499",
    prePrice: "₹34,499"
  },
  {
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70",
    name: "vivo T2x 5G (Aurora Gold, 128 GB)",
    review: "3.8",
    rating: "60239",
    reviewCont: "7,111",
    memory: "8 GB RAM | 256 GB ROM",
    camera: "50MP + 13MP | 32MP Front Camera",
    battery: "4400 mAh Battery",
    processor: "Dimensity 8020 Processor",
    price: "2499",
    prePrice: "₹34,499"
  },
  {
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70",
    name: "vivo T2x 5G (Marine Blue, 128 GB)",
    review: "2.9",
    rating: "102366",
    reviewCont: "7,111",
    memory: "8 GB RAM | 256 GB ROM",
    camera: "50MP + 13MP | 32MP Front Camera",
    battery: "4400 mAh Battery",
    processor: "Dimensity 8020 Processor",
    price: "16409",
    prePrice: "₹34499"
  },
  {
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70",
    name: "vivo T2x 5G (Marine Blue, 128 GB)",
    review: "4.8",
    rating: "253",
    reviewCont: "7,111",
    memory: "8 GB RAM | 256 GB ROM",
    camera: "50MP + 13MP | 32MP Front Camera",
    battery: "4400 mAh Battery",
    processor: "Dimensity 8020 Processor",
    price: "26499",
    prePrice: "₹34499"
  },
  {
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/b/x/-original-imagtt4h4ptmxgwn.jpeg?q=70",
    name: "vivo T2x 5G (Glimmer Black, 128 GB)",
    review: "2.5",
    rating: "9802",
    reviewCont: "7,111",
    memory: "8 GB RAM | 256 GB ROM",
    camera: "50MP + 13MP | 32MP Front Camera",
    battery: "4400 mAh Battery",
    processor: "Dimensity 8020 Processor",
    price: "27252",
    prePrice: "₹34,499"
  }
];

function generateProductCardHTML(product) {
  return `
    <div class="product-img">
      <img src="${product.img}" alt="Mobile">
      <div class="brand-select">
        <label for="${product.name}">
          <input type="checkbox" name="${product.name}" id="${product.name}">Add to Compare
        </label>
      </div>
    </div>

    <div class="product-details">
      <div class="product-title">
        ${product.name}
      </div>
      <div class="customer-rating">
        <div class="review">
          ${product.review} <span><ion-icon name="star" class="star-icon"></ion-icon></span>
        </div>
        <div class="review-count">
          <span>${product.rating} Ratings & ${product.reviewCont} Reviews</span>
        </div>
      </div>

      <div class="product-features">
        <ul class="features-list-item">
          <li class="features-list">${product.memory}</li>
          <li class="features-list">${product.camera}</li>
          <li class="features-list">${product.battery}</li>
          <li class="features-list">${product.processor}</li>
        </ul>
      </div>
    </div>

    <div class="product-price">
      <div class="price-section">
        <div class="price">₹${product.price}</div>
        <div class="prePrice">
          <del>₹${product.prePrice}</del>
          <span class="discount">23% off</span>
        </div>
      </div>
      <div class="flipkart-assured">
        <img src="/public/images/assuredLogo.png" alt="flipkart assured" class="assured-img">
      </div>
    </div>`;
}


function renderProductCards(products){
let cardContainer=document.querySelector(".product-card-view")
let cardHTML=""

productData.forEach((product)=>{
  cardHTML+=generateProductCardHTML(product)

})
  cardContainer.innerHTML=cardHTML

}



function sortProductsByAcending() {
  productData.sort((a, b) => a.price - b.price);
  renderProductCards(productData);
}

function sortProductsByDecending(){
  productData.sort((a,b)=>{
    return b.price-a.price;
  })
  renderProductCards(productData);
}

function sortProductByPopularity(){
  productData.sort((a,b)=>{
    return b.rating-a.rating;
  })
  renderProductCards(productData)
}


function filterRating4avove() {
  let checkbox = document.getElementById("4star");
  if (checkbox && checkbox.checked) {
    const filteredProducts = productData.filter((product) => Number(product.review) >= 4);
    let cardContainer=document.querySelector(".product-card-view")
    let cardHTML=""
    filteredProducts.forEach((product)=>{
      cardHTML+=generateProductCardHTML(product)
    
    })
      cardContainer.innerHTML=cardHTML
  }
}

function filterRating3avove() {
  let checkbox = document.getElementById("3star");
  if (checkbox && checkbox.checked) {
    const filteredProducts = productData.filter((product) => Number(product.review) <4);
    let cardContainer=document.querySelector(".product-card-view")
    let cardHTML=""
    filteredProducts.forEach((product)=>{
      cardHTML+=generateProductCardHTML(product)
    
    })
      cardContainer.innerHTML=cardHTML
  }
}






renderProductCards(productData);


//sort button will be active to border buttom showing and color change 
let sortElems=document.querySelectorAll(".sort")
sortElems.forEach((element)=>{
  element.addEventListener("click",()=>{
    sortElems.forEach((elem)=>{
      elem.classList.remove("sort-active")
    })
    element.classList.add("sort-active")
  })
})


//Accordian 

function accordianSection(header) {
  var content = header.nextElementSibling;
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}



