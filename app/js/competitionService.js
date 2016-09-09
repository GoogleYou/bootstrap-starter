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


$("#PTTP").click(function () {
    localStorage.setItem("competitionName", "PTTP Competition");
    localStorage.setItem("competitionID", "/db/Competition/4cb12309-8ffd-47a7-bab4-59b5fd4decd2");

});

$("#CC").click(function () {
    localStorage.setItem("competitionName", "Community Competition");
    localStorage.setItem("competitionID", "/db/Competition/c442ceda-68b2-4a97-a200-38140b294fdb");
});

function changeImages(image) {
    var small = $("img", image).attr("src");
    var big = $("#foto-id img").attr("src");

    $("img", image).attr({"src": big});
    $("#foto-id img").attr({"src": small});
}
