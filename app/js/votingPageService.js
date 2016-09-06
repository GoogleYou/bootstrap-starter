/**
 * Created by Frank on 31.08.16.
 */


var elements = new Array();


function getElement(index) {
    console.log(elements[index].id)
}

function findDesigns(cat) {
    DB.Design.find().resultList(function (result) {
        result.forEach(function (design) {
            if (design.category === cat)
            {
                elements.push(design);
            }

        });
    })
}

$("#Shirtsbtn").click(function () {
    elements = [];
    findDesigns("Shirts");
    DB.Design.find().matches('category',/^Shirts/ ).resultList(function (result) {
        {
            $('#voting-gallery-container').empty();
            result.forEach(function (designs) {
                var bildUrl = designs.gallery[0];
                $('#voting-gallery-container')
                    .append("<dic class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
                            "<img class='imgScaling' src='" + bildUrl +
                            "'></a> " +
                            "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
                            "<span class='glyphicon glyphicon-heart'></span> Vote " +
                            "</button>" +
                            "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                            "<a href='" + bildUrl + "'data-lightbox='TestBild'>" +
                            "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                            "</a></button></div></div>")
            })
        }
    })
});


$("#Pulloverbtn").click(function () {
    DB.Design.find().matches('category',/^Pullover/ ).resultList(function (result)  {
        {
            $('#voting-gallery-container').empty();
            result.forEach(function (designs) {
                var bildUrl = designs.gallery[0];
                $('#voting-gallery-container')
                    .append("<dic class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
                        "<img class='imgScaling' src='" + bildUrl +
                        "'></a> " +
                        "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
                        "<span class='glyphicon glyphicon-heart'></span> Vote " +
                        "</button>" +
                        "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                        "<a href='" + bildUrl + "'data-lightbox='TestBild'>" +
                        "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                        "</a></button></div></div>")
            })
        }
    })
});


$("#Jacketsbtn").click(function () {
   DB.Design.find().matches('category',/^Jackets/ ).resultList(function (result)   {
       {
           $('#voting-gallery-container').empty();
           result.forEach(function (designs) {
               var bildUrl = designs.gallery[0];
               $('#voting-gallery-container')
                   .append("<dic class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
                       "<img class='imgScaling' src='" + bildUrl +
                       "'></a> " +
                       "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
                       "<span class='glyphicon glyphicon-heart'></span> Vote " +
                       "</button>" +
                       "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                       "<a href='" + bildUrl + "'data-lightbox='TestBild'>" +
                       "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                       "</a></button></div></div>")
           })
       }
   })
});

$("#Specialsbtn").click(function () {
    DB.Design.find().matches('category',/^Specials/ ).resultList(function (result)   {
        {
            $('#voting-gallery-container').empty();
            result.forEach(function (designs) {
                var bildUrl = designs.gallery[0];
                $('#voting-gallery-container')
                    .append("<dic class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
                        "<img class='imgScaling' src='" + bildUrl +
                        "'></a> " +
                        "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
                        "<span class='glyphicon glyphicon-heart'></span> Vote " +
                        "</button>" +
                        "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                        "<a href='" + bildUrl + "'data-lightbox='TestBild'>" +
                        "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                        "</a></button></div></div>")
            })
        }
    })
});

$("#Votebtn").click(function () {
                    }
);

$("#1234").text(localStorage.getItem("competitionName"));



/*DB.ready(function () {
    DB.Design.find().resultList(function (result) {
        {
            result.forEach(function (inf) {
                var bildUrl = inf.gallery[0];
                $('#testest')
                    .append("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
                            "<img class='imgScaling' src='" + bildUrl +
                            "'></a> " +
                            "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
                            "<span class='glyphicon glyphicon-heart'></span> Vote " +
                            "</button>" +
                            "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                            "<a href='" + bildUrl + "'data-lightbox='TestBild'>" +
                            "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                            "</a></button></div></div>")
            })
        }
    })
}); */
function showDesigns() {
    $('#voting-gallery-container')
        .append("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
            "<img class='imgScaling' src='" + bildUrl +
            "'></a> " +
            "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
            "<span class='glyphicon glyphicon-heart'></span> Vote " +
            "</button>" +
            "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
            "<a href='" + bildUrl + "'data-lightbox='TestBild'>" +
            "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
            "</a></button></div></div>")
}

