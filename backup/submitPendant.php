<?
//include('../mainfile.php');
//global $frm;

/* variables */
    $to = 'info@acihoist.com'; 
    $subject = 'Custom Pendant Quote';
    $name = $_POST['customer_name'];
	$companyname = $_POST['company_name'];
	$phone = $_POST['customer_phone'];
    $email = $_POST['customer_email'];
    $buttons = $_POST['Number_of_buttons'];
    $pendantInfo = json_decode(stripslashes($_POST['pendant_slot_info']), true);
    $comments = $_POST['customer_comments'];
	
/*	$count = 1;
	foreach($pendantInfo as $slotinfo){
		if($slotinfo['part_number'] == "")
			continue;
		echo "Slot #".$count."<br>";
		echo "Part Number: ".$slotinfo['part_number']."<br>";
		echo "button Description: ".$slotinfo['button_description']."<br>";
		$count++;
	}*/
/*	ob_start();
?>
<?	

	
$body = ob_get_contents();
ob_end_clean();
	
	$mail                                       = new phpmailer();
	$mail->IsSendmail();
	$mail->AddReplyTo($email, $name);
	$mail->SetFrom($email, $name);

	$mail->ContentType                          = "text/html";
	$mail->Subject                              = $subject;
	$mail->Body                                 = $body;
	$mail->AltBody                              = $frm->filter($body, 'nohtml');
	$mail->WordWrap                             = 80;
	$mail->SingleTo                             = true;
	$mail->AddAddress($to);
		
	if(!$mail->Send()) die('Mailer error: ' . $mail->ErrorInfo);
	$mail->ClearAddresses();
	
	$reload                                   =  "thanks.html";
	header("Location: $reload");
	*/
	
?>
<html>
	<head>
		<title>Quote</title>
		<style type="text/css">
			td {
				font: 12px Arial, Verdana, Helvetica, sans-serif;
				border-bottom: 1px solid #D2D5DA;
				color: #000;
				padding: 5px 10px;
				valign: top;
			}
			table { 
				margin: 10px 0; 
				border-collapse: separate; 
				border: 1px solid #D2D5DA; 
			}
		</style>
	</head>
<body>
<h2>Custom Pendant Request</h2>
<table align="center" cellpadding="0" cellspacing="0"> 
	<tr>
		<td>
		<strong>Sent on: </strong>
		</td>
		<td>
		<?=date('l, M jS Y g:i a')?>
		</td>
	</tr>
  <?foreach($_POST as $key => $val) {	  
		if($key == "pendant_slot_info"){?>
			<tr>
				<td colspan="2" style="text-align: center"><h3>Buttons:</h3></td>
			</tr>
			<?$count=0;
			foreach($pendantInfo as $slotinfo){
				$count++;
				if($slotinfo['part_number'] == "")
					continue;?>
				<tr>
					<td colspan="2">
						<b>Slot <?=$count?></b>
					</td>
				</tr>
				<tr>
					<td>
						<b>Part Number:</b>
					</td>
					<td>
						<?=$slotinfo['part_number']?>
					</td>
				</tr>
				<tr>
					<td>
						<b>Button Description:</b>
					</td>
					<td>
						<?=$slotinfo['button_description']?>
					</td>
				</tr>
			<?
			}
		}else{?>
			<tr>
				<td valign="top">
					<b><?=ucwords(strtolower(str_replace("_", " ", $key)))?></b>: 
				</td>
				<td valign="top">
					<?=$val?>
				</td>
			</tr>
	 <?}
	}?>	
</table>

</body>
</html>