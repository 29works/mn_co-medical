$(function(){
    $("#acMenu dt").on("click", function() {
        $(this).next().slideToggle();
	$(this).toggleClass("active");
    });

$("#acMenu2 dt").on("click", function() {
        $(this).next().slideToggle();
	$(this).toggleClass("active");
    });

$("#acMenu3 dt").on("click", function() {
        $(this).next().slideToggle();
	$(this).toggleClass("active");
    });
});
function submit_frm() {
    $("#lc01").attr("checked", true )
    if(document.getElementById("text").value != "例：新宿区　介護士") {
        document.form["kw"].value = document.getElementById("text").value;
    } else {
        document.form["kw"].value = "";
    }
    for(cnt=0;cnt<document.form["ar[]"].length;cnt++){
        if (document.form["ar[]"][cnt].selected == false) {
            document.form["ar[]"][cnt].value = "";
        } else {
        }
    }
    url = "/sp" + urlFormat(document.form);
    location.href = url;
}


jQuery(function Slide($) {
	$("#TOPBX .srcboxbox .searchin .areabox .areain .areact .alnk").hide();
	$('#TOPBX .srcboxbox .searchin .areabox .areain .areact .plbx .btn a').click(function(){
	    if($(this).parents(".plbx").next(".alnk").is(":hidden")){
		    $(this).parents(".plbx").next(".alnk").slideDown(100);
		    $(this).html("<img src='/sp/images/re/dec_arw_bl_up.png' width='11' alt='arw'>");
		} else {
		    $(this).parents(".plbx").next(".alnk").slideUp(100);
		    $(this).html("<img src='/sp/images/re/dec_arw_bl_dwn.png' width='11' alt='arw'>");
		}
		return false;
	});
});

/* 20160421 NEWメニュー用js */
jQuery(function Slide($) {
	$("#Header .navbox").hide();
  //var scrollT = $(window).scrollTop();
  //console.log(scrollT);
var w = $(window).width();
var x = 896;
if (w >= x) {
} else {
  var headerH = $('#Header').outerHeight();
  $('body').css('padding-top', headerH);
  var windowheight = window.innerHeight;
  $('#sp_navbox').css('height', innerHeight);
  $(window).resize(function() {
    $('#sp_navbox').css('height', innerHeight);
  });
  var startPos = 0;
  $(window).scroll(function(){
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
      if($(window).scrollTop() >= 200) {
          $("#Header").css("top", "-" + headerH + "px");
      }
    } else {
      $("#Header").css("top", 0 + "px");
    }
    startPos = currentPos;
  });
};
	$('#Header .headin .btn .nav-opener').click(function(){
	    if($(this).parents(".headin").next(".navbox").is(":hidden")){
		    $(this).parents(".headin").next(".navbox").slideDown(100);
		    $(this).parents("#Header").next("#Grybox").fadeIn(100);
        //$('html, body').animate({scrollTop:scrollT});
		} else {
		    $(this).parents(".headin").next(".navbox").slideUp(100);
		    $(this).parents("#Header").next("#Grybox").fadeOut(100);
        //$('html, body').animate({scrollTop:scrollT});
		}
		return false;
	});
  $('#Grybox , .navbox .close > .btn').on({
    'click.global': function(){
      $(".navbox").slideUp(100);
      $('#Grybox').fadeOut(100);
      return false;
    }
  });
});
/* 20160421 end */
jQuery(function ($) {
    $('.re_search-btn span').click(function(){
        $(this).toggleClass("on");
	    if($(this).parents(".re_search-btn").next(".re_search-in").is(":hidden")){
		    $(this).parents(".re_search-btn").next(".re_search-in").fadeIn(100);
	    } else {
		    $(this).parents(".re_search-btn").next(".re_search-in").fadeOut(100);
		}
        return false;
    });
});
/*read 20210511*/
jQuery(function ($) {
    $('.ik-m-ofrs__advisor').click(function(){
        $(".ik-m-ofrs__advisor").toggleClass("is-on");
        return false;
    });
});