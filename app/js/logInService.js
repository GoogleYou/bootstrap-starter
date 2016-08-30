/**
 * Created by Veronika on 29.08.16.
 */
$(document).ready(function(){

    $("#loginForm").submit(function(e){

        e.preventDefault();

        var name = $("#usernameField").val();
        var pass = $("#passField").val();

        loginUser(name, pass);
    });

    $("#signUpForm").submit(function(e){

        e.preventDefault();

        var fName = $("#fNameField").val();
        var lName = $("#lNameField").val();
        var address = $("#adrsField").val();
        var city = $("#cityField").val();
        var zip = $("#zipField").val();
        var email = $("#emailField").val();
        var pass = $("#passField").val();
        var passConfirm = $("#confPassField").val();

        if(pass === passConfirm)
        {
            registerUser(fName, lName, address, zip, city, "lala", email);
        }
    });

});

function registerUser(firstName, lastName, address, zipCode, city, country, email){

    var user = new DB.User({
        firstName: firstName,
        lastName : lastName,
        address: address,
        zipCode: zipCode,
        city: city,
        country: country,
        email: email
    });

    DB.User.register().then(function(){
        console.log(DB.User.me === user);
    });

}

function loginUser(name, pass){

    console.log(name);
    console.log(pass);

    DB.User.login(name, pass);
}