const inputProductName = document.getElementById("product-input--name");
const inputProductQuantity = document.getElementById("product-input--qty"),
  inputProductQuantityName = document.getElementById("product-input--qty-name");
const inputProductPrice = document.getElementById("product-input--price");
const productsList = document.querySelector(".list-products");

const addProduct = () => {
  // create tr element
  const tr = document.createElement("tr");
  tr.className = "product";

  addProdactData(tr);
  productsList.appendChild(tr);
}

addProdactData = (tr) => {
  const productTd = document.createElement("td");

  // div element that display the name and the amount of the product
  const productDescription = document.createElement("div");
  productDescription.className = "product-description";

  // add product name to the list
  const productName = document.createElement("span");
  productName.className = "product-name";
  productName.innerText = inputProductName.value;
  productDescription.appendChild(productName);


  // add product quantity to the list
  const productQuantity = document.createElement("span");
  productQuantity.classList = "product-qty";
  productQuantity.innerText = ` | ${inputProductQuantity.value}${inputProductQuantityName.value}`;
  productDescription.appendChild(productQuantity);

  // add product price to the list
  const productPrice = document.createElement("p");
  productPrice.className = "product-price";
  productPrice.innerText = `$${inputProductPrice.value}`;

  productTd.appendChild(productDescription);
  productTd.appendChild(productPrice);
  tr.appendChild(productTd);
}