$(function(){
	$('.ia-instructions-trigger').on('click', function(e){
		e.preventDefault();
		if(!($(this).hasClass('is-active'))){
			$('.ia-instructions-trigger').removeClass('is-active');
			$('.ia-instructions').removeClass('is-visible');
			$(this).addClass('is-active');
			$(this).siblings('.ia-instructions').addClass('is-visible');
		} else {
		}
	});

	$('.ia-faq-trigger').on('click', function(e){
		$('.ia-faq').show();
	})
})