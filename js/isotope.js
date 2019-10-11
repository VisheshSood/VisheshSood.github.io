var $grid = $('.sort-destination').isotope({
    // options
});
$('.product-tab').on('click', 'li', function() {
    var filterValue = $(this).attr('data-option-value');
    if (filterValue != ".all") {
        $("li").removeClass("active");
    }
    $grid.isotope({ filter: filterValue });
});