// 1. Initialize Firebase

var config = {
  apiKey: "AIzaSyApj1TcasTsIS2SWx4hlOJAEzkehmvn3DM",
  authDomain: "train-scheduler-6c121.firebaseapp.com",
  databaseURL: "https://train-scheduler-6c121.firebaseio.com",
  projectId: "train-scheduler-6c121",
  storageBucket: "train-scheduler-6c121.appspot.com",
  messagingSenderId: "599783446938"
};

firebase.initializeApp(config);

var database = firebase.database();

// 3. Add Button for adding trains

$("#add-train-btn").on("click", function (event) {
  event.preventDefault();

  // 4. Grab user input

  var trainName = $("#add-train-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrainTime = moment($("#first-train-input").val().trim(), "HH:mm");
  var frequency = $("#frequency-input").val().trim();

  var trainsData = {
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency,
  };

  // 5. Uploads trains data to the database
  database.ref().push(trainsData);

  console.log(trainName)
  console.log(destination)
  console.log(firstTrainTime)
  console.log(frequency)

  // 6. Clears all of the text boxes
  $("add-train-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
})

// 7. Create Firebase event for adding train information to database and row in html when user adds an entry 
database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());


  // 8. Store everything into a variable and calculate next arrival time and minutes away
  var trainsData = childSnapshot.val();
  var convertedFirstTrain = moment(trainsData.firstTrainTime, "HH:mm");
  var difference = moment().diff(moment(convertedFirstTrain), "minutes");
  var timeRemaining = difference % trainsData.frequency;
  var minutesAway = trainsData.frequency - timeRemaining;
  var nextArrival = moment().add(minutesAway, "minutes");
  nextArrival = moment(nextArrival).format("HH:mm");

  console.log(nextArrival);
  console.log(minutesAway);

  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(nextArrival),
    $("<td>").text(minutesAway)
    );

  //Append the new row to the table
  $("#train-table > tbody").append(newRow);

});



