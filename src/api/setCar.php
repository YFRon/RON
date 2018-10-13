<?php
	$userName = isset($_GET["userName"])? $_GET["userName"] : "";
	$qty = isset($_GET["qty"])? $_GET["qty"] : "";
	$id = isset($_GET["id"])? $_GET["id"] : "";
	$imgURL = isset($_GET["imgURL"])? $_GET["imgURL"] : "";
	$goodsName = isset($_GET["goodsName"])? $_GET["goodsName"] : "";
	$price = isset($_GET["price"])? $_GET["price"] : "";
	$remove = isset($_GET["remove"])? $_GET["remove"] : "";
	
	$severname = "localhost";
	$username = "root";
	$password = "";
	$dbname = "jyh";
	$conn = new mysqli($severname,$username,$password,$dbname);
	$conn->set_charset('utf8');
	
	if($qty != ""&&$id != ""){
		
		$conn->query("update car set qty=$qty where userName=$userName and id=$id");
		
	}
	
	if($remove !=""){
		
		$conn->query("delete from car where userName=$userName and id=$id");

	}
	
	if($userName!="" && $id!="" && $imgURL!="" && $goodsName!="" && $price!=""){
		
		$result = $conn->query("select * from car where userName=$userName and id=$id");
		$res = $result->fetch_all(MYSQLI_ASSOC);
		$result->close();
		
		if($res){
			$qty = $res[0]["qty"];
			$qty++;
			$conn->query("update car set qty=$qty where userName=$userName and id=$id");
			echo $qty;
		}else{
			$conn->query("insert into car (userName,id,imgURL,goodsName,price,qty) values ('$userName','$id','$imgURL','$goodsName','$price','1')");
			echo $price;
		}
	}

	$conn->close();
	
?>