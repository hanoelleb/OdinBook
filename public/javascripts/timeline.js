$(document).ready( function() {
    $('#post_form').hide();
    $('#cancel').hide();

    $('#new').click(function() {
        $('#post_form').show();
	$('#cancel').show();
	$(this).hide();
    });

    $('#cancel').click(function() {
        $('#post_form').hide();
	$('#new').show();
        $(this).hide();
    });
})
