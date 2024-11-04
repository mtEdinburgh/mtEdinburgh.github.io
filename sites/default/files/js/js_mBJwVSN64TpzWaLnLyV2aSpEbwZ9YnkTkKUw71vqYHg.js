(function ($) {
    'use strict';
    Drupal.behaviors.ACChangeEnterBehavior = {
        attach: function (context, settings) {
            $('input.form-autocomplete', context).once('ac-change-enter-behavior', function() {
                $(this).keypress(function(e) {
                    var ac = $('#autocomplete');
                    if (e.keyCode == 13 && typeof ac[0] != 'undefined') {
                        e.preventDefault();
                        ac.each(function () {
                            if(this.owner.selected == false){
                                this.owner.selectDown();
                            }
                            this.owner.hidePopup();
                        });
                        $(this).trigger('change');
                    }
                });
            });
        }
    };
}(jQuery));
;
/**
 * Add Google Tag Manager with a container ID dependent on cookie settings.
 */

(function () {
  'use strict';

  if (window.uoe_gdpr.default_ids) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    if (typeof EdGEL !== 'undefined' && EdGEL.Consent) {
      document.addEventListener('changed.uoe.consent', function (event) {
        var containers = window.uoe_gdpr.default_ids.split(/\s*,\s*/);
        var overrides = window.uoe_gdpr.overrides;
        var allowed = event.allowedList;

        if (allowed && overrides.hasOwnProperty(allowed)) {
          containers = overrides[allowed].split(/\s*,\s*/);
        }

        var f = document.getElementsByTagName('script')[0];
        for (var i = 0; i < containers.length; i++) {
          var container = containers[i];
          var j = document.createElement('script');
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + container;
          f.parentNode.insertBefore(j, f);
        }
      });
    }
    else {
      var containers = window.uoe_gdpr.default_ids.split(/\s*,\s*/);
      var f = document.getElementsByTagName('script')[0];
      for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        var j = document.createElement('script');
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + container;
        f.parentNode.insertBefore(j, f);
      }
    }

    if (window.uoe_gdpr.localise_consent) {
      var hostname = window.location.hostname;
      EdGEL.Consent.Default.necessaryUrl = EdGEL.Consent.Default.necessaryUrl.replace('www.ed.ac.uk', hostname);
      EdGEL.Consent.Default.performanceUrl = EdGEL.Consent.Default.performanceUrl.replace('www.ed.ac.uk', hostname);
      EdGEL.Consent.Default.advertsUrl = EdGEL.Consent.Default.advertsUrl.replace('www.ed.ac.uk', hostname);
      EdGEL.Consent.Default.cookieDomain = hostname;
    }
  }

})();
;
(function($) {

Drupal.behaviors.webform_steps = {};
Drupal.behaviors.webform_steps.attach = function(context, settings) {

$('.webform-client-form', context).each(function() {
  var $form = $(this);
  var $steps = $form.find('.webform-progressbar .webform-progressbar-page');
  $form.find('.webform-steps-buttons .step-button').each(function(i) {
    var $button = $(this);
    if ($button.is(':enabled')) {
      $($steps[i]).click(function(event) {
        $button.click();
      }).addClass('clickable').css('cursor', 'pointer');
    }
  });
});

}
})(jQuery);
;
