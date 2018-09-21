/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

// another-pension
$("#radiobtn-country-yes").change(function() {
	$(".pickCountry").removeClass("visually-hidden");
});

// contact3rd page
$("#radiobtn-email").change(function() {
	$(".show-email").removeClass("visually-hidden");
  $(".show-post").addClass("visually-hidden");
});

$("#radiobtn-post").change(function() {
	$(".show-post").removeClass("visually-hidden");
  $(".show-email").addClass("visually-hidden");
});

// Show Dialog

function showDialog() {
  if ($('.dialog').length > 0) {
    
    var dialogData = {
      lastFocus: null
    };
    
    $('a[data-toggle=dialog]').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var anchor = $(this);
      var data = '#' + anchor.attr('data-target');
      openDialog(data, anchor); // Pass data value into function
    });

    // Open dialog
    function openDialog(data, anchor) {
      dialogData.lastFocus = anchor;
      var dialog = $(data);
      dialog.attr('aria-hidden', 'false')
      .find('.dialog-content').focus()
      .attr('tabindex', '-1');
      // dialog.trap();
    }

    // Close dialog only if visible
    function closeDialog() {
      var dialog = $('.dialog[aria-hidden=false]');
      dialog.attr('aria-hidden', 'true')
      .find('.dialog-content').blur()
      .attr('tabindex', '0');
      // dialog.untrap();
      dialogData.lastFocus.focus();
      dialogData.lastFocus.blur();
    }

    // Stop bubbling
    $('.dialog-holder').on('click', function(e) {
      e.stopPropagation();
    });

    $('.dialog-close').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeDialog();
    });

    $('.dialog-cancel').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeDialog();
    });

    // Document binding events
    $(document).bind({
      click: function(e) {
        closeDialog();
      },
      keyup: function(e) {
        if (e.keyCode == 27) {
          closeDialog();
        }
      }
    });
  }
}

// Document ready
(function() {
  showDialog();
})();