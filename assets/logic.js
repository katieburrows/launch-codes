$(document).ready(function () {
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

   
    });

















});