$(document).ready(function () {
    


        console.log('12');

    var initPomPom = function() {
        
        var pompom = $(".pompom");
        var pompomquotes = pompom.children(".pompom-quote");
        

        var pomX = 0;
        var pomY = 0;
        var statusNo = 0;

        function Walkpompom()
        {
            pompom.animate({
                'margin-top': Math.floor(pomY / 3) % 2 == 0 ? '+=30px' : '-=30px',
                'margin-left': pomX % 2 == 0 ? '+=150px' : '-=150px'
            }, 1000, function(){

                pomX++;
                pomY++;

                pompomquotes.addClass('show').children('li').hide().eq(statusNo++ % 4).show();
                setTimeout(function(){
                    pompomquotes.removeClass('show');
                    Walkpompom();
                }, 4000);
            });
        }

        Walkpompom();

        pompom.each(function(){
            var pompom = $(this);

            $(document).mousemove(function(e){
                var p = pompom.position();
                var ml = parseInt( pompom.css('margin-left').replace('px', '') );
                var mt = parseInt( pompom.css('margin-top').replace('px', '') );

                var pl = p.left + ml + 11;
                var pt = p.top + mt;

                if ( e.clientY < pt )
                {
                    return false;
                }

                var angle = 0;

                if ( e.clientX == pl )
                {
                    angle = 0;
                }
                if ( e.clientX > pl )
                {
                    var ab = Math.round(e.clientX - pl);
                    var ac = Math.round(e.clientY - pt);
                    var r = ab / ac;
                    var rt = r + 1;
                    var angle = (90 - (90 / rt)) * -1;
                }
                else
                {
                    var ab = Math.round(pl - e.clientX);
                    var ac = Math.round(e.clientY - pt);
                    var r = ab / ac;
                    var rt = r + 1;
                    var angle = (90 - (90 / rt));
                }

                angle = angle < -60 ? -60 : angle;
                angle = angle > 60 ? 60 : angle;
                angle = angle / 2;
            });
        });
    };
    initPomPom();
});
