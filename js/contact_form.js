$(document).ready(function () {

    $("#send").click(function () {
        
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        console.log('sending data for mail api');
        $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (name == '' || email == '' ) {
            alert("Please Fill Required Fields");
        } else {
            // Returns successful data submission message when the entered information is stored in database.
            $.post("http://mywork.dev-tech.club/mail.php?to=keyur13111992@gmail.com", {
                name: name,
                email: email,
                message: message
            },
            function (data) {
                $("#form_contact")[0].reset();
                $("#returnmessage").append('Form submitted'); // Append returned message to message paragraph.
                
               
            }
            );
            
        }
    });
});