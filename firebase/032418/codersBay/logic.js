// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
var config = {
    apiKey: "AIzaSyA53y0mbDf5GvAuV0hgH0fREI2z0qVxwmA",
    authDomain: "firstproject-914b7.firebaseapp.com",
    databaseURL: "https://firstproject-914b7.firebaseio.com",
    projectId: "firstproject-914b7",
    storageBucket: "firstproject-914b7.appspot.com",
    messagingSenderId: "458050612081"
  };

  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
    var database = firebase.database();

// Initial Values
    var initialBid = 0;
    var initialBidder = "No one :-(";
    var highPrice = initialBid;
    var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
    database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
    if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
        highPrice = snapshot.val().highPrice;
        highBidder = snapshot.val().highBidder;


    // Change the HTML to reflect the stored values
        $("#highest-bidder").text(snapshot.val().highBidder);
        $("#highest-price").text(snapshot.val().highPrice);

    // Print the data to the console.
        console.log(highBidder,highPrice);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
        $("#highest-bidder").text(initialBidder);
        $("#highest-price").text(initialBid);

    // Print the data to the console.
        console.log(initialBidder,initialBid);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
    var bidderName = $("#bidder-name").val();
    var bidderPrice = $("#bidder-price").val();

  // Log the Bidder and Price (Even if not the highest)
    console.log(bidderName,bidderPrice);
  // When highest bidder
    if (bidderPrice > highPrice) {
    // Alert
        alert("You are now the highest bidder.");

    // Save the new price in Firebase
        database.ref().set({ 
            highBidder: bidderName,
            highPrice: bidderPrice
        });

    // Log the new High Price
      console.log(highBidder,highPrice);

    // Store the new high price and bidder name as a local variable
        highPrice = snapshot.val().highPrice;
        highBidder = snapshot.val().highBidder;

    // Change the HTML to reflect the new high price and bidder
        $("#highest-bidder").text(snapshot.val().highBidder);
        $("#highest-price").text(snapshot.val().highPrice);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
