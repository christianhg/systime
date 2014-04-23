// Here is our Systime JS
$( document ).ready(function() {
	// Systime JS
	$( "#tabs" ).tabs();
	// index planets image transform
	$('.img-index-transform-js').click(function(){
		$(this).attr('src',"assets/img/planets_index_2.png");
		$(this).click(function(){
			$(location).attr('href','chapters.html');
		})
	})
	// index planets image transform
	$('.img-chapters-transform-js').click(function(){
		$(this).attr('src',"assets/img/emne2.png");
		$(this).click(function(){
			$(location).attr('href','subchapters.html');
		})
	})
	// index mobile planets image transform
	$('.img-index-mobile-transform-js').click(function(){
		$(this).attr('src',"assets/img/planets_index_mobile2.png");
		$(this).click(function(){
			$(location).attr('href','subchapters.html');
		})
	})
});