/**
 * Se encarga de ejecutar cosas que siempre se necesitan; estando en la seccion que se este
 * Carga los ficheros que hagan falta dependiendo de la ruta en la que se esta
 */
define(['routie','dpd','underscore'], function() {
    var Config = {
        commingSoon: true,
        routes: {
            'school': 'controllers/school',
            '/': 'controllers/home',
            'users/:name': 'controllers/user',
            'users': 'controllers/users'
        }
    },
    Btz = {
        Me : {}
    };
    

    $(document).ready(init);

    function init() {
        console.log('global init');
        routes();
        
        globalEvents();
        
        window.Btz = Btz;
        getMe();
    }
    //Obtiene el usuario actual (si es que hay alguno logeado) y lo guarda en Global
    function getMe(){
        //Obtener datos
        dpd.users.me(function(me){
            //Exportar Objeto Barstocrazy al contexto global
            //Almacenara valores de confiuracion
            Btz.me = me || {};
            console.log('getMe',Btz.me);
            
            if(me){
                $('#userStatus').text('Hola ' + me.username);
            }else{
                $('#userStatus').text('Registrate');
            }
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
            'users': routeCheck,
            '': routeCheck
        });
        //Dependiendo de la ruta carga un controlador u otro
        function routeCheck(data) {
            var path = this.path,
                    controller = path || "/";

            controller = [Config.routes[controller]];

            console.log('routeCheck', path, controller);
            require(controller, function(Controller) {
                $('html').addClass('load');

                Controller.init(data);
            });
        }
    }

    function globalEvents(){
        $('body').on('click','.userRelation',manageUserRelationHandler);
    }
    /**
     * Controla el click en seguir/dejar de seguir
     * @returns {undefined}
     */
    function manageUserRelationHandler(){
        var $button = $(this),
                action = $button.attr('data-action');
        
        
    }
    
    return {
        //me: Me
    };
});