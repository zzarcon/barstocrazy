<?php
if ($_POST) {
    $email = $_POST['email'];
    
    $to = 'hezarco@gmail.com,albertvilva@gmail.com,especialistaento@hotmail.com,rahedesigns@gmail.com';
    $subject = 'Nuevo correo electronico dado de alta';
    $message = 'Email: ' . $email;
    
    $headers = 'From: Barstocrazy' . "\r\n" .
            'Reply-To: Barstocrazy' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    exit;
}
?>
<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <title>Barstocrazy</title>
        <link rel="stylesheet" media="screen" href="css/global.css" />
        <link rel="stylesheet" media="screen" href="css/commingSoon.css" />
        <link rel="stylesheet" media="screen" href="js/plugins/css3-countdown-master/style/style.css" />
        <script type="text/javascript" src="js/plugins/jquery-1.10.1.js"></script>
        
        <script type="text/javascript" src="js/plugins/css3-countdown-master/js/countdown.js"></script>
        <script type="text/javascript" src="js/comingSoon.js"></script>
    </head>
    <body>
        <div class="title">
            <img src="img/title.png" alt="" />
        </div>
        <div class="container">
            <div id="CDT"></div>
            <div class="email">
                <input id="email" type="email" placeholder="Introduce tu email" />
                <button id="send">Enviar</button>
            </div>
        </div>


    </body>
</html>