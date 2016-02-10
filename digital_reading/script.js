$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 50) {
        $("#Topbar").addClass('small')
    } else {
        $("#Topbar").removeClass('small')
    }
});




$(document).ready( function() {
    $( ".comment" ).click( function() {
        $( "#comment" ).toggle("fade",400);
        
    });
});

$(document).ready( function() {
    $( "#link" ).click( function() {
        $( "#textlinks" ).toggle("fade",400);
        
    });
});

$(document).ready( function() {
    $( ".fa-close" ).click( function() {
        $( "#textlinks" ).css("display","none");
        $("#link").removeClass('linked');
        
    });
});


$(document).ready( function() {
    $('.heart').click(function() {
    $('#liked').html(function(i, val) {
       return 1 - val*1 
    });
    $('#like').html(function(i, val) {
        if ($("#liked").html() != '0') {
            return val*1 + 1
            }
        else {
            return val*1 - 1
        }
    });
});
    
});


$(document).ready( function() {
    $('.comment').click(function(){
    $(this).toggleClass('rateclicked');
});
});

$(document).ready( function() {
    $('.heart').click(function(){
    $(this).toggleClass('rateclicked');
});
});

$(document).ready( function() {
    $('#link').click(function(){
    $(this).toggleClass('linked');
});
});

//the slide show

$(document).ready(function()
{
    var present=1;
    var next=2;

    $("#right").click(function()
    {

        present_slide="#slide"+present;
        next_slide="#slide"+next;
        $(present_slide).css("opacity","0");
        $(next_slide).css("opacity","1");
        present++;
        next++;
        if(present==(3+1))
        {
            present=1;
            next=2;
            for(i=1;i<=3;i++)
            {
                $("#slide"+i).css("opacity","0");
            }
            $("#slide1").css("opacity","1");
        }

    });

    $("#left").click(function()
    {
        if(present==1)
        {
        next_slide="#slide"+3;
        present_slide="#slide"+present;
        $(present_slide).css("opacity","0");
        $(next_slide).css("opacity","1");

        present=3;
        next=1;
        }else
        {
        next_slide="#slide"+(present-1);
        present_slide="#slide"+present;
        $(present_slide).css("opacity","0");
        $(next_slide).css("opacity","1");
        present--;
        next--;
        }
        if(next==0)
        {
            present=(3-1);
            next=3;

        }
    });
});



