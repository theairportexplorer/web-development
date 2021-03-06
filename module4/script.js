// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using the 'speak' method or either helloSpeaker's or byeSpeaker's
  // 'speak' method.
  // See Lecture 50, part 1
  console.log("Part 1 - Using .speak() to write to console.log:");
  for (var idx in names) {
    // STEP 11:
    // Retrieve the first letter of the current name in the loop.
    // Use the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J'/'j', call
    // string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    // Look up these methods on Mozilla Developer Network web site if needed.
    var firstLetter = names[idx].charAt(0).toLowerCase();

    // STEP 12:
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter == 'j') {
      byeSpeaker.speak(names[idx]);
    } else {
      helloSpeaker.speak(names[idx]);
    }
  }

  // Using Array.prototype.map to do the assignment
  console.log("Part 2 - Using array.map() to write to console.log:");
  function speaker(x) {
    if (x.charAt(0).toLowerCase() == 'j') {
      console.log(byeSpeaker.speakSimple(x));
    } else {
      console.log(helloSpeaker.speakSimple(x));
    }
  }
  names.map(x => speaker(x));

  // Using Array.prototype.reduce to the assignment
  console.log("Part 3 - Using array.reduce() to write to console.log: ");
  var initialArray = {"hello": [], "bye": []};
  names.reduce( (accumulator, currentValue) => {
    // console.log(accumulator);
    if (currentValue.charAt(0).toLowerCase() == 'j') {
      accumulator.bye.push(byeSpeaker.speakSimple(currentValue));
    } else {
      accumulator.hello.push(helloSpeaker.speakSimple(currentValue));
    }
    return accumulator;
  }, initialArray);
  for (var idx in initialArray.hello) {
    console.log(initialArray.hello[idx]);
  }
  for (var idx in initialArray.bye) {
    console.log(initialArray.bye[idx]);
  }
})();


