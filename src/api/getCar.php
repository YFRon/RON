<?php
	$userName = isset($_GET["userName"])? $_GET["userName"] : "";
	$qty = isset($_GET["qty"])? $_GET["qty"] : "";
	$id = isset($_GET["id"])? $_GET["id"] : "";
	
	$severname = "localhost";
	$username = "root";
	$password = "";
	$dbname = "jyh";
	$conn = new mysqli($severname,$username,$password,$dbname);
	$conn->set_charset('utf8');
	
	if($qty != ""&&$id != ""){
		$result = $conn->query("updata car set qty=$qty where userName=$userName and id=$id");
		
		$result->close();
	}
	
	if($userName != ""){
		$result = $conn->query("select * from car where userName = $userName");
		$res = $result->fetch_all(MYSQLI_ASSOC);
		
		echo json_encode($res,JSON_UNESCAPED_UNICODE);
		
		$result->close();
	}
	
	$conn->close()
	
?>