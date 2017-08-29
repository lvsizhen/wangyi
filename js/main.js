window.onload=function(){
	
	/*实现选项卡功能*/
	var uls =document.getElementsByClassName('right_select_ul')[0] ;
	var lists = Array.from(uls.children);
	var divs =Array.from(document.getElementsByClassName('select_div')) ;
	divs[0].className = 'right_select_divchuxian';
	lists.forEach(function(v,k){		
		v.onmouseover =function(){
			lists.forEach(function(v,k){
				v.className ='';	
			})
			this.className = 'right_select_li';	
			divs.forEach(function(v){
				v.className = 'right_select_divxiaoshi'
			})
			divs[k].className = 'right_select_divchuxian';
		}		
	})
	
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
			Ajax("post","login.php",fun,data);
			
			function fun(data){	
				console.log(data);
			}	
		}else{
			alert('验证码错误');
		}	
	}
	
	/*          注册结束             */
	
	
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
	
	
	
	
	/* 实现首页中     左侧  分类的    出现与消失功能   */
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}


/*实现主页选项卡功能*/
/*$(function(){
	
	$(".right_select_ul li").mouseover(function(){
		$(".select_div").eq($(this).index()).show().siblings().hide();
	});
})*/
