'use strict';

(function(module) {
  const aboutController = {};
  function aboutController.init = function() {
    $('main').hide();
    $('#about').show();
  }
  //[x] DONE: Define a function that hides all main section elements, and then reveals just the #about section:


  module.aboutController = aboutController;
})(window);
