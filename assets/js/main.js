// Shared site behavior: highlights the current page in the nav.
document.addEventListener("DOMContentLoaded", function () {
  var here = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var target = link.getAttribute("href");
    if (target === here || (here === "" && target === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });
});
