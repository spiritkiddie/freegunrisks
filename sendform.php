<?php
/**
 * Created by PhpStorm.
 * User: Rashid
 * Date: 1/24/2017
 * Time: 6:20 PM
 */

    // VALUES FROM THE FORM
    $name        = $_POST['name'];
    $email        = $_POST['email'];
    $message    = $_POST['msg'];
    $salutation   = $_POST['subject'];
    //$phone   = $_POST['Phone'];

    // ERROR & SECURITY CHECKS
    if ( ( !$email ) ||
         ( strlen($_POST['email']) > 200 ) ||
         ( !preg_match("#^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$#", $email) )
       )
    {
        print "Error: Invalid E-Mail Address";
        exit;
    }
    if ( ( !$name ) ||
         ( strlen($name) > 100 ) ||
         ( preg_match("/[:=@\<\>]/", $name) )
       )
    {
        print "Error: Invalid Name";
        exit;
    }
    if ( preg_match("#cc:#i", $message, $matches) )
    {
        print "Error: Found Invalid Header Field";
        exit;
    }
    if ( !$message )
    {
        print "Error: No Message";
        exit;
    }
    if (eregi("\r",$email) || eregi("\n",$email)){
        print "Error: Invalid E-Mail Address";
        exit;
    }
    if (FALSE) {
        print "Error: You cannot send to an email address on the same domain.";
        exit;
    }


    // CREATE THE EMAIL
    $headers    = "Content-Type: text/plain; charset=iso-8859-1\n";
    $headers   .= "Senders Name: $name\n";
    //$headers   .= "Senders Phone: $phone\n";
    $headers   .= "Senders Email: $email\n";
    $recipient  = "rashidadam247@gmail.com";
    $subject    = $salutation;
    $message    = wordwrap($message, 1024);

    // SEND THE EMAIL TO YOU
    mail($recipient, $subject, $message, $headers);

    //echo 'Thanks for contacting us!!';

    // REDIRECT TO THE THANKS PAGE
    header("location: index.html");
?>