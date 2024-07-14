let shoppingList = [];

//for future improvement, we can use local storage to store the shopping list
//let shoppingList = JSON.parse(localStorage.getItem("shoppingList"));
// JavaScript for Interactive Shopping List with Bootstrap Table

// DOM elements
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const clearListBtn = document.getElementById("clearListBtn");
const listContainer = document.getElementById("listContainer");

// Function to render shopping list items in a table
function renderShoppingList() {
  listContainer.innerHTML = ""; // Clear current list
  shoppingList.forEach((item, index) => {
    const row = document.createElement("tr");

    // Item column
    const itemCell = document.createElement("td");
    itemCell.textContent = item.name;
    if (item.purchased) {
      itemCell.classList.add("purchased");
    }
    row.appendChild(itemCell);

    // Actions column
    const actionsCell = document.createElement("td");

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn", "btn-primary", "mr-2");
    editBtn.addEventListener("click", () => {
      editItem(index);
    });
    actionsCell.appendChild(editBtn);

    // Purchase button
    const purchaseBtn = document.createElement("button");
    purchaseBtn.textContent = "Purchase";
    purchaseBtn.classList.add("btn", "btn-success");
    purchaseBtn.addEventListener("click", () => {
      togglePurchased(index);
    });
    actionsCell.appendChild(purchaseBtn);

    row.appendChild(actionsCell);

    listContainer.appendChild(row);
  });
}

// Function to add a new item to the shopping list
function addItem() {
  const newItem = itemInput.value.trim();
  if (newItem !== "") {
    shoppingList.push({ name: newItem, purchased: false });
    itemInput.value = "";
    renderShoppingList();
  }
}

// Function to toggle purchased status of an item
function togglePurchased(index) {
  shoppingList[index].purchased = true;
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
    renderShoppingList();
  }
}

// Function to clear the entire shopping list
function clearList() {
  shoppingList = [];
  renderShoppingList();
}

// Event listeners
addItemBtn.addEventListener("click", addItem);
clearListBtn.addEventListener("click", clearList);

// Initial render
renderShoppingList();
