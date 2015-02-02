$(function() {
   
    $(document).keyup(function(ev){
        if(ev.keyCode == 27)
            $(".close-modal").trigger("click");
    });
    
    $(document).on("click", '.getbooklet', function(event) {
        var button = $(this);
        var mModalId = $(this).closest('.portfolio-modal').attr('id');
        
        $('#'+mModalId).on('hidden.bs.modal', function (e) {
            
            $('html, body').stop().animate({
                scrollTop: $(button.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');

            $("textarea#message").val('Kindly send me the coupon booklet at \n\nADDRESS: \n');
            $("input#name").focus();

            $('#'+mModalId).off('hidden.bs.modal');
        });
        
        $('#' + mModalId).modal('hide');
    });
    
});
