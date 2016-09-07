/**
 * Created by Frank on 07.09.16.
 */
//12334
var designObject;
//var designerObject;

DB.ready(function () {
loadDesign()
})
function loadDesign() {

    var DesignId = localStorage.getItem("IdDesign");
    DB.Design.load(DesignId).then(function (pic) {
        designObject = pic;
     //   loadDesigner();
        loadDesign2();
    })
}

/*function loadDesigner(){
    DB.Design.load(designObject.designer).then(function (artist) {
        designerObject = artist;
})}*/

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
    $("#description-id").append("<h3>Description</h3><p>" + designObject.information + "</p>"+
    "<h4>Material</h4><p>" + designObject.material + "</p>" +
    "<h4>Color</h4><p>" + designObject.color + "</p>"
        //"<h4>Designer</h4><p>"+designerObject.firstName +"</p><p>"+designerObject.lastName+"</p>"
    )
}