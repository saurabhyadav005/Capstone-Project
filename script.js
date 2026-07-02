
let cart = [];
const products = [
{
id:1,
name:"Laptop",
category:"Electronics",
price:55000,
image:"https://via.placeholder.com/250?text=Laptop"
},
{
id:2,
name:"Smartphone",
category:"Electronics",
price:25000,
image:"https://via.placeholder.com/250?text=Phone"
},
{
id:3,
name:"T-Shirt",
category:"Fashion",
price:799,
image:"https://via.placeholder.com/250?text=T-Shirt"
},
{
id:4,
name:"Jeans",
category:"Fashion",
price:1499,
image:"https://via.placeholder.com/250?text=Jeans"
},
{
id:5,
name:"JavaScript Book",
category:"Books",
price:599,
image:"https://via.placeholder.com/250?text=Book"
}
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(items){

productList.innerHTML="";

items.forEach(product=>{

productList.innerHTML += `
<div class="product">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>Category: ${product.category}</p>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">Add to Cart</button>
</div>
`;

});

}

displayProducts(products);
function addToCart(id) {
    cart.push(id);
    document.getElementById("cartCount").textContent = cart.length;
}


function filterProducts(){

let search = searchInput.value.toLowerCase();
let category = categoryFilter.value;

let filtered = products.filter(product=>{

let matchSearch = product.name.toLowerCase().includes(search);
let matchCategory = category==="all" || product.category===category;

return matchSearch && matchCategory;

});

displayProducts(filtered);

}

searchInput.addEventListener("input",filterProducts);
categoryFilter.addEventListener("change",filterProducts);