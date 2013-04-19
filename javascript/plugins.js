/**
 * Sticky Menu is a super small jQuery plugin to make a menu sticky/dockable/pinable.
 * @author Rory Hardy [GneatGeek]
 * @param {Object} $ - jQuery
 * @param {Object} window
 */

(function($, window) {
	/**
	 * @namespace fn.stickyMenu
	 * @method stickyMenu
	 * @param  {Object} cname - Class name to append to the object
	 * @return {Object} this - Maintains Chainability
	 */

	$.fn.stickyMenu = function(cname) {
		var pinned;       // Boolean Value to increase efficiency due to window.scroll's frequent execution
		var menu  = this; // The value of this will change inside the bind function so we have to store it.
		var start = menu.offset().top;                      // Initial position of your menu
		var id    = 'scroll.stickymenu-' + menu.attr('id'); // We need to namespace all functions.

		if (!cname) // Default CSS class to sticky if the user didn't specify their own
			var cname = "sticky";

		$(window).bind(id, function() {
			if (pinned) {
				if ($(this).scrollTop() <= start) {
					menu.toggleClass(cname);
					pinned = false;
				}
			} else if ($(this).scrollTop() > start) {
				menu.toggleClass(cname);
				pinned = true;
			}
		});

		return this;
	};
})(jQuery, window);