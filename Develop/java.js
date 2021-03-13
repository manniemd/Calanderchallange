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

