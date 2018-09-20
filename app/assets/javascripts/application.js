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

<!-- another-pension -->
$("#radiobtn-country-yes").change(function() {
	$(".pickCountry").removeClass("visually-hidden");
});

<!-- contact3rd page -->
$("#radiobtn-email").change(function() {
	$(".show-email").removeClass("visually-hidden");
  $(".show-post").addClass("visually-hidden");
});

$("#radiobtn-post").change(function() {
	$(".show-post").removeClass("visually-hidden");
  $(".show-email").addClass("visually-hidden");
});
