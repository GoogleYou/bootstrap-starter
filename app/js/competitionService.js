$(document).ready(function () {

    $("#image-selector-1").click(function () {

        var small = $("#image-selector-1 img").attr("src");
        var big = $("#foto-id img").attr("src");

        $("#image-selector-1 img").attr({"src" : big});
        $("#foto-id img").attr({"src" : small});

    });

    $("#image-selector-2").click(function () {

        var small = $("#image-selector-2 img").attr("src");
        var big = $("#foto-id img").attr("src");

        $("#image-selector-2 img").attr({"src" : big});
        $("#foto-id img").attr({"src" : small});

    });

    $("#image-selector-3").click(function () {

        var small = $("#image-selector-3 img").attr("src");
        var big = $("#foto-id img").attr("src");

        $("#image-selector-3 img").attr({"src" : big});
        $("#foto-id img").attr({"src" : small});

    });
});