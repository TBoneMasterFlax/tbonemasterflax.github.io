function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let latitude = form.latitude.value;
  let longitude = form.longitude.value;
  if(!form.checkValidity()) {
    form.classList.add('was-validated');
    event.preventDefault();
    return false;
  }
  if(!validateLatitude(latitude)) {
    form.classList.add('was-validated');
    event.preventDefault();
    return false;
  }
  if (!validateLongitude(longitude)) {
    form.classList.add('was-validated');
    event.preventDefault();
    return false;
  }
  return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('#form');
  form.onsubmit = validate;
};

function validateLatitude(latitude){
  let lat = parseInt(latitude);
  if(lat >= -90 && lat <= 90) {
    return true;
  }
  else{
    return false;
  }
}

function validateLongitude(longitude){
  let long = parseInt(longitude);
  if(long >= -180 && long <= 180) {
    return true;
  }
  else{
    return false;
  }
}