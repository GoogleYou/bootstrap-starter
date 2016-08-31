/**
 * Created by Veronika on 29.08.16.
 */

$(document).ready(function () {

    $("#loginForm").submit(function (e) {

        e.preventDefault();

        var email = $("#usernameField").val();
        var pass = $("#passField").val();

        loginUser(email, pass);
    });

    $("#signUpForm").submit(function (e) {

        e.preventDefault();

        var fName = $("#fNameField").val();
        var lName = $("#lNameField").val();
        var address = $("#adrsField").val();
        var city = $("#cityField").val();
        var country = $("#countryField").val();
        var zip = $("#zipField").val();
        var email = $("#emailField").val();
        var pass = $("#passField").val();
        var passConfirm = $("#confPassField").val();

        if (pass === passConfirm)
        {
            registerUser(pass, fName, lName, address, zip, city, country, email);
        }
        else
        {
            alert("Password does not match.");
        }
    });

    $("#facebookBtn").click(function () {
        DB.User.loginWithFacebook("1738196716420350").then(function (user) {
            console.log(DB.User.me == user);
        });
    });

    $("#logOut").click(function () {
        console.log(DB.User.me.username);
        if (DB.User.me !== null)
        {
            DB.User.logout().then(function () {
                window.location.replace("index.html");
            });

        }
    });

});

function registerUser(pass, firstName, lastName, address, zipCode, city, country, email) {

    var user = new DB.User({
        firstName: firstName,
        lastName: lastName,
        address: address,
        zipCode: zipCode,
        city: city,
        country: country,
        username: email
    });

    console.log(user);

    DB.User.register(user, pass).then(function () {
        console.log(DB.User.me.username === user.username);
        window.location.replace("index.html");
    });

}

function loginUser(email, pass) {

    console.log(email);
    console.log(pass);

    DB.User.login(email, pass).then(function () {
        window.location.replace("index.html");
    })
}

function isLoggedIn() {
    if (DB.User.me !== null)
    {
        var username = DB.User.me.username;
        var hrefTag = "<a id='userHref' href='#'>" + username + "</a>";
        var userLink = "../" + username + ".html";

        $("#signup_header").hide();
        $("#login_header").hide();
        $("#username_header").html(hrefTag);
        $("#userHref").attr({'href': userLink});
    }

    if (DB.User.me === null)
    {
        $("#logOut").hide();
    }
}
