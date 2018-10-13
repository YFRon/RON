var inputs = document.getElementsByTagName("input");
var ul = document.getElementsByTagName("ul")[2];
var tel;
var mima;


inputs[2].nextElementSibling.innerHTML = ma();


inputs[1].onblur = function(){
	tel = this.value;
	if(!/^1[3,4,5,7,8,9]\d{9}$/i.test(tel)){
		this.nextElementSibling.style.display = "inline";
		this.nextElementSibling.innerHTML = "请输入11位有效手机号";
		this.value = "";
		return false;
	}else{
		$.ajax({
			url: '../api/find.php',
			type: 'GET',
			data: {tel:tel},
//			success: function(){
//				console.log(1233);
//			}
			success:function(data){
				if(data == "true"){
					inputs[1].nextElementSibling.style.display = "inline";
					inputs[1].nextElementSibling.innerHTML = "用户名被占用";
					inputs[1].value = "";
				}else{
					inputs[1].nextElementSibling.style.display = "none";
				}
//				return;
			}
		})
//		this.nextElementSibling.style.display = "none";
//		return true;
	}
}
inputs[2].onblur = function(){
	var yanzheng = this.value;
	if(yanzheng != this.nextElementSibling.innerHTML){
		this.nextElementSibling.nextElementSibling.style.display = "inline";
		this.value = "";
		this.nextElementSibling.innerHTML = ma();
	}else{
		this.nextElementSibling.nextElementSibling.style.display = "none";
		return true;
	}
}
inputs[3].onblur = function(){
	mima = this.value;
	
	if(mima.trim()==""){
		this.nextElementSibling.nextElementSibling.style.display = "inline";
		this.value = "";
		return;
	}else if(mima.length<6||mima.trim().length<6){
		this.nextElementSibling.nextElementSibling.style.display = "none";
		this.nextElementSibling.style.display = "inline";
		this.value = "";
	}else{
		this.nextElementSibling.nextElementSibling.style.display = "none";
		this.nextElementSibling.style.display = "none";
		return true;
	}
}
inputs[4].onblur = function(){
	var mima2 = this.value;
	if(mima2 != mima){
		this.nextElementSibling.style.display = "inline";
		this.value = "";
	}else{
		this.nextElementSibling.style.display = "none";
		return true;
	}
}
inputs[5].nextElementSibling.onclick = function(){
	this.innerHTML = ma();
}
inputs[5].onblur = function(){
	var yanzheng = this.value;
	if(yanzheng != this.nextElementSibling.innerHTML){
		this.nextElementSibling.nextElementSibling.style.display = "inline";
		this.value = "";
		this.nextElementSibling.innerHTML = "获取验证码";
	}else{
		this.nextElementSibling.nextElementSibling.style.display = "none";
		return true;
	}
}
inputs[6].onclick = function(){
	if(this.checked != true){
		this.parentElement.parentElement.nextElementSibling.children[0].style.backgroundColor = "#ccc";
	}else{
		this.parentElement.parentElement.nextElementSibling.children[0].style.backgroundColor = "#DC0F50";
		return true;
	}
}

ul.children[6].children[0].onclick = function(e){
	e.preventDefault()
	if(inputs[1].value!=""&&inputs[2].value!=""&&inputs[3].value!=""&&inputs[4].value!=""&&inputs[5].value!=""&&inputs[6].checked==true){
		$.ajax({
			url: '../api/register.php',
			type: 'POST',
			data: {
				tel: tel,
				passwords: mima
			},
			success: function(data){
				if(data == "true"){
					alert("注册成功");
					document.cookie = "userInfor=" + tel + "; path=/";
					location.href = "../index.html";
				}else{
					alert("注册失败");
				}
			}
		})
	}
}




function ma(){
	var yanzhengma = getRandomNum(0,9999)
	if(yanzhengma < 1000){
		yanzhengma = "0" + yanzhengma;
	}
	if(yanzhengma < 100){
		yanzhengma = "0" + yanzhengma;
	}
	if(yanzhengma < 10){
		yanzhengma = "0" + yanzhengma;
	}
	return yanzhengma;
}
