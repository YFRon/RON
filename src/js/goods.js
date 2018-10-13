var id = decodeURI(location.search).slice(1);
$main = $("#main");

$.ajax({
	type:"GET",
	url:"../api/find.php",
	data:{id:id},
	success:function(data){
		var goods = JSON.parse(data);
		
		$content = `<div class="goods">
						<img src="${goods.goods_imgURL}"/>
						<div class="goods_l fr">
							<h2>${goods.goodsName}</h2>
							<p>
								<b>￥${goods.price}</b><a href="#">进入店铺</a>
								<del>￥${goods.priced}</del>
								
							</p>
							<p><i>商品编号</i>${goods.ID}</p>
							<p><i>月销</i>${goods.qty}件</p>
							<p><i>促销</i>特价</p>
							<p><i>颜色</i><b>共同</b></p>
							<p><i>款式</i><b>XL</b><b>XXL</b><b>XXXL</b></p>
							<p><i>购买数量</i><a href="#"><b>-</b></a><span>1</span><a href="#"><b>+</b></a></p>
							<a>正品保障</a><a>全场包邮</a><a>支持7日无理由退货</a><br />
							<span><a href="javascritp:;" class="toCar">加入购物车</a></span><span><a>立即购买</a></span>
							<b>拨打<i> 4008-678-888</i>，可语音下单~</b>
						</div>
					</div>
					<div class="details">
						<span class="red">商品详情</span><span>规格参数</span>
						<div class="details_con">
							<img src="${goods.imgURL1}"/>
							<img src="${goods.imgURL2}"/>
							<img src="${goods.imgURL3}"/>
							<img src="${goods.imgURL4}"/>
							<img src="${goods.imgURL5}"/>
						</div>
					</div>`;
		
		$main.children(".container")[0].innerHTML = $content;
		
		var toCar = document.getElementsByClassName("toCar")[0];
		toCar.onclick = function(){
			$.ajax({
				type:"get",
				url:"../api/setCar.php",
				data:{
					userName:arr[1],
					id:goods.ID,
					imgURL:goods.goods_imgURL,
					goodsName:goods.goodsName,
					price:goods.price
				},
				success:function(){
					alert("添加成功");
					getCarQty();
				}
			})
		}
		
	}
});