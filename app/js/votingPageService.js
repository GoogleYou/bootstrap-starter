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
    DB.Design.find().matches('category',/^Shirts/ ).resultList(function (result) {
        {
            result.forEach(function (inf) {
                var bildUrl = inf.gallery[0];
                $('#testest')
                    .replaceWith("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
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
    DB.Design.find().matches('category',/^Pullover/ ).resultList(function (result) {
        {
            result.forEach(function (inf) {
                var bildUrl = inf.gallery[0];
                $('#testest')
                    .replaceWith("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
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
    DB.Design.find().matches('category',/^Jackets/ ).resultList(function (result) {
        {
            result.forEach(function (inf) {
                var bildUrl = inf.gallery[0];
                $('#testest')
                    .replaceWith("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
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
    DB.Design.find().matches('category',/^Specials/ ).resultList(function (result) {
        {
            result.forEach(function (inf) {
                var bildUrl = inf.gallery[0];
                $('#testest')
                    .replaceWith("<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3><div class='img-thumbnail img-responsive'><a>" +
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

function displayDesigns() {
    for (i = 0; i < elements.length; i++)
    {
        var url = elements[i].url;
        $("#galleryContainer")
            .append("<div class='col-xs-6 col-sm-3'><div class='img-thumbnail img-responsive'><a><img src='" + bildUrl +
                    "' width='300' height='200'></a> " +
                    "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
                    "<span class='glyphicon glyphicon-heart'></span> Vote " +
                    "</button>" +
                    "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                    "<a href='" + url + "'data-lightbox='TestBild'>" +
                    "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                    "</a></button></div></div>")
        ;

        /*  <div class="col-xs-6 col-sm-3">
         <div class="img-thumbnail img-responsive">
         <a href="https://hallo-bq.global.ssl.fastly.net/v1/file/www/img/Tshirt2.png?BCB" data-lightbox="TestBild"><img src="https://hallo-bq.global.ssl.fastly.net/v1/file/www/img/Tshirt2.png?BCB" width="300"
         height="200"></a>
         <div class="desc">
         <button type="button" class="btnvote" aria-label="Left Align" id="Votebtn">
         <span class="glyphicon glyphicon-heart"></span> Vote
         </button>
         <button type="button" class="btnzoom" aria-label="Right Align">
         <a href="https://hallo-bq.global.ssl.fastly.net/v1/file/www/img/Tshirt2.png?BCB">
         <span class="glyphicon glyphicon-zoom-in"></span> Zoom in
         </a>
         </button>
         </div>
         </div>
         </div>   */
    }
}


DB.ready(function () {
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
});
