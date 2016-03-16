<?php

$jsonPendant = '[{"partNumber":"0", "btnDesc":"a"},{"partNumber":"1", "btnDesc":"b"},{"partNumber":"2", "btnDesc":"c"},
			 {"partNumber":"3", "btnDesc":"d"}, {"partNumber":"4", "btnDesc":"e"}, {"partNumber":"", "btnDesc":""}, {"partNumber":"6", "btnDesc":"g"},
  {"partNumber":"7", "btnDesc":"h"},
  {"partNumber":"8", "btnDesc":"i"},
 {"partNumber":"9", "btnDesc":"j"},
 {"partNumber":"10", "btnDesc":"k"},
  {"partNumber":"11", "btnDesc":"l"}]'; 

$shit = json_decode($jsonPendant, true);

$count = 1;
foreach($shit as $lilshit){
	if($lilshit['partNumber'] == "")
		continue;
	echo "Slot #".$count."<br>";
	echo "partNumber: ".$lilshit['partNumber']."<br>";
	echo "btnDesc: ".$lilshit['btnDesc']."<br>";
	$count++;
}

echo $shit[6]['btnDesc'];
echo '<br><br>';

	$json = '[{"label":"value","libel":"valoo"},{"label":"value1","libel":"valoo1"}]';
$foo[] = json_decode($json, true);
print_r($foo);
echo '<br><br>';


$poop = json_encode(Array ( 0 => Array ( label => value, libel => valoo ), 1 => Array ( label => value1, libel => valoo1 )) );
echo $poop;

?>