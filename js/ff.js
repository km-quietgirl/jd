window.onload=function(){



	// 节点轮播


     nodelunbo(".main-right",".btnll",".btnrr",".imgboxss",4);


    //  头部选项卡效果

     var Drop=$(".dropdown",$("#nav")[0]);
    var Hid=$(".hidlay",$("#nav")[0]);
    for(var i=0;i<Drop.length;i++){
    	Drop[i].index=i;
    	Drop[i].onmouseover=function(){
    		Hid[this.index].style.display="block";
    	}
    	Drop[i].onmouseout=function(){
    		Hid[this.index].style.display="none";
    	}
    }


   //  banner 侧导航

    var Item=$(".item",$(".hdmenu")[0]);

    var Dplis=$(".dpdown",$(".hdmenu")[0]);
    for(var i=0;i<Item.length;i++){
    	Item[i].index=i;
    	Item[i].onmouseover=function(){
    		Dplis[this.index].style.display="block";
    	}
    	Item[i].onmouseout=function(){
    		Dplis[this.index].style.display="none";
    	}
    }
    

    // banner轮播

    var imgs=$("img",$((".slider-main"),$("#ban"))[0]);
	var navs=$(".slider-item",$((".slider-nav"),$("#ban"))[0]);
	var btnl=$(".btnl",$((".slider"),$("#ban"))[0])[0];
	var btnr=$(".btnr",$((".slider"),$("#ban"))[0])[0];
    var box=$(".slider-main",$((".slider"),$("#ban"))[0])[0];
    
	
	
     imgs[0].style.zIndex=10;
	// imgs[0].style.display="block";
	navs[0].style.background="#C81623";
    var flag=true;
	var now=0;
	var t=setInterval(move,4000);
	 function move(){
	 	now++;
	 	if(now>=imgs.length){
	 		now=0;
	 	}
	 	for(var i=0;i<imgs.length;i++){
	 		// imgs[i].style.display="none";
	 		animate(imgs[i],{opacity:0},function(){flag=true;});
	 		navs[i].style.background="#3e3e3e";
	 	}
	 	   // imgs[now].style.display="block";
	 	   animate(imgs[now],{opacity:1},function(){flag=true;});
	 	   navs[now].style.background="#C81623";
	 }
	
	 for(var i=0;i<navs.length;i++){
	 	navs[i].index=i;
	 	navs[i].onclick=function(){
	 		for(var i=0;i<imgs.length;i++){
	 		// imgs[i].style.display="none";
	 		animate(imgs[i],{opacity:0});
	 		navs[i].style.background="#3e3e3e";
	 	}
	 	   // imgs[this.index].style.display="block";
	 	   animate(imgs[this.index],{opacity:1});
	 	   navs[this.index].style.background="#C81623";
	 	   now=this.index;
	 	}
	 }
	 btnr.onclick=function(){
	 	 if(flag){
	 	 	flag=false;
	 	 	move();
	 	 	
	 	 }
         
         
	 }
	 btnl.onclick=function(){
	 	if(flag){ 
	 		flag=false;
          movel();
         
	 	}
	 	 
	 }
	 function movel(){
	 	now--;
	 	if(now<0){
	 		now=imgs.length-1;
	 	}

	 	for(var i=0;i<imgs.length;i++){
	 		// imgs[i].style.display="none";
	 		animate(imgs[i],{opacity:0},function(){flag=true;});
	 		navs[i].style.background="#3e3e3e";
	 	}
	 	   // imgs[now].style.display="block";
	 	   navs[now].style.background="#C81623";
	 	   animate(imgs[now],{opacity:1},function(){flag=true;});
	 	   
	 }


	 box.onmouseover=function(){
	 	clearInterval(t);
	 	btnl.style.display="block";
	 	btnr.style.display="block";
	 }
	 box.onmouseout=function(){
	 	t=setInterval(move,4000);
	 	btnl.style.display="none";
	 	btnr.style.display="none";
	 }


// 1楼
   var f1center=$(".zhong")[0];
   var f1imgs=$("a",$(".zhong")[0]);
   var f1xys=$("li",$(".f1lu")[0]);
   var f1mw=parseInt(getStyle($(".zhong")[0],"width"));
   f1imgs[0].style.zIndex=10;
   f1xys[0].style.background="#b61b1f";
   var n=0;
   var next=0;
   var zhongt=setInterval(f1move,2000);

 //鼠标放上停止,,离开走
 f1center.onmouseover=function(){
    clearInterval(zhongt);
  }
  f1center.onmouseout=function(){
    zhongt=setInterval(f1move,3000);
  }


  //选项卡
  for(var i=0;i<f1xys.length;i++){
   f1xys[i].index=i;
   f1xys[i].onclick=function(){
    //next换成this.index
       if(n>this.index){
         f1imgs[this.index].style.left=-f1mw+"px";
         animate(f1imgs[n],{left:f1mw});
         animate(f1imgs[this.index],{left:0});
       }else if(n<this.index){
         f1imgs[this.index].style.left=f1mw+"px";
         animate(f1imgs[n],{left:-f1mw});
         animate(f1imgs[this.index],{left:0});
       }else{return;}
       f1xys[n].style.background="";
       f1xys[this.index].style.background="#b61b1f";
       n=this.index;
       next=this.index;
     }
   }
 // 左右按钮
  var f1banl=$(".f1banl")[0];
  var f1banr=$(".f1banr")[0];
  var flag=true;
  f1banl.onclick=function(){
    if(flag){
     f1movel()
     flag=false;
    }
  }
  f1banr.onclick=function(){
     if(flag){
     f1move()
     flag=false;
    }
  }

  // 移图
   for(var i=0;i<f1imgs.length;i++){
         if(i==0){
          continue;
         }
         f1imgs[i].style.left=f1mw+"px";
    }
   function f1move(){
       next++;
       if(next==f1imgs.length){next=0;
       }
       f1imgs[next].style.left=f1mw+"px";
       f1xys[n].style.background="";
       f1xys[next].style.background="#b61b1f";
       animate(f1imgs[n],{left:-f1mw});
       animate(f1imgs[next],{left:0},function(){flag=true;});
       n=next;
   }
   function f1movel(){
       next--;
       if(next<0){next=f1imgs.length-1;
       }
       f1imgs[next].style.left=-f1mw+"px";
       f1xys[n].style.background="";
       f1xys[next].style.background="#b61b1f";
       animate(f1imgs[n],{left:f1mw});
       animate(f1imgs[next],{left:0},function(){flag=true;});
       n=next;
   }



   // 2楼
  var f2center=$(".ghbotcen")[0];
  var f2imgs=$(".f2xk",$(".ghbotcen")[0]);
  var f2xys=$("li",$(".f2lu")[0]);
  var f2mw=parseInt(getStyle($(".ghbotcen")[0],"width"));
  f2xys[0].style.background="#b61b1f";
  f2imgs[0].style.zIndex=10;
  var n2=0;
  var next2=0;
  var f2t=setInterval(f2move,3000);

//鼠标放上停止,,离开走
 f2center.onmouseover=function(){
    clearInterval(f2t);
  }
  f2center.onmouseout=function(){
    f2t=setInterval(f2move,3000);
  }

  //选项卡
  for(var i=0;i<f2xys.length;i++){
   f2xys[i].index=i;
   f2xys[i].onclick=function(){
    //next换成this.index
       if(n2>this.index){
         f2imgs[this.index].style.left=-f2mw+"px";
         animate(f2imgs[n2],{left:f2mw});
         animate(f2imgs[this.index],{left:0});
       }else if(n2<this.index){
         f2imgs[this.index].style.left=f2mw+"px";
         animate(f2imgs[n2],{left:-f2mw});
         animate(f2imgs[this.index],{left:0});
       }else{return;}
       f2xys[n2].style.background="";
       f2xys[this.index].style.background="#b61b1f";
       n2=this.index;
       next2=this.index;
     }
   }
//左右
  var f2banl=$(".f2banl")[0];
  var f2banr=$(".f2banr")[0];
  var flag=true;
  f2banl.onclick=function(){
    if(flag){
     f2movel()
     flag=false;
    }
  }
  f2banr.onclick=function(){
     if(flag){
     f2move()
     flag=false;
    }
  }

  // 移图
   for(var i=0;i<f2imgs.length;i++){
         if(i==0){
          continue;
         }
         f2imgs[i].style.left=f2mw+"px";
    }
   function f2move(){
       next2++;
       if(next2==f2imgs.length){next2=0;
       }
       f2imgs[next2].style.left=f2mw+"px";
       f2xys[n2].style.background="";
       f2xys[next2].style.background="#b61b1f";
       animate(f2imgs[n2],{left:-f2mw});
       animate(f2imgs[next2],{left:0},function(){flag=true;});
       n2=next2;
   }
   function f2movel(){
       next2--;
       if(next2<0){next2=f2imgs.length-1;
       }
       f2imgs[next2].style.left=-f2mw+"px";
       f2xys[n2].style.background="";
       f2xys[next2].style.background="#b61b1f";
       animate(f2imgs[n2],{left:f2mw});
       animate(f2imgs[next2],{left:0},function(){flag=true;});
       n2=next2;
   }

   // 3楼
  var f3center=$(".sjtxcen1")[0];
  var f3imgs=$("a",$(".sjtxcen1")[0]);
  var f3xys=$("li",$(".f3lu")[0]);
  var f3mw=parseInt(getStyle($(".sjtxcen1")[0],"width"));
  f3xys[0].style.background="#b61b1f";
  f3imgs[0].style.zIndex=10;
  var n3=0;
  var next3=0;
  var f3t=setInterval(f3move,3000);

//鼠标放上停止,,离开走
 f3center.onmouseover=function(){
    clearInterval(f3t);
  }
  f3center.onmouseout=function(){
    f3t=setInterval(f3move,3000);
  }

  //选项卡
  for(var i=0;i<f3xys.length;i++){
   f3xys[i].index=i;
   f3xys[i].onclick=function(){
    //next换成this.index
       if(n3>this.index){
         f3imgs[this.index].style.left=-f3mw+"px";
         animate(f3imgs[n3],{left:f3mw});
         animate(f3imgs[this.index],{left:0});
       }else if(n3<this.index){
         f3imgs[this.index].style.left=f3mw+"px";
         animate(f3imgs[n3],{left:-f3mw});
         animate(f3imgs[this.index],{left:0});
       }else{return;}
       f3xys[n3].style.background="";
       f3xys[this.index].style.background="#b61b1f";
       n3=this.index;
       next3=this.index;
     }
   }
//左右
  var f3banl=$(".f3banl")[0];
  var f3banr=$(".f3banr")[0];
  var flag=true;
  f3banl.onclick=function(){
    if(flag){
     f3movel()
     flag=false;
    }
  }
  f3banr.onclick=function(){
     if(flag){
     f3move()
     flag=false;
    }
  }

  // 移图
   for(var i=0;i<f3imgs.length;i++){
         if(i==0){
          continue;
         }
         f3imgs[i].style.left=f3mw+"px";
    }
   function f3move(){
       next3++;
       if(next3==f3imgs.length){next3=0;
       }
       f3imgs[next3].style.left=f3mw+"px";
       f3xys[n3].style.background="";
       f3xys[next3].style.background="#b61b1f";
       animate(f3imgs[n3],{left:-f3mw});
       animate(f3imgs[next3],{left:0},function(){flag=true;});
       n3=next3;
   }
   function f3movel(){
       next3--;
       if(next3<0){next3=f3imgs.length-1;
       }
       f3imgs[next3].style.left=-f3mw+"px";
       f3xys[n3].style.background="";
       f3xys[next3].style.background="#b61b1f";
       animate(f3imgs[n3],{left:f3mw});
       animate(f3imgs[next3],{left:0},function(){flag=true;});
       n3=next3;
   }



// 4楼
  var f4center=$(".jydqcen1")[0];
  var f4imgs=$("a",$(".jydqcen1")[0]);
  var f4xys=$("li",$(".f4lu")[0]);
  var f4mw=parseInt(getStyle($(".jydqcen1")[0],"width"));
  f4xys[0].style.background="#b61b1f";
  f4imgs[0].style.zIndex=10;
  var n4=0;
  var next4=0;
  var f4t=setInterval(f4move,3000);

//鼠标放上停止,,离开走
 f4center.onmouseover=function(){
    clearInterval(f4t);
  }
  f4center.onmouseout=function(){
    f4t=setInterval(f4move,3000);
  }

  //选项卡
  for(var i=0;i<f4xys.length;i++){
   f4xys[i].index=i;
   f4xys[i].onclick=function(){
    //next换成this.index
       if(n4>this.index){
         f4imgs[this.index].style.left=-f4mw+"px";
         animate(f4imgs[n4],{left:f4mw});
         animate(f4imgs[this.index],{left:0});
       }else if(n4<this.index){
         f4imgs[this.index].style.left=f4mw+"px";
         animate(f4imgs[n4],{left:-f4mw});
         animate(f4imgs[this.index],{left:0});
       }else{return;}
       f4xys[n4].style.background="";
       f4xys[this.index].style.background="#b61b1f";
       n4=this.index;
       next4=this.index;
     }
   }
//左右
  var f4banl=$(".f4banl")[0];
  var f4banr=$(".f4banr")[0];
  var flag=true;
  f4banl.onclick=function(){
    if(flag){
     f4movel()
     flag=false;
    }
  }
  f4banr.onclick=function(){
     if(flag){
     f4move()
     flag=false;
    }
  }

  // 移图
   for(var i=0;i<f4imgs.length;i++){
         if(i==0){
          continue;
         }
         f4imgs[i].style.left=f4mw+"px";
    }
   function f4move(){
       next4++;
       if(next4==f4imgs.length){next4=0;
       }
       f4imgs[next4].style.left=f4mw+"px";
       f4xys[n4].style.background="";
       f4xys[next4].style.background="#b61b1f";
       animate(f4imgs[n4],{left:-f4mw});
       animate(f4imgs[next4],{left:0},function(){flag=true;});
       n4=next4;
   }
   function f4movel(){
       next4--;
       if(next4<0){next4=f4imgs.length-1;
       }
       f4imgs[next4].style.left=-f4mw+"px";
       f4xys[n4].style.background="";
       f4xys[next4].style.background="#b61b1f";
       animate(f4imgs[n4],{left:f4mw});
       animate(f4imgs[next4],{left:0},function(){flag=true;});
       n4=next4;
   }

// 5楼
  var f5center=$(".dnsmcen1")[0];
  var f5imgs=$("a",$(".dnsmcen1")[0]);
  var f5xys=$("li",$(".f5lu")[0]);
  var f5mw=parseInt(getStyle($(".dnsmcen1")[0],"width"));
  f5xys[0].style.background="#b61b1f";
  f5imgs[0].style.zIndex=10;
  var n5=0;
  var next5=0;
  var f5t=setInterval(f5move,3000);

//鼠标放上停止,,离开走
 f5center.onmouseover=function(){
    clearInterval(f5t);
  }
  f5center.onmouseout=function(){
    f5t=setInterval(f5move,3000);
  }

  //选项卡
  for(var i=0;i<f5xys.length;i++){
   f5xys[i].index=i;
   f5xys[i].onclick=function(){
    //next换成this.index
       if(n5>this.index){
         f5imgs[this.index].style.left=-f5mw+"px";
         animate(f5imgs[n5],{left:f5mw});
         animate(f5imgs[this.index],{left:0});
       }else if(n5<this.index){
         f5imgs[this.index].style.left=f5mw+"px";
         animate(f5imgs[n5],{left:-f5mw});
         animate(f5imgs[this.index],{left:0});
       }else{return;}
       f5xys[n5].style.background="";
       f5xys[this.index].style.background="#b61b1f";
       n5=this.index;
       next5=this.index;
     }
   }
//左右
  var f5banl=$(".f5banl")[0];
  var f5banr=$(".f5banr")[0];
  var flag=true;
  f5banl.onclick=function(){
    if(flag){
     f5movel()
     flag=false;
    }
  }
  f5banr.onclick=function(){
     if(flag){
     f5move()
     flag=false;
    }
  }

  // 移图
   for(var i=0;i<f5imgs.length;i++){
         if(i==0){
          continue;
         }
         f5imgs[i].style.left=f5mw+"px";
    }
   function f5move(){
       next5++;
       if(next5==f5imgs.length){next5=0;
       }
       f5imgs[next5].style.left=f5mw+"px";
       f5xys[n5].style.background="";
       f5xys[next5].style.background="#b61b1f";
       animate(f5imgs[n5],{left:-f5mw});
       animate(f5imgs[next5],{left:0},function(){flag=true;});
       n5=next5;
   }
   function f5movel(){
       next5--;
       if(next5<0){next5=f5imgs.length-1;
       }
       f5imgs[next5].style.left=-f5mw+"px";
       f5xys[n5].style.background="";
       f5xys[next5].style.background="#b61b1f";
       animate(f5imgs[n5],{left:f5mw});
       animate(f5imgs[next5],{left:0},function(){flag=true;});
       n5=next5;
   }


// 6楼
  var f6center=$(".ydjsbotcen2")[0];
  var f6imgs=$(".f6gt",$(".ydjsbotcen2")[0]);
  var f6xys=$("li",$(".f6lu")[0]);
  var f6mw=parseInt(getStyle($(".ydjsbotcen2")[0],"width"));
  f6xys[0].style.background="#b61b1f";
  f6imgs[0].style.zIndex=10;
  var n6=0;
  var next6=0;
  var f6t=setInterval(f6move,3000);

//鼠标放上停止,,离开走
 f6center.onmouseover=function(){
    clearInterval(f6t);
  }
  f6center.onmouseout=function(){
    f6t=setInterval(f6move,3000);
  }

  //选项卡
  for(var i=0;i<f6xys.length;i++){
   f6xys[i].index=i;
   f6xys[i].onclick=function(){
    //next换成this.index
       if(n6>this.index){
         f6imgs[this.index].style.left=-f6mw+"px";
         animate(f6imgs[n6],{left:f6mw});
         animate(f6imgs[this.index],{left:0});
       }else if(n6<this.index){
         f6imgs[this.index].style.left=f6mw+"px";
         animate(f6imgs[n6],{left:-f6mw});
         animate(f6imgs[this.index],{left:0});
       }else{return;}
       f6xys[n6].style.background="";
       f6xys[this.index].style.background="#b61b1f";
       n6=this.index;
       next6=this.index;
     }
   }
//左右
  var f6banl=$(".f6banl")[0];
  var f6banr=$(".f6banr")[0];
  var flag=true;
  f6banl.onclick=function(){
    if(flag){
     f6movel()
     flag=false;
    }
  }
  f6banr.onclick=function(){
     if(flag){
     f6move()
     flag=false;
    }
  }

  // 移图
   for(var i=0;i<f6imgs.length;i++){
         if(i==0){
          continue;
         }
         f6imgs[i].style.left=f6mw+"px";
    }
   function f6move(){
       next6++;
       if(next6==f6imgs.length){next6=0;
       }
       f6imgs[next6].style.left=f6mw+"px";
       f6xys[n6].style.background="";
       f6xys[next6].style.background="#b61b1f";
       animate(f6imgs[n6],{left:-f6mw});
       animate(f6imgs[next6],{left:0},function(){flag=true;});
       n6=next6;
   }
   function f6movel(){
       next6--;
       if(next6<0){next6=f6imgs.length-1;
       }
       f6imgs[next6].style.left=-f6mw+"px";
       f6xys[n6].style.background="";
       f6xys[next6].style.background="#b61b1f";
       animate(f6imgs[n6],{left:f6mw});
       animate(f6imgs[next6],{left:0},function(){flag=true;});
       n6=next6;
   }





// 7楼以上

function autolb(obj,img,ul,banL,banr){
   var center=$(obj)[0];
   var imgs=$(img,$(obj)[0]);
   var xys=$("li",$(ul)[0]);
   var mw=parseInt(getStyle($(obj)[0],"width"));
   var banl=$(banL)[0];
   var banr=$(banr)[0];
   imgs[0].style.zIndex=10;
   xys[0].style.background="#b61b1f";
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
       xys[this.index].style.background="#b61b1f";
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
       xys[next].style.background="#b61b1f";
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
       xys[next].style.background="#b61b1f";
       animate(imgs[now],{left:mw});
       animate(imgs[next],{left:0},function(){flag=true;});
       now=next;
   }
}

