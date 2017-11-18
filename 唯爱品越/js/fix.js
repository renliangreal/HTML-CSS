// JavaScript Document
window.onscroll=function(){
			var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
			
			if(scrollTop>10){
				document.getElementById('nav').style.position ='fixed';
			}else{
				document.getElementById('nav').style.position ='relative';
			}
}/*
		document.getElementById('bottom').onclick=function(){
			var id=setInterval(function (){
				document.body.scrollTop-=100;
				document.documentElement.scrollTop-=100;
				if((document.body.scrollTop||document.documentElement.scrollTop)===0){
					clearInterval(id);
				}
			},30)	
		}*/