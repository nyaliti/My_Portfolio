<!-- contact.php -->
<?php
if ($_SERVER["REQUEST_METHOD"]== "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];


    $to = "bnyaliti@outlook.com";
    $subject = "Portfolio Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    }
?>