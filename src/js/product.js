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
  // Add more products with unique titles
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
    setTimeout(() => {
      window.location = "/"

    }, 1000)
  });
}
