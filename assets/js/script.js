$(document).ready(function() {

	$(".premiere-more").click(function(){

		if ($("#premiere-section-2").hasClass("premiere-section-2-inactive")){
			$("#premiere-section-2").fadeIn(2000).addClass("premiere-section-2-active");
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
					
					$("#cash").fadeIn(1000).css("display", "inline-block");
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



//(When the user clicks on an anchor tag)
//remove the no scroll class on the body
//animate the html and body tags using the above function
//Do the following code after a delay of 0.3 seconds:
//Remove the active class from the sidebar container
//Remove the active class from the sidebar button
//Remove the active class from the page wrapper
//return false

$('a').click(function(){
	$('html, body').animate({
	scrollTop: $( $.attr(this, 'href')).offset().top
	}, 300);
	$(".sidebar-container").delay(1000).removeClass("sidebar-active");
	$(".sidebar-button").delay(1000).removeClass("button-active");
	return false;
})

		})


		