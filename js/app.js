const productsList = document.querySelector(".list-products");

const addProduct = () => {


  // create tr element
  const tr = document.createElement("tr");
  tr.className = "product";







  tdData.appendChild(divDescription);

  // create span element thah display the price of the product
  // const spanPrice = document.createElement("span");
  // spanPrice.className = "price";
  // spanPrice.innerText = `$${priceInput}`;
  // tdData.appendChild(spanPrice);


  tr.appendChild(tdData);
  productsList.appendChild(tr);
}

addProdactData = (tr) => {
  const productInput = document.getElementById("product-input--name").value;
  const quantityInput = parseInt(document.getElementById("product-input--qty").value);
  const priceInput = parseFloat(document.getElementById("product-input--price").value);

  // create dt element
  const tdData = document.createElement("td");
  tdData.className = "product-data";

  const divDescription = document.createElement("div");
  divDescription.className = "product-description";
  // creatin 2 span element that display the amount and name of the product
  divDescription.innerHTML = `
  <span class="qty">${quantityInput}</span>
  <span class="name">${productInput}</span>
  `;
}