// ES6 or Vanilla JavaScript

if(document.querySelector('#other-location-picker')) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: document.querySelector('#other-location-picker')
    })
  }
  
  if(document.querySelector('#eu-location-picker')) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: document.querySelector('#eu-location-picker')
    })
  }
  
  
  if(document.querySelector('#location-picker-1')) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: document.querySelector('#location-picker-1')
    })
  }


      //// Select Countries List (ADD / REMOVE NEW SELECT tags for each conditional checkbox input) ////

      const countrySelects = document.querySelectorAll('.autocomplete-country');

            countrySelects.forEach(function(select) {
                accessibleAutocomplete.enhanceSelectElement({
                    selectElement: select    
                })
            });

      /// EU

      var euCountriesRT = [
        "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czechia (Czech Republic)",
        "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary",
        "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxemburg",
        "Malta", "Netherlands", "Norway", "Poland", "Portugal",
        "Romania", "Slovakia", "Slovenia",
        "Spain", "Sweden", "Switzerland"
      ]

      function addInputEURT(el){
        var newFieldEURT = document.createElement('div');

        // Count current amount of inputs in section
        var inputCountEURT = el.closest('div').getElementsByTagName('select').length;
        console.log(inputCountEURT);

        // Create ID for new select we're going to add
        var newSelectIDEURT = `${el.previousElementSibling.className}-${inputCountEURT}`;

        newFieldEURT.innerHTML = `<br><div class="row"><label style="text-align: left;" class='nhsuk-label column' for='${newSelectIDEURT}'>Country name</label><a style="text-align: right; float: right; " class="column" href='#' type='button' value='-' onClick='return removeInputEURT(this);'>Remove</a></div><select id='${newSelectIDEURT}' name='myInputsEURT[]' type='text'><option value=''></option></select></div>`;
        document.getElementById('appendableEURT').appendChild(newFieldEURT);

        // Use ID of new select to initilise autcomplete for our new select
        accessibleAutocomplete.enhanceSelectElement({
          selectElement: document.querySelector(`#${newSelectIDEURT}`),
          source: euCountriesRT
        })

          return false;
        }

      function removeInputEURT(btn){
        btn.parentNode.parentNode.remove();
        return false;
      }

      
      /// Other

      var worldCountriesRT = [
        "Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra",
        "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba",
        "Australia", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
        "Belarus", "Belize", "Benin", "Bermuda",
        "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil",
        "British Indian Ocean Territory", "Brunei Darussalam",
        "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
        "Cayman Islands", "Central African Republic", "Chad", "Chile", "China",
        "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo",
        "Congo (Democratic Republic of the)", "Cook Islands", "Costa Rica", "Cote d'Ivoire",
        "Cuba", "Curacao", "Djibouti",
        "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands",
        "Fiji", "French Guiana", "French Polynesia",
        "French Southern Territories", "Gabon", "Gambia", "Georgia", "Ghana",
        "Gibraltar", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala",
        "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
        "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong",
        "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq",
        "Isle of Man", "Israel", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan",
        "Kenya", "Kiribati", "Korea (Democratic People's Republic of)",
        "Korea (Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic",
        "Lebanon", "Lesotho", "Liberia", "Libya", "Macao", 
        "Macedonia (the former Yugoslav Republic of)",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Marshall Islands",
        "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico",
        "Micronesia (Federated States of)", "Moldova (Republic of)", "Monaco", "Mongolia",
        "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
        "Nepal", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "Niue", "Norfolk Island", "Northern Mariana Islands", "Oman", "Pakistan",
        "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru",
        "Philippines", "Pitcairn", "Puerto Rico", "Qatar", "Reunion", "Russian Federation", "Rwanda", "Saint Barthelemy",
        "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia",
        "Saint Martin (French part)", "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
        "Sint Maarten (Dutch part)", "Solomon Islands", "Somalia", "South Africa", 
        "South Georgia and the South Sandwich Islands", "South Sudan",
        "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland",
        "Syrian Arab Republic", "Taiwan, Province of China[a]", "Tajikistan",
        "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga",
        "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands",
        "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
        "United States of America", "United States Minor Outlying Islands",
        "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam",
        "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna",
        "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
      ]

      function addInputOtherRT(el){
        var newFieldOtherRT = document.createElement('div');

        // Count current amount of inputs in section
        var inputCountOtherRT = el.closest('div').getElementsByTagName('select').length;
        console.log(inputCountOtherRT);

        // Create ID for new select we're going to add
        var newSelectID = `${el.previousElementSibling.className}-${inputCountOtherRT}`;

        newFieldOtherRT.innerHTML = `<br><div class="row"><label class='nhsuk-label column' for='${newSelectID}'>Country name</label><a style="float: right; text-align: right;" class="column" href='#' type='button' value='-' onClick='return removeInputOtherRT(this);'>Remove</a></div><select id='${newSelectID}' name='myInputsOtherRT[]' type='text'><option value=''></option></select></div>`;
        document.getElementById('appendableOtherRT').appendChild(newFieldOtherRT);

        // Use ID of new select to initilise autcomplete for our new select
        accessibleAutocomplete.enhanceSelectElement({
          selectElement: document.querySelector(`#${newSelectID}`),
          source: worldCountriesRT
        })

        return false;

      }

      function removeInputOtherRT(btn){
        btn.parentNode.parentNode.remove();
        return false;
      }


