$(document).ready(function () {
    var navMenus = $(".site-menu");
    if (!$('.background-blue').length) {
        navMenus.each(function(){
            var buttons = $(this).children('a');
            buttons.css('display', 'inline-block');
            buttons.css('opacity', '1');
        });
    }

    var fadeDuration = 100;
    var body = $('body');

        $(".site-header").each(function(){
            var siteHeader = $(this);
            var navTrigger = siteHeader.find(".nav-trigger");
            var isAnimation = false;

            navTrigger.click(function(){
                if (!isAnimation)
                {
                    isAnimation = true;

                    if (body.hasClass('show-sidebar'))
                    {
                        body.removeClass('show-sidebar');
                        HideMenu();
                    }
                    else
                    {
                        body.addClass('show-sidebar');
                        ShowMenu();
                    }
                }

                setTimeout(function(){
                    isAnimation = false;
                }, 1000);
            });
        });

        $('#mobile-nav a').click(function(){
            $(window).scrollTop(0);
            $('body').removeClass('show-sidebar');
        });

        function ShowMenu()
        {
            navMenus.each(function(){
                var buttons = $(this).children('a');

                buttons.css('display', 'inline-block');
                buttons.eq(0).animate({ 'opacity': 1 }, fadeDuration, function(){
                    buttons.eq(1).animate({ 'opacity': 1 }, fadeDuration, function(){
                        buttons.eq(2).animate({ 'opacity': 1 }, fadeDuration, function(){
                            buttons.eq(3).animate({ 'opacity': 1 }, fadeDuration, function(){
                                buttons.eq(4).animate({ 'opacity': 1 }, fadeDuration, function(){
                                });
                            });
                        });
                    });
                });
            });
        }
        function HideMenu()
        {
            navMenus.each(function(){
                var buttons = $(this).children('a');

                buttons.eq(4).animate({ 'opacity': 0 }, fadeDuration, function(){
                    buttons.eq(3).animate({ 'opacity': 0 }, fadeDuration, function(){
                        buttons.eq(2).animate({ 'opacity': 0 }, fadeDuration, function(){
                            buttons.eq(1).animate({ 'opacity': 0 }, fadeDuration, function(){
                                buttons.eq(1).animate({ 'opacity': 0 }, fadeDuration, function(){
                                    buttons.css('display', 'none').removeClass('show');
                                });
                            });
                        });
                    });
                });
            });
        }



})

