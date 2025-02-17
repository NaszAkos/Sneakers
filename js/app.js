/*document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "sütik.html", true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("fejlec_tak").insertAdjacentHTML("beforeend", xhr.responseText);
            document.getElementById("fejlec_tak").style.display = "block"
        }
    };

    xhr.send();
});*/


/*document.querySelectorAll("a").forEach(link => {
    link.style.textDecoration = "none";
});*/

//localStorage.clear();
document.getElementById('fejlec').onload=function(){fejlec_meretez()}
document.addEventListener("DOMContentLoaded", function () {fejlec_meretez();});
window.onload = function () {fejlec_meretez();};
fejlec_meretez()
document.getElementById('lablec').onload=function(){lablec_meretez()}

document.addEventListener("DOMContentLoaded", function() {
    sutiell();
});

function sutiell() { // Ez az iframen belül fut
    if (sessionStorage.getItem('suti_elfogad') === "1") { 
        document.getElementById('cookie-banner').style.display = 'none';
        window.parent.postMessage("sutik_eltun", "*");
    } else {
        document.getElementById('cookie-banner').style.display = 'block';
        window.parent.postMessage("sutik_megjelen", "*");
    }
    window.parent.postMessage("sutik_elle", "*"); // Üzenet küldése a főoldalnak
}

document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem('suti_elfogad') === "1") { 
        document.getElementById("sutik").style.display = "none";
    } else {
        document.getElementById("sutik").style.display = "block";
    }
});
// Főoldalon fogadjuk az üzenetet
window.addEventListener("message", function(event) {
    if (event.data === "sutik_eltun") {
        document.getElementById("sutik").style.display = "none"
         sessionStorage.setItem('suti_elfogad', "1");//megynyitáskor/bezáráskor törlődik
         //localStorage.setItem('suti_elfogad', "1"); SOHA sem törlődik
    }
    if (event.data === "sutik_megjelen") {
        document.getElementById("sutik").style.display = "block"
    }
    if (event.data === "sutik_bezar") {
        document.getElementById("sutik").style.display = "none"
    }
});


/*document.getElementById('sutik').addEventListener('load', function() {
    let iframeDoc = document.getElementById('sutik').contentDocument;

    if (!iframeDoc) {
        console.error("Nem lehet hozzáférni az iframe dokumentumához!");
        return;
    }

    let observer = new MutationObserver(function(mutationsList) {
        console.log("Változás történt az iframe-ben!");
        sutiell()
    });

    observer.observe(iframeDoc.body, { childList: true, subtree: true });
});*/

function suti_elfog(){
    // Sütik elfogadása
     sessionStorage.setItem('suti_elfogad', "1");
    document.getElementById('cookie-banner').style.display = 'none';
    sutiell()
    //document.getElementById('sutik').style.display = 'none';
};
function suti_bezar(){
    document.getElementById("cookie-banner").style.display = "none"
    window.parent.postMessage("sutik_bezar", "*");

}


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
let lastScrollTop = 0;
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
    if (window.location.href.includes("/kereses")) {
        if (currentScroll > lastScrollTop) {//2
            if (window.location.href.includes("kereses")) {
                document.getElementById("keresest").style.top = "3px";
                document.getElementById("keresest").style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
            }
            if (currentScroll > 73) {
                document.getElementById("keresest").style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
            } else {
                document.getElementById("keresest").style.boxShadow = "none"
            }
            
        } else {
            document.getElementById("keresest").style.top = "70px";
            if (currentScroll > 23) {
                document.getElementById("keresest").style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
            } else {
                document.getElementById("keresest").style.boxShadow = "none"
            }
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

    
});*/