/*localStorage.setItem("NAF", "1"); //érték 1
localStorage.setItem("AS", "1");
localStorage.setItem("YB", "1");
localStorage.setItem("EA7t", "1")
localStorage.setItem("NAJ4", "1")
localStorage.setItem("", "1")
localStorage.setItem("YB", "1")
localStorage.setItem("YB", "1")
localStorage.setItem("YB", "1")*/
tartalom_ell()
function tartalom_ell(){
  let kosar_ft = 0;
  if (localStorage.getItem("NAF") === "1") {
      document.getElementById("NAF").style.display = "block";
      kosar_ft+=49990
  } else {
    document.getElementById("NAF").style.display = "none";
  }

  if (localStorage.getItem("YB") === "1") {
    document.getElementById("YB").style.display = "block";
    kosar_ft+=108490
  } else {
    document.getElementById("YB").style.display = "none";
  }
  
  if (localStorage.getItem("AS") === "1") {
    document.getElementById("AS").style.display = "block";
    kosar_ft+=60490
  } else {
    document.getElementById("AS").style.display = "none";
  }

  if (localStorage.getItem("NAJ4") === "1") {
    document.getElementById("NAJ4").style.display = "block";
    kosar_ft+=249990
  } else {
    document.getElementById("NAJ4").style.display = "none";
  }

  if (localStorage.getItem("EA7t") === "1") {
    document.getElementById("EA7t").style.display = "block";
    kosar_ft+=49990
  } else {
    document.getElementById("EA7t").style.display = "none";
  }

  if (localStorage.getItem("NR5") === "1") {
    document.getElementById("NR5").style.display = "block";
    kosar_ft+=29990
  } else {
    document.getElementById("NR5").style.display = "none";
  }

  if (localStorage.getItem("YFR") === "1") {
    document.getElementById("YFR").style.display = "block";
    kosar_ft+=95390
  } else {
    document.getElementById("YFR").style.display = "none";
  }

  if (localStorage.getItem("AO") === "1") {
    document.getElementById("AO").style.display = "block";
    kosar_ft+=49490
  } else {
    document.getElementById("AO").style.display = "none";
  }

  if (localStorage.getItem("EA7r") === "1") {
    document.getElementById("EA7r").style.display = "block";
    kosar_ft+=71116
  } else {
    document.getElementById("EA7r").style.display = "none";
  }
  if (kosar_ft === 0) {
    document.getElementById("ures_kosar").style.display = "block";
    document.getElementById("hr1").style.display = "none";
  } else {
    document.getElementById("ures_kosar").style.display = "none";
    document.getElementById("hr1").style.display = "block";
  }
  if (kosar_ft === 0){
    kosar_ft = "-"
    document.getElementById("fizetes").style.backgroundColor = "#868686"
    document.getElementById("fizetes").innerText = "Nincs termék"
  } else {
    document.getElementById("fizetes").style.backgroundColor = "#53E558"
  }
  document.getElementById("ár").innerText = kosar_ft
}

// Meghívjuk a tartalom_ell függvényt, ha van változás a localStorage-ban
//window.onload = tartalom_ell; // Az oldal betöltésekor is frissíti a megjelenítést


document.getElementById('fejlec').onload=function(){
// 1. lépés: Szerezd meg az iframe elemet.
const iframe = document.getElementById('fejlec');

// 2. lépés: Szerezd meg az iframe tartalmát.
const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

// 3. lépés: Válaszd ki a kívánt elemet az iframe tartalmában.
const element = iframeDocument.getElementById('kosrikon');

// 4. lépés: Módosítsd az elem stílusát.
element.style.display = 'none';}