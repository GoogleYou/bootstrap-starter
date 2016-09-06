/**
 * Created by Frank on 31.08.16.
 */

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

$("#Votebtn").click(function () {

});

$("#1234").text(localStorage.getItem("competitionName"));

DB.ready(function () {
    DB.Design.find().resultList(function (result) {
        DB.Design.find().matches('category', /^Shirts/).resultList(function (result) {

            append(result);

        });
    });
});

function append(result) {

    $('#voting-gallery-container').empty();

    result.forEach(function (design) {

        var bildUrl = design.gallery[0];
        var designId = design.id;

        $('#voting-gallery-container')
            .append("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3'><div class='img-thumbnail img-responsive' id='" +
                    designId +
                    "'a>" +
                    "<img class='imgScaling' src='" + bildUrl +
                    "'></a> " +
                    "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
                    "<span class='glyphicon glyphicon-heart'></span> Vote " +
                    "</button>" +
                    "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                    "<a href='" + bildUrl + "' data-lightbox='TestBild'>" +
                    "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                    "</a></button></div></div>");
    });
}

