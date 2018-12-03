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
$("#radiobtn-country-no").change(function() {
	$(".pickCountry").addClass("visually-hidden");
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

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function myFunction3() {
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction4() {
    var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction5() {
    var x = document.getElementById("myDIV5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


var lastInserted = 0;
function showS1Info(rowId, claimType, memberState, registrationDate, endDate)
{
    // reset all open details elements (icon for expansion) and remove 'item selected' css
    $("details").removeAttr("open");
    $("td").removeClass("s1ParentCell");

    var tableObj = document.getElementById("mainTable");

    // if the s1 panel is already showing, remove it
    if (lastInserted!=0) tableObj.deleteRow(lastInserted);

    // build the s1 panel then insert it
    var rowContents = '<td></td><td colspan="7"><div class="panel panel-border-wide s1infoExpanded"><table class="table-font-xsmall"> <tr class="tRow"><td class="width20p bottomCell"><div class="dataHeader">Claim type</div>' + claimType + '</td> <td class="width20p bottomCell"><div class="dataHeader">Member state</div>' + memberState + '</td> <td class="width20p bottomCell"><div class="dataHeader ">Registration date</div>' + registrationDate + '</td></tr></tbody></table></div></td>'
    tableObj.insertRow(rowId).innerHTML = rowContents;

    // remove the bottom border for the cell above
    for(var cellCount = 0;cellCount < tableObj.rows[rowId-1].cells.length;cellCount++) { if(!tableObj.rows[rowId-1].cells[cellCount].isUndefined) tableObj.rows[rowId-1].cells[cellCount].className = "s1ParentCell" }

    // update the lastInserted index.
    lastInserted = rowId;
}

var lastInsertedUserInfo = 0;
function showExtraUserInfo(tableId, rowId, claimType, memberState, registrationDate, endDate)
{
    // reset all open details elements (icon for expansion) and remove 'item selected' css
    $("details").removeAttr("open");
    $("td").removeClass("s1ParentCell");

    var tableObj2 = document.getElementById(tableId);

    if (lastInsertedUserInfo!=0) tableObj2.deleteRow(lastInsertedUserInfo);     // if the s1 panel is already showing, remove it

    var rowContents = '<td></td><td colspan="7"><div class="panel panel-border-wide s1infoExpanded"><table class="table-font-xsmall"> <tr class="tRow"><td class="width20p bottomCell"><div class="dataHeader">Claim type</div>' + claimType + '</td> <td class="width20p bottomCell"><div class="dataHeader">Member state</div>' + memberState + '</td> <td class="width20p bottomCell"><div class="dataHeader ">Registration date</div>' + registrationDate + '</td></tr></tbody></table></div></td>'
    tableObj2.insertRow(rowId).innerHTML = rowContents;
    for(var cellCount = 0;cellCount < tableObj2.rows[rowId-1].cells.length;cellCount++) { if(!tableObj2.rows[rowId-1].cells[cellCount].isUndefined) tableObj2.rows[rowId-1].cells[cellCount].className = "s1ParentCell" }

    lastInsertedUserInfo = rowId;
}

var lastInsertedUserInfoPartial = 0;
function showExtraUserInfoPartial(tableId, rowId, claimType, memberState, registrationDate, endDate)
{
    $("details").removeAttr("open");
    $("td").removeClass("s1ParentCell");
    var tableObj2 = document.getElementById(tableId);
    if (lastInsertedUserInfoPartial!=0) tableObj2.deleteRow(lastInsertedUserInfoPartial);     // if the s1 panel is already showing, remove it
    var rowContents = '<td></td><td colspan="7"><div class="panel panel-border-wide s1infoExpanded"><table class="table-font-xsmall"> <tr class="tRow"><td class="width20p bottomCell"><div class="dataHeader">Claim type</div>' + claimType + '</td> <td class="width20p bottomCell"><div class="dataHeader">Member state</div>' + memberState + '</td> <td class="width20p bottomCell"><div class="dataHeader ">Registration date</div>' + registrationDate + '</td></tr></tbody></table></div></td>'
    tableObj2.insertRow(rowId).innerHTML = rowContents;
    for(var cellCount = 0;cellCount < tableObj2.rows[rowId-1].cells.length;cellCount++) { if(!tableObj2.rows[rowId-1].cells[cellCount].isUndefined) tableObj2.rows[rowId-1].cells[cellCount].className = "s1ParentCell" }

    lastInsertedUserInfoPartial = rowId;
}

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
