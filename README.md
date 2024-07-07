# Shopping List Application
=========================

## Overview
-----------

This is a simple shopping list application that allows users to add items, mark them as purchased, and clear the list.

## Features
--------

* Add items to the list
* Mark items as purchased
* Clear the list
* Edit existing list items (bonus feature)
* Persistence using local storage (bonus feature)

## How to Use
-----------

1. Open the `index.html` file in a web browser.
2. Type an item into the input field and click the "Add" button to add it to the list.
3. Click on an item in the list to mark it as purchased.
4. Click the "Clear List" button to remove all items from the list.
5. Double-click on an item to edit it (bonus feature).

## Technical Details
-------------------

* The application uses HTML, CSS, and JavaScript to create a dynamic user interface.
* The shopping list is stored in a JavaScript array and updated dynamically as the user interacts with the application.
* The application uses event listeners to capture user input and update the list accordingly.
* The list is persisted using local storage, so it will be saved even after the page is reloaded (bonus feature).

## Files
------

* `index.html`: The main HTML file for the application.
* `style.css`: The CSS stylesheet for the application.
* `script.js`: The JavaScript file that contains the application logic.

# Shopping List Styles
=====================

## Overview
-----------

This stylesheet provides the visual styling for the Shopping List application.

## Styles
-------

### Global Styles

* `body`: Sets the font family to Arial, sans-serif.
```css
body {
    font-family: Arial, sans-serif;
}
# Shopping List Application
=========================

## Description

This is a simple shopping list application that allows users to add items, mark them as purchased, edit items, and clear the list. The application also persists the shopping list using local storage.

## Usage

### Adding Items

To add an item to the shopping list, simply type in the text input and click the "Add" button. The item will be added to the list and the input field will be cleared.

### Marking Items as Purchased

To mark an item as purchased, simply click on the list item. The item will be toggled as purchased and the list will be re-rendered.

### Editing Items

To edit an item, double-click on the list item. A prompt will appear to edit the item name, and the list will be re-rendered if the user saves the changes.

### Clearing the List

To clear the entire list, click the "Clear List" button. The list will be reset and the input field will be cleared.

## Code Organization

The code is organized into the following sections:

### Variables

* `shoppingList`: an array to store the shopping list items

### Event Listeners

* `addBtn.addEventListener('click',...)`: adds a new item to the shopping list when the "Add" button is clicked
* `clearBtn.addEventListener('click',...)`: clears the entire shopping list when the "Clear List" button is clicked
* `listContainer.addEventListener('click',...)`: toggles an item as purchased when a list item is clicked
* `listContainer.addEventListener('dblclick',...)`: edits an item when a list item is double-clicked

### Functions

* `renderList()`: renders the shopping list in the HTML list container
* `saveList()`: saves the shopping list to local storage
* `loadList()`: loads the shopping list from local storage

### Persistence

The application uses local storage to persist the shopping list. When the user adds, edits, or clears the list, the changes are saved to local storage. When the user reloads the page, the list is loaded from local storage.

on the local storage part its not so clear especially on the finction i used