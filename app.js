(function($) {
	function isEmail(email) {
  	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	return regex.test(email);
	}

	$(document).ready(function() {
		$('.form').submit(function(e) {
			e.preventDefault();
			$('.has-error').removeClass('has-error');
			$('.error').remove();
			if( isEmail($('input[name="email"]').val()) === false ) {
				$('input[name="email"]').addClass('has-error');
				$('input[name="email"]').parent().append('<p class="error">Please provide a valid email address</p>')
			}
		});
	});
})(jQuery);