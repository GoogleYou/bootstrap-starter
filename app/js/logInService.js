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

});

function registerUser(firstName, lastName, email, street, zipCode, city, country){

}

function loginUser(name, pass){

    console.log(name);
    console.log(pass);

    DB.User.login(name, pass);
}