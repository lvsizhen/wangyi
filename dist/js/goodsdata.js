
	/*生活用品数据*/
	var oLifeUl1 = getid('life_use_bottom_ul_1');
	/*
	for(var i = 0; i<goods_img_1.length;i++){
		var oGoods = goods_img_1[i];
		var oLi = document.createElement('li');
		oLifeUl1.appendChild(oLi);
		oLi.innerHTML = `<a href="#" target="_blank" goods_id = '${oGoods.goods_id}'>
							<img src="${oGoods.goods_img_src}" alt="${oGoods.goods_name}"/>
							<span>${oGoods.goods_name}</span><br />
							<span >商城价：&nbsp;¥${oGoods.goods_jia}</span>
						</a>`	
		
	}*/
	
	/*服饰数据*/
	var oLifeUl2 = getid('clothe_bottom_ul_1');
	
	
	/*手办玩具*/
	var oLifeUl3 = getid('hander_play_bottom_ul_1');
	

	/*   外设产品*/
	var oLifeUl4 = getid('inout_goods_bottom_ul_1');
	/*      本月热门排行榜*/
	var oLifeUl5 = getid('monuth_hot_bottom_ul_1');
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
		
		
		
		/*    外设产品    */
		var suiji = Math.round(Math.random()*10)+5;
		for(var i = suiji; i<suiji+8;i++){
			var oGoods = goods_img_99[i];
			var oLi = document.createElement('li');
			oLifeUl4.appendChild(oLi);
			oLi.innerHTML = `<a href="http://localhost/wangyi/details.html" target="_blank" goods_id = '${oGoods.goods_id}'  goods_img_src_1 = "${oGoods.goods_img_src_1}"  goods_img_src_2 ="${oGoods.goods_img_src_2}"   goods_img_src_3 ="${oGoods.goods_img_src_3}"   goods_img_src = "${oGoods.goods_img_src}",  goods_guige='${oGoods.goods_guige}'   goods_name ='${oGoods.goods_name}'  goods_jia = '${oGoods.goods_jia}'  >
								<img src="${oGoods.goods_img_src}" alt="${oGoods.goods_name}"/>
								<span>${oGoods.goods_name}</span><br />
								<span >商城价：&nbsp;¥${oGoods.goods_jia}</span>
							</a>`	
			
		}
		
		
		var cuncookie_a =Array.from(oLifeUl4.getElementsByTagName('a')) ;
		
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
		
		
		
		/*   手办玩具    */
		var suiji = Math.round(Math.random()*8)+10;
		for(var i = suiji; i<suiji+8;i++){
			var oGoods = goods_img_99[i];
			var oLi = document.createElement('li');
			oLifeUl3.appendChild(oLi);
			oLi.innerHTML = `<a href="http://localhost/wangyi/details.html" target="_blank" goods_id = '${oGoods.goods_id}'  goods_img_src_1 = "${oGoods.goods_img_src_1}"  goods_img_src_2 ="${oGoods.goods_img_src_2}"   goods_img_src_3 ="${oGoods.goods_img_src_3}"   goods_img_src = "${oGoods.goods_img_src}",  goods_guige='${oGoods.goods_guige}'   goods_name ='${oGoods.goods_name}'  goods_jia = '${oGoods.goods_jia}'  >
								<img src="${oGoods.goods_img_src}" alt="${oGoods.goods_name}"/>
								<span>${oGoods.goods_name}</span><br />
								<span >商城价：&nbsp;¥${oGoods.goods_jia}</span>
							</a>`	
			
		}
		
		var cuncookie_a =Array.from(oLifeUl3.getElementsByTagName('a')) ;
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
		
		
		
		
		/*   服饰   */
		var suiji = Math.round(Math.random()*20)+4;
		for(var i = suiji; i<suiji+8;i++){
			var oGoods = goods_img_99[i];
			var oLi = document.createElement('li');
			oLifeUl2.appendChild(oLi);
			oLi.innerHTML = `<a href="http://localhost/wangyi/details.html" target="_blank" goods_id = '${oGoods.goods_id}'  goods_img_src_1 = "${oGoods.goods_img_src_1}"  goods_img_src_2 ="${oGoods.goods_img_src_2}"   goods_img_src_3 ="${oGoods.goods_img_src_3}"   goods_img_src = "${oGoods.goods_img_src}",  goods_guige='${oGoods.goods_guige}'   goods_name ='${oGoods.goods_name}'  goods_jia = '${oGoods.goods_jia}'  >	
								<img src="${oGoods.goods_img_src}" alt="${oGoods.goods_name}"/>
								<span>${oGoods.goods_name}</span><br />
								<span >商城价：&nbsp;¥${oGoods.goods_jia}</span>
							</a>`	
			
		}
		
		
		var cuncookie_a =Array.from(oLifeUl2.getElementsByTagName('a')) ;
		
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
		
		
		/*   生活用品*/
		var suiji = Math.round(Math.random()*20)+5;
		for(var i = suiji; i<suiji+8;i++){
			var oGoods = goods_img_99[i];
			var oLi = document.createElement('li');
			oLifeUl1.appendChild(oLi);
			oLi.innerHTML = `<a href="http://localhost/wangyi/details.html" target="_blank" goods_id = '${oGoods.goods_id}'  goods_img_src_1 = "${oGoods.goods_img_src_1}"  goods_img_src_2 ="${oGoods.goods_img_src_2}"   goods_img_src_3 ="${oGoods.goods_img_src_3}"   goods_img_src = "${oGoods.goods_img_src}",  goods_guige='${oGoods.goods_guige}'   goods_name ='${oGoods.goods_name}'  goods_jia = '${oGoods.goods_jia}'  >	
								<img src="${oGoods.goods_img_src}" alt="${oGoods.goods_name}"/>
								<span>${oGoods.goods_name}</span><br />
								<span >商城价：&nbsp;¥${oGoods.goods_jia}</span>
							</a>`	
			
		}
		
		
		var cuncookie_a =Array.from(oLifeUl1.getElementsByTagName('a')) ;
		
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





