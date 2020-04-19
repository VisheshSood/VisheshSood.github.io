<?php

// Put contacting email here
$php_main_email = "vishesh@innovativeglove.com";

//Fetching Values from URL
$php_name = $_POST['ajax_name'];
$php_email = $_POST['ajax_email'];
$php_message = $_POST['ajax_message'];
$php_subject1 = $_POST['ajax_subject'];

//Sanitizing email
$php_email = filter_var($php_email, FILTER_SANITIZE_EMAIL);

//After sanitization Validation is performed
if (filter_var($php_email, FILTER_VALIDATE_EMAIL)) {

	$php_subject = "Innovative Gloves Contact Form Response";

	// To send HTML mail, the Content-type header must be set
	$php_headers = 'MIME-Version: 1.0' . "\r\n";
	$php_headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$php_headers .= 'From:' . $php_email . "\r\n"; // Sender's Email
	$php_headers .= 'Cc:' . $php_main_email . "\r\n"; // Carbon copy to Sender

	$php_template = '<div style="padding:50px;">Greetings from Innovative Gloves,  ' . $php_name . '.<br/><br/>'
		. 'We thank you for contacting us at this time. The following details have been sent to us:<br/>'
		. '<strong style="color:blue;">Name:</strong>  ' . $php_name . '<br/>'
		. '<strong style="color:blue;">Email:</strong>  ' . $php_email . '<br/>'
		. '<strong style="color:blue;">Subject:</strong>  ' . $php_subject1 . '<br/>'
		. '<strong style="color:blue;">Message:</strong>  ' . $php_message . '<br/><br/>'
		. 'We will get back to you as soon as possible .</div>';
	$php_sendmessage = "<div style=\"background-color:#f5f5f5; color:#333;\">" . $php_template . "</div>";

	// message lines should not exceed 70 characters (PHP rule), so wrap it
	$php_sendmessage = wordwrap($php_sendmessage, 70);

	// Send mail by PHP Mail Function
	mail($php_email, $php_subject, $php_sendmessage, $php_headers);
	echo "";

} else {
	echo "<span class='contact_error'>* Invalid email *</span>";
}

?>