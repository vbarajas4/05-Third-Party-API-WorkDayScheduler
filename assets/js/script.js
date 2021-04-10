var timeblockEl = $(".time-block");

// Displays Day of the Week and todays Date
function dayPlanner() {
    var today = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(today);

    //Looping through each time block hour
    timeblockEl.each(function() {
        var currentHour = moment().hours()
        ////display assigned style color to timeblock if current time is present, past, or future
        if(currentHour === $(this).data().time) {
            $(this).children("textarea").addClass("present");
        } else if(currentHour > $(this).data().time) {
            $(this).children("textarea").addClass("past");
        } else {
            $(this).children("textarea").addClass("future");
        }
    })
}
dayPlanner();

setInterval(dayPlanner, 10000);

    // save button click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        alert ("successfully saved");

        // Save text in local storage
        localStorage.setItem(time, text);
        
    })

// Get item from local storage if any

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

