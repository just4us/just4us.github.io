$(function() {
    // To close the modal on ESC key press
    $(document).keyup(function(ev){
        if(ev.keyCode == 27)
            $(".close-modal").trigger("click");
    });
    
    //To scroll at Contact Us page on 'Get Booklet' button click 
    $(document).on("click", '.getbooklet', function(event) {
        var button = $(this);
        var mModalId = $(this).closest('.portfolio-modal').attr('id');
        
        $('#'+mModalId).on('hidden.bs.modal', function (e) {
            
            $('html, body').stop().animate({
                scrollTop: $(button.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');

            $("textarea#message").val('Kindly send me the discount voucher booklet at \n\nADDRESS: \n');
            $("input#name").focus();

            $('#'+mModalId).off('hidden.bs.modal');
        });
        
        $('#' + mModalId).modal('hide');
    });
    
    //Scroll to Deals section when use changes the search text.
    $( '.searchbox input' ).keypress(function() {
        $('html, body').stop().animate({
            scrollTop: $('#portfolio').offset().top
        }, 1500, 'easeInOutExpo');
    });
    
});
