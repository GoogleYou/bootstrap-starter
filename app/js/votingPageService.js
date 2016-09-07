/**
 * Created by Frank on 31.08.16.
 */

var deadline;

function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    function updateClock(){
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if(t.total<=0){
            clearInterval(timeinterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock,1000);
}

initializeClock('clockdiv', '10/10/2016');



$("#Shirtsbtn").click(function () {
    DB.Category.load("/db/Category/3e094e76-9ce7-4834-b0a0-4d1ca248a425").then(function(shirtCat){
        DB.Design.find().equal('categoryId',shirtCat.id).resultList(function (result) {

            append(result);
        });
    })
});

$("#Pulloverbtn").click(function () {
    DB.Category.load("/db/Category/6cb24498-abf5-4c11-a80a-9278e5c7c563").then(function(pulloverCat){
        DB.Design.find().equal('categoryId',pulloverCat.id).resultList(function (result) {

        append(result);
    });
    })
});

$("#Jacketsbtn").click(function () {
    DB.Category.load("/db/Category/659edcb3-3b65-4796-a4a6-575e5e3fdc2a").then(function(jacketCat){
        DB.Design.find().equal('categoryId',jacketCat.id).resultList(function (result) {

        append(result);
    });
    })
});

$("#Specialsbtn").click(function () {
    DB.Category.load("/db/Category/7da19d3c-d04a-434a-872a-b143233bb4a7").then(function(specialCat){
        DB.Design.find().equal('categoryId',specialCat.id).resultList(function (result) {

        append(result);
    });
    })
});

DB.ready(function () {
    DB.Category.load("/db/Category/3e094e76-9ce7-4834-b0a0-4d1ca248a425").then(function(shirtCat){
        DB.Design.find().equal('categoryId',shirtCat.id).resultList(function (result) {


            append(result);
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

        $("#" + btnId).click(function () {
            var designId = $(".vote-item").attr("id");
            DB.Design.load(designId).then(function (design) {
                design.voteCounter = design.voteCounter + 1;
                design.update().then(function () {
                    console.log(design.voteCounter);
                });
            });
        });

        btnId++;
    });
}

$("#1234").text(localStorage.getItem("competitionName"));


