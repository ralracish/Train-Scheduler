// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new trains - then update the html + update the database
// 3. Create a way to retrieve train information from the train database.
// 4. Create a way to calculate the minutes until the next train. Using difference between start and current time.
//    Then use moment.js formatting to set difference in hours and minutes.
// 5. Update train table from firebase data.

// 1. Initialize Firebase


<script src="https://www.gstatic.com/firebasejs/5.8.1/firebase.js"></script>

  var config = {
    apiKey: "AIzaSyApj1TcasTsIS2SWx4hlOJAEzkehmvn3DM",
    authDomain: "train-scheduler-6c121.firebaseapp.com",
    databaseURL: "https://train-scheduler-6c121.firebaseio.com",
    projectId: "train-scheduler-6c121",
    storageBucket: "train-scheduler-6c121.appspot.com",
    messagingSenderId: "599783446938"
  };
  firebase.initializeApp(config);


var firstTrainTime = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
  var empRate = $("#rate-input").val().trim();

var trains = {
    trainName:trainName,
    firstTrainTime: firstTrainTime,
    destination: destination,
    freqency: frequency,
  };

var trainTime = moment("input")
var frequency=10 minutes ("input")

firebase.ref().on("child_added", function(childSnapshot){
    var trainsData = childSnapshot.val()
    var convertedFirstTrain= moment(trainsData.firstTrainTime, "HH:mm")
    var difference = moment().diff(moment(convertedFirstTrain), "minutes");
    var timeRemaining = difference % trainsData.frequency
    var minutesAway = trainsData.frequency-timeRemaining;
    var nextArrival = moment().add(minutesAway, "minutes")
    nextArrival = moment(nextArrival).format("HH:mm")
    append
})



         