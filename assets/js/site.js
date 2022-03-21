'use strict';


var shippingAddressFieldset = document.querySelector('fieldset[name="different"]');
var shipAddressCheckbox = document.querySelector('#billing-address');

shippingAddressFieldset.setAttribute('disabled', 'disabled');
shippingAddressFieldset.setAttribute('aria-hidden', 'true');

shipAddressCheckbox.addEventListener('change', function(event){ 

  console.log("Checkbox is checked " + event.target.checked);

  if(event.target.checked) {
    shippingAddressFieldset.removeAttribute('disabled');
    shippingAddressFieldset.setAttribute('aria-hidden', 'false');
  } else {
    shippingAddressFieldset.setAttribute('disabled', 'disabled');
    shippingAddressFieldset.setAttribute('aria-hidden', 'true');
  }
});


