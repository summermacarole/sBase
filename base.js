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
//添加class
Base.prototype.addClass=function(className){
  for(var i=0;i<this.elements.length;i++){
    if(!this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
      this.elements[i].className+=' '+className;
    }
  }
  return this;
}
//删除class
Base.prototype.removeClass=function(className){
  for(var i=0;i<this.elements.length;i++){
    if(this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
      this.elements[i].className=this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),' ')
    }
  }
  return this;
}
//添加rule
Base.prototype.addRule=function(selector,cssText,position,index){
  var index=index||0;
  var position=position||0;
  var sheet=document.styleSheets[index];
  if(typeof sheet.insertRule!='undefined'){
    sheet.insertRule(selector+'{'+cssText+'}',position)
  }else if(typeof sheet.addRule!='undefined'){
    sheet.addRule(selector,cssText,position)
  }
  return this;
}
//删除rule
Base.prototype.removeRule=function(position,index){
  var position=position||0;
  var index=index||0;
  var sheet=document.styleSheets[index];
  if(typeof sheet.deleteRule!='undefined'){
    sheet.deleteRule(position)
  }else if(typeof sheet.removeRule!='undefined'){
    sheet.removeRule(position);
  }
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