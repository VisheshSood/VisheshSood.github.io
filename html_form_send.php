<?php
//@mail('ankit@innovativeglove.com','Email', 'message');die;

if(isset($_POST['email'])) {
	
	// CHANGE THE TWO LINES BELOW
	$email_to = "rsood@innovativeglove.com";

	$email_subject = "Website Comment!";
	
	
	function died($error) {
		// your error code can go here
		echo "We're sorry, but there are errors found with the form you submitted.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
	// validation expected data exists
	if(!isset($_POST['name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['message'])) {
		die('We are sorry, but there appears to be a problem with the form you submitted.');		
	}
	
	$first_name = $_POST['name']; // required
	$email_from = $_POST['email']; // required
	$telephone = $_POST['telephone']; // not required
	$comments = $_POST['message']; // required
	
	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
  	$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
	$string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
  	$error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
  	$error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
  	died($error_message);
  }
	$email_message = "Form details below.\n\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "First Name: ".clean_string($first_name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	$email_message .= "Telephone: ".clean_string($telephone)."\n";
	$email_message .= "Comments: ".clean_string($comments)."\n";
	
	
// create email headers
// create email headers

$email_from = $email_from;
$headers = 'From: '.$email_from."\r\n".

$headers .= "BCC: vishesh@innovativeglove.com".PHP_EOL;
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
/*echo $email_to;echo '|';
echo $email_subject;echo '|';
echo $email_message;echo '|';
echo $email_headers;echo '|';die;*/
@mail($email_to, $email_subject, $email_message, $headers);  
//@mail($email_to, $email_subject, $email_message);  
?>


Thank you for contacting Innovative Gloves. We will be in touch with you very soon.

<?php
}
die();
?>