/**
 * Created by Frank on 07.09.16.
 */

var designObject;
var designerObject;
var designerId;

DB.ready(function () {
    loadDesign();
});


function loadDesign() {

    var DesignId = localStorage.getItem("IdDesign");
    DB.Design.load(DesignId).then(function (pic) {
        designObject = pic;
        designerId = pic.designer.toString();
        loadDesigner();
    })
}

function loadDesigner() {
    DB.User.load(designerId).then(function (artist) {
        designerObject = artist;
        loadDesign2();
    })
}

function loadDesign2() {
    $("#image-selector-1").empty()
    $("#image-selector-1").append("<img src='" + designObject.gallery[1] + "'></div>")
    $("#image-selector-2").empty()
    $("#image-selector-2").append("<img src='" + designObject.gallery[2] + "'></div>")
    $("#image-selector-3").empty()
    $("#image-selector-3").append("<img src='" + designObject.gallery[3] + "'></div>")
    $("#foto-id").empty()
    $("#foto-id").append("<img src='" + designObject.gallery[0] + "'>")
    $("#description-id").empty()
    $("#description-id").append("<h3>Description</h3><p>" + designObject.information + "<br><br></p>" +
        "<h4>Material</h4><p>" + designObject.material + "<br><br></p>" +
        "<h4>Color</h4><p>" + designObject.color + "<br><br></p>" +
        "<h4>Designer</h4><p>" + designerObject.firstName + " " + designerObject.lastName + "<br><br></p>"
    )
}