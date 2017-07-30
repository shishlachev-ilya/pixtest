$(document).ready(function() {
	
/* slider */

	$('.headerSlider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplay: true,
  	autoplaySpeed: 3000,

	});

	$('.boxSlider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
  	autoplaySpeed: 3000,
  	responsive: [
  		{
  			breakpoint: 991,
  			settings: {
  				slidesToShow: 1
  			}
  		},
  		{
  			breakpoint: 767,
  			settings: {
  				slidesToShow: 1
  			}
  		}
  	]
	});

/* map */

	function initMap() {
	
		var centerLatLng = new google.maps.LatLng(52.37207306, 4.90052482);

		var mapOptions = {
				center: centerLatLng,
				scrollwheel: false,
				zoom: 14
		};

		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	}

	google.maps.event.addDomListener(window, "load", initMap);

/* validation form */

	$('.form').validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true,
				minlength: 10
			}
		},
		errorClass: 'error-form',
		validClass: 'success-form',
		submitHandler: function(){
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function(){
				alert('Send mail');
			}).fail(function(){
				alert('Mail not send');
			});
		}
	});

});