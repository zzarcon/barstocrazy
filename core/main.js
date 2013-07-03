console.log('main');
requirejs.config({
    waitSeconds: 60,
    //baseUrl: '',
    map: {
        //Plugin CSS
        '*': {
            'css': 'lib/css'
        }
    },
    paths: {
        controllers: '../controllers',
        css3CountDown: '../lib/css3-countdown-master',
        jQuery: '../lib/jquery-1.10.1',
        routie: '../lib/routie',
        text: '../lib/text',
        views: '../views',
        mustache: '../lib/mustache'
    },
    shim: {
        'global': ['jQuery']
    }
});

require(['global', 'jQuery'], function() {
    $(document).ready(function() {
        //console.log('ready');

        //randomBg();
    });

    function randomBg() {

        var wallpapers = [
            'http://spoki.tvnet.lv/upload2/articles/61/617472/images/_origin_Street-Workout-1.png',
            'http://i0.wp.com/oldspartanfitness.com/wp-content/uploads/2013/05/perfect-pushup-workouts.jpg',
            'http://www.prodality.com/wp-content/uploads/2013/03/Workout.jpg',
            'http://st.gdefon.ru/wallpapers_original/wallpapers/424527_sw_street-workout_logotip-vorkaut_workout-na_1250x911_(www.GdeFon.ru).jpg',
            'http://hdwallpapers-desktop.com/Sport/images/Sport%20Street%20Workout%203427%20.jpg'
        ],
                background = "url('img/334.gif'),url('",
                random = wallpapers[getRandomInt(0, 4)];

        background += random + "')";

        $('html').css('background-image', background);

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
});
