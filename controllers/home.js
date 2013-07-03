define(['template'], function(Template) {

    init();

    function init() {

        var values = {
            name: 'Hector',
            noticias: [
                {
                    title: 'noticia 1',
                    content: 'contenido'
                },
                {
                    title: 'noticia 2',
                    content: 'contenido'
                }
            ]
        };

        Template.render({
            template: 'views/home.html',
            values: values,
            domTarget: 'body'
        }, function(html) {
            console.log(html);
        });

    }
    
});