var main = document.getElementById("main");
var cookies = document.cookie;

main.children[0].innerHTML = main_val();

var total = document.getElementsByClassName("total")[0];
var pay = document.getElementsByClassName("pay")[1];
var all = document.getElementById("all");
var all_check = document.getElementById("all_check");
var delChecked = document.getElementById("delChecked");

if(cookies.length>0){
	var user = cookies.split("=");
	
	$.ajax({
		type:"get",
		url:"../api/getCar.php",
		data:{
			userName:user[1]
		},
		success: function(data){
			var goods = JSON.parse(data);
			var arr = document.getElementsByTagName("tr");
			$table = $("table");
			
			for(let i=0;i<goods.length;i++){
				$tr = `<td><input type="checkbox" class="checkes" /></td>
						<td>
							<a href="javascript:;" class="toGoods">
								<img src="${goods[i].imgURL}" class="toGoods" />
								<b class="toGoods"><br />${goods[i].goodsName}</b>
								<span class="toGoods">颜色:共同<br />款式:共同</span>
							</a>
						</td>
						<td>${goods[i].price}</td>
						<td>
							<a href="javascript:;" class="jian">-</a><input type="text" value="${goods[i].qty}" class="qty" /><a href="javascript:;" class="jia">+</a>
							<span>限购99件</span>
						</td>
						<td class="money">${(goods[i].price * goods[i].qty).toFixed(2)}</td>
						<td><a href="javascript:;" class="remove">删除</a></td>`;
				$table.children("tbody").append(`<tr data-id=${goods[i].id}>${$tr}</tr>`);
			
				let tr = $table.children("tbody").children("tr")[i+1];

				all.onclick = function(){
					var id = tr.dataset.id;
					var qty = document.getElementsByClassName("qty")[i].value;
					var count = 0;
					var pay_num = 0;
					
					if(all.checked){
						all_check.checked = true;
						for(let k=0;k<arr.length-1;k++){
							arr[k+1].children[0].children[0].checked = true;
							arr[k+1].style.background = "rgb(255,252,235)";
							var num = document.getElementsByClassName("qty")[k].value;
							var money = document.getElementsByClassName("money")[k].innerHTML;
							count += parseInt(num);
							pay_num = parseFloat(pay_num) + parseFloat(money);
							total.innerHTML = count;
							pay.innerHTML = "￥" + (pay_num*1).toFixed(2);
						}
					}else{
						all_check.checked = false;
						for(let k=0;k<arr.length-1;k++){
							arr[k+1].children[0].children[0].checked = false;
							arr[k+1].style.background = "white";
							total.innerHTML = 0;
							pay.innerHTML = "￥" + "0.00";
						}
					}
				}
				
				all_check.onclick = function(){
					var id = tr.dataset.id;
					var qty = document.getElementsByClassName("qty")[i].value;
					var count = 0;
					var pay_num = 0;
					if(all_check.checked){
						all.checked = true;
						for(let k=0;k<arr.length-1;k++){	
							arr[k+1].children[0].children[0].checked = true;
							arr[k+1].style.background = "rgb(255,252,235)";
							var num = document.getElementsByClassName("qty")[k].value;
							var money = document.getElementsByClassName("money")[k].innerHTML;
							count += parseInt(num);
							pay_num = parseFloat(pay_num) + parseFloat(money);
							total.innerHTML = count;
							pay.innerHTML = "￥" + (pay_num*1).toFixed(2);
						}
					}else{
						all.checked = false;
						for(let k=0;k<arr.length-1;k++){	
							arr[k+1].children[0].children[0].checked = false;
							arr[k+1].style.background = "white";
							total.innerHTML = 0;
							pay.innerHTML = "￥" + "0.00";
						}
					}
				}
				
				delChecked.onclick = function(){
					$del = $(":checked").not("#all_check").not("#all");
					for(let n=0;n<$del.length;n++){
						let tr = $del[n].parentElement.parentElement;
						let id = tr.dataset.id;
						$.ajax({
							type:"get",
							url:"../api/setCar.php",
							data:{
								userName:user[1],
								id:id,
								remove:"remove"
							},
							success:function(){
								getCarQty();
								tr.remove();
								location.href = location.href;
							}
						});
					}
					
				}
				
				tr.onclick = function(e){
					var id = tr.dataset.id;
					var qty = document.getElementsByClassName("qty")[i].value;
					var count = 0;
					var pay_num = 0;
					var trCheckNum = 0;
					
					if(e.target.className =="jian"){
						qty>1 ? qty-- : qty;
						e.target.nextElementSibling.value = qty;
						tr.children[4].innerHTML = (tr.children[2].innerHTML * qty).toFixed(2);
						setCarQty(id,qty);
						getCarQty();
					}
					
					if(e.target.className =="jia"){
						qty++;
						e.target.previousElementSibling.value = qty;
						tr.children[4].innerHTML = (tr.children[2].innerHTML * qty).toFixed(2);
						setCarQty(id,qty);
						getCarQty();
					}
					
					if(e.target.className == "remove"){
						$.ajax({
							type:"get",
							url:"../api/setCar.php",
							data:{
								userName:user[1],
								id:id,
								remove:"remove"
							},
							success:function(){
								getCarQty();
								tr.remove();
							}
						});
					}
					
					if(e.target.className == "checkes"){
						if(e.target.checked){
							this.style.background = "rgb(255,252,235)";
						}else{
							this.style.background = "white";
						}
					}
					
					if(e.target.className == "toGoods"){
						var id = this.dataset.id;
						location.href = 'goods.html?' + encodeURI(id);
					}

					for(let j=1;j<arr.length;j++){
						if(arr[j].children[0].children[0].checked){
							arr[j].style.background = "rgb(255,252,235)";
							var num = document.getElementsByClassName("qty")[j-1].value;
							var money = document.getElementsByClassName("money")[j-1].innerHTML;
							count += parseInt(num);
							pay_num = parseFloat(pay_num) + parseFloat(money);
							trCheckNum++;
						}
						if(trCheckNum == arr.length-1){
							all.checked = true;
							all_check.checked = true;
						}else{
							all.checked = false;
							all_check.checked = false;
						}

						total.innerHTML = count;
						pay.innerHTML = "￥" + (pay_num*1).toFixed(2);
					}
				}
				
			}
		}
	});
	
}

function main_val(){
	return `<h2><i>&nbsp;包邮</i>所有商品全场包邮(西藏、新疆、青海地区除外)</h2>
				<table border="" cellspacing="0" cellpadding="0">
					<tr>
						<th>
							<label for="all">
								<input type="checkbox" id="all" />&nbsp;&nbsp;全选
							</label>
						</th>
						<th>商品</th>
						<th>单价(元)</th>
						<th>数量</th>
						<th>小计(元)</th>
						<th>操作</th>
					</tr>
				</table>
				<div class="all_check fl">
					<label for="all_check">
						<input type="checkbox" id="all_check" />&nbsp;&nbsp;&nbsp;全选
					</label>
					<a href="javascript:;" id="delChecked" >删除选中的商品</a>
				</div>
				<div class="pay fr">
					<span>已选 <i class="total">0</i> 件商品</span>
					<span>应付款：<i class="pay">￥0.00</i></span>
					<a href="#">去结算</a>
				</div>`;
}

function setCarQty(goodsID,Qty){
	$.ajax({
    	type:"get",
    	url:"../api/setCar.php",
    	data:{
    		userName:arr[1],
    		id:goodsID,
    		qty:Qty
    	},
	});
}
