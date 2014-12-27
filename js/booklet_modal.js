$(function() {

    $(".getbooklet").click(function() {
        console.log("get booklet clicked");
        $("textarea#message").val('Kindly send me the coupon booklet at \n\nADDRESS: \n');
        $("input#name").focus();
    });
    
    $(document).keyup(function(ev){
        if(ev.keyCode == 27)
            $(".close-modal").trigger("click");
    });
});
