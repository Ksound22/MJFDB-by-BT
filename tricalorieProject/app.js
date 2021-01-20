// Storage contoller

// Item Controller
const itemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure
  const data = {
    items: [
      //   {
      //     id: 0,
      //     name: "Steak Dinner",
      //     calories: 1200,
      //   },
      //   {
      //     id: 1,
      //     name: "Cookie",
      //     calories: 300,
      //   },
      //   {
      //     id: 2,
      //     name: "Eggs",
      //     calories: 300,
      //   },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  //   Public methods
  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, calories) {
      let ID;
      // Create ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },

    getItemById: function (id) {
      let found = null;
      // Loop through the items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },

    setCurrentItem: function (item) {
      data.currentItem = item;
    },

    getCurrentItem: function () {
      return data.currentItem;
    },

    getTotalCalories: function () {
      let total = 0;

      // Loop through items
      data.items.forEach(function (item) {
        total += item.calories;

        // Set total calories in data structure
      });
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },

    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
  };
  // Public methods
  return {
    populateItemList: function (items) {
      let html = "";

      items.forEach(function (item) {
        html += `
            <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em> ${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i> 
                </a>
            </li>
            `;
      });

      //   Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },

    addListItem: function (item) {
      // Show list
      document.querySelector(UISelectors.itemList).style.display = "block";

      // Create li item
      const li = document.createElement("li");
      // Add class
      li.className = "collection-item";
      // Add ID
      li.id = `item-${item.id}`;

      // Add HTML
      li.innerHTML = `
            <strong>${item.name}: </strong> <em> ${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>`;

      // Insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },

    cleaInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },

    addItemToForm: function () {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = itemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = itemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },

    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },

    showTotalCalories: function (totalCalories) {
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },

    clearEditState: function () {
      UICtrl.cleaInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },

    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },

    getSelectors: function () {
      return UISelectors;
    },
  };
})();

// App Controller
const App = (function (itemCtrl, UICtrl) {
  // Load Event listeners
  const loadEventListeners = function () {
    //   Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add Item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);

    //   Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemUpdateSubmit);
  };

  //   Add item submit
  const itemAddSubmit = function (e) {
    e.preventDefault();

    // Get form input from UI controller
    const input = UICtrl.getItemInput();

    // Check for  calorie input
    if (input.name !== "" && input.calories !== "") {
      //   Add item
      const newItem = itemCtrl.addItem(input.name, input.calories);

      //   Add item to the UI list
      UICtrl.addListItem(newItem);

      //   Get total calories
      const totalCalories = itemCtrl.getTotalCalories();

      //   Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      //   Clear input fields
      UICtrl.cleaInput();
    }
  };

  //   Update item submit
  const itemUpdateSubmit = function (e) {
    e.preventDefault();

    if (e.target.classList.contains("edit-item")) {
      //   Get list item ID (item-0...)
      const listId = e.target.parentNode.parentNode.id;

      //   Break into an array
      const listIdArr = listId.split("-");

      //   Get the actual id
      const id = parseInt(listIdArr[1]);

      //   Get item
      const itemToEdit = itemCtrl.getItemById(id);

      //   Set the current item
      itemCtrl.setCurrentItem(itemToEdit);

      //   Add item to form
      UICtrl.addItemToForm();
    }
  };

  // Public methods
  return {
    init: function () {
      // Clear edit state and set initial state
      UICtrl.clearEditState();

      //   console.log("Initializing App...");

      //   Fetch items from data structure
      const items = itemCtrl.getItems();

      //   Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        //   Populate list with items
        UICtrl.populateItemList(items);
      }

      //   Get total calories
      const totalCalories = itemCtrl.getTotalCalories();

      //   Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      //   Load event listners
      loadEventListeners();
    },
  };
})(itemCtrl, UICtrl);

// Initialise App
App.init();
