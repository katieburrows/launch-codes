$(document).ready(function () {

    // Initialize Firebase


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
            // startDate: startDate,
            monthlyRate: monthlyRate,
            // dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        database.ref().on("child_added", function(childSnapshot){
        $("#employeeInfo").append("<tr><td>" + childSnapshot.val().name + "</td><td>" +  childSnapshot.val().role + "</td><td>" + childSnapshot.val().monthlyRate + "</td></tr>"); 
        // + empStartPretty + "</td><td>" + empMonths + "</td><td>" + monthlyRate + "</td><td>" + empBilled + "</td></tr>");


        }, function(errorObject){
            console.log("Errors handled: " + errorObject.code);
        });




    });

















});