


// // // 轮播图
function dhlunbo(obj,ul,banL,banr){
  var center=$(obj)[0];
  var imgs=$("a",$(obj)[0]);
  var xys=$("li",$(ul)[0]);
  // imgs[0].style.zIndex=10;
  animate(imgs[0],{opacity:1});
  xys[0].style.background="#0085d0";
  //当前窗口中的图片下标
  var now=0;
  var t=setInterval(move,2000);
  var banl=$(banL)[0];
  var banr=$(banr)[0];

  //鼠标放上停止离开走
 
  center.onmouseover=function(){
    clearInterval(t);
  }
  center.onmouseout=function(){
    t=setInterval(move,2000);
  }


  //选项卡
  for(var i=0;i<xys.length;i++){
   xys[i].index=i;
   xys[i].onclick=function(){
      for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      xys[i].style.background="";
   }  
      xys[this.index].style.background="#0085d0";
      // imgs[this.index].style.zIndex=10;
      animate(imgs[this.index],{opacity:1});
      now=this.index;
   }
  }


  // 左右爪
  

  banl.onclick=function(){
     movel()
  }
  banr.onclick=function(){
     move()
  }

  function movel(){
   now--;
   if(now<0){
      now=imgs.length-1;
   }
   for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      xys[i].style.background="";
   }   
      xys[now].style.background="#0085d0";
      // imgs[now].style.zIndex=10;
      animate(imgs[now],{opacity:1});
   
  }
  
 //自动轮播
  function move(){
   now++;
   if(now==imgs.length){
      now=0;
   }
   for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      xys[i].style.background="";
   }   
      xys[now].style.background="#0085d0";
      // imgs[now].style.zIndex=10;
      animate(imgs[now],{opacity:1});
   
  }
}



  // 无缝轮播
  //  1、获取
  //  2、初始化
  //  3、now  next
  //     （就位）next  imgs[next].style.left=mw+"px"
  //  4、走 animate(imgs[now],{left:-mw})
  //        animate(imgs[next],{left:0})
  //  5、更新 now=next



//不用设初始状态，在函数中设
function autolb(obj,ul,banL,banr){
   var center=$(obj)[0];
   var imgs=$("a",$(obj)[0]);
   var xys=$("li",$(ul)[0]);
   var mw=parseInt(getStyle($(obj)[0],"width"));
   var banl=$(banL)[0];
   var banr=$(banr)[0];
   imgs[0].style.zIndex=10;
   xys[0].style.background="#0085d0";
   var now=0;
   var next=0;
   var t=setInterval(move,2000);
   var flag=true;
 //鼠标放上停止,,离开走
 center.onmouseover=function(){
    clearInterval(t);
  }
  center.onmouseout=function(){
    t=setInterval(move,2000);
  }


  //选项卡
  for(var i=0;i<xys.length;i++){
   xys[i].index=i;
   xys[i].onclick=function(){
       if(!flag){
       return;
       }
       flag=false;
    //next换成this.index
       if(now>this.index){
         imgs[this.index].style.left=-mw+"px";
         animate(imgs[now],{left:mw});
         animate(imgs[this.index],{left:0},function(){flag=true;});
       }else if(now<this.index){
         imgs[this.index].style.left=mw+"px";
         animate(imgs[now],{left:-mw});
         animate(imgs[this.index],{left:0},function(){flag=true;});
       }else{return;}
       xys[now].style.background="";
       xys[this.index].style.background="#0085d0";
       now=this.index;
       next=this.index;
     }
   }

 // 左右按钮

  banl.onclick=function(){
    if(flag){
     movel()
     flag=false;
    }
  }
  banr.onclick=function(){
     if(flag){
     move()
     flag=false;
    }
  }

 // 移图
   for(var i=0;i<imgs.length;i++){
         if(i==0){
          continue;
         }
         imgs[i].style.left=mw+"px";
    }
   function move(){
       if(!flag){
       return;
       }
       flag=false;
       next++;
       if(next==imgs.length){next=0;
       }
       imgs[next].style.left=mw+"px";
       xys[now].style.background="";
       xys[next].style.background="#0085d0";
       animate(imgs[now],{left:-mw});
       animate(imgs[next],{left:0},function(){flag=true;});
       now=next;
   }

   function movel(){
       if(!flag){
       return;
       }
       next--;
       if(next<0){next=imgs.length-1;
       }
       imgs[next].style.left=-mw+"px";
       xys[now].style.background="";
       xys[next].style.background="#0085d0";
       animate(imgs[now],{left:mw});
       animate(imgs[next],{left:0},function(){flag=true;});
       now=next;
   }
}






