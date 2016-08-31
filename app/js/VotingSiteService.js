/**
 * Created by Frank on 31.08.16.
 */

var elements = new Array ();

DB.Design.find().resultList(function(result)
{
    var n = 1;
    result.forEach(function(design)
    {
        elements[n](design.idDesign);
        n++;
    });
});

function getElement(index){
    console.log(elements[index])
}