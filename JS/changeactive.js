$(document).ready(function () {
    $('.nav li a').click(function(e) {
        $('.nav li a.active').removeClass('active');

        var $parent = $(this);
        $parent.addClass('active');
    });
});