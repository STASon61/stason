var $rus = $('.rus');
		var $eng = $('.eng');
		var $frame_1 = $('#frame-1');
		var $frame_2 = $('#frame-2');
		var $resize = $('.resize');
		var $ul = $('ul');
		
		
		$eng.on('click', function() {
			$frame_2.css('display', 'block');
			$resize.css('display', 'block');
			$resize.css('width', '100%');
			$frame_1.css('display', 'none');
			$rus.removeClass('lang-color');
			$eng.addClass('lang-color');
		})
		
		$rus.on('click', function() {
			$frame_2.css('display', 'none');
			$resize.css('display', 'none');
			$frame_1.css('display', 'block');
			$rus.addClass('lang-color');
			$eng.removeClass('lang-color');
		})