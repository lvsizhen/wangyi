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
		
		
		Ajax("post","php/login.php",foo,data);
		
		function foo(data){
			console.log(1111);
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
	



	/*   列表页    本月热门排行榜*/
	
	var oLifeUl5 = getid('list_monuth_hot_bottom_ul_1');
	
	/*    列表     */
	var oLifeUl99 = getid('list_mid_bottom_ul_1');

	
	Ajax('get','list.php',fnSuc,{});
			
	function fnSuc(data){
		var data = JSON.parse(data);
		var goods_img_99=data;
		
		
		/*   列表页    本月热门排行榜*/
		var suiji = Math.round(Math.random()*15);
		
		for(var i = suiji; i<suiji+7;i++){
			var oGoods = goods_img_99[i];
			var oLi = document.createElement('li');
			oLifeUl5.appendChild(oLi);
			oLi.innerHTML = `<a href="http://localhost/wangyi/details.html" target="_blank" goods_id = '${oGoods.goods_id}'  goods_img_src_1 = "${oGoods.goods_img_src_1}"  goods_img_src_2 ="${oGoods.goods_img_src_2}"   goods_img_src_3 ="${oGoods.goods_img_src_3}"   goods_img_src = "${oGoods.goods_img_src}",  goods_guige='${oGoods.goods_guige}'   goods_name ='${oGoods.goods_name}'  goods_jia = '${oGoods.goods_jia}'  >
										<img src="${oGoods.goods_img_src}"/>
										<div>
											<p>${oGoods.goods_name}</p>
											<span>商城价&nbsp;¥${oGoods.goods_jia}</span>										
										</div>
									</a>`	
			
		}
			
		var cuncookie_a =Array.from(oLifeUl5.getElementsByTagName('a')) ;
		
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
		
			/*    列表     */
		for(var i = 0; i<goods_img_99.length;i++){
			var oGoods = goods_img_99[i];
			var oLi = document.createElement('li');
			oLifeUl99.appendChild(oLi);
			oLi.innerHTML = `<a href="http://localhost/wangyi/details.html" target="_blank" goods_id = '${oGoods.goods_id}'  goods_img_src_1 = "${oGoods.goods_img_src_1}"  goods_img_src_2 ="${oGoods.goods_img_src_2}"   goods_img_src_3 ="${oGoods.goods_img_src_3}"   goods_img_src = "${oGoods.goods_img_src}",  goods_guige='${oGoods.goods_guige}'   goods_name ='${oGoods.goods_name}'  goods_jia = '${oGoods.goods_jia}'  >
								<img src="${oGoods.goods_img_src}" alt="${oGoods.goods_name}"/>
								<span>${oGoods.goods_name}</span><br />
								<span >商城价：&nbsp;¥${oGoods.goods_jia}</span>
							</a>`				
		}
		
		var cuncookie_a =Array.from(oLifeUl99.getElementsByTagName('a')) ;
		
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
	
}
