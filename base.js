/**
 * @author :  Chen Chuanliang
 * @date : 2016/9/27 20:33
 * @description :
 */
'use strict';
var $=function(){
  return new Base();
};
function Base(){
  this.elements=[];
}
//获取ID元素
Base.prototype.getId=function(id){
  this.elements.push(document.getElementById(id));
  return this;
};
//获取元素节点
Base.prototype.getTag=function(tag){
  var tags=document.getElementsByTagName(tag);
  for(var i=0,len=tags.length;i<len;i++){
    this.elements.push(tags[i])
  }
  return this;
}
//获取类数组
Base.prototype.getClass=function(className,bbb){
  var node=null;
  if(arguments.length==2){
    node=document.getElementById(bbb);
  }else{
    node=document;
  }
  var all=node.getElementsByTagName('*');
  for(var i=0;i<all.length;i++){
    if(all[i].className==className){
      this.elements.push(all[i])
    }
  }
  return this;
}
//获取第n个元素
Base.prototype.eq=function(n){
  var element=this.elements;
  this.elements=[];
  this.elements.push(element[n])
  return this;
}
//css方法
Base.prototype.css=function(attr,value){
    for(var i=0;i<this.elements.length;i++){
      if(arguments.length==1){
        if(typeof window.getComputedStyle!='undefined'){
          return window.getComputedStyle(this.elements[i],null)[attr];
        }else if(typeof this.elements[i].currentStyle){
          return this.elements[i].currentStyle[attr];
        }
      }
      this.elements[i].style[attr]=value;
    }
  return this;
}
//html方法
Base.prototype.html=function(str){
  for(var i=0;i<this.elements.length;i++){
    if(arguments.length==0){
      return this.elements[i].innerHTML;
    }
    this.elements[i].innerHTML=str;
  }
  return this;
}
//click方法
Base.prototype.click=function(fn){
  for(var i=0;i<this.elements.length;i++){
    this.elements[i].onclick=fn;
  }
  return this;
}
//hover方法
Base.prototype.hover=function(fn){
  for(var i=0;i<this.elements.length;i++){
    this.elements[i].onmouseover=fn;
  }
  return this;
}