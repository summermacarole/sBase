/**
 * @author :  Chen Chuanliang
 * @date : 2016/9/27 20:32
 * @description :
 */
'use strict';
window.onload=function(){
  var base=new Base();
  // base.getId('box').css('backgroundColor','green').css('color','red');
  // alert(base.getTag('p').css('color','red').css('backgroundColor','green').css('color'));
  base.getTag('p').css('color','red').html('hello');
}