autolb(".jjshbotcen2",".f7gt",".f7lu",".f7banl",".f7banr");


autolb(".mywjbotcen2",".f8gt",".f8lu",".f8banl",".f8banr");

autolb(".spbjbotcen2",".f9gt",".f9lu",".f9banl",".f9banr");


autolb(".f10gt","a",".f10lu",".f10banl",".f10banr");

autolb(".zcypcen1","a",".f11lu",".f11banl",".f11banr");

autolb(".shfwbotcenle1","a",".f12lu1",".f12banl1",".f12banr1");

autolb(".shfwbotcenri1","a",".f12lu2",".f12banl2",".f12banr2");


// 1楼

  

 function dxk(obj,xt,topzi,hiddens){
  var lei= $(topzi,$(obj)[0]);
  var fcbot=$(xt);
  var zi=$("a",$(lei));
  var hiddens=$(hiddens);
  fcbot[0].style.display="block";
  zi[0].className="hot";
  hiddens[0].style.display="block";
  for(var i=0;i<lei.length;i++){
    lei[i].index=i;
    lei[i].onmouseover=function(){
      for(var j=0;j<lei.length;j++){
        fcbot[j].style.display="none";
        zi[j].className="";
        hiddens[j].style.display="none";
        
      }
      fcbot[this.index].style.display="block";
      zi[this.index].className="hot";
      hiddens[this.index].style.display="block";
      
    }
  }

 }

