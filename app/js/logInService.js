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

    $("#signUpForm").submit(function(e){

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
    });

});

function registerUser(pass, firstName, lastName, address, zipCode, city, country, email){

    var user = new DB.User({
        firstName: firstName,
        lastName : lastName,
        address: address,
        zipCode: zipCode,
        city: city,
        country: country,
        email: email
    });

    console.log(user);

    DB.User.register(user, pass).then(function(){
        console.log(DB.User.me === user);
    });

}

function loginUser(email, pass){

    console.log(email);
    console.log(pass);

    DB.User.login(email, pass);
}