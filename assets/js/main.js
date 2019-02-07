jQuery(document).ready(function($){
	$('#clock').countdown('2019/06/01', function(event) {
		  $(this).html(event.strftime('<span class="countdown-wrap"><span class="single-countdown-item">%D <br/><span>days</span></span><span class="single-countdown-item">%H <br/><span>hours</span></span><span class="single-countdown-item">%M <br/><span>minutes</span></span><span class="single-countdown-item">%S <br/><span>seconds</span></span></span>'));
		});
});
