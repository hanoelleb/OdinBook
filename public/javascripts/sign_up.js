function isValid(username, password, confirm_pw) {
    return username !== '' && password !== '' && password === confirm_pw;
}


$(document).ready( function() {
    var username = '';
    var password = '';
    var confirm_pw = '';

    $('#sub').prop('disabled', true);

    $('#name').on('input', function() {
        username = $(this).val();
	if (isValid(username, password, confirm_pw))
            $('#sub').prop('disabled', false);
	else
	    $('#sub').prop('disabled', true);
    });

    $('#password').on('input', function() {
	 password = $(this).val();
	 if (isValid(username, password, confirm_pw))
            $('#sub').prop('disabled', false);
	 else
	     $('#sub').prop('disabled', true);
    });

    $('#confirm').on('input', function() {
        confirm_pw = $(this).val();
	if (isValid(username, password, confirm_pw))
            $('#sub').prop('disabled', false);
	else
	    $('#sub').prop('disabled', true);
    });
});


