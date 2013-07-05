define(['template','global','css!styles/user.css'], function(Template,Global) {

    function init(user) {
        user = {
            username: user
        };
        
        dpd.users.get(user,function(user) {
            user = user[0];
            //Buscar si soy seguidor del usuario
            var follow = _.where(user.followers,{
                username: Btz.me.username    
            });
            //Determinar si le sigo
            user.follow = follow.length ? true : false;
            console.log('controller user',Global, user);
            Template.render({
                template: 'views/user.html',
                values: user,
                domTarget: '#content',
                renderAction: 'html'
            }, function(html) {
                
            });
        });

    }

    return {
        init: init
    };
});