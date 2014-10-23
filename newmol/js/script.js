function send() {
    var login = $('#login').val();
    var password = $("#password").val();
    $(document).ready(function() {
        $.ajax({
            type: "POST",
            url: "db/login.php",
            data: ({login: login, password: password}),
            dataType: 'json',
            success: function(a) {
                location.replace("general.html");
            },
            error: function(a) {
                $('#login').css("border-color", "#FF0000");
                $('#password').css("border-color", "#FF0000");
                $('.msg').text("Invalid Brand Name/Password");
            }
        });
    });


}