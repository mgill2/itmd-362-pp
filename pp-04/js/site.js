// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  WebFontConfig = {
  google: {
    families: ['Baloo', 'Baloo:cursive']
  }
};
  
  WebFontConfig = {
  google: {
    families: ['PT Sans', 'PT Sans:sans-serif']
  }
};
  
});
