/**
 * @author :  Chen Chuanliang
 * @date : 2016/9/27 20:33
 * @description :
 */
'use strict';
var $=(function(){
  return new Base();
})();
function Base(){
  this.elements=[];
  //获取ID元素
  this.getId=function(id){
    this.elements.push(document.getElementById(id));
    return this;
  };
  //获取元素节点
    this.getTag=function(tag){
      var tags=document.getElementsByTagName(tag);
      for(var i=0,len=tags.length;i<len;i++){
        this.elements.push(tags[i])
      }
      return this;
    }
}
//css方法
Base.prototype.css=function(attr,value){
    for(var i=0;i<this.elements.length;i++){
      this.elements[i].style[attr]=value;
    }
  return this;
}
//html方法
Base.prototype.html=function(str){
  for(var i=0;i<this.elements.length;i++){
    this.elements[i].innerHTML=str;
  }
  return this;
}
//click方法
Base.prototype.click=function(fn){
  for(var i=0;i<this.elements.length;i++){
    this.elements[i].onclick=fn;
  }
}
//hover方法
Base.prototype.hover=function(fn){
  for(var i=0;i<this.elements.length;i++){
    this.elements[i].onmouseover=fn;
  }
}