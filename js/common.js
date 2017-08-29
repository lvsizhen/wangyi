/*
	通过ID获取DOM对象
*/
function getid(id) {
	return document.getElementById(id);
}


/*
 		n位数字字母混合验证码   字母不包括大写
 * */
			function yan(n){
				var str = '';
				for (var i =0 ; i<n; i++) {
					var sui = Math.random().toFixed(0);
					if (sui == 0) {
						var shu = parseInt(Math.random()*10);
						str = str+shu;
						
					} else{
						
						var tmp = 'az';
						var aCode = tmp.charCodeAt(0);
						var zCode = tmp.charCodeAt(1);
						var shui = Math.round(Math.random()*(zCode-aCode))+aCode;
						var mun = String.fromCharCode(shui);
						str = str+ mun;				
					}			
				}
				return str;	
			}




/*
	封装添加/修改cookie的函数
	name  cookie名称
	value cookie值
	day   过期时间（单位天）
	path  路径
*/
function setCookie(name, value, day, path) {

	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);

	document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate + '; path=' + path;
}

/*
	封装查询cookie的函数
	name 待查询的cookie名称
*/
function getCookie(name) {
	var sCookie = document.cookie;
	var aCookie = sCookie.split('; ');

	for(var i = 0; i < aCookie.length; i++) {
		var aTemp = aCookie[i].split('=');

		if(aTemp[0] === name) {
			return decodeURIComponent(aTemp[1]);
		}
	}
}
/*
	封装删除cookie的函数
	name 待删除的cookie名称
	path cookie路径
*/
function removeCookie(name, path) {
	document.cookie = name + '=;expires=-1;path=' + path;
}

/*
	获取物体属性的当前值
	obj：对象
	sAttr：属性名
	在获取宽度等  时带有 单位 px   
	
*/
function getStyle(obj, sAttr) {
	if(obj.currentStyle) {
		return obj.currentStyle[sAttr];
	} else {
		return getComputedStyle(obj, false)[sAttr];
	}
}

	// 操作实例  console.log(getStyle(oReed, 'background-color'));


/*
	物体多属性同时运动的函数
	obj：运动的物体
	oTarget：对象，属性名为运动的样式名，属性值为样式运动的终点值    传入的属性值不带单位   例如 {width:800,top:800, opacity:0}
	ratio：速度的系数
	在传入opacity值时要乘以100  范围是0  到100
	fn 回调函数   在链式运动中使用  
*/
function bufferMove(obj, oTarget, ratio = 8) {
	clearInterval(obj.iTimer);
	obj.iTimer = setInterval(function () {
		// 假设所有的属性均已运动完毕
		var bBtn = true;
		for(var sAttr in oTarget){
			// 获取当前值
			if(sAttr === 'opacity') {
				var iCur = parseFloat(getStyle(obj, sAttr) * 100);
			} else {
				var iCur = parseInt(getStyle(obj, sAttr));
			}
			// 计算速度
			var iSpeed = (oTarget[sAttr] - iCur) / ratio;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

			// 计算下一次的值
			var iNext = iCur + iSpeed;

			// 赋值
			if(sAttr ==='opacity') {
				obj.style.opacity = iNext / 100;
				obj.style.filter = 'alpha(opacity=' + iNext +')';
			} else {
				obj.style[sAttr] = iNext + 'px';
			}

			// 清除定时器，当前的位置和终点值是否相等，相等则说明结束
			if(iNext !== oTarget[sAttr]) {
				bBtn = false;
			}
		}
		// 如果bBtn的值为true，则说明所有的属性均已运动完毕
		if(bBtn) {
			clearInterval(obj.iTimer);
			
		}
	}, 50);
}





/*
			 封装ajax方法的参数说明
			 * type: 请求类型 （必须）
			 * url:  请求地址(必须)
			 * data: 请求参数 （非必须）
			 * fnSuc: 请求成功时的回调函数（必须）
			 * 
			 * */
			
			/*
			 data    //如果data  在调用时不需要输入  就在其位置放{}    调用即Ajax('get','url',fnSuc,{});
			 * var data = {"username":"john","age":20}
			 * => username=john&age=20
			 * data.php?username=john&age=20
			 * */
			function Ajax(type,url,fnSuc,data){
				var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				var str = "";
				for(var attr in data){
					str += attr + "=" + data[attr] + "&";
				}
				str = str.replace(/&$/,"");

				type = type.toUpperCase();
				
				if(type == "GET"){
					xhr.open("GET",url+"?"+str,true);
					xhr.send();
				}
				if(type == "POST"){
					xhr.open("POST",url,true);
					//设置数据的格式为form-data
					xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
					xhr.send(str);
				}
				
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4 && xhr.status == 200){
						var data = xhr.responseText;
						fnSuc(data);
					}
				}
				
			}

