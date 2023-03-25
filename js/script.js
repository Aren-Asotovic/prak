$(document).ready(function() {
    $("#simpleBlock").click( function() {
        console.log("Вы кликнули на элементе с ID='simpleBlock'");
    })

    $(".pane .delete").click(function(){
		$(this).parents(".pane").animate({ opacity: 'hide' }, "slow");
	});

    $(".run").click(function(){
	
		$("#box").animate({opacity: "0.1", left: "+=400"}, 1200)
		.animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
		.animate({opacity: "1", left: "0", height: "100", width: "100"}, "slow")
		.animate({top: "0"}, "fast")
		.slideUp()
		.slideDown("slow")
		return false;
	});

    $(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();

	$(".accordion h3").click(function(){
		$(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});



    $(".accordion2 h3").eq(2).addClass("active");
	$(".accordion2 p").eq(2).show();

	$(".accordion2 h3").click(function(){
		$(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});

    $(".menu a").hover(function() {
		$(this).next("em").stop(true,true)
                          .animate({opacity: "show", top: "-75"}, "slow");
	}, function() {
		$(this).next("em").stop(true,true)
                          .animate({opacity: "hide", top: "-85"}, "fast");
	});


    $(".menu2 a").append("<em></em>");
    $(".menu2 a").hover(function() {
        $(this).find("em").animate({opacity: "show", top: "-75"}, "slow");
        var hoverText = $(this).attr("title");
        $(this).find("em").text(hoverText);
    }, function() {
        $(this).find("em").animate({opacity: "hide", top: "-85"}, "fast");
    });



    $(".pane-list li").click(function(){
        window.location=$(this).find("a").attr("href");return false;
    });
    



    //hide message_body after the first one
    $(".message_list .message_body:gt(0)").hide();

    //hide message li after the 5th
    $(".message_list li:gt(4)").hide();

    //toggle message_body
    $(".message_head").click(function(){
        $(this).next(".message_body").slideToggle(500)
        return false;
    });

    //collapse all messages
    $(".collpase_all_message").click(function(){
        $(".message_body").slideUp(500)
        return false;
    });

    //show all messages
    $(".show_all_message").click(function(){
        $(this).hide()
        $(".show_recent_only").show()
        $(".message_list li:gt(4)").slideDown()
        return false;
    });

    //show recent messages only
    $(".show_recent_only").click(function(){
        $(this).hide()
        $(".show_all_message").show()
        $(".message_list li:gt(4)").slideUp()
        return false;
    });




    $("h2").append('<em></em>')

	$(".thumbs a").click(function(){
	
		var largePath = $(this).attr("href");
		var largeAlt = $(this).attr("title");
		
		$("#largeImg").attr({ src: largePath, alt: largeAlt });
		
		$("h2 em").html(" (" + largeAlt + ")"); return false;
	});


});
