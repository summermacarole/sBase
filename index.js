/**
 * @author :  Chen Chuanliang
 * @date : 2016/9/27 20:32
 * @description :
 */
'use strict';
window.onload=function(){
  // var base=new Base();
  // base.getId('box').css('backgroundColor','green').css('color','red');
  // alert(base.getTag('p').css('color','red').css('backgroundColor','green').css('color'));
  // $().getId('box').html('hello');
  // alert($().getId('box').css('color'));
  // alert($().getClass('red').elements.length);
  // $().getClass('red','bbb').css('color','red');
  // $().getId('box').css('color','red');
  // $().getId('pox').css('color','blue')
  $().getId('box').addClass('a').addClass('b').addClass('c');
  var isRemoved=false;
  $().getTag('button').click(function(){
    // $().addRule('body','background:green');
    $().removeRule(0);
    if(!isRemoved){
      $().getId('box').removeClass('b');
      isRemoved=true;
    }else{
      $().getId('box').addClass('b');
      isRemoved=false;
    }
  })
}