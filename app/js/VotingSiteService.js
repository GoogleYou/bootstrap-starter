/**
 * Created by Frank on 31.08.16.
 */

DB.ready(function() {
    findDesigns();

});

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


