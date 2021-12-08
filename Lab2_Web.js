$(function(){
	//Завдання 1
 //$('h1').fadeOut(3000).fadeIn(3000);
 
 //Завдання 2
 //$('.features-grids img').fadeTo(0, 0.05).fadeTo(7000, 1);
 
 //Завдання 3
 //$('.head h3').slideUp(2000).slideDown(1000);
 
  //Завдання 4
/*var blog_post = $('.col-md-6.blog-time-line-right .blog-post');
var h4 = $(blog_post).find('h4');

$(h4).fadeOut(1500);
$(blog_post).slideUp(2000);

$(blog_post).slideDown(3000);
$(h4).fadeIn(6000);
*/
  //Завдання 5
 /* function zr(name_obj,t1,t2){
	  $(name_obj).slideUp(t1).slideDown(t2);
}
zr('.head p',2000,4000);
zr('#img_1',2000,4000);
*/
//Завдання 6
/*function prozor(name_obj,time,opacity){
	var obj=$(name_obj);
	$(obj).fadeTo(time,opacity);
	$(obj).slideUp(time);
	$(obj).slideDown(time);
	$(obj).fadeTo(time,1);
}
prozor('#img_4',2000,0.2);
prozor('.head p',3000,0);
prozor('.top-nav li',4000,0.7);
*/
//Завдання 7
/*$('.top-nav ul').hide(3000, function(){
       alert("Меню було сховано");
    });
  */ 
   //Завдання 8
  /*
        function zr(name_obj,t1,t2){
	 $(name_obj).slideUp(t1*1000).slideDown(t2*1000);
}
function prozor(name_obj,time,opacity){
	var obj=$(name_obj);
	var time_s=$(time*1000);
	$(obj).fadeTo(time_s,opacity);
	$(obj).slideUp(time_s);
	$(obj).slideDown(time_s);
	$(obj).fadeTo(time_s,1);
}
$('.header .container').slideUp(3000, function(){
	zr(this,1,3);
	prozor(this,1,0.7);
	});
	*/
})
;