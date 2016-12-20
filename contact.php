<!doctype html>
<html>
<head>
    <meta charset="utf-8">
	<title>Contact Us - Ed&Ilk</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="http://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700" rel="stylesheet" type="text/css" />
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous">
    </script>
    <script src="JS/all.js"></script>
</head>
<body>
	<header class="navigation">
 		<a href="index.html" id="logolink">
			<img id="logo" src="images/logo.svg"  alt="ed&ilk logo"/>
		</a>       
       	<nav class="group">
			<a href="index.html">Home</a>
			<a href="services.html">Services</a>
			<a href="">About</a>
			<a class="active" href="http://localhost/Ed-ilk-dev-build/contact.php">Contact</a>
		</nav>    
	</header>
<body>
	<div class="headerImageCon">
		<div class="box">
    		<h1 class="heading">Contact us now for enquires.</h1>
    		<div class="headingUnderline"></div>
      	</div>
		<div class="imageOverlay"></div>
		<img class="backgroundImg"  src="images/contactus.svg"  alt="Header Background"/>
	</div>
	<section>
		<h2 class='contacth2'>Get in touch!</h2>
		<form method='post' action='' id='contact-form'> 
			<input type='text' name='firstname' required  placeholder='First Name' size = '30' /><label class='warning' id='firstname-warning'></label><br><br>
			<input type='text' name='surname' placeholder='Surname' size = '30' required /> <label class='warning' id='surname-warning'></label><br><br>
			<input type='text' name='email' placeholder='Email' size = '30' required  /> <label class='warning' id='email-warning'></label><br><br>
			<textarea name='message' placeholder='Message' cols='30'></textarea><br><br>
			<input type='submit' value='Submit' name='new-msg' />

			<!--<p id='user-form-message'>$userFormMessage</p>-->
			</form>
		</section>
    <footer>
		<p>&#169; ed&#38;ilk 2016 - All rights reserved - <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">hello@edandilk.com</a></p>
	</footer>
    
</body>
</html>

<?php
	//is form submitted?
	$createContact = isset($_POST['new-msg']);
	//if it is...
	if($createContact)
	{
		//grab from input	
		$newFirstname = $_POST['firstname'];
		$newSurname = $_POST['surname'];
		$newEmail = $_POST['email'];
		$newMessage = $_POST['message'];

		try
		{
			//tell user how it went
			$userFormMessage = "Message has been sent ";
		}
		catch (Exception $e) {
			//if operation failed, tell user what went wrong
			$userFormMessage = "failed";
		}
		$to = 'eddy.kalu@edandilk.com';
		$subject = 'New message';
	    $msg = 'Firstname: ' . $_POST['firstname'] ."\n"
	     .'Surname: ' .$_POST['surname']."\n"
	     .'Email: ' .$_POST['email']."\n"
	     .'Message:' .$_POST['message'];
	    $headers = 'From: eddy.kalu@edandilk.com' . "\r\n" .
	      'Reply-To: eddy.kalu@edandilk.com' . "\r\n" .
	      'X-Mailer: PHP/' . phpversion();
	    mail($to, $subject, $msg, $headers);
	}

	if(isset($userFormMessage) === false)
	{
		$userFormMessage = "";
	}
?>