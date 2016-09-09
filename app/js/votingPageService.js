/**
 * Created by Frank on 31.08.16.
 */

var idcompetition;

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

$("#Shirtsbtn").click(function () {
    DB.Category.load("/db/Category/3e094e76-9ce7-4834-b0a0-4d1ca248a425").then(function (shirtCat) {
     //   var name = localStorage.getItem("competitionName");
    //    DB.Competition.find().equal('ideaFrom', name).singleResult(function (result) {
       //     idcompetition = result.id;
    //    });
        DB.Design.find().equal('categoryId', shirtCat.id).resultList(function (result) {  //equal('competitionId', idcompetition).resultList(function (result) {

            append(result);
            setVoteCounterInHeader(shirtCat);
            voteEvent();

        });
    })
});

$("#Pulloverbtn").click(function () {
    DB.Category.load("/db/Category/6cb24498-abf5-4c11-a80a-9278e5c7c563").then(function (pulloverCat) {
        DB.Design.find().equal('categoryId', pulloverCat.id).resultList(function (result) {

            append(result);
            setVoteCounterInHeader(pulloverCat);
            voteEvent();
        });
    })
});

$("#Jacketsbtn").click(function () {
    DB.Category.load("/db/Category/659edcb3-3b65-4796-a4a6-575e5e3fdc2a").then(function (jacketCat) {
        DB.Design.find().equal('categoryId', jacketCat.id).resultList(function (result) {

            append(result);
            setVoteCounterInHeader(jacketCat);
            voteEvent();
        });
    })
});

$("#Specialsbtn").click(function () {
    DB.Category.load("/db/Category/7da19d3c-d04a-434a-872a-b143233bb4a7").then(function (specialCat) {
        DB.Design.find().equal('categoryId', specialCat.id).resultList(function (result) {

            append(result);
            setVoteCounterInHeader(specialCat);
            voteEvent();
        });
    })
});

DB.ready(function () {
    DB.Category.load("/db/Category/3e094e76-9ce7-4834-b0a0-4d1ca248a425").then(function (shirtCat) {
        DB.Design.find().equal('categoryId', shirtCat.id).resultList(function (result) {

            append(result);
            setVoteCounterInHeader(shirtCat);
            voteEvent();
            goToDetail();

        });
    });
});

/*
 Erstellt beim Aufruf der votingPage Seite dynamisch die Designs Ansicht indem er sich die Notwendigen Daten aus der Datenbank
 lädt und einbindet.
 */
