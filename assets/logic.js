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

    var database = firebase.database();

    $("#submitBtn").on("click", function(event){
        event.preventDefault();

        var employeeName = $("#employeeName").val().trim();
        var role = $("#role").val().trim();
        var startDate = moment($("#startDate").val().trim(), "MM/DD/YYYY").format("X");
        var monthlyRate = $("#monthlyRate").val().trim();
        
        $("#employeeName").val("");
        $("#role").val("");
        $("#startDate").val("");
        $("#monthlyRate").val("");

        database.ref().push({
            name: employeeName,
            role: role,
            date: startDate,
            monthlyRate: monthlyRate,
        });
    });

    database.ref().on("child_added", function(childSnapshot){
        var employeeName = childSnapshot.val().name;
        var role = childSnapshot.val().role;
        var startDate = childSnapshot.val().date;
        var monthlyRate = childSnapshot.val().monthlyRate;
        
        //telling moment that this isn't an ordinary date, but actually a unix timestamp
        var employeeStart = moment.unix(startDate).format("MM/DD/YYYY");

        var employeeMonths = moment().diff(moment(startDate, "X"), "months");
        var empBilled = employeeMonths * monthlyRate;

        $("#employeeInfo").append("<tr><td>" + employeeName + "</td><td>" + role + "</td><td>" + employeeStart + "</td><td>" + employeeMonths + "</td><td>" + monthlyRate + "</td><td>" + empBilled + "</td></tr>");
        }, function(errorObject){
            console.log("Errors handled: " + errorObject.code);
        });

});