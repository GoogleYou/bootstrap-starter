var app = 'hallo';
DB.connect(app);

DB.ready(function() {
    $('#hello').html('Connected to Baqend app <strong>' + app + "</strong>");
});

DB.ready(function () {
    $('#123').click(function () {
        $("#234").hide(5000);
    })
});

DB.ready(function () {
    $('#234').click(function () {
        $("#123").hide(5000);
    })
});
/// hi
