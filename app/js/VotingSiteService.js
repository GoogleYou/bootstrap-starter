/**
 * Created by Frank on 31.08.16.
 */

//DB.ready(function() {

//});

var elements = new Array();


function getElement(index) {
    console.log(elements[index].category)
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
$("#PTTP").click(function () {
    $("#NameCompetition").text("PTTP");
});

$("#Testbtn").click(function () {
    $("#NameCompetition").text("PTTP");
});


