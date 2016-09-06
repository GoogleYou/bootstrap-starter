/**
 * Created by Frank on 31.08.16.
 */


var elements = new Array();


function getElement(index) {
    console.log(elements[index].id)
}

function findDesigns(cat) {
    DB.Design.find().resultList(function(result)
    {
        result.forEach(function(design) {
            if (design.category === cat){
                elements.push(design);
            }

        });
    })
}

$("#Shirtsbtn").click(function () {
    elements = [];
    findDesigns("Shirts");
});
$("#Pulloverbtn").click(function () {
    elements = [];
    findDesigns("Pullover");
});
$("#Jacketsbtn").click(function () {
    elements = [];
    findDesigns("Jackets");
});
$("#Specialsbtn").click(function () {
    elements = [];
    findDesigns("Specials");
});
$("#Votebtn").click(function () {
                    }
);

$("#1234").text(localStorage.getItem("competitionName") );

function displayDesigns(){
    for (i= 0; i < elements.length; i++) {
       var url = elements[i].url;
        $("#galleryContainer").append("<dic class='col-xs-6 col-sm-3'><div class='img-thumbnail img-responsive'><a href='"+url+"'data-lightbox='TestBild'><img src='"+bildUrl+"' width='300' height='200'></a> " +
        "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
        "<span class='glyphicon glyphicon-heart'></span> Vote " +
        "</button>" +
        "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
        "<a href='"+bildUrl+"'>" +
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
                    .append("<dic class='col-xs-6 col-sm-6'><div class='img-thumbnail img-responsive' id='testen'><a href='" +
                            bildUrl + "'data-lightbox='TestBild'><img class='imgScaling' src='" + bildUrl +
                            "'></a> " +
                            "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
                            "<span class='glyphicon glyphicon-heart'></span> Vote " +
                            "</button>" +
                            "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                            "<a href='" + bildUrl + "'>" +
                            "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                            "</a></button></div></div>")
            })
        }
    })
})
