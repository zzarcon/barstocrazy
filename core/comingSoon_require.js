console.log('comingSoon');

define(['css3CountDown/js/countdown', 'css!css3CountDown/style/style.css','css!../css/commingSoon.css'], function() {

    var Dom = {};
    init();


    function init() {
        CDT();
        cache();
        events();
        //Inicializar app
        $('html').addClass('load');
    }

    function cache() {
        Dom.send = $('#send');
        Dom.emailWrap = $('.email');
        Dom.email = $('#email');
    }
    function events() {
        Dom.send.on('click', send);
        Dom.email.on('keyup', function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            //Si a pulsado intro
            if (code === 13) { 
                send();
            }
        });
    }

    function send() {
        var email = Dom.email.val();
        if (email) {
            $.post('index.php', {
                email: email
            }, function(data) {
                console.log(data);
                //Dom.emailWrap.slideUp(1000);
                Dom.emailWrap.html('Hemos recibido tu correo, te mantendremos informado');
            });
        }

    }
    //Crea el contador
    function CDT() {

        // Set countdown limit
        var tl = new Date('2013/08/01 00:00:00');

        // You can add time's up message here
        var timer = new CountdownTimer('CDT', tl, '<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
        timer.countDown();
    }


});