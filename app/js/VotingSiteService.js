/**
 * Created by Frank on 31.08.16.
 */

    //hshshshshshshsh
    //DB.ready(function() {
    //});

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
    findDesigns("Shirts");
});
$("#Pulloverbtn").click(function () {
    findDesigns("Pullover");
});
$("#Jacketsbtn").click(function () {
    findDesigns("Jackets");
});
$("#Specialsbtn").click(function () {
    findDesigns("Specials");
});
$("#Votebtn").click(function () {
                    }
)

