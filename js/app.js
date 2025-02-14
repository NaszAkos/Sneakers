document.getElementById('fejlec').onload=function(){fejlec_meretez()}
document.getElementById('lablec').onload=function(){lablec_meretez()}
function fejlec_meretez() {
    let iframe = document.getElementById("fejlec");

    if (iframe.contentWindow && iframe.contentDocument) {
        setTimeout(() => {
            const header = iframe.contentDocument.getElementById("mind");
            if (header) {
                iframe.style.height = header.offsetHeight + "px";
                //document.getElementById("fejlec_tak").style.display = "block"
                //document.getElementById("fejlec_tak").style.height = header.offsetHeight + "px";
            }
        }, 100);
    }
}
let lastScrollTop = 0; // Keep track of last scroll position
const navbar = document.getElementById("fejlec");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-60px";
        //navbar.style.borderBottom = "1px solid black"
        if (currentScroll > 60) {
            //navbar.style.borderBottom = "1px solid black"
            //navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
        } else {
            navbar.style.borderBottom = "none"
            navbar.style.boxShadow = "none"
        }
        
    } else {
        navbar.style.top = "0";
        //navbar.style.borderBottom = "none"
        if (currentScroll > 0) {
            //navbar.style.borderBottom = "1px solid black"
            navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
            
        } else {
            navbar.style.borderBottom = "none"
            navbar.style.boxShadow = "none"
        }
    }
    setTimeout(function() {
        if (navbar.style.top === "-60px") {
            navbar.style.boxShadow = "none"
        }
    }, 300);
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

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

/*document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname; // Az aktuális oldal útvonala
    let elem = document.getElementById("fejlec");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
            if (currentPage === "/" && !currentPage.includes("fooldal.html")) {
                elem.style.borderBottom = "1px solid black"; 
            } else {
                elem.style.borderBottom = "none";
            }
        } else {
            elem.style.borderBottom = "none"; 
        }
    });

    
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