dxk(".fzxbtopright",".f1xxk",".fzxbtopright1",".hiddens")
dxk(".ghmztopright",".f2xxk",".ghmztopright1",".hidden1")
dxk(".sjtxtopright",".f3xxk",".sjtxtopright1",".hidden2")
dxk(".jydqtopright",".f4xxk",".jydqtopright1",".hidden3")
dxk(".dnsmtopright",".f5xxk",".dnsmtopright1",".hidden4")
dxk(".ydjstopright",".f6xxk",".ydjstopright1",".hidden5")
dxk(".jjshtopright",".f7xxk",".jjshtopright1",".hidden6")
dxk(".mywjtopright",".f8xxk",".mywjtopright1",".hidden7")
dxk(".spbjtopright",".f9xxk",".spbjtopright1",".hidden8")
dxk(".tsyxtopright",".f10xxk",".tsyxtopright1",".hidden9")
dxk(".zcyptopright",".f11xxk",".zcyptopright1",".hidden10")




// guess   换一批效果

var Ext=$(".ext",$((".guessshang"),$("#guessyou"))[0])[0];
var ULl=$("ul",$((".guessxia"),$("#guessyou"))[0]);


ULl[0].style.display="block";
var ULlnow=0;
Ext.onclick=function(){
	ULlnow++;
	if(ULlnow>=ULl.length){
		ULlnow=0;
	}
	for(var i=0;i<ULl.length;i++){
		ULl[i].style.display="none";
	}
	  ULl[ULlnow].style.display="block";
}




