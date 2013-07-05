define(['template'], function(Template) {

    function init(data) {
        
        console.log('home controller',data);

        Template.render({
            template: 'views/home.html',
            values: {},
            domTarget: '#content',
            renderAction: 'html'
        }, function(html) {
            
        });

    }


    return {
        init: init
    };
});