			$(function(){
				var oLists = $(".sliderImg");
				var aList = oLists.find("li");
				var oNav = $(".sliderNav");
				var aNav = oNav.find("li");
				var oPrev = $(".sliderBtn span").eq(0);
				var oNext = $(".sliderBtn span").eq(1);
				
				oLists.append(aList.eq(0).clone(true));
				oLists.width((aList.length+1)*aList.eq(0).width());
				
				var i= 0;
				
				function move(){
					clearInterval(timer);
					i++;
					if(i == aList.length+1){
						i=1;
						oLists.css({'left':0});	
					}
					if(i == -1){
						i= aList.length-1;
						oLists.css({'left':-aList.eq(0).width()*(i+1)});
						
					}
					
					if(i == aList.length){
						aNav.eq(0).addClass('cur').siblings().removeClass('cur');
					}else{
						aNav.eq(i).addClass('cur').siblings().removeClass('cur');
					}
					
					
					
					oLists.stop().animate({"left": -aList.eq(0).width()*i},500);
					
					timer = setInterval(function(){					
						move();	
					},2000);
				}
				
				var timer = setInterval(function(){					
					move();	
				},2000);
				
				oNext.click(function(){
					move();
				});
				
				oPrev.click(function(){
					i = i-2;
					move();
					
				})
				
				aNav.hover(function(){
					i = $(this).index()-1;
					move();
					clearInterval(timer);
					setTimeout(function(){
						move();
					},5000);
				},function(){
					move();
				})
				oLists.hover(function(){
					clearInterval(timer);
					setTimeout(function(){
						move();
					},5000);
				},function(){
					move();
				})
				
			});		

