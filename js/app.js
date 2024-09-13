/*=============== SUMMARY ===============*/
const totalQty = document.getElementById("total-qty");
const totalPrice = document.getElementById("total-price");
let counterPrice = 0, counterQty = 0;
let cost = 0, qty = 0;

/*=============== DISPLAY ITEMS ===============*/
const displayItems = document.querySelector(".display-items");

/*=============== ADD ITEMS ===============*/
// VARIABLES
const itemName = document.getElementById("name");
const qtyNumber = document.getElementById("quantity-number");
const qtyTxt = document.getElementById("quantity-txt");
const price = document.getElementById("price");

// function that add item to the list
function addItem() {
  const li = document.createElement("li");

  // display the name, quantity and the price of the item
  const itemDesription = document.createElement("div");
  itemDesription.innerHTML = `
    <span class="item-name">${itemName.value}</span> | 
    <span class="item-qty">${qtyNumber.value}${qtyTxt.value}</span>
    <p class="item-price">$${price.value}</p>`;

  // display delete button
  const itemEdit = document.createElement("div");
  itemEdit.innerHTML = `
    <a href="#" class="btn-delete">
      <i class="ri-delete-bin-line"></i>
    </a>
  `;

  // add class name to the new element for style
  itemDesription.className = "item-description";
  itemEdit.className = "item-edit";

  li.appendChild(itemDesription);
  li.appendChild(itemEdit);
  displayItems.appendChild(li);

  checkQty();
  clearInput();
}

// function that clear the input fileds after item been added.
function clearInput() {
  itemName.value = "";
  qtyNumber.value = "";
  qtyTxt.value = "g";
  price.value = "";
}


// function that check the qty
// if qty is g or kg => assigns counterQty = 1;
function checkQty() {
  switch (qtyTxt.value) {
    case "g":
    case "kg":
      counterQty = 1;
      break;
    default:
      counterQty = qtyNumber.value;
  }
  counterPrice = price.value;
  calculateTotalPriceAndQty("+");
}

// function that calculate the total price and quantity and display it.
function calculateTotalPriceAndQty(operator) {
  counterPrice = parseFloat(counterPrice);
  counterQty = parseInt(counterQty);

  switch (operator) {
    case "+":
      cost += counterPrice * counterQty;
      qty += counterQty;
      break;
    case "-":
      cost -= counterPrice * counterQty;
      qty -= counterQty;
      break;
  }
  totalPrice.innerHTML = `${cost.toFixed(2)}`;
  totalQty.innerHTML = `${qty}`;
}

displayItems.addEventListener('click', (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");

    // get price and quantity values of select item
    const itemSelected = e.target;
    getPriceAndQty(itemSelected);

    /* if item checked => subtract the item price & quantity from summary */
    if (e.target.classList.contains("checked"))
      calculateTotalPriceAndQty("-");
    else
      calculateTotalPriceAndQty("+");
  } else if (e.target.tagName === "I") 
    removeItem(e);
});

function removeItem(e) {
  const li = e.target.parentElement.closest("li");
  
  if (!li.classList.contains("checked") && cost > 0 && qty > 0) {
    getPriceAndQty(li);
    calculateTotalPriceAndQty("-");
  }
  li.remove();
}

function getPriceAndQty(itemSelected) {
  const filteredItems = Array.from(itemSelected.childNodes[0].children).filter(item => {
    return item.classList.contains("item-qty") || item.classList.contains("item-price");
  });

  for (let i = 0; i < filteredItems.length; i++) {
    if (filteredItems[i].classList.contains("item-qty"))
      counterQty = filteredItems[i].innerText.replace(/[^0-9\.]+/g, "");
    else
      counterPrice = filteredItems[i].innerText.replace("$", "");
  }
}

