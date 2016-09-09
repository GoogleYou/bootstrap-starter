/**
 * Created by Veronika on 02/09/16.
 *
 * Noch nicht Implementiert
 */

$(document).ready(function () {
    $("#add-comment-button").click(function () {
       addComment();
    });

});

function addComment() {
    var userComment = document.getElementById("userComment").value;
    document.getElementById("ui-state-default").innerHTML = userComment;
};
