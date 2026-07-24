// Shows the embedded Google Form if configured, otherwise a mailto fallback.
document.addEventListener("DOMContentLoaded", function () {
  var url = window.PORTAL_CONTACT_FORM_URL;
  var iframe = document.getElementById("contact-form-iframe");
  var fallback = document.getElementById("contact-form-fallback");

  if (url) {
    iframe.src = url;
    iframe.hidden = false;
    fallback.hidden = true;
  } else {
    iframe.hidden = true;
    fallback.hidden = false;
  }
});
