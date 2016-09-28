/**
 * @author :  Chen Chuanliang
 * @date : 2016/9/27 20:32
 * @description :
 */
'use strict';
window.onload=function(){
        //个人中心
        $().getClass('member').hover(function(){
                $(this).css('background','url("images/arrow2.png") no-repeat right center')
                $().getTag('ul','.member').show();
        },function(){
                $().getTag('ul','.member').hide();
                $(this).css('background','url("images/arrow.png") no-repeat right center')
        })
}