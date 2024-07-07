 
// JavaScript code for shopping list application  
let shoppingList = [];

document.addEventListener("DOMContentLoaded", function() {
    const addItemInput = document.getElementById("item-input");
    const addBtn = document.getElementById("add-btn");
    const clearBtn = document.getElementById("clear-btn");
    const shoppingListContainer = document.getElementById("shopping-list");

    addBtn.addEventListener("click", function() {
        const newItem = addItemInput.value.trim();
        if (newItem) {
            shoppingList.push({ item: newItem, purchased: false });
            addItemInput.value = "";
            renderShoppingList();
        }
    });

    clearBtn.addEventListener("click", function() {
        shoppingList = [];
        renderShoppingList();
    });

    shoppingListContainer.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const listItem = event.target;
            const itemIndex = Array.prototype.indexOf.call(shoppingListContainer.children, listItem);
            shoppingList[itemIndex].purchased = !shoppingList[itemIndex].purchased;
            renderShoppingList();
        }
    });

    function renderShoppingList() {
        shoppingListContainer.innerHTML = "";
        shoppingList.forEach(function(item, index) {
            const listItem = document.createElement("LI");
            listItem.textContent = item.item;
            if (item.purchased) {
                listItem.classList.add("purchased");
            }
            shoppingListContainer.appendChild(listItem);
        });
    }
});