// guess 线条效果
 
 var Gues=$("#guessyou");
 var II=$("i",$((".spacer"),$("#guessyou"))[0])[0];
    
    hover(Gues,Guesover,Guesout)
    function Guesover(){
      II.style.right=1210+"px";
      animate(II,{right:-1})
    }
    function Guesout(){
      return;  
    }







 //楼层
  var louceng=$(".louceng")[0];
  var num=$(".num");
  var num1=$(".num4");
  var num2=$(".num2");
  var floor_0=$(".floor_0");
  var lnow;
  var sflag=true;
  for(var i=0;i<floor_0.length;i++)
  {
    floor_0[i].h=floor_0[i].offsetTop;
  }
  window.onscroll=function(){ 
    if(sflag)
        {var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层

        if(floor_0[0].h<=obj.scrollTop+800)
        {
            louceng.style.display="block";
        }
        else 
        {
          louceng.style.display="none";

        }
        // 楼层显示

        for(var i=0;i<floor_0.length;i++)
        {    
          if(floor_0[i].h<=obj.scrollTop+200)
          {  
             for(var j=0;j<floor_0.length;j++)
            {
             num2[j].style.display="block";
             num1[j].style.display="none";
             num1[j].className="num4 num1"
              }
             num2[i].style.display="none";
             num1[i].style.display="block";
             num1[i].className="num4 num3";
             lnow=i;
          }       
        }
    }
}

 for(var i=0;i<num.length;i++)
    {   
      num[i].index=i;
      if(i<=num.length)
      {   
        if(this.index==lnow)
        {
          num[i].onmouseover=function(){
            num4[i].className="num4 num1"
          }
        }
        num[i].onmouseover=function(){
          num1[this.index].style.display="block";
          num2[this.index].style.display="none";
        }
        num[i].onmouseout=function(){
          num1[this.index].style.display="none";
          num2[this.index].style.display="block";
        }
        num[i].onclick=function(){
        animate(document.body,{scrollTop:floor_0[this.index].h-200},function(){sflag=true})
        animate(document.documentElement,{scrollTop:floor_0[this.index].h-200},function(){sflag=true})
        sflag=false;
      } 
          
        }
    }



    // 右下边
     
     var youlis=$("li",$(".youce")[0]);
    for(var i=0;i<youlis.length;i++){
        youlis[i].index=i;
        youlis[i].onmouseover=function(){
            this.style.backgroundColor="#c81623";
            animate($("div",this)[0],{left:-60},200);
        }
        youlis[i].onmouseout=function(){
            var th=this.index;
            animate($("div",this)[0],{left:0},200,function(){
              youlis[th].style.backgroundColor="#7a6e6e";
            })
        }
    }



    // 热门

    var ttdjbox=$(".ttdjrig",$(".ttdjbotrig")[0])[0];
    var ttdjtu=$(".ttdjrig1",$(".ttdjrig")[0]);
    var hh=parseInt(getStyle($(".ttdjrig1")[0],"height"));

     var ta=setInterval(rlb,3000);
     function rlb(){
      animate(ttdjbox,{top:-hh},function(){
        var first=firstChild(ttdjbox);
        ttdjbox.appendChild(first);
        ttdjbox.style.top=0;
      })
     }
     ttdjbox.onmouseover=function(){
          clearInterval(ta);
     }
     
     ttdjbox.onmouseout=function(){
       ta=setInterval(rlb,3000);
     }
      

      // function rlb(){
      //   var first=firstChild(ttdjbox);
      // var last=lastChild(ttdjbox);
      // ttdjbox.insertBefore(last,first);
      // ttdjbox.style.top=-hh+"px";
      // animate(ttdjbox,{top:0})
      // }
      
    


   










}