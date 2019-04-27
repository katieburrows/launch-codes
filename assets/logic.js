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
    var startDate = "";
    var monthlyRate = "";

    $("#submitBtn").on("click", function(event){
        event.preventDefault();
        employeeName = $("#employeeName").val().trim();
        role = $("#role").val().trim();
        // var startDate = $("#startDate").val().trim();
        monthlyRate = $("#monthlyRate").val().trim();
    
        $("#employeeName").val("");
        $("#role").val("");
        $("#startDate").val("");
        $("#monthlyRate").val("");

        database.ref().push({
            name: employeeName,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate
        });

        // $("#employeeInfo > tbody").append("<tr><td>" + employeeName + "</td><td>" +  role + "</td><td>" +
        // empStartPretty + "</td><td>" + empMonths + "</td><td>" + monthlyRate + "</td><td>" + empBilled + "</td></tr>");


    });

















});