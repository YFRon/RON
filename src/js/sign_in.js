var inputs = document.getElementsByTagName("input");
var sign_in = document.getElementById("sign_in");
var tel;
var mima;
var d = new Date();

inputs[1].onblur = function(){
	tel = this.value;
	$.ajax({
		url:'../api/find.php',
		type:'GET',
		data:{tel:tel},
		success:function(data){
			if(data != "true"){
				inputs[1].parentElement.previousElementSibling.innerHTML = "用户不存在"
				inputs[1].parentElement.previousElementSibling.style.display = "block";
			}else{
				inputs[1].parentElement.previousElementSibling.style.display = "none";
			}
		}
	})
}

inputs[2].onblur = function(){
	mima = this.value;
}

sign_in.onclick = function(e){
	e.preventDefault();
	$.ajax({
		url:"../api/sign_in.php",
		type:"GET",
		data:{
			userName:tel,
			passwords:mima
		},
		success:function(data){
			if(data !="true"){
				sign_in.closest("ul").children[0].innerHTML = "用户名或密码不正确";
				sign_in.closest("ul").children[0].style.display = "block";
			}else{
				sign_in.closest("ul").children[0].style.display = "none";
				if(inputs[3].checked){
					d.setDate(d.getDate()+30);
					document.cookie = "userInfor=" + tel + "; path=/" + "; expires=" + d.toUTCString();
				}else{
					document.cookie = "userInfor=" + tel + "; path=/";
				}
				location.href = "../index.html";
			}
		}
	});
}

