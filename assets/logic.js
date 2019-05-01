$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB_64GfN1BfeNiHdgHwiP55xvCwG_kAQTI",
        authDomain: "project-1-4ebab.firebaseapp.com",
        databaseURL: "https://project-1-4ebab.firebaseio.com",
        projectId: "project-1-4ebab",
        storageBucket: "project-1-4ebab.appspot.com",
        messagingSenderId: "803889008587"
    };
  
    firebase.initializeApp(config);

    //shortcut to firebase
    var database = firebase.database();

    //click event for form
    $("#submitBtn").on("click", function(event){
        //stops the html from reloading the page when the button is submitted
        event.preventDefault();

        //variables that hold the trimmed-down user input for name, role, start date, and monthly rate
        var employeeName = $("#employeeName").val().trim();
        var role = $("#role").val().trim();
        //grabbing the start date value from the form with jQuery and putting that inside of moment() while also clarifying the date-type moment should expect, then formatting that all into unix time.
        var startDate = moment($("#startDate").val().trim(), "MM/DD/YYYY").format("X");
        var monthlyRate = $("#monthlyRate").val().trim();
        
        //clearing out the user's input in the form.
        $("#employeeName").val("");
        $("#role").val("");
        $("#startDate").val("");
        $("#monthlyRate").val("");

        //pushing new children to the database from the user's input data.
        database.ref().push({
            name: employeeName,
            role: role,
            date: startDate,
            monthlyRate: monthlyRate,
        });
    });

    //event that will load all the data from the database on the page load or when a new child is added to the database.
    database.ref().on("child_added", function(childSnapshot){
        //referencing the database to retrieve the name, role, start date, and monthly rate for each child node.
        var employeeName = childSnapshot.val().name;
        var role = childSnapshot.val().role;
        var startDate = childSnapshot.val().date;
        var monthlyRate = childSnapshot.val().monthlyRate;
        
        //telling moment that this isn't an ordinary date, but actually a unix timestamp, then formatting that into the desired date format
        var employeeStart = moment.unix(startDate).format("MM/DD/YYYY");

        //calculating the number of months that have passed between now (moment()) and the start date (moment(startDate, "X"))--start date has been converted to unix time so that moment.js can compare two unix timestamps against one another to come up with the result, that result is returned in number of months.
        var employeeMonths = moment().diff(moment(startDate, "X"), "months");

        //creating a variable that stores the result of the number of months the employee has been working up to today and their monthly rate.
        var empBilled = employeeMonths * monthlyRate;

        //appending all the values that have been collected/caluclated onto the page in the table.
        $("#employeeInfo").append("<tr><td>" + employeeName + "</td><td>" + role + "</td><td>" + employeeStart + "</td><td>" + employeeMonths + "</td><td>" + monthlyRate + "</td><td>" + empBilled + "</td></tr>");
        }, function(errorObject){
            console.log("Errors handled: " + errorObject.code);
        });

});