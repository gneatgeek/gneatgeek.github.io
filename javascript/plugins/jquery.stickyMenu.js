/**
 * Sticky Menu is a super small jQuery plugin to make a menu sticky/dockable/pinable.
 * 
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
    var pinned,
        menu  = this,
        start = menu.offset().top;

    if ( !cname )
      cname = 'sticky';

    $(window).bind('scroll.stickymenu-' + menu.attr('id'), function() {
      if ( pinned ) {
        if ( $(this).scrollTop() <= start ) {
          menu.toggleClass(cname);
          pinned = false;
        }
      } else if ( $(this).scrollTop() > start ) {
        menu.toggleClass(cname);
        pinned = true;
      }
    });

    return this;
  };
})(jQuery, window);
