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
//$("#1234").text(localStorage.getItem("competitionName"));
$("#1234").text(" "+
    localStorage.getItem("competitionName") );

