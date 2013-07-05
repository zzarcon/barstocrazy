<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


        <style>
            body {
                margin: 0;
                padding: 0;
                overflow: hidden;
                background: #111 url(http://www.barstocrazy.com/img/classy_fabric2.jpg);  
            }

            canvas {  
                background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
                display: block; 
            }

        </style>
        <style>
            .loader {
                position: absolute;
                width: 80px;
                top: 50%;
                left: 50%;
                margin-left: -30px;
                text-align: center;
                margin-top: -65px;
            }
            
            .loader img{
                height: 100px;
                margin-bottom: 5px;
            }

            .dot {
                width: 20px;
                height: 20px;
                border-radius: 10px;
                background: #fff;
                position: absolute;
                -webkit-animation-duration: 0.5s;
                -webkit-animation-timing-function: ease;
                -webkit-animation-iteration-count: infinite;
            }

            .dot1, .dot2 {
                left: 0;
            }

            .dot3 { left: 30px; }

            .dot4 { left: 60px; }

            @-webkit-keyframes reveal {
                from { -webkit-transform: scale(0.001); }
            to { -webkit-transform: scale(1); }
            }

            @-webkit-keyframes slide {
                to { -webkit-transform: translateX(30px) }
            }


            .dot1 {
                -webkit-animation-name: reveal;
            }

            .dot2, .dot3 {
                -webkit-animation-name: slide;
            }

            .dot4 {
                -webkit-animation-name: reveal;
                -webkit-animation-direction: reverse; /* thx @HugoGiraudel */
            }
        </style>
    </head>
    <body>
        <div class="loader">
            <img src="img/B_blanca.png" alt="" />
            <div class="dot dot1"></div>
            <div class="dot dot2"></div>
            <div class="dot dot3"></div>
            <div class="dot dot4"></div>
        </div>
        <script src="https://rawgithub.com/soulwire/sketch.js/master/js/sketch.min.js"></script>
        <script>
            (function() {

                Sketch.create();

            }).call(this);
        </script>

        
    </body>
</html>
