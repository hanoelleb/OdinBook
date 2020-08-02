$(document).ready( function() {
    $('#req_options').hide();

    $('#request').on('mouseenter', function() {
        $('#req_options').show();
    });

    $('#request').on('mouseleave', function() {
        $('#req_options').hide();
    });
})
