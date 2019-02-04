# Train-Scheduler
train scheduler for arrival times and minutes to next train

This application presents a form to add train names, destination, first train time, and frequency. The data from the form is held in a firebase database. When the submit button is pressed after a train has been added, the data is added to firebase, returned to the code, adn then and a moment.js function calculates the next arrival and minutes away. Then the train name, first frequency, next arrival and minutes away is appended into a schedule table above the train form.  