function append(result) {

    $('#voting-gallery-container').empty();
    var heartId = 200;
    result.forEach(function (design) {

        var bildUrl = design.gallery[0];
        var designId = design.id;

        $('#voting-gallery-container')
            .append("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3'><div class='img-thumbnail img-responsive voteEvent-item'" +
                    " id='" + designId + "' a>" +
                    "<img class='imgScaling' src='" + bildUrl +
                    "'></a> " +
                    "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align'>" +
                    "<span class='glyphicon glyphicon-heart-empty' id='" + heartId + "'></span> Vote " +
                    "</button>" +
                    "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                    "<a href='" + bildUrl + "' data-lightbox='TestBild'>" +
                    "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                    "</a></button></div></div>");
        isAlreadyVoted(designId, heartId);
        heartId++;
    });
}

function isAlreadyVoted(designId, heartId) {

    if (DB.User.me !== null)
    {
        DB.Design.load(designId, {depth: 1}).then(function (design) {
            DB.Category.find().equal("id", design.categoryId).singleResult(function (cat) {
                DB.User.me.load({depth: 1}).then(function () {

                    if (cat.name === "Shirts")
                    {
                        if (competitionSelector(design))
                        {
                            markAsVoted(DB.User.me.votedPttpShirts, design, heartId);
                        }
                        else
                        {
                            markAsVoted(DB.User.me.votedShirts, design, heartId);
                        }
                    }
                    else if (cat.name === "Pullover")
                    {
                        if (competitionSelector(design))
                        {
                            markAsVoted(DB.User.me.votedPttpPullover, design, heartId);
                        }
                        else
                        {
                            markAsVoted(DB.User.me.votedPullover, design, heartId);
                        }
                    }
                    else if (cat.name === "Jackets")
                    {
                        if (competitionSelector(design))
                        {
                            markAsVoted(DB.User.me.votedPttpJackets, design, heartId);
                        }
                        else
                        {
                            markAsVoted(DB.User.me.votedJackets, design, heartId);
                        }
                    }
                    else if (cat.name === "Specials")
                    {
                        if (competitionSelector(design))
                        {
                            markAsVoted(DB.User.me.votedPttpSpecials, design, heartId);
                        }
                        else
                        {
                            markAsVoted(DB.User.me.votedSpecials, design, heartId);
                        }
                    }

                });
            });
        })
    }
    else
    {
        return;
    }
}

function competitionSelector(design) {
    var compId = design.competitionId;
    if (compId == "/db/Competition/4cb12309-8ffd-47a7-bab4-59b5fd4decd2")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function markAsVoted(list, design, heartId) {

    if (list.indexOf(design) >= 0)
    {
        markVoted(heartId);
    }
}

function markVoted(iconId) {
    $("#" + iconId).attr("class", "glyphicon glyphicon-heart").css("color", "#cb1529");
}

function markUnvoted(iconId) {
    $("#" + iconId).attr("class", "glyphicon glyphicon-heart-empty").css("color", "black");
}

$("#1234").text(localStorage.getItem("competitionName"));

function voteEvent() {

    $("#voting-gallery-container").on("click", "button.btnvote", function () {
        if (DB.User.me !== null)
        {
            var designId = $(this).parent().parent().attr("id");
            var iconId = $(this).children("span").attr("id");

            DB.Design.load(designId, {depth: 1}).then(function (design) {
                DB.Category.find().equal("id", design.categoryId).singleResult(function (cat) {
                    DB.User.me.load({depth: 1}).then(function () {
                        if (cat.name === "Shirts")
                        {
                            if (competitionSelector(design))
                            {
                                voteInTheCategory(cat, design, DB.User.me.votedPttpShirts, iconId);
                            }
                            else
                            {
                                voteInTheCategory(cat, design, DB.User.me.votedShirts, iconId);
                            }
                        }
                        else if (cat.name === "Jackets")
                        {
                            if (competitionSelector(design))
                            {
                                voteInTheCategory(cat, design, DB.User.me.votedPttpJackets, iconId);
                            }
                            else
                            {
                                voteInTheCategory(cat, design, DB.User.me.votedJackets, iconId);
                            }
                        }
                        else if (cat.name === "Pullover")
                        {
                            if (competitionSelector(design))
                            {
                                voteInTheCategory(cat, design, DB.User.me.votedPttpPullover, iconId);
                            }
                            else
                            {
                                voteInTheCategory(cat, design, DB.User.me.votedPullover, iconId);
                            }
                        }
                        else if (cat.name === "Specials")
                        {
                            if (competitionSelector(design))
                            {
                                voteInTheCategory(cat, design, DB.User.me.votedPttpSpecials, iconId);
                            }
                            else
                            {
                                voteInTheCategory(cat, design, DB.User.me.votedSpecials, iconId);
                            }
                        }
                    });
                });
            });
        }
        else
        {
            alert("You have to be logged in.");
        }
    });
}

function voteInTheCategory(category, design, listOfVoted, iconId) {

    if (listOfVoted.indexOf(design) === -1)
    {
        if (listOfVoted.length < category.voteLimitPerPerson)
        {
            vote(design, listOfVoted, iconId, category);
        }
        else
        {
            alert("You have reached the maximum amount of votes in this category.");
        }
    }
    else
    {
        if (listOfVoted.length > 0 && design.voteCounter > 0)
        {
            unvote(design, listOfVoted, iconId, category);
        }
    }
}

function vote(design, list, iconId, category) {
    design.voteCounter = design.voteCounter + 1;
    design.update().then(function () {
        onUpdateSuccess(design, list, iconId, category);
    }).catch(function () {
        onUpdateDenied(design);
    });
}

function unvote(design, list, iconId, category) {
    design.voteCounter = design.voteCounter - 1;
    design.update().then(function () {
        onUpdateUnvoteSuccess(design, list, iconId, category);
    }).catch(function () {
        onUpdateUnvoteDenied(design);
    });
}

function onUpdateSuccess(design, list, iconId, category) {
    list.push(design);
    DB.User.me.save().then(function () {
        markVoted(iconId);
        setVoteCounterInHeader(category);
        console.log("User updated: vote saved");
    }).catch(function () {
        console.log("User is not updated: vote is not saved")
    });
    console.log("Design update success: " + "List contains " + list);
}

function onUpdateDenied(design) {
    design.voteCounter = design.voteCounter - 1;
    console.log("Design update denied");
}8

function onUpdateUnvoteSuccess(design, list, iconId, category) {
    var index = list.indexOf(design);
    list.splice(index, 1);
    DB.User.me.save().then(function () {
        markUnvoted(iconId);
        setVoteCounterInHeader(category);
        console.log("User updated: vote deleted");
    }).catch(function () {
        console.log("User is not updated: vote is not deleted")
    });
    console.log("Unvoting success: " + "List contains: " + list);
}

function onUpdateUnvoteDenied(design) {
    design.voteCounter = design.voteCounter + 1;
    console.log("Unvoting denied");
}

function goToDetail() {
    $("#voting-gallery-container").on("click", "img.imgScaling", function () {
        var designId = $(this).parent().attr("id");
        localStorage.setItem("IdDesign", designId);
        window.location.replace("designDetail.html")
    })
}

function setVoteCounterInHeader(category){
    if (DB.User.me !== null)
    {
        DB.User.me.load({depth: 1}).then(function () {

            if (category.name === "Shirts")
            {
                $("#votes").text(DB.User.me.votedShirts.length + "/" + category.voteLimitPerPerson);
            }
            else if (category.name === "Pullover")
            {
                $("#votes").text(DB.User.me.votedPullover.length + "/" + category.voteLimitPerPerson);
            }
            else if (category.name === "Jackets")
            {
                $("#votes").text(DB.User.me.votedJackets.length + "/" + category.voteLimitPerPerson);
            }
            else if (category.name === "Specials")
            {
                $("#votes").text(DB.User.me.votedSpecials.length + "/" + category.voteLimitPerPerson);
            }
        });
    }
}



