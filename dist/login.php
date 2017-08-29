<?php
$name = $_POST["username"];
$psw = $_POST["password"];



$arr = array(array("username"=>"123456789@qq.com","password"=>"123456789"),array("username"=>"1","password"=>"1"));

/*if($name && $rpsw){
	$a = array("username"=>$name,"password"=>$psw);
	array_push($arr,$a);
	

}*/





foreach($arr as $item){
	if($item["username"]== $name && $item["password"] == $psw){
		echo "1";
		break;
	}else{
		echo "0";
	}
}


?>