// Write Concise Declarative Functions with ES6

// Only change code below this line
const bicycle = {
    gear: 2,
    // INITIAL CODE
    // setGear: function(newGear) {
    //   this.gear = newGear;
    // }
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

// When defining functions within objects in ES5, we have to use the keyword function
// With ES6, you can remove the function keyword and colon altogether when defining functions in objects