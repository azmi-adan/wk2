 
// JavaScript code for shopping list application  
let shoppingList = [];

document.addEventListener('DOMContentLoaded', function() {
    const addItemInput = document.getElementById('item-input');
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear-btn');
    const listContainer = document.getElementById('list');

    addBtn.addEventListener('click', function() {
        const newItem = addItemInput.value.trim();
        if (newItem) {
            shoppingList.push({ name: newItem, purchased: false });
            addItemInput.value = '';
            renderList();
        }
    });

    clearBtn.addEventListener('click', function() {
        shoppingList = [];
        renderList();
    });

    listContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const listItem = event.target;
            const index = Array.prototype.indexOf.call(list.children, listItem);
            shoppingList[index].purchased = !shoppingList[index].purchased;
            renderList();
        }
    });

    listContainer.addEventListener('dblclick', function(event) {
        if (event.target.tagName === 'LI') {
            const listItem = event.target;
            const index = Array.prototype.indexOf.call(list.children, listItem);
            const editText = prompt('Edit item:', shoppingList[index].name);
            if (editText) {
                shoppingList[index].name = editText;
                renderList();
            }
        }
    });

    renderList();

    function renderList() {
        list.innerHTML = '';
        shoppingList.forEach(function(item, index) {
            const listItem = document.createElement('LI');
            listItem.textContent = item.name;
            if (item.purchased) {
                listItem.classList.add('purchased');
            }

            // Add a "Mark as Purchased" button
            const markPurchasedBtn = document.createElement('BUTTON');
            markPurchasedBtn.className = 'mark-purchased-btn';
            markPurchasedBtn.textContent = 'Mark as Purchased';
            markPurchasedBtn.addEventListener('click', function() {
                shoppingList[index].purchased = true;
                renderList();
            });
            listItem.appendChild(markPurchasedBtn);

            list.appendChild(listItem);
        });
    }
});