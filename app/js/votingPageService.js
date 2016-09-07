/**
 * Created by Frank on 31.08.16.
 */

var deadline = '2015-12-31';

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0)
        {
            clearInterval(timeinterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('clockdiv', '10/10/2016');

$("#Shirtsbtn").click(function () {
    DB.Design.find().matches('category', /^Shirts/).resultList(function (result) {

        append(result);
    });
});

$("#Pulloverbtn").click(function () {
    DB.Design.find().matches('category', /^Pullover/).resultList(function (result) {

        append(result);
    });
});

$("#Jacketsbtn").click(function () {
    DB.Design.find().matches('category', /^Jackets/).resultList(function (result) {

        append(result);
    });
});

$("#Specialsbtn").click(function () {
    DB.Design.find().matches('category', /^Specials/).resultList(function (result) {

        append(result);
    });
});

DB.ready(function () {
    DB.Design.find().resultList(function (result) {
        DB.Design.find().matches('category', /^Shirts/).resultList(function (result) {

            append(result);
            registerClickEvents();
        });
    });
});

function append(result) {

    $('#voting-gallery-container').empty();
    var btnId = 0;

    result.forEach(function (design) {

        var bildUrl = design.gallery[0];
        var designId = design.id;

        $('#voting-gallery-container')
            .append("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3'><div class='img-thumbnail img-responsive vote-item' id='" +
                    designId +
                    "' a>" +
                    "<img class='imgScaling' src='" + bildUrl +
                    "'></a> " +
                    "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='" + btnId +
                    "'>" +
                    "<span class='glyphicon glyphicon-heart'></span> Vote " +
                    "</button>" +
                    "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                    "<a href='" + bildUrl + "' data-lightbox='TestBild'>" +
                    "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                    "</a></button></div></div>");

        btnId++;

    });
}

$("#1234").text(localStorage.getItem("competitionName"));

function registerClickEvents() {
    $("#voting-gallery-container").on("click", "button.btnvote", function () {
        var designId = $(this).parent().parent().attr("id");

        DB.Design.load(designId).then(function (design) {
            design.voteCounter = design.voteCounter + 1;
            design.update().then(function () {
                                     console.log("Success: " + design.voteCounter);
                                 },
                                 function () {
                                     design.voteCounter = design.voteCounter - 1;
                                     console.log("Denied")
                                 });
        });
    });
}




