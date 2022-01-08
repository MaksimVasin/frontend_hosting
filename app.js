$(function() {

    var scrollOffset = $(window).scrollTop();

    var login = document.querySelector(".user-btn");

    var input_login = document.querySelector("#username");
    var input_password = document.querySelector("#password");
    var login_form = document.querySelector(".login-form");
    
    var close = document.querySelector(".close-btn");
    var form = document.querySelector("#form");
    var isStorage = true;

    login.addEventListener("click", function (evt) {
        evt.preventDefault();
        $(login_form).addClass("active");
        $(login).addClass("active");
        
        if (localStorage.getItem("username")) {
            input_password.focus();
            if (localStorage.getItem("username")) {
                input_login.value = localStorage.getItem("username");            
            }
        }
        else {
            input_login.focus();
        }
        /* input_login.value = localStorage.getItem("username"); */
    });
    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        $(login_form).removeClass("active");
        $(login_form).removeClass("error");
        $(login).removeClass("active");
    });
    /* не тогл потому что на разных элемнтах кноки логин и клоус*/
    window.addEventListener("keydown", function(evt) {
        if ((evt.keyCode === 27) && (login.classList.contains("active"))) {
            evt.preventDefault();
            $(login_form).removeClass("active");
            $(login_form).removeClass("error");
            $(login).removeClass("active");
        }
    });

    $("#nav_toggle").on("click", function(evt) {
        evt.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $("#nav_user").toggleClass("active")
    });

    // form submit
    form.addEventListener("submit", function(evt) {
        if (!input_login.value || !input_password.value) {
            evt.preventDefault();
            console.log("login or password is null");
            $(login_form).removeClass("error");
            setTimeout(function(){$(login_form).addClass("error")}, 0);
        }
        else {
            if (isStorage)
            {
                evt.preventDefault();
                try {
                    localStorage.setItem("username", input_login.value);
                }
                catch (exception) {
                    isStorage = false;
                }
            }

            //localStorage.setItem("password", input_password.value);
        }
    });
    

    /* fixed header */
    /* checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    }); */

    /* function checkScroll(scrollOffset) {
        
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } 
        else {
            header.removeClass("fixed");
        }

        if (scrollOffset >= scroll_btnH) {
            scroll_btn.addClass("active");
        } 
        else {
            scroll_btn.removeClass("active");
        }
    } */

    /* Smoth scroll */
    /* $("[data-scroll").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    }); */

    /*  toggle */
    

    /* wedo */
    /* $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data('collapse');
        $this.toggleClass("active");
    }); */
    /* slider */
    /* $("[data-slider]").slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }); */
});