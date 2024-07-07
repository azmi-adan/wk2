 
// JavaScript code for shopping list application  
let shoppingList = [];

document.addEventListener('DOMContentLoaded', function() {
    const addItemInput = document.getElementById('item-input');
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear-btn');
    const listContainer = document.getElementById('list-container');

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
            const index = Array.prototype.indexOf.call(listContainer.children, listItem);
            shoppingList[index].purchased = !shoppingList[index].purchased;
            renderList();
        }
    });

    listContainer.addEventListener('dblclick', function(event) {
        if (event.target.tagName === 'LI') {
            const listItem = event.target;
            const index = Array.prototype.indexOf.call(listContainer.children, listItem);
            const editText = prompt('Edit item:', shoppingList[index].name);
            if (editText) {
                shoppingList[index].name = editText;
                renderList();
            }
        }
    });

    renderList();

    function renderList() {
        listContainer.innerHTML = '';
        shoppingList.forEach(function(item, index) {
            const listItem = document.createElement('LI');
            listItem.textContent = item.name;
            if (item.purchased) {
                listItem.classList.add('purchased');
            }
            listContainer.appendChild(listItem);
        });
    }

    // Persistence using local storage
    function saveList() {
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    }

    function loadList() {
        const storedList = localStorage.getItem('shoppingList');
        if (storedList) {
            shoppingList = JSON.parse(storedList);
            renderList();
        }
    }

    loadList();

    // Save the list on page unload
    window.addEventListener('beforeunload', saveList);
});