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


    $("#submitBtn").on("click", function(event){
        event.preventDefault();
        var employeeName = $("#employeeName").val().trim();
        var role = $("#role").val().trim();
        // var startDate = $("#startDate").val().trim();
        var monthlyRate = $("#monthlyRate").val().trim();
    
        $("#employeeName").val("");
        $("#role").val("");
        $("#startDate").val("");
        $("#monthlyRate").val("");


        // $("#employeeInfo > tbody").append("<tr><td>" + employeeName + "</td><td>" +  role + "</td><td>" +
        // empStartPretty + "</td><td>" + empMonths + "</td><td>" + monthlyRate + "</td><td>" + empBilled + "</td></tr>");

        //at phase 2--push part.  look at file: 18-Push for reference
    });

















});