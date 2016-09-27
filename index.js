/**
 * @author :  Chen Chuanliang
 * @date : 2016/9/27 20:32
 * @description :
 */
'use strict';
window.onload=function(){
  console.log(Base);
  alert(Base.getId('id').innerHTML);
  alert(Base.getName('user')[0].value)
  alert(Base.getTag('p')[0].innerHTML);
}