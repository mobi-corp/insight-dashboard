$(document).ready(function(){

// Open and close the side filter

    $('#sideFilterIcon').click(function(event) {
        event.preventDefault();

        if ($('#sideFilterIcon').hasClass('open')) {
            $(this).removeClass('open');
            //$('.side-filter').animate({width: '8.33333%'});
            $('.content').removeClass('filter-open');
        }

        else {
            $(this).addClass('open');
            //$('.side-filter').animate({width: '25%'});
            $('.content').addClass('filter-open');
        }
    });


// Update both inputs for thresholds

    var rangeInput = $('.rangeInput');
    var textInput = $('.textInput');

    rangeInput.change(function() {
        textInput.val($(this).val());
    });

    textInput.change(function() {
        rangeInput.val($(this).val());
    });


// Toggle filter sections on side filter
    // Click on toggle-filter span, get id and store value
    $('.toggle-filter').click(function(){
        var name = $(this).attr('id');
        $('.' + name).toggle();
        if ($(this).text() === '+') {
            $(this).text('–');
        } else {
            $(this).text('+');
        }
    });
    // Toggle elements with class name that matches stored value


$('#hierarchy').change(function() {
    $('.table-hierarchy').toggle();
    $('.table-flat').toggle();
});

$('#level-4').change(function() {
    $('.table-flat').toggle();
    $('.table-branches').toggle();
    $('#level-5').trigger('click');
});

});

