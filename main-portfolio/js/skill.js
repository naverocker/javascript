//scroll at top position
$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
});
//animation with loader
$(window).load(function() {
		// Animate loader off screen
		 setTimeout(function(){ $('.wrap-spin').fadeOut() }, 3000);
	});

// Animate the width of the barChart class
$(document).ready(function() {
  $('.graph-bar').each(function() {
     var dataWidth = $(this).data('value');
     $(this).css("width", dataWidth + "%");
  });
});