define(['mustache'], function(Mustache) {

    function render(options, callback) {

        var template = ['text!' + options.template],
                $target = $(options.domTarget),
                renderAction = options.renderAction || 'append',
                values = options.values;


        require(template, function(html) {
            //console.log('render',templateHtml);
            var partials = options.partials;
            //Si contiene partials, se recuperar y se renderizan asincronamente
            if(partials){
                var PARTS = {}, length = _.keys(partials).length;
                
                $.each(partials, function(key, partial) {
                        //Obtener el html del fichero de cada partial
                        require(['text!' + partial], function(partialHtml) {
                            //console.log('PARTS',key,partial,partialHtml);
                            
                            length--;
                            //console.log('PARTS length',length);
                            PARTS[key] = partialHtml;
                            //Cuando haya cargado todos los parciales se renderiza
                            if (!length) {
                                html = Mustache.render(html, values, PARTS);
                                finish();
                            }

                        });
                    });
            }else{
                html = Mustache.render(html, values);
                finish();
            }

            function finish() {
                if ($target.length) {
                    $target[renderAction](html);
                }

                if (callback) {
                    callback(html);
                }
            }

        });
    }

    return{
        render: render
    };
});