//自动轮播（在css中设初始状态）
 function autolunbo(obj,imgs,lis,left,right){
  var bans=$(obj)[0];
  var banner=$(imgs);
  var lis=$(lis);
  var left=$(left)[0];
  var right=$(right)[0];
  var w=parseInt(getStyle(bans,"width"));
  var n=0;
  var next=0;
  var t=setInterval(moveimg,2000)
  var flag=true;
  function moveimg(){
     if(!flag){
       return;
     }
     flag=false;
      next=n+1;
      if(next==banner.length){
        next=0;
      }
      banner[next].style.left=w+"px";
      animate(banner[n],{left:-w},600);
      animate(banner[next],{left:0},600,function(){flag=true});
      for(var i=0;i<lis.length;i++){
          lis[n].style.background="#fff";
      }
          lis[next].style.background="blue";

            n=next;
   }

   
   
   bans.onmouseover=function(){
    clearInterval(t);
   }
   bans.onmouseout=function(){
    t=setInterval(moveimg,2000)
   }

   // 左右按钮
   
   right.onclick=function(){ 
     
     moveimg();
   }
   left.onclick=function(){
    
      moveimgL();
   }
    function moveimgL(){
      if(!flag){
       return;
     }
     flag=false;
      next=n-1;
      if(next<0){
        next=banner.length-1;
      }
      banner[next].style.left=-w+"px";
      animate(banner[n],{left:w},600);
      animate(banner[next],{left:0},600,function(){flag=true});
      for(var i=0;i<lis.length;i++){
          lis[n].style.background="#fff";
      }
          lis[next].style.background="blue";

            n=next;
   }
  // 移图 

  for(var i=0;i<banner.length;i++){
      lis[i].index=i;
      lis[i].onclick=function(){
        if(!flag){
         return;
        }
        flag=false;
        if(this.index>n){
           banner[this.index].style.left=w+"px";
           animate(banner[n],{left:-w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
           for(var i=0;i<lis.length;i++){
           lis[n].style.background="#fff";
           }
          lis[this.index].style.background="blue";
        }else if(this.index<n){
           banner[this.index].style.left=-w+"px";
           animate(banner[n],{left:w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
            for(var i=0;i<lis.length;i++){
            lis[n].style.background="#fff";
            }
            lis[this.index].style.background="blue";
        }
        n=this.index;
        next=this.index;

      }
  }
}




//节点轮播
function nodelunbo(obj,left,right,imgbox,j){
   var lunbo=$(obj)[0];
   var left=$(left)[0];
   var right=$(right)[0];
   var imgbox=$(imgbox)[0];
   var imgs=$("img",imgbox)
   var width=parseInt(getStyle(imgs[0],"width"));
   var t=setInterval(move,2500);
   var n=j;
   var flag=true;
   function move(){
        animate(imgbox,{left:-width*n},1000,
         function(){
          for (var i=1;i<=n;i++) {
            var first=firstChild(imgbox);
              imgbox.appendChild(first);
              
          }
          imgbox.style.left="0px";
         });
      
   }

   // 放停
    lunbo.onmouseover=function(){
      left.style.display="block";
      right.style.display="block";
      clearInterval(t)
    }
    lunbo.onmouseout=function(){
      left.style.display="none";
      right.style.display="none";
      t=setInterval(move,2500)
    }



     // 左右手
     right.onclick=function(){ 
     
     move();
    }
    left.onclick=function(){
    
       moveL();
    }

    function moveL(){
      if(!flag){
       return;
       }
       flag=false;
      for (var i=1;i<=n;i++) {
        var last=lastChild(imgbox);
          var first=firstChild(imgbox);
          imgbox.insertBefore(last,first);
      }
      
       imgbox.style.left=-width*n+"px";
         animate(imgbox,{left:0},1000,function(){flag=true;})
    }
}






function jiedian(obj,imgbox,left,right){
   var dagt=$(obj)[0];
   var imgbox=$(imgbox)[0];
   var as=$("a",imgbox);
   var right=$(".gunt-right")[0];
   var left=$(".gunt-left")[0];
   var aw=parseInt(getStyle(as[0],"width"))+parseInt(getStyle(as[0],"border-right"));
   //动态设置imgbox宽度
   imgbox.style.width=aw*as.length+"px";
   
   //从右到左(先动画后去图)
     // 1.img  left:-aw
     // 2.img.appendChild(firstChild)
     // 3.img.style.left=0;

  var gt=setInterval(moveimg,3000);
      function moveimg(){
      animate(imgbox,{left:-aw},function(){
      var first=firstChild(imgbox);
      imgbox.appendChild(first);
      imgbox.style.left=0;
      })
   }



  //鼠标放上停止,,离开走
  dagt.onmouseover=function(){
    clearInterval(gt);
  }
  dagt.onmouseout=function(){
    gt=setInterval(moveimg,3000);
  }


 // //左右按钮
 // // 从左到右 (先去图后动画)
   
   right.onclick=function(){ 
     
     moveimg();
   }
   left.onclick=function(){
          moveimgL();

      
   }

 
   // function moveimgL(){
   //  animate(imgbox,function(){
   //    var first=firstChild(imgbox);
   //    var last=lastChild(imgbox);
   //    imgbox.insertBefore(last,first);
   //    imgbox.style.left=-aw+"px";
   //    },{left:aw})
   // }
     function moveimgL(){
     var last=lastChild(imgbox);
     var first=firstChild(imgbox);
      imgbox.insertBefore(last,first);
      imgbox.style.left=-aw+"px";
      animate(imgbox,{left:0},500,function(){flag=true})
    }
}

