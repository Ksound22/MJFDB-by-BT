// Pattern is a reusable solution that can be applied ti occuring problems in software design

// Can be thought of as a programming template

// MODULE and REVEALING PATTERN
// Basic structure
// (function(){
//     // Declare private variables and functions

//     return {
//         // declare public vars and functions

//     }
// })()

/*
// Standard module pattern
const UICtrl = (function () {
  let text = "Hello World";

  const changeText = function () {
    const element = document.querySelector("h3");
    element.textContent = text;
  };

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();

// UICtrl.changeText();

console.log(UICtrl.text);
*/

/*
// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added...");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Kolade" });
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));

// Underscore might be added to indicate a variable is private
*/

/*
// SINGLETON PATTERN - Can only return one instance of an object a time
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Kolade" });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
// console.log(instanceA);
*/

/*
// FACTORY PATTERN - Usedto create multiple objects, interfaces
function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "$5";
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = "$15";
};

const SuperMembership = function (name) {
  this.name = name;
  this.cost = "$25";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("John Doe", "simple"));
members.push(factory.createMember("Brad Traversy", "super"));
members.push(factory.createMember("Roy Jones", "standard"));
members.push(factory.createMember("Kolade Chris Ksound", "super"));

// console.log(members);

members.forEach(function (member) {
  member.define();
});

*/

// MEDIATOR PATTERN
/*
const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; //list all users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};

const kolade = new User("Kolade");
const brad = new User("Brad");
const jeff = new User("Jeff");

const chatroom = new Chatroom();

chatroom.register(kolade);
chatroom.register(brad);
chatroom.register(jeff);

kolade.send("How far Brad? When una dey release another course?", brad);
brad.send("Very soon baba", kolade);

*/
