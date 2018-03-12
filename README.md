# PrototypeImplementation
Implementing Object.isPrototype  method 
```javascript
var canine = {
  bark: function() {
    console.log('bark');
  }
};

var dog = Object.create(canine);
dog.fetch = function() {
  console.log('fetch');
};

var myDog = Object.create(dog);
var empty = Object.create(null);

// These two lines are equivalent.
dog.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(dog, myDog); // your function does the same

// These two lines, similarly should return the same thing.
dog.isPrototypeOf(empty);  // native function returns false
isPrototypeOf(dog, empty); // your function does the same

// This should work too.
Object.prototype.isPrototypeOf(myDog);  // native function returns true
isPrototypeOf(Object.prototype, myDog); // your function does the same

// Also make sure that your function will work for any number of prototype links.
isPrototypeOf(canine, myDog) // true
```
