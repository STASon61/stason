// Call & init
$(document).ready(function() {
  $('.ba-slider').each(function() {
    var slider = $(this);
    var frame_1 = slider.find('#frame-1');
    var frame_2 = slider.find('#frame-2');

    frame_1.css('width', slider.width() + 'px');
    frame_2.css('width', slider.width() + 'px');

    var max_height = 0;

    if (frame_1.height() > frame_2.height()) {
      max_height = frame_1.height();
    } else {
      max_height = frame_2.height();
    }

    slider.css('height', max_height + 'px');

    // Bind dragging events
    drags(slider.find('.handle'), slider.find('.resize'), slider);
  });
});

// Update sliders on resize.
$(window).resize(function() {
  $('.ba-slider').each(function() {
    var slider = $(this);
    var frame_1 = slider.find('#frame-1');
    var frame_2 = slider.find('#frame-2');

    frame_1.css('width', slider.width() + 'px');
    frame_2.css('width', slider.width() + 'px');

    var max_height = 0;

    if (frame_1.height() > frame_2.height()) {
      max_height = frame_1.height();
    } else {
      max_height = frame_2.height();
    }

    slider.css('height', max_height + 'px');

    // Bind dragging events
    drags(slider.find('.handle'), slider.find('.resize'), slider);
  });
});

function drags(dragElement, resizeElement, container) {

  // Initialize the dragging event on mousedown.
  dragElement.on('mousedown touchstart', function(e) {

    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');

    // Check if it's a mouse or touch event and pass along the correct value
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

    // Get the initial position
    var dragWidth = dragElement.outerWidth(),
      posX = dragElement.offset().left + dragWidth - startX,
      containerOffset = container.offset().left,
      containerWidth = container.outerWidth();

    // Set limits
    minLeft = containerOffset + 10;
    maxLeft = containerOffset + containerWidth - dragWidth - 10;

    // Calculate the dragging distance on mousemove.
    dragElement.parents().on("mousemove touchmove", function(e) {

      // Check if it's a mouse or touch event and pass along the correct value
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

      leftValue = moveX + posX - dragWidth;

      // Prevent going off limits
      if (leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }

      // Translate the handle's left value to masked divs width.
      widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

      // Set the new values for the slider and the handle. 
      // Bind mouseup events to stop dragging.
      $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function() {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function() {
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(e) {
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
  });
}