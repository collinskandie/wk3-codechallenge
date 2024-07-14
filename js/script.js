let shoppingList = [];

//for future improvement, we can use local storage to store the shopping list
//let shoppingList = JSON.parse(localStorage.getItem("shoppingList")); 

// DOM elements
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const clearListBtn = document.getElementById("clearListBtn");
const listContainer = document.getElementById("listContainer");

// Function to render shopping list items
function renderShoppingList() {
  listContainer.innerHTML = ""; // Clear current list
  shoppingList.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");

    // Item name
    const itemName = document.createElement("span");
    itemName.textContent = item.name;
    if (item.purchased) {
      itemName.classList.add("purchased");
    }
    listItem.appendChild(itemName);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      editItem(index);
    });
    listItem.appendChild(editBtn);

    // Purchase button
    const purchaseBtn = document.createElement("button");
    purchaseBtn.textContent = "Purchase";
    purchaseBtn.addEventListener("click", () => {
      togglePurchased(index);
    });
    listItem.appendChild(purchaseBtn);

    listContainer.appendChild(listItem);
  });
}

// Function to add a new item to the shopping list
function addItem() {
  const newItem = itemInput.value.trim();
  if (newItem !== "") {
    shoppingList.push({ name: newItem, purchased: false });
    itemInput.value = "";
    updateLocalStorage();
    renderShoppingList();
  }
}

// Function to toggle purchased status of an item
function togglePurchased(index) {
  shoppingList[index].purchased = true;
  updateLocalStorage();
  renderShoppingList();
}

// Function to edit an existing item
function editItem(index) {
  const newName = prompt(
    "Enter new name for this item:",
    shoppingList[index].name
  );
  if (newName !== null) {
    shoppingList[index].name = newName;
    updateLocalStorage();
    renderShoppingList();
  }
}

// Function to clear the entire shopping list
function clearList() {
  shoppingList = [];
  updateLocalStorage();
  renderShoppingList();
}

// Function to update local storage with current shopping list
function updateLocalStorage() {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

// Event listeners
addItemBtn.addEventListener("click", addItem);
clearListBtn.addEventListener("click", clearList);

// Initial render
renderShoppingList();
