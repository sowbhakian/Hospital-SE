// Sign in - Login form

$(document).ready(function() {
    $(this).scrollTop(0);
});

function signup() {
    $("#signupForm").removeClass("deactive")
    $("#loginForm").addClass("deactive")

    $("#signupBar").addClass("white")
    $("#loginBar").removeClass("white")

    $("#loginTxt").removeClass("text-decoration-underline")
    $("#signupTxt").addClass("text-decoration-underline")

}

function login() {
    $("#signupForm").addClass("deactive")
    $("#loginForm").removeClass("deactive")

    $("#signupBar").removeClass("white")
    $("#loginBar").addClass("white")

    $("#signupTxt").removeClass("text-decoration-underline")
    $("#loginTxt").addClass("text-decoration-underline")
}