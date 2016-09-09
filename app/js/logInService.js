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
    // Wird das Submit-Event auf der Sign Up Seite ausgelöst, so werden alle Inputwerte in Variablen gespeichert, die passwörter überprüft
    // und die registerUser Methode mit den, in den Variablen gespeicherten, Werte aufgerufen.
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
    //Automatischer Log In via Facebook Button
    $("#facebookBtn").click(function () {
        DB.User.loginWithFacebook("1738196716420350").then(function (user) {
            console.log(DB.User.me == user);
            window.location.replace("index.html");
        });
    });
// Wird der LogOut Button.
    $("#logOut").click(function () {
        if (DB.User.me !== null)
        {
            DB.User.logout().then(function () {
                window.location.replace("index.html");
            });
        }
    });

});

/*
Nimmt alle notwendigen Parameter zur Erstellung eines Users entgegen und übergibt diese an die Datenbank.
 */
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

    DB.User.register(user, pass).then(function () {
        console.log(DB.User.me.username === user.username);
        window.location.replace("index.html");
    });

}
/*
Übergabe von Email und Passwort an eine auf Baqendseite liegenden verifikation der Log In Daten.
Bei inkorekter Eingabe wird eine Fehlermeldung ausgegeben.
 */
function loginUser(email, pass) {
    DB.User.login(email, pass).then(function (user) {
        window.location.replace("index.html");
    }).catch(function (error) {
        console.log("error");
        $("#errorLogIn").text("Your Username or Password was incorrect!");
    });
}

/*
Überprüft ob ein User schon eingeloggt ist.
Ist dem so, so wird der Log In und Sign Up Button für den User versteckt und der Username sowie der Log Out Button angezeigt. Der Username wird durch die Email-Addresse dargestellt.
Sei dem nicht so, so wird weder der Username, noch ein Log Out Button dargestellt.
 */
function isLoggedIn() {
    if (DB.User.me !== null)
    {
        var username = DB.User.me.username;
        var hrefTag = "<a id='userHref' href='#'>" + username + "</a>";
        var userLink = "../" + username + ".html";

        $("#logIn_header").hide(); //Log In Button
        $("#signOut_header").hide(); //Sign Up Button
        $("#username_header").html(hrefTag);
        $("#userHref").attr({'href': userLink});
    }
    else
    {
        $("#logOut").hide();
    }
}
