
$(document).ready( function(){
    $('.connectUs a').click( function () { 
        $(".tool-tip").css("display", "block");
    })
    $('.tool-tip button').click( function () { 
        $(".tool-tip").css("display", "none");
    })
});