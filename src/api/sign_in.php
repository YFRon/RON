<?php
	$userName = isset($_GET["userName"])? $_GET["userName"] : "";
	$passwords = isset($_GET["passwords"])? $_GET["passwords"] : "";
	
	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'jyh';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
    
    $result = $conn->query('select * from user');
    $res = $result->fetch_all(MYSQLI_ASSOC);
	
	foreach($res as $item){
		if($item['tel']==$userName && $item['password']==$passwords){
			echo "true";
			break;
		}
	}
	
	$result->close();
	$conn->close();
	
?>