$(document).ready(function() {
 // jQuery Function Number #1
	$(".premiere-more").click(function(){

		if ($("#premiere-section-2").hasClass("premiere-section-2-inactive")){
			$("#premiere-section-2").fadeIn(2000).addClass("premiere-section-2-active");
			 // jQuery Function Number #2
			$("#premiere-section-2").removeClass("premiere-section-2-inactive");
			$("#premiere-section-2").css("display", "block");
		}
		else {
			 // jQuery Function Number #3
			$("#premiere-section-2").addClass("premiere-section-2-inactive");
			$("#premiere-section-2").removeClass("premiere-section-2-active");
			$("#premiere-section-2").css("display", "none");
		}
	})
	
	$(".donate-button").click(function(){

			if ($(this).is("#cash-but")) {
					 // jQuery Function Number #4
					$("#cash").fadeIn(1000).css("display", "inline-block");
					 // jQuery Function Number #5
					$("#online").fadeOut(1000).css("display", "none");
					$("#question").fadeOut(1000).css("display", "none");
				} 
			else if ($(this).is("#online-but")) {
					$("#cash").fadeOut(1000).css("display", "none");
					$("#online").fadeIn(1000).css("display", "inline-block");
					$("#question").fadeOut(1000).css("display", "none");
				} 
			else {
					$("#cash").fadeOut(1000).css("display", "none");
					$("#online").fadeOut(1000).css("display", "none");
					$("#question").fadeIn(1000).css("display", "inline-block");
			}

		

		})

	$("#trailer-box").click(function(){

        $('html, body').animate({
        	 // jQuery Function Number #6
            scrollTop: $('#trailer-section').position().top -20},
            1000
        );
    })

	
	$("#premiere-box").click(function(){

		$('html, body').animate({
            scrollTop: $('#premiere-section').position().top -20},
            1000
        );

	})
	$("#film-box").click(function(){

		window.location = "watch.html";
	})
	$("#premiere-box-2").click(function(){

		window.location = "index.html#premiere-section";
	})
	$("#backtohome-box").click(function(){

		window.location = "index.html";
	})

	var text = ["facebook.com/taborrowing", "instagram.com/taborrowing", "twitter.com/taborrowing"];
	var counter = 0;
	var elem = document.getElementById("changeText");
	setInterval(change, 3000);

	function change() {
	  elem.innerHTML = text[counter];
	  counter++;
	  if (counter >= text.length) {
	    counter = 0;
	  }
	}

	$('#sidebar-button').click(function() {
  
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");

  }
    else {
    $('#sidebar-button').addClass('button-active');
    $('.sidebar-container').addClass('sidebar-active');
  }

  })
 
 $('.page-wrapper').click(function(){
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
 })

$('a').click(function(){
	$('html, body').animate({
	scrollTop: $( $.attr(this, 'href')).offset().top -20
	}, 300);
	$("#sidebar-button").removeClass("button-active");
	$(".sidebar-container").delay(1000).removeClass("sidebar-active");
	return false;
})

$(".event-box").hover(function(){

	if ($(this).hasClass("dogs")) {
      	$(this).removeClass("dogs");
		$(this).addClass("event-box-h");
        $(this).find('.event-box-text-box').removeClass('event-box-text-box-norm').addClass('event-box-text-box-h');
        $(this).find('.event-box-title').removeClass('event-box-title-norm').addClass('event-box-title-h');
        $(this).find('.event-box-date').removeClass('event-box-date-norm').addClass('event-box-date-h');
        $(this).find('.event-box-photo').css("display", "none");
        $(this).find('.event-box-details').css("display", "inline-block");

  }

  	else{
  		$(this).removeClass("event-box-h");
		$(this).addClass("dogs");
        $(this).find('.event-box-text-box').removeClass('event-box-text-box-h').addClass('event-box-text-box-norm');
        $(this).find('.event-box-title').removeClass('event-box-title-h').addClass('event-box-title-norm');
        $(this).find('.event-box-date').removeClass('event-box-date-h').addClass('event-box-date-norm');
        $(this).find('.event-box-photo').css("display", "");
        $(this).find('.event-box-details').css("display", "none");
    }

		})

$('#home-section').waypoint(function() {
    $("#menu1").addClass("current");
    $("#menu10,#menu2,#menu3,#menu5,#menu8,#menu9").removeClass("current");
});
$('#synopsis-section').waypoint(function() {
    $("#menu10").addClass("current");
    $("#menu1,#menu2,#menu3,#menu5,#menu8,#menu9").removeClass("current");
});
$('#trailer-section').waypoint(function() {
    $("#menu2").addClass("current");
    $("#menu10,#menu1,#menu3,#menu5,#menu8,#menu9").removeClass("current");
});
$('#premiere-section').waypoint(function() {
    $("#menu3").addClass("current");
    $("#menu10,#menu2,#menu1,#menu5,#menu8,#menu9").removeClass("current");
});
$('#filmmaker-section').waypoint(function() {
    $("#menu5").addClass("current");
    $("#menu10,#menu2,#menu3,#menu1,#menu8,#menu9").removeClass("current");
});
$('#donate-section').waypoint(function() {
    $("#menu8").addClass("current");
    $("#menu10,#menu2,#menu3,#menu5,#menu9,#menu1").removeClass("current");
})
$('#contact-section').waypoint(function() {
    $("#menu9").addClass("current");
    $("#menu10,#menu2,#menu3,#menu5,#menu8,#menu1").removeClass("current");
});

//$("#home-section").waypoint(function() {
//	$("#menu1").css("color","blue");
//})


})


		