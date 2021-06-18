$('#button').click(function() {
    let flag = true;

    // FORM INPUTS VALUES
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let gender = $('#gender').val();
    let password = $('#password').val();
    let password_confirmation = $('#password_confirmation').val();
    let email = $('#email').val();

    let errors_array = [];
    $('#error_messages_list').html("");

    // FIRSTNAME AND LASTNAME VALIDATION
    if(first_name.length < 4 || last_name.length < 4) {
        flag = false;
        errors_array.push("Your first name or last name is smaller than 4 characters");
    }

    // GENDER VALIDATION
    if(gender != 'male' && gender != 'female') {
        flag = false;
        errors_array.push("You must choose your gender.");
    }

    if(password.length < 6) { // regex or Regular Experesions
        flag = false;
        errors_array.push("Your password is too weak.");
    }

    if(!password.match(/[A-z]/)) {
        flag = false;
        errors_array.push("Your password must have a character.");
    }

    let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    if(email < 6) {
        flag = false;
        errors_array.push("Your email is wrong.");
    }

    if(!pattern.test(email)) {
        flag = false;
        errors_array.push("Incorrect email");
    }

    if(password !== password_confirmation) {
        flag = false;
        errors_array.push("Password does not match the password confirmation");
    }


    if(flag == false) {
        for(let x = 0; x < errors_array.length; x++) {
            $('#error_messages_list').append("<li>" + errors_array[x] + "</li>");
        }

        $('.alert').show();
    }

    if(flag == true) {
        $('.alert').hide();
    }
});