fejlec_meretez()
lablec_meretez()
function fejlec_meretez() {
    let iframe = document.getElementById("fejlec");

    if (iframe.contentWindow && iframe.contentDocument) {
        setTimeout(() => {
            const header = iframe.contentDocument.getElementById("mind");
            if (header) {
                iframe.style.height = header.offsetHeight + "px";
                document.getElementById("fejlec_tak").style.height = header.offsetHeight + "px";
            }
        }, 100);
    }
}
function lablec_meretez(){
    iframe = document.getElementById("lablec");

    if (iframe.contentWindow && iframe.contentDocument) {
        setTimeout(() => {
            const header = iframe.contentDocument.getElementById("mind");
            if (header) {
                iframe.style.height = header.offsetHeight + "px";
            }
        }, 100);
    }
}
window.addEventListener('resize', function() {
    fejlec_meretez()
    lablec_meretez()
  });

  /*const eredetiUrl = window.location.pathname; // Eredeti URL mentése 
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith(".html")) {
      const newUrl = window.location.pathname.replace(/\.html$/, "");
      window.history.replaceState({}, "", newUrl);
    }
  });
  window.addEventListener("beforeunload", function () {
    //window.history.replaceState(null, "", eredetiUrl);
    //window.history.replaceState({}, "", newUrl&".html");
  });
  
/*document.querySelectorAll("iframe").forEach(iframe => {
    iframe.addEventListener("load", () => {
        sleep(2000);
        location.reload(); // Az egész oldal újratöltése
        lablec_meretez()
        fejlec_meretez()
    });
});*/