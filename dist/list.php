<?php

header("content-type:text/html;charset=utf-8");
$student = array(array("name"=>"牛勇","age"=>"18","sexy"=>"male"),array("name"=>"wangjunying","age"=>"16","sexy"=>"female"));

$goods_img_99= array(array('goods_jia'=>'69','goods_id'=>'110','goods_img_src'=>'images/ggg1.png',
					'goods_img_src_1'=>'images/biggg1.png','goods_img_src_2'=>'images/biggg12.png',
					'goods_img_src_3'=>'images/biggg2.png','goods_guige'=>'大红','goods_name'=>'守望先锋 双肩包'),

					array('goods_jia'=>'55','goods_id'=>'112','goods_img_src'=>'images/gg2.jpeg',
					'goods_img_src_1'=>'images/biggg21.png','goods_img_src_2'=>'images/biggg22.png',
					'goods_img_src_3'=>'images/biggg23.png','goods_guige'=>'黄色','goods_name'=>'风暴英雄冰镇开瓶器  金色'),

					array('goods_jia'=>'88','goods_id'=>'113','goods_img_src'=>'images/gg3.jpeg',
					'goods_img_src_1'=>'images/biggg31.png','goods_img_src_2'=>'images/biggg32.png',
					'goods_img_src_3'=>'images/biggg33.png','goods_guige'=>'绿色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'67','goods_id'=>'114','goods_img_src'=>'images/gg5.jpeg',
					'goods_img_src_1'=>'images/biggg51.png','goods_img_src_2'=>'images/biggg52.png',
					'goods_img_src_3'=>'images/biggg53.png','goods_guige'=>'蓝色','goods_name'=>'炉石传说 卢西奥   坐垫'),

					array('goods_jia'=>'34','goods_id'=>'115','goods_img_src'=>'images/gg6.jpeg',
					'goods_img_src_1'=>'images/biggg61.png','goods_img_src_2'=>'images/biggg62.png',
					'goods_img_src_3'=>'images/biggg63.png','goods_guige'=>'紫色','goods_name'=>'风暴英雄冰镇开瓶器'),


					array('goods_jia'=>'22','goods_id'=>'116','goods_img_src'=>'images/gg7.jpeg',
					'goods_img_src_1'=>'images/biggg71.png','goods_img_src_2'=>'images/biggg72.png',
					'goods_img_src_3'=>'images/biggg73.png','goods_guige'=>'青色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'42','goods_id'=>'117','goods_img_src'=>'images/gg8.jpeg',
					'goods_img_src_1'=>'images/biggg81.png','goods_img_src_2'=>'images/biggg82.png',
					'goods_img_src_3'=>'images/biggg83.png','goods_guige'=>'青色','goods_name'=>'炉石传说 卢西奥   坐垫'),

					array('goods_jia'=>'34','goods_id'=>'118','goods_img_src'=>'images/gg9.jpeg',
					'goods_img_src_1'=>'images/biggg91.png','goods_img_src_2'=>'images/biggg92.png',
					'goods_img_src_3'=>'images/biggg93.png','goods_guige'=>'青色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'69','goods_id'=>'119','goods_img_src'=>'images/gg10.jpeg',
					'goods_img_src_1'=>'images/biggg101.png','goods_img_src_2'=>'images/biggg102.png',
					'goods_img_src_3'=>'images/biggg103.png','goods_guige'=>'绿色','goods_name'=>'硅胶手机壳    卢西奥'),

					array('goods_jia'=>'55','goods_id'=>'120','goods_img_src'=>'images/gg11.jpeg',
					'goods_img_src_1'=>'images/biggg111.png','goods_img_src_2'=>'images/biggg112.png',
					'goods_img_src_3'=>'images/biggg113.png','goods_guige'=>'绿色','goods_name'=>'风暴英雄冰镇开瓶器   卢西奥'),

					array('goods_jia'=>'88','goods_id'=>'123','goods_img_src'=>'images/gg12.jpeg',
					'goods_img_src_1'=>'images/biggg121.png','goods_img_src_2'=>'images/biggg122.png',
					'goods_img_src_3'=>'images/biggg123.png','goods_guige'=>'绿色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'69','goods_id'=>'110','goods_img_src'=>'images/ggg1.png',
					'goods_img_src_1'=>'images/biggg1.png','goods_img_src_2'=>'images/biggg12.png',
					'goods_img_src_3'=>'images/biggg2.png','goods_guige'=>'大红','goods_name'=>'守望先锋 双肩包'),

					array('goods_jia'=>'55','goods_id'=>'112','goods_img_src'=>'images/gg2.jpeg',
					'goods_img_src_1'=>'images/biggg21.png','goods_img_src_2'=>'images/biggg22.png',
					'goods_img_src_3'=>'images/biggg23.png','goods_guige'=>'黄色','goods_name'=>'风暴英雄冰镇开瓶器  金色'),

					array('goods_jia'=>'88','goods_id'=>'113','goods_img_src'=>'images/gg3.jpeg',
					'goods_img_src_1'=>'images/biggg31.png','goods_img_src_2'=>'images/biggg32.png',
					'goods_img_src_3'=>'images/biggg33.png','goods_guige'=>'绿色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'67','goods_id'=>'114','goods_img_src'=>'images/gg5.jpeg',
					'goods_img_src_1'=>'images/biggg51.png','goods_img_src_2'=>'images/biggg52.png',
					'goods_img_src_3'=>'images/biggg53.png','goods_guige'=>'蓝色','goods_name'=>'炉石传说 卢西奥   坐垫'),

					array('goods_jia'=>'34','goods_id'=>'115','goods_img_src'=>'images/gg6.jpeg',
					'goods_img_src_1'=>'images/biggg61.png','goods_img_src_2'=>'images/biggg62.png',
					'goods_img_src_3'=>'images/biggg63.png','goods_guige'=>'紫色','goods_name'=>'风暴英雄冰镇开瓶器'),


					array('goods_jia'=>'22','goods_id'=>'116','goods_img_src'=>'images/gg7.jpeg',
					'goods_img_src_1'=>'images/biggg71.png','goods_img_src_2'=>'images/biggg72.png',
					'goods_img_src_3'=>'images/biggg73.png','goods_guige'=>'青色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'42','goods_id'=>'117','goods_img_src'=>'images/gg8.jpeg',
					'goods_img_src_1'=>'images/biggg81.png','goods_img_src_2'=>'images/biggg82.png',
					'goods_img_src_3'=>'images/biggg83.png','goods_guige'=>'青色','goods_name'=>'炉石传说 卢西奥   坐垫'),

					array('goods_jia'=>'34','goods_id'=>'118','goods_img_src'=>'images/gg9.jpeg',
					'goods_img_src_1'=>'images/biggg91.png','goods_img_src_2'=>'images/biggg92.png',
					'goods_img_src_3'=>'images/biggg93.png','goods_guige'=>'青色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'69','goods_id'=>'119','goods_img_src'=>'images/gg10.jpeg',
					'goods_img_src_1'=>'images/biggg101.png','goods_img_src_2'=>'images/biggg102.png',
					'goods_img_src_3'=>'images/biggg103.png','goods_guige'=>'绿色','goods_name'=>'硅胶手机壳    卢西奥'),

					array('goods_jia'=>'55','goods_id'=>'120','goods_img_src'=>'images/gg11.jpeg',
					'goods_img_src_1'=>'images/biggg111.png','goods_img_src_2'=>'images/biggg112.png',
					'goods_img_src_3'=>'images/biggg113.png','goods_guige'=>'绿色','goods_name'=>'风暴英雄冰镇开瓶器   卢西奥'),

					array('goods_jia'=>'88','goods_id'=>'123','goods_img_src'=>'images/gg12.jpeg',
					'goods_img_src_1'=>'images/biggg121.png','goods_img_src_2'=>'images/biggg122.png',
					'goods_img_src_3'=>'images/biggg123.png','goods_guige'=>'绿色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'69','goods_id'=>'110','goods_img_src'=>'images/ggg1.png',
					'goods_img_src_1'=>'images/biggg1.png','goods_img_src_2'=>'images/biggg12.png',
					'goods_img_src_3'=>'images/biggg2.png','goods_guige'=>'大红','goods_name'=>'守望先锋 双肩包'),

					array('goods_jia'=>'55','goods_id'=>'112','goods_img_src'=>'images/gg2.jpeg',
					'goods_img_src_1'=>'images/biggg21.png','goods_img_src_2'=>'images/biggg22.png',
					'goods_img_src_3'=>'images/biggg23.png','goods_guige'=>'黄色','goods_name'=>'风暴英雄冰镇开瓶器  金色'),

					array('goods_jia'=>'88','goods_id'=>'113','goods_img_src'=>'images/gg3.jpeg',
					'goods_img_src_1'=>'images/biggg31.png','goods_img_src_2'=>'images/biggg32.png',
					'goods_img_src_3'=>'images/biggg33.png','goods_guige'=>'绿色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'67','goods_id'=>'114','goods_img_src'=>'images/gg5.jpeg',
					'goods_img_src_1'=>'images/biggg51.png','goods_img_src_2'=>'images/biggg52.png',
					'goods_img_src_3'=>'images/biggg53.png','goods_guige'=>'蓝色','goods_name'=>'炉石传说 卢西奥   坐垫'),

					array('goods_jia'=>'34','goods_id'=>'115','goods_img_src'=>'images/gg6.jpeg',
					'goods_img_src_1'=>'images/biggg61.png','goods_img_src_2'=>'images/biggg62.png',
					'goods_img_src_3'=>'images/biggg63.png','goods_guige'=>'紫色','goods_name'=>'风暴英雄冰镇开瓶器'),


					array('goods_jia'=>'22','goods_id'=>'116','goods_img_src'=>'images/gg7.jpeg',
					'goods_img_src_1'=>'images/biggg71.png','goods_img_src_2'=>'images/biggg72.png',
					'goods_img_src_3'=>'images/biggg73.png','goods_guige'=>'青色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'42','goods_id'=>'117','goods_img_src'=>'images/gg8.jpeg',
					'goods_img_src_1'=>'images/biggg81.png','goods_img_src_2'=>'images/biggg82.png',
					'goods_img_src_3'=>'images/biggg83.png','goods_guige'=>'青色','goods_name'=>'炉石传说 卢西奥   坐垫'),

					array('goods_jia'=>'34','goods_id'=>'118','goods_img_src'=>'images/gg9.jpeg',
					'goods_img_src_1'=>'images/biggg91.png','goods_img_src_2'=>'images/biggg92.png',
					'goods_img_src_3'=>'images/biggg93.png','goods_guige'=>'青色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'69','goods_id'=>'119','goods_img_src'=>'images/gg10.jpeg',
					'goods_img_src_1'=>'images/biggg101.png','goods_img_src_2'=>'images/biggg102.png',
					'goods_img_src_3'=>'images/biggg103.png','goods_guige'=>'绿色','goods_name'=>'硅胶手机壳    卢西奥'),

					array('goods_jia'=>'55','goods_id'=>'120','goods_img_src'=>'images/gg11.jpeg',
					'goods_img_src_1'=>'images/biggg111.png','goods_img_src_2'=>'images/biggg112.png',
					'goods_img_src_3'=>'images/biggg113.png','goods_guige'=>'绿色','goods_name'=>'风暴英雄冰镇开瓶器   卢西奥'),

					array('goods_jia'=>'88','goods_id'=>'123','goods_img_src'=>'images/gg12.jpeg',
					'goods_img_src_1'=>'images/biggg121.png','goods_img_src_2'=>'images/biggg122.png',
					'goods_img_src_3'=>'images/biggg123.png','goods_guige'=>'绿色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

					array('goods_jia'=>'69','goods_id'=>'119','goods_img_src'=>'images/gg10.jpeg',
					'goods_img_src_1'=>'images/biggg101.png','goods_img_src_2'=>'images/biggg102.png',
					'goods_img_src_3'=>'images/biggg103.png','goods_guige'=>'绿色','goods_name'=>'硅胶手机壳    卢西奥'),

					array('goods_jia'=>'55','goods_id'=>'120','goods_img_src'=>'images/gg11.jpeg',
					'goods_img_src_1'=>'images/biggg111.png','goods_img_src_2'=>'images/biggg112.png',
					'goods_img_src_3'=>'images/biggg113.png','goods_guige'=>'绿色','goods_name'=>'风暴英雄冰镇开瓶器   卢西奥'),

					array('goods_jia'=>'88','goods_id'=>'123','goods_img_src'=>'images/gg12.jpeg',
					'goods_img_src_1'=>'images/biggg121.png','goods_img_src_2'=>'images/biggg122.png',
					'goods_img_src_3'=>'images/biggg123.png','goods_guige'=>'绿色','goods_name'=>'预售 守望先锋 卢西奥 硅胶手机壳'),

);

$json = json_encode($goods_img_99,JSON_UNESCAPED_UNICODE);

echo $json;


?>