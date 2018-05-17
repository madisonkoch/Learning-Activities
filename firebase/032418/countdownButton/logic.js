/* global firebase */

// Initialize Firebase
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)
var config = {
  apiKey: "AIzaSyA53y0mbDf5GvAuV0hgH0fREI2z0qVxwmA",
  authDomain: "firstproject-914b7.firebaseapp.com",
  databaseURL: "https://firstproject-914b7.firebaseio.com",
  projectId: "firstproject-914b7",
  storageBucket: "firstproject-914b7.appspot.com",
  messagingSenderId: "458050612081"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Use the below initialValue
var initialValue = 50;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase. (i.e. where the database interacts with us)
database.ref().on("value", function(snapshot) {//.on() looks for a change in "value" and when there is a change then function(snapshot).
  // We are now inside our .on function...

  // Console.log the "snapshot" value (a point-in-time representation of the database)
  console.log(snapshot.val());
  // This "snapshot" allows the page to get the most current values in firebase.

  // Change the value of our clickCounter to match the value in the database
  clickCounter = snapshot.val().clickCount;//.clickCount is a property on the database... so database has a key named clickCount and to access it you use .clickCount

  // Console Log the value of the clickCounter
  console.log(clickCounter);

  // Change the HTML using jQuery to reflect the updated clickCounter value
  $("#click-value").text(snapshot.val().clickCount);
  // Alternate solution to the above line
  //$("#click-value").html(clickCounter);

// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter (i.e. where we interact with the db)
  if (clickCounter === 0) {
    alert("Phew! You made it! That sure was a lot of clicking.");
    clickCounter = initialValue;
  }

  // Save new value to Firebase
  database.ref().set({ //.ref() means grab the base level object
    clickCount: clickCounter //key:value
  });

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);

});
