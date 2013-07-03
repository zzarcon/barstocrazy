/**
 * Se encarga de ejecutar cosas que siempre se necesitan; estando en la seccion que se este
 * Carga los ficheros que hagan falta dependiendo de la ruta en la que se esta
 */
console.log('global');
define(['routie'], function() {
    var Config = {
        commingSoon: true,
        routes: {
            'school': 'controllers/school',
            '/': 'controllers/home',
            'users/:name': 'controllers/user'
        }
    },
    initModules = [];

    if (Config.commingSoon) {
        initModules.push('comingSoon');
    }

    init();

    function init() {
        //requireModules();
        $(document).ready(function() {
            routes();
        });

    }

    function routes() {
        console.log('routes');
        
        //Creacion dinamica
        //Da error a la hora de ejecutarse; se ejecuta mas veces de las que toca
        /*$.each(Config.routes, function(route, controller) {
            //console.log('route',route);
            //routie(route, routeCheck);
        });*/
        //Declaracion implicita para que funcione correctamente
        routie({
            'school': routeCheck,
            'users/:name': routeCheck,
            '': routeCheck
        });

        function routeCheck(data) {
            var path = this.path,
                    controller = path || "/";

            controller = [Config.routes[controller]];

            console.log('routeCheck', path, controller);
            require(controller);
        }
    }

    function requireModules() {
        require(initModules, function() {

        });
    }

});