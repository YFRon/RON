$ul = $(".main_l");
$li = "";

$.ajax({
	url:'../api/goodslist.php',
	success:function(data){
		var arr = JSON.parse(data);
		for(var i=0;i<5;i++){
			for(var j=0;j<arr.length;j++){
				$li += `<li data-id="${arr[j].ID}">
						<a href="#">
						<img src="${arr[j].goodslist_imgURL}"/>
						<b>￥${arr[j].goodsName}</b>
						<i>￥${arr[j].price}</i>'
						<del>￥${arr[j].priced}</del>
						<p>月销${arr[j].qty}件</p>
						</a>
					</li>`;
			}
			$ul.children("ul")[1].innerHTML = $li;	
		}
		for(var i=0;i<$ul.children("ul")[1].children.length;i++){
			$ul.children("ul")[1].children[i].children[0].onclick = function(e){
				e.preventDefault();
				let id = this.parentElement.dataset.id;
				location.href = 'goods.html?' + encodeURI(id);
			}
		}
	}
})
