define(['template', 'css!styles/users.css'], function(Template) {

    function init() {

        dpd.users.get(function(users) {
            users = {
                users: users
            };
            console.log('controller users', users);

            Template.render({
                template: 'views/users.html',
                values: users,
                domTarget: '#content',
                renderAction: 'html',
                partials: {
                    //user: '<a href="#users/{{username}}" ><div>{{username}}</div></a>'
                    user: 'views/miniUser.html'
                }
            }, function(html) {

            });
        });

    }

    return {
        init: init
    };
});