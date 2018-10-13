<?php
	$tel = isset($_GET["tel"])? $_GET["tel"] : "";
	$id = isset($_GET["id"])? $_GET["id"] : "";
	
	$severname = "localhost";
	$username = "root";
	$password = "";
	$dbname = "jyh";
	$conn = new mysqli($severname,$username,$password,$dbname);
	$conn->set_charset('utf8');
	
	
	$result = $conn->query('select * from user');
	$res = $result->fetch_all(MYSQLI_ASSOC);
	
	foreach($res as $item){
		if($item["tel"] == $tel){
			echo "true";
			break;
		}
	}
	
	$result->close();
	
	$result = $conn->query('select * from goods');
	$res = $result->fetch_all(MYSQLI_ASSOC);
	
	foreach($res as $item){
		if($item["ID"]==$id){
			echo json_encode($item,JSON_UNESCAPED_UNICODE);
			break;
		}
	}
	
	$result->close();
	
	$conn->close();
	
	
	
?>