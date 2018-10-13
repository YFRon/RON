var ul = document.getElementsByTagName("ul")[0];
var denglu = document.getElementsByClassName("denglu")[0];
var cookies = document.cookie;
var car = document.getElementsByClassName("car")[0];
var url_php;


if(cookies.length>0){
    var arr = cookies.split("=");
    ul.children[1].children[0].children[0].innerHTML = "hi！" + arr[1];
    ul.children[1].style.display = "list-item";
    ul.children[2].style.display = "none";
    ul.children[3].style.display = "none";
    if(denglu){
    	denglu.style.display = "none";
	    denglu.nextElementSibling.children[0].children[2].innerHTML = "hi！" + arr[1];
	    denglu.nextElementSibling.style.display = "block";
	    url_php = "api/getCar.php";
	    getCarQty();
    }else{
    	url_php = "../api/getCar.php";
    	getCarQty();
    }
    
	function getCarQty(){
		$.ajax({
	    	type:"get",
	    	url:url_php,
	    	data:{
	    		userName:arr[1]
	    	},
	    	success:function(data){
	    		var goods = JSON.parse(data);
	    		var qty = 0;
	    		for(var i=0;i<goods.length;i++){
	    			qty+=parseInt(goods[i].qty);
	    		}
	    		ul.children[5].children[0].children[0].innerHTML = qty;
	    		car.children[1].innerHTML = qty;
	    	}
    	});
	}
    
}
ul.children[1].children[1].children[0].onclick = function(){
	var d = new Date();
	d.setDate(d.getDate()-1);
	document.cookie = "userInfor=" + "" + "; path=/" + "; expires=" + d.toUTCString();
		location.href = location.href;
}
