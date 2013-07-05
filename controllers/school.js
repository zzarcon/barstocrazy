define(['template', 'css!styles/school.css'], function(Template) {

    function init(user) {

        console.log('controller school');

        Template.render({
            template: 'views/school.html',
            values: {},
            domTarget: '#content',
            renderAction: 'html'
        }, function(html) {
            console.log(html);
        });

    }

    return {
        init: init
    };
});