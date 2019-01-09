$(document).ready(function(){
	$(".centerrit_twe_cen > ul > li").mouseover(function(){
		$(".centerrit_twe_cen > ul > li > a").removeClass('on');
		$(".centcencen").hide();
		$(this).children('a').nextAll('div').show();
		$(this).children('a').addClass('on');
	});
	$(".centerrit_twe_cen > ul > li > a").focus(function(){
		$(".centerrit_twe_cen > ul > li > a").removeClass('on');
		$(".centcencen").hide();
		$(this).nextAll('div').show();
		$(this).addClass('on');
	});
	$(".headerbom_cen_rit > ul > li > a").focus(function(){
		$(".headerbom_cen_rit > ul > li > a").removeClass('on');
		$(this).addClass('on');
	});

	$(".sub_menu1 > li > a").click(function(){
		var num=$(this).parent("li").index();
		var news=num+1;
		$(".intro").css({display:"none"});
		$(".sub_menu1 > li").removeClass("on");
		$(".sub_menu1 > li > a").removeClass("on");
		$(this).parent().parent().parent().parent().nextAll("div").children(".sub_bu_con"+news).css({display:"block"});
		$(this).parent("li").addClass("on");
		$(this).addClass("on");
	});

	$(".han_faq_question").click(function(){
		if ( $(this).next('div').hasClass('on') ){
				$(this).next('div').removeClass('on');
		}else{
				$(this).next('div').addClass('on');
		}

	});

	$(".sub26_popup_open").click(function(){
		$(".sub26_popup_bg").css({display:"block"});
	});

	$(".sub26_popup_close").click(function(){
		$(".sub26_popup_bg").css({display:"none"});
	});

	$(".sub26_popup_day_open").click(function(){
		$(".sub26_popup_day").css({display:"block"});
	});

	$(".sub26_popup_day_close").click(function(){
		$(".sub26_popup_day").css({display:"none"});
	});

	$(".sub26_3_popup_open").click(function(){
		$(".sub26_3_popup").css({display:"block"});
	});

	$(".sub26_3_popup_close").click(function(){
		$(".sub26_3_popup").css({display:"none"});
	});

	$(".sub46_tab td").click(function(){
		$(".sub46_popup").css({display:"block"});
	});

	$(".sub46_popup_close").click(function(){
		$(".sub46_popup").css({display:"none"});
	});


	$(".headerbom_cen_rit > ul > li > a").mouseover(function(){
		$(this).next('.menu_depth2').slideDown();
	});
	$(".headerbom_cen_rit > ul > li").mouseleave(function(){
		$(this).children('.menu_depth2').stop(true,true).slideUp();
	});



});