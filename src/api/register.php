<?php
	
	$userName = isset($_POST["tel"])? $_POST["tel"]:"";
	$passwords = isset($_POST["passwords"])? $_POST["passwords"]:"";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'jyh';
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->set_charset('utf8');
	
	if($userName!=""&&$passwords!=""){
		$res = $conn->query('insert into user(tel,password)values("'.$userName.'","'.$passwords.'")');
		if($res){
			echo "true";
		}else{
			echo "false";
		}
	}
	
	$conn->close();

?>