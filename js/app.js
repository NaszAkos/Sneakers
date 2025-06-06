let fejlec_meret = 0
document.getElementById('fejlec').onload=function(){fejlec_meretez()}
document.getElementById('sutik').onload=function(){sutik_meretez()}
document.addEventListener("DOMContentLoaded", function () {fejlec_meretez();sutik_meretez()});
window.onload = function () {fejlec_meretez();sutik_meretez();lablec_meretez()};
mod_ell();
fejlec_meretez();
sutik_meretez();
document.getElementById('lablec').onload=function(){lablec_meretez()}

document.addEventListener("DOMContentLoaded", function() {
    sutiell();
});

function sutiell() { // Ez az iframen belül fut
    if (sessionStorage.getItem('suti_elfogad') === "1") { 
        window.parent.postMessage("sutik_eltun", "*");
    } else {
        window.parent.postMessage("sutik_megjelen", "*");
    }
    window.parent.postMessage("sutik_elle", "*"); // Üzenet küldése a főoldalnak
}

document.addEventListener("DOMContentLoaded", function () {//sütik ellenőrzés indításokr
    if (sessionStorage.getItem('suti_elfogad') === "1") { 
        document.getElementById("sutik").style.display = "none";
        document.getElementById("sutik").style.transition = '';

    } else {
        document.getElementById("sutik").style.display = "block";
    }
});
window.addEventListener("message", function(event) {// Főoldal üzenet fogadás
    if (event.data === "sutik_eltun") {
        document.getElementById("sutik").style.display = "none"
         sessionStorage.setItem('suti_elfogad', "1");//megynyitáskor/bezáráskor törlődik
         //localStorage.setItem('suti_elfogad', "1"); SOHA sem törlődik
    }
    if (event.data === "sutik_megjelen") {
        document.getElementById("sutik").style.display = "block"
    }
    if (event.data === "sutik_bezar") {
        const sutikElem = document.getElementById("sutik");
        sutikElem.style.transition = 'all 0.2s ease-in-out';
        sutikElem.style.opacity = '0';
        setTimeout(function() {
            sutikElem.style.display = 'none';
        }, 200);

    }
    if (event.data === "mod_valt") {
        mod_valt()
    }
    if (event.data === "footer_meretez") {
        setTimeout(function() {lablec_meretez()}, 0);
        setTimeout(function() {lablec_meretez()}, 300);
        
    }

});



function suti_elfog(){
    suti_bezar()
    sessionStorage.setItem('suti_elfogad', "1");
    document.getElementById("sutik").style.transition = 'all 0.4s ease-in-out';
    sutiell()
    document.getElementById("sutik").style.display = 'none';
    setTimeout(function() {
        document.getElementById("sutik").style.transition = 'none';
    }, 400);
    document.getElementById('sutik').style.display = 'none';
};
function suti_bezar(){
    //document.getElementById("cookie-banner").style.display = "none"
    window.parent.postMessage("sutik_bezar", "*");

}


function fejlec_meretez() {
    let iframe = document.getElementById("fejlec");

    if (iframe.contentWindow && iframe.contentDocument) {
        setTimeout(() => {
            const header = iframe.contentDocument.getElementById("mind");
            if (header) {
                iframe.style.height = header.offsetHeight + "px";
                fejlec_meret = header.offsetHeight
            }
        }, 100);
    }
}
function lablec_meretez(){
    footer = document.getElementById("lablec");

    if (footer.contentWindow && footer.contentDocument) {
        setTimeout(() => {
            const header = footer.contentDocument.getElementById("mind");
            if (header) {
                footer.style.height = header.offsetHeight + "px";
            }
        }, 100);
    }
}
function sutik_meretez() {
    if (sessionStorage.getItem('suti_elfogad') === "1") { 
        document.getElementById("sutik").style.display = "none";
        document.getElementById("sutik").style.transition = '';

    } else {
        document.getElementById("sutik").style.display = "block";
    }
}


let lastScrollTop = 0;
const navbar = document.getElementById("fejlec");

window.addEventListener("scroll", function() {//görgrtésellenőrzés, fejléc animáció
    navbar.style.transition = `top ${fejlec_meret/200}s ease-in-out, box-shadow ${fejlec_meret/200}s ease-in-out`;
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = -fejlec_meret + "px";
        if (currentScroll > fejlec_meret) {
            navbar.style.boxShadow = "none"
        } else {
            navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
        }
    } else {
        navbar.style.top = "0";
        if (currentScroll > 0) {
            navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"
            
        } else {
            navbar.style.borderBottom = "none"
            navbar.style.boxShadow = "none"
        }
    }
    if (window.location.href.includes("/kereses")) {
        if (currentScroll > lastScrollTop) {//2 keresés mező
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
            document.getElementById("keresest").style.top = fejlec_meret + 10 + "px";
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
let resizeTimeout;

window.addEventListener('resize', function() {
    setTimeout(function() {
        fejlec_meretez();
        lablec_meretez();
    }, 3000);
});

function mod_valt_nyom(){//iframen belül fut
    window.parent.postMessage("mod_valt", "*");
    let currentMode = localStorage.getItem("vil/sot_mod");

    if (currentMode === "1") { // Sötét mód
        document.getElementById("vilagosModKep").style.display="none"
        document.getElementById("sotetModKep").style.display="block"
    } else { // Világos mód
        document.getElementById("sotetModKep").style.display="none"
        document.getElementById("vilagosModKep").style.display="block"
    }
}
function mod_ell() {
    let currentMode = localStorage.getItem("vil/sot_mod");
    if (currentMode === "1") { // Sötét mód
        document.documentElement.style.filter = "invert(1)";
        document.getElementById("sutik").style.filter = "invert(1)";

        document.querySelectorAll("img, video, [id*='gomb'], [id*='fizetes'], [class*='rating'], [id*='kuldes']").forEach(el => {
            if (!el.classList.contains("mod_valtas")) {
                el.style.filter = "invert(1)";
            } else {
                el.style.filter = "none";
            }
        });       
        

    } else { // Világos mód
        document.documentElement.style.filter = "none";
        document.getElementById("sutik").style.filter = "";

        document.querySelectorAll("img, video, [id*='gomb'], [id*='fizetes'], [class*='rating'], [id*='kuldes']").forEach(el => {
            el.style.filter = "none";
        });
        /*document.querySelectorAll('html, body, img, video, [id*="gomb"], [id*="fizetes"], [id*="sutik"] ').forEach(el => {
            el.style.transition = 'none';
        });*/
    }
}

function mod_valt() {
    let currentMode = localStorage.getItem("vil/sot_mod");

    if (currentMode === "1") {
        localStorage.setItem("vil/sot_mod", "0"); // Világos mód
    } else {
        localStorage.setItem("vil/sot_mod", "1"); // Sötét mód
    }
    mod_ell();
    document.querySelectorAll('html, body, img, video, [id*="gomb"], [id*="fizetes"], [id*="sutik"] ').forEach(el => {
        el.style.transition = 'filter 0.4s ease-in-out';
        setTimeout(function() {
            el.style.transition = 'none';
        }, 400);
    });
    //location.reload()
}
window.onload = function() {
    mod_ell()
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll === 0) {
        navbar.style.boxShadow = "none";
    } else {
        navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }
};