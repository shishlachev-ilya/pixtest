<?php

$recepient = "shishlachevilya@gmail.com";
$sitename = "test";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$msg = trim($_POST["message"]);
$message = "Имя: $name \nПочта: $email \nСообщение: $msg";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");