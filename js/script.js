// Array to store shopping list items
let shoppingList = [];

// DOM elements
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const markPurchasedBtn = document.getElementById("markPurchasedBtn");
const clearListBtn = document.getElementById("clearListBtn");
const listContainer = document.getElementById("listContainer");

// Function to display shopping list items
function renderShoppingList() {
  listContainer.innerHTML = ""; // Clear current list
  shoppingList.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = item.name; // Display item's name property
    if (item.purchased) {
      listItem.classList.add("purchased");
    }
    listItem.addEventListener("click", () => {
      togglePurchased(index);
    });
    listContainer.appendChild(listItem);
  });
}

// Function to add a new item to the shopping list
function addItem() {
  const newItem = itemInput.value.trim();
  if (newItem !== "") {
    shoppingList.push({ name: newItem, purchased: false });
    itemInput.value = "";
    renderShoppingList();
    console.log(shoppingList);
  }
}

// Function to toggle purchased status of an item
function togglePurchased(index) {
  shoppingList[index].purchased = !shoppingList[index].purchased;
  renderShoppingList();
}

// Function to mark all items as purchased
function markAllAsPurchased() {
  shoppingList.forEach((item) => {
    item.purchased = true;
  });
  renderShoppingList();
}

// Event listeners
addItemBtn.addEventListener("click", addItem);
markPurchasedBtn.addEventListener("click", markAllAsPurchased);
clearListBtn.addEventListener("click", () => {
  shoppingList = [];
  renderShoppingList();
});

// Initial render
renderShoppingList();
