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
        var date = moment($("#date").val().trim(), "DD/MM/YYYY").format("X");
        var monthlyRate = $("#monthlyRate").val().trim();
    
        $("#employeeName").val("");
        $("#role").val("");
        $("#date").val("");
        $("#monthlyRate").val("");

        database.ref().push({
            name: employeeName,
            role: role,
            date: date,
            monthlyRate: monthlyRate,
        });
    });

    database.ref().on("child_added", function(childSnapshot){
        var employeeName = childSnapshot.val().name;
        var role = childSnapshot.val().role;
        var date = childSnapshot.val().date;
        var monthlyRate = childSnapshot.val().monthlyRate;
        var employeeStart = moment.unix(date).format("MM/DD/YY");
        var employeeMonths = moment().diff(moment.unix(employeeStart, "X"), "months");
        var empBilled = employeeMonths * monthlyRate;

        $("#employeeInfo").append("<tr><td>" + employeeName + "</td><td>" + role + "</td><td>" + date + "</td><td>" + employeeMonths + "</td><td>" + monthlyRate + "</td><td>" + empBilled + "</td></tr>");
        }, function(errorObject){
            console.log("Errors handled: " + errorObject.code);
        });

});