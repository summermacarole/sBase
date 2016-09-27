/**
 * @author :  Chen Chuanliang
 * @date : 2016/9/27 20:33
 * @description :
 */
'use strict';
var Base={
  getId:function(id){
    return document.getElementById(id);
  },
  getName:function(name){
    return document.getElementsByName(name);
  },
  getTag:function(tag){
    return document.getElementsByTagName(tag);
  }
}