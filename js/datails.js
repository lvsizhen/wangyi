window.onload = function(){
	
	
	
	
	
	/*实现点击回到顶部的功能*/
	
	var gototop= document.getElementsByClassName('goto_top')[0];
	
	window.onscroll = function(){
		var hi = document.documentElement.scrollTop || document.body.scrollTop;
		
		if(hi>=600){
			
			gototop.style.display = 'block';
		}else{
			gototop.style.display = 'none';
		}	
	}
	
	gototop.onclick = function(){		
		var doo=document.documentElement.scrollTop = document.body.scrollTop = 0+'px';			
	}
	
	
	/*  实现  首页弹出框   注册登录      功能*/
	
	/*实现登录功能*/
	var login = document.getElementsByClassName('login')[0];
	
	/*获取整个蒙版*/
	var oLogin_deng = document.getElementsByClassName('login_deng')[0];
	
	/* 获取 X号*/
	var oX1 = document.getElementsByClassName('login_chacha')[0];
	var oX2 = document.getElementsByClassName('login_chacha')[1];
	
	/*点击登录出现蒙版*/
	login.onclick = function(){
		oLogin_deng.style.display = "block";	
	}
	
	/*点击X  蒙版消失*/
	oX1.onclick = function(){
		oLogin_deng.style.display = "none";	
	}
	
	/* 点击注册弹出框的  X*/
	oX2.onclick = function(){
		oLogin_deng_div.style.display = "block";	
		oRegister_div.style.display = "none";	
		oLogin_deng.style.display = "none";	
	}
	
	/*  去注册弹窗  同时生成 4位验证码*/
	var oGo_zhuce = document.getElementsByClassName('longin_two_right')[0];
	var oRegister_div = document.getElementsByClassName('register_div')[0];
	var oLogin_deng_div = document.getElementsByClassName('login_deng_div')[0];
	var yanzhengma =null;
	var oRegister_code_span = getid('register_code_span');
	
	oGo_zhuce.onclick = function(){
		
		
		/* 验证码*/
		yanzhengma = yan(4);
		
		oRegister_code_span.innerHTML = yanzhengma;
		oLogin_deng_div.style.display = "none";	
		oRegister_div.style.display = "block";	
	}
	
	
	/* 去登录  弹窗*/
	var oGo_denglu = document.getElementsByClassName('register_login_a')[0];
	oGo_denglu.onclick = function(){
		oLogin_deng_div.style.display = "block";	
		oRegister_div.style.display = "none";	
	}
	
	/*  实现   弹出框的登录        验证账号  和密码        */
	
	/*  获取账号   密码    按钮*/
	var userName   = getid('login_user');
	var passwords = getid('login_password');
	
	var oLogin_bottom = document.getElementsByClassName('login_bottom_a')[0];
	var dingBuuser_name = document.getElementsByClassName('user_name')[0];
	var use_out = document.getElementsByClassName('out')[0];
	oLogin_bottom.onclick = function(){
		var ouserNameValue = userName.value;
		var opasswords = passwords.value;
		var data = {"username":ouserNameValue,"password":opasswords};
		
		
		Ajax("post","login.php",foo,data);
		
		function foo(data){
			
			if(data == 1){
				userName.value='';
				passwords.value='';
				
				oLogin_deng.style.display = "none";	
			
				login.style.display='none';
				use_out.style.display = 'inline-block';
				
				
				dingBuuser_name.innerHTML = ouserNameValue;
			}else{
				alert("用户名或密码错误");
				userName.value='';
				passwords.value='';
			}	
		}
		
	
	}
	
	/*  点击退出按钮   */
	use_out.onclick = function(){
		login.style.display='inline-block';
		use_out.style.display = 'none';
		dingBuuser_name.innerHTML = '你好';
	}
	
	
	
	/*   实现注册功能                                                         未完成                */
	var dianjizhuce = document.getElementsByClassName('register_bottom_a')[0];
	var youxiang_r = getid('register_email');
	var mima_r = getid('register_password');
	var yanzheng_r = getid('register_code_input');
	
	
	dianjizhuce.onclick = function(){
		var yanzheng_r_value = yanzheng_r.value;
		var youxiang_r_value = youxiang_r.value;
		var mima_r_value = mima_r.value;
		if(yanzhengma == yanzheng_r_value ){
			var data = {"username":youxiang_r_value,"password":mima_r_value};		
			console.log(data);
			Ajax("post","php/login.php",foo,data);
			
			function foo(data){				
			}	
		}else{
			alert('验证码错误');
		}	
	}
	
	/*          注册结束             */
	
	
	
	
	
	
	
	var oLifeUl10 = getid('top_tuijian_bottom_ul_1');
	
	
	
	
	Ajax('get','list.php',fnSuc,{});
			
	function fnSuc(data){
		var data = JSON.parse(data);
		var goods_img_99=data;
		
		
		/*   列表页    本月热门排行榜*/
		var suiji = Math.round(Math.random()*10)+20;
		
		for(var i = suiji; i<suiji+3;i++){
			var oGoods = goods_img_99[i];
			var oLi = document.createElement('li');
			oLifeUl10.appendChild(oLi);
			oLi.innerHTML = `<a href="http://localhost/wangyi/details.html" target="_blank" goods_id = '${oGoods.goods_id}'  goods_img_src_1 = "${oGoods.goods_img_src_1}"  goods_img_src_2 ="${oGoods.goods_img_src_2}"   goods_img_src_3 ="${oGoods.goods_img_src_3}"   goods_img_src = "${oGoods.goods_img_src}",  goods_guige='${oGoods.goods_guige}'   goods_name ='${oGoods.goods_name}'  goods_jia = '${oGoods.goods_jia}'  >
										<img src="${oGoods.goods_img_src}"/>
										<div>
											<p>${oGoods.goods_name}</p>
											<span>商城价&nbsp;¥${oGoods.goods_jia}</span>										
										</div>
									</a>`	
			
		}
			
		var cuncookie_a =Array.from(oLifeUl10.getElementsByTagName('a')) ;
		
		for ( var i= 0; i< cuncookie_a.length; i++) {
			cuncookie_a[i].onclick = function(){				
				var sId = this.getAttribute('goods_id');
				var sTitle = this.getAttribute('goods_name');
				var sPrice = this.getAttribute('goods_jia');
				var sSrc_list =this.getAttribute('goods_img_src');
				var sSrc_detail_1 =this.getAttribute('goods_img_src_1');
				var sSrc_detail_2 =this.getAttribute('goods_img_src_2');
				var sSrc_detail_3 =this.getAttribute('goods_img_src_3');
				var sGuige =this.getAttribute('goods_guige');					
				var sCooki = getCookie('goods');
				
				if(sCooki != undefined){
					removeCookie('goods', '/');						
				}
					
				var aGoods = [];			
				var oGoods = {
					id : sId,
					title : sTitle,
					price : sPrice,
					src : sSrc_list,
					src_1 :sSrc_detail_1,
					src_2 :sSrc_detail_2,
					src_3 :sSrc_detail_3,
					guige : sGuige,
					num : 1
				}					
				aGoods.push(oGoods);	
				setCookie('goods', JSON.stringify(aGoods),7,'/');	
			}		
		}	
		
		
	}
	
	
	/*     选项可        */
	
	
	
	var toux =document.getElementsByClassName('details_main_show_select')[0] ;
	var touxlists = Array.from(toux.children);
	var touxdivs =Array.from(document.getElementsByClassName('gun')) ;
	
	touxlists.forEach(function(v,k){		
		v.onclick =function(){
			touxlists.forEach(function(v,k){
				v.className ='';	
			})
			this.className = 'show_select';	
			touxdivs.forEach(function(v){
				v.className = 'show_xiaoshi gun';
			})
			touxdivs[k].className = 'chuxianx gun';
		}		
	})
	
	
	
	/*  读取   商品页面的  cookie  */
	
	
	var sGoods =  getCookie('goods');	
	var aGoods =  JSON.parse(sGoods);
	
	var aGoodsObject = aGoods[0];
	
	
	/* 获取  详情页    左上部分      商品  详情 的   大块  */
	var detail_main = document.getElementsByClassName('details_main_top_message')[0];

	var omingziz= getid('mingziz');
	
	omingziz.innerHTML = aGoodsObject.title;
	
	var odetails_goods_message_title = document.getElementsByClassName('details_goods_message_title')[0];
	
	var oselect_big= getid('select_big');
	var oselect_small1= getid('select_small1');
	var oselect_small2= getid('select_small2');
	var oselect_small3= getid('select_small3');
	
	oselect_big.src = aGoodsObject.src_1;
	oselect_small1.src = aGoodsObject.src_1;
	oselect_small2.src = aGoodsObject.src_2;
	oselect_small3.src = aGoodsObject.src_3;
	odetails_goods_message_title.innerHTML = aGoodsObject.title;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ojiagege= getid('jiagege');
	
	
	ojiagege.innerHTML = '&nbsp;&nbsp;￥'+ aGoodsObject.price+'.00';
	
	var oguige = document.getElementsByClassName('guige')[0];
	oguige.innerHTML =  aGoodsObject.guige+'<span></span>';
	
	
	
	
		/* 图片选项卡  */
		var baobao = getid('img_bao');
		var oSelect_small =Array.from(baobao.children) ;
		var oSelect_big = getid('select_big');
		oSelect_small.forEach(function(v,k){
			v.onclick = function(){
				oSelect_small.forEach(function(v){
					v.className = 'ii';
				});			
				v.className = 'select_small ii';
				
				if(k==0){
					oSelect_big.src =aGoodsObject.src_1;
				}else if(k==1){
					oSelect_big.src =aGoodsObject.src_2;
					
					
				}else if(k==2){
					oSelect_big.src =aGoodsObject.src_3;
				}

			}	
		});		
	/* 图片选项卡     结束  */
	
	var onini1= getid('nini1');
	var onini2= getid('nini2');
	var onini3= getid('nini3');
	
	
	onini1.src =aGoodsObject.src_1;
	onini2.src =aGoodsObject.src_2;
	onini3.src =aGoodsObject.src_3;
	
	/*       加减按钮           */
	var omai_num_jian = getid('mai_num_jian');
	var omai_num_input = getid('mai_num_input');
	var omai_num_jia = getid('mai_num_jia');
	
	omai_num_jian.onclick = function(){		
		if(omai_num_input.value !=1){			
			omai_num_input.value--;
		}
	}
	
	omai_num_jia.onclick = function(){		
		if(omai_num_input.value !=99){			
			omai_num_input.value++;
		}
	}
	
	/*      小气泡           */
	function qipaopao(){
		var omini_cart_num= document.getElementsByClassName('mini_cart_num')[0];
		var omini_cart_sum= document.getElementsByClassName('mini_cart_sum')[0];
		
		var qipao_cookie = getCookie('goodmessage');
		var omini_cart_money= document.getElementsByClassName('mini_cart_money')[0];

		if(qipao_cookie == undefined){
			omini_cart_num.innerHTML = 0;		
			omini_cart_sum.innerHTML = 0;
			omini_cart_money.innerHTML = '￥'+0+'.00'	;
		}else{
			var aqipao_cookie = JSON.parse(qipao_cookie);
			omini_cart_num.innerHTML = aqipao_cookie[0].jianshu;		
			omini_cart_sum.innerHTML = aqipao_cookie[0].jianshu;
			omini_cart_money.innerHTML = '￥'+aqipao_cookie[0].qianshu+'.00'	;
		}
		
		
	}
	
	qipaopao();
	
	
	
	
	
	/*                 商品加入购物车                        */
	
	
	var odetails_btn_go_cart = document.getElementsByClassName('details_btn_go_cart')[0];
	odetails_btn_go_cart.onclick = function(){
			/*  动画效果      */
			var odetails_goods_message_select = document.getElementsByClassName('details_goods_message_select')[0];
			var oselect_big = getid('select_big');
			var colonImg = document.createElement('img');
			odetails_goods_message_select.appendChild(colonImg);
			
			colonImg.style.display = 'block';
			colonImg.style.position = 'absolute';
			colonImg.src = oselect_big.src;
			colonImg.style.left = 0;
			colonImg.style.top = 0;
			colonImg.style.width  = '400px' ;
			colonImg.style.height = '300px';
			bufferMove(colonImg, {left:1000,top:-150,width:0,height:0}, ratio = 8);
		
			/* 加入购物车   */
			var sCookimessage = getCookie('goodmessage');
			
			if(sCookimessage == undefined){
				var aGoodmessage = [];
					
			}else{
				var aGoodmessage = JSON.parse(sCookimessage);
				
			}	
			
			
			var bucunzai = true;
			for ( var j= 0; j< aGoodmessage.length; j++) {	
				if(aGoodmessage[j].id == aGoodsObject.id){
					aGoodmessage[j].num = aGoodmessage[j].num + parseInt(omai_num_input.value) ;
					if(aGoodmessage.length == 0){
						aGoodmessage[0].qianshu = parseInt(omai_num_input.value*aGoodmessage[j].price) ;
					}else{
						aGoodmessage[0].qianshu =parseInt(aGoodmessage[0].qianshu)  + parseInt(omai_num_input.value*aGoodmessage[j].price) ;
					}
					
					
					if(aGoodmessage[j].num>=99){
						aGoodmessage[j].num = 99;
					}
					
					bucunzai = false;
				}
			}
			
			if(bucunzai){
				var oGoodmessage = {
					id : aGoodsObject.id,
					title : aGoodsObject.title,
					price : aGoodsObject.price,
					src : aGoodsObject.src,
					guige:aGoodsObject.guige,
					num : parseInt(omai_num_input.value),
					jianshu:0,
					qianshu:aGoodsObject.price
				}					
				aGoodmessage.push(oGoodmessage);
				if(aGoodmessage.length ==1 ){
					aGoodmessage[0].qianshu = parseInt(omai_num_input.value*oGoodmessage.price) ;
				}else{
					aGoodmessage[0].qianshu =parseInt(aGoodmessage[0].qianshu)  + parseInt(omai_num_input.value*oGoodmessage.price) ;
				}
				
				
				
			}	
			
			
			aGoodmessage[0].jianshu = aGoodmessage[0].jianshu + parseInt(omai_num_input.value) ;
			setCookie('goodmessage', JSON.stringify(aGoodmessage),7,'/');
			qipaopao();
	}
	
}
















