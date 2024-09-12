/*=============== SUMMARY ===============*/
const totalQty = document.getElementById("total-qty");
const totalPrice = document.getElementById("total-price");

/*=============== DISPLAY ITEMS ===============*/
const displayItems = document.querySelector(".display-items");

/*=============== ADD ITEMS ===============*/
// VARIABLES
const itemName = document.getElementById("name");
const qtyNumber = document.getElementById("quantity-number");
const qtyTxt = document.getElementById("quantity-txt");
const price = document.getElementById("price");

function addItem() {
  const li = document.createElement("li");

  // display the name, quantity and the price of the item
  const itemDesription = document.createElement("div");
  itemDesription.innerHTML = `
    <span>${itemName.value}</span> | 
    <span>${qtyNumber.value}${qtyTxt.value}</span>
    <p>$${price.value}</p>`;

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

  clearInput();
}

function clearInput() {
  itemName.value = "";
  qtyNumber.value = "";
  qtyTxt.value = "g";
  price.value = "";
}

