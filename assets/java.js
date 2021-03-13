var lastUpdate = 0;

// displays current date and time
var getDate = function () {
    var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDate);

    // check once the hour changes
    if (lastUpdate != moment().format('HH')) {
        colorTextarea();
    }
};
setInterval(getDate, 1000);

var changeTextarea = function () {

    var currentHour = moment().format('HH');
    var hourNum = +currentHour;
    var timeId = "#" + currentHour;

    for (var i = 6; i < 18; i++) {
        if (i == hourNum) {
            $(timeId).find("textarea").addClass("present");
        }
        else if (i < hourNum) {
            $("#" + i).find("textarea").addClass("past");
        }
        else {
            $("#" + i).find("textarea").addClass("future");
        }
    }
    lastUpdate = currentHour;
};
changeTextarea();

$(".saveBtn").click(function () {

    var eventTime = $(this)
        .closest(".row")
        .attr("id");

    var eventText = $(this)
        .closest(".row")
        .find("textarea")
        .val();

    localStorage.setItem(eventTime, eventText);
});
var loadEvents = function () {

    for (var i = 0; i < localStorage.length; i++) {
        var time = localStorage.key(i);
        var description = localStorage.getItem(time);
        var timeId = ("#" + time);
        $(timeId).find("textarea").val(description);
    }
};
loadEvents();