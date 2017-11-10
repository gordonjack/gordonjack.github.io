$(document).ready(function() {

	$(".premiere-more").click(function(){

		if ($("#premiere-section-2").hasClass("premiere-section-2-inactive")){
			$("#premiere-section-2").addClass("premiere-section-2-active");
			$("#premiere-section-2").removeClass("premiere-section-2-inactive");
			$("#premiere-section-2").css("display", "block");
		}
		else {
			$("#premiere-section-2").addClass("premiere-section-2-inactive");
			$("#premiere-section-2").removeClass("premiere-section-2-active");
			$("#premiere-section-2").css("display", "none");
		}
	})
	
	$(".donate-button").click(function(){

			if ($(this).is("#cash-but")) {
					
					$("#cash").css("display", "inline-block");
					$("#online").css("display", "none");
					$("#question").css("display", "none");
				} 
			else if ($(this).is("#online-but")) {
					$("#cash").css("display", "none");
					$("#online").css("display", "inline-block");
					$("#question").css("display", "none");
				} 
			else {
					$("#cash").css("display", "none");
					$("#online").css("display", "none");
					$("#question").css("display", "inline-block");
			}

		

		})

	$("#trailer-box").click(function(){

        $('html, body').animate({
            scrollTop: $('#trailer-section').position().top },
            1000
        );
    })

	
	$("#premiere-box").click(function(){

		$('html, body').animate({
            scrollTop: $('#premiere-section').position().top },
            1000
        );

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

		})


		