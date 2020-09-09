let fs = false;
let elem = document.documentElement;


$(window).on("load", function () {

    $("#page li:not('.pre')").fadeOut(0);

    $('.introNext').on('click', function () {
       affiche('.installation', 400, 400, 10)
    });

});

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}


function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
}

function Fullscreen() {

    if(fs) {
        closeFullscreen();
        fs = false;

    } else {
        openFullscreen();
        fs = true;
    }
}

function affiche(element, fadeOut, fadeIn, wait) {
    $("#page li:not(element)").fadeOut(fadeOut);
    setTimeout(
        function()
        {
            $(element).fadeIn(fadeIn);
        }, wait );
}

function intro() {
    $('body').css({
        'cursor' : 'none'
    });
    setTimeout(function() {

            $(".introTitle1").fadeIn(500);
            $("#tm li").fadeIn(500, function () {
            setTimeout(function() {
                $('.introNext').fadeIn(500);
                $('body').css({
                    'cursor' : 'auto'
                });
            }, 3000);

        });


        }, 1700 );
}

