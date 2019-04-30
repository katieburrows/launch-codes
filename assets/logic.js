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

    var employeeName = "";
    var role = "";
    var date = "";
    var monthlyRate = "";

    $("#submitBtn").on("click", function(event){
        event.preventDefault();
        employeeName = $("#employeeName").val().trim();
        role = $("#role").val().trim();
        var startDate = moment($("#date").val().trim(), "DD/MM/YY").format("X");
        monthlyRate = $("#monthlyRate").val().trim();
    
        $("#employeeName").val("");
        $("#role").val("");
        $("#date").val("");
        $("#monthlyRate").val("");

        database.ref().push({
            name: employeeName,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
        });
    });

    database.ref().on("child_added", function(childSnapshot){
        $("#employeeInfo").append("<tr><td>" + childSnapshot.val().name + "</td><td>" +  childSnapshot.val().role + "</td><td>" + childSnapshot.val().monthlyRate + "</td></tr>"); 
        // + empStartPretty + "</td><td>" + empMonths + "</td><td>" + monthlyRate + "</td><td>" + empBilled + "</td></tr>");


        }, function(errorObject){
            console.log("Errors handled: " + errorObject.code);
        });
















});