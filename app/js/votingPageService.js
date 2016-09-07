/**
 * Created by Frank on 31.08.16.
 */


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
function newClock() {
    if (localStorage.getItem("competitionName") === "PTTP Competition")
    {
        DB.ready(function () {
            DB.Competition.find().matches('ideaFrom', /^PTTP/).singleResult(function (result) {
                initializeClock('clockdiv', result.time);
            });
        })
    }
    else
    {
        DB.ready(function () {
            DB.Competition.find().matches('ideaFrom', /^Community/).singleResult(function (result) {
                initializeClock('clockdiv', result.time);
            });
        })
    }
}

newClock();
//initializeClock('clockdiv', deadline);

$("#Shirtsbtn").click(function () {
    DB.Category.load("/db/Category/3e094e76-9ce7-4834-b0a0-4d1ca248a425").then(function (shirtCat) {
        DB.Design.find().equal('categoryId', shirtCat.id).resultList(function (result) {

            append(result);
        });
    })
});

$("#Pulloverbtn").click(function () {
    DB.Category.load("/db/Category/6cb24498-abf5-4c11-a80a-9278e5c7c563").then(function (pulloverCat) {
        DB.Design.find().equal('categoryId', pulloverCat.id).resultList(function (result) {

            append(result);
        });
    })
});

$("#Jacketsbtn").click(function () {
    DB.Category.load("/db/Category/659edcb3-3b65-4796-a4a6-575e5e3fdc2a").then(function (jacketCat) {
        DB.Design.find().equal('categoryId', jacketCat.id).resultList(function (result) {

            append(result);
        });
    })
});

$("#Specialsbtn").click(function () {
    DB.Category.load("/db/Category/7da19d3c-d04a-434a-872a-b143233bb4a7").then(function (specialCat) {
        DB.Design.find().equal('categoryId', specialCat.id).resultList(function (result) {

            append(result);
        });
    })
});

DB.ready(function () {
    DB.Category.load("/db/Category/3e094e76-9ce7-4834-b0a0-4d1ca248a425").then(function (shirtCat) {
        DB.Design.find().equal('categoryId', shirtCat.id).resultList(function (result) {

            append(result);
            goToDetail();
            voteEvent();
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
            .append("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3'><div class='img-thumbnail img-responsive voteEvent-item' id='" +
                    designId +
                    "' a>" +
                    "<img class='imgScaling' src='" + bildUrl +
                    "'></a> " +
                    "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='" + btnId +
                    "'>" +
                    "<span class='glyphicon glyphicon-heart-empty'></span> Vote " +
                    "</button>" +
                    "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                    "<a href='" + bildUrl + "' data-lightbox='TestBild'>" +
                    "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                    "</a></button></div></div>");

        btnId++;

    });
}

$("#1234").text(localStorage.getItem("competitionName"));


function voteEvent() {
    if (DB.User.me !== null)
    {
        $("#voting-gallery-container").on("click", "button.btnvote", function () {
            var designId = $(this).parent().parent().attr("id");

            DB.Design.load(designId).then(function (design) {
                DB.Category.find().equal("id", design.categoryId).singleResult(function (cat) {
                    if (cat.name === "Shirts")
                    {
                        if (DB.User.me.votedShirts === null)
                        {
                            DB.User.me.votedShirts = new Array();
                        }

                        if (DB.User.me.votedShirts.indexOf(design) === -1)
                        {
                            if (DB.User.me.votedShirts.length < cat.voteLimitPerPerson)
                            {
                                vote(design, DB.User.me.votedShirts);
                            }
                            else
                            {
                                alert("You have reached the maximum amount of votes in this category.");
                            }
                        }
                        else
                        {
                            unvote(design, DB.User.me.votedShirts);
                        }

                    }
                    else if (category.name === "Jackets")
                    {
                        localJacketCounter++;
                    }
                    else if (category.name === "Pullover")
                    {
                        localPulloverCounter++;
                    }
                    else if (category.name === "Specials")
                    {
                        localSpecialCounter++;
                    }
                });

            });
        });
    }
    else
    {
        alert("You have to be logged in.");
    }
}

function vote(design, list) {
    design.voteCounter = design.voteCounter + 1;
    design.update().then(function () {
        onUpdateSuccess(design, list);
    }).catch(function () {
        onUpdateDenied(design);
    });
}

function unvote(design, list) {
    design.voteCounter = design.voteCounter - 1;
    design.update().then(function () {
        onUpdateUnvoteSuccess(design, list);
    }).catch(function () {
        onUpdateUnvoteDenied(design);
    });

}

function onUpdateSuccess(design, list) {
    console.log("Design update success: " + design.voteCounter);
    list.push(design);
    DB.User.me.save();
}

function onUpdateDenied(design) {
    design.voteCounter = design.voteCounter - 1;
    console.log("Design update denied");
}

function onUpdateUnvoteSuccess(design, list) {
    console.log("Design unvote success: " + design.voteCounter);
    list.pop(design);
    DB.User.me.save();
}

function onUpdateUnvoteDenied(design) {
    design.voteCounter = design.voteCounter + 1;
    console.log("Design unvote denied");
}
function goToDetail() {
    $("#voting-gallery-container").on("click", "img.imgScaling", function () {
        var designId = $(this).parent().attr("id");
        localStorage.setItem("IdDesign", designId);
        window.location.replace("designDetail.html")
})}




