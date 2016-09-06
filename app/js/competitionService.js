$(document).ready(function () {

    $("#image-selector-1").click(function () {
        changeImages(this);
    });

    $("#image-selector-2").click(function () {
        changeImages(this);
    });

    $("#image-selector-3").click(function () {
        changeImages(this);
    });
});

function changeImages(image) {
    var small = $("img", image).attr("src");
    var big = $("#foto-id img").attr("src");

    $("img", image).attr({"src": big});
    $("#foto-id img").attr({"src": small});
}

$("#PTTP").click(function () {
    localStorage.setItem("competitionName", "PTTP Competition");
});

$("#CC").click(function () {
    localStorage.setItem("competitionName", "Community Competition");
});