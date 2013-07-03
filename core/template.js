define(['mustache'],function() {

    function render(options,callback) {
        
        var template = ['text!' + options.template],
                $target = $(options.domTarget),
                renderAction = options.renderAction || 'append';
        
        require(template,function(html){
            
            html = Mustache.to_html(html,options.values);
            
            if($target.length){
                $target[renderAction](html);
            }
            
            
            if(callback){
                callback(html);
            }
        });
    }

    return{
        render: render
    };
});