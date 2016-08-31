/**
 * Created by Veronika on 29.08.16.
 */

$(document).ready(function(){

    $("#loginForm").submit(function(e){

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

        if(pass === passConfirm)
        {
            registerUser(pass, fName, lName, address, zip, city, country, email);
        }
        else
        {
            alert("Password does not match.");
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
    });

}

function loginUser(email, pass) {

    console.log(email);
    console.log(pass);

    DB.User.login(email, pass);
}

function isLoggedIn() {
        if (DB.User.me !== null) {
            var username = DB.User.me.username;
            var hrefstart = "../";

            var sd = <a href="../userAnsicht.html"></a>
                    va

            $("#signup_header").hide();
            $("#login_header").hide();
            $("#username_header").text(username);
            console.log(result);

        }
}
