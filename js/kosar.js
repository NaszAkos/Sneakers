/*localStorage.setItem("NAF", "1"); //érték 1
localStorage.setItem("AS", "1");
localStorage.setItem("YB", "1");*/
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
  // Ha a kosár üres, jelenjen meg az "ures_kosar" és ne legyen "hr1"
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



// 1. lépés: Szerezd meg az iframe elemet.
const iframe = document.getElementById('fejlec');

// 2. lépés: Szerezd meg az iframe tartalmát.
const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

// 3. lépés: Válaszd ki a kívánt elemet az iframe tartalmában.
const element = iframeDocument.getElementById('kosrikon');

// 4. lépés: Módosítsd az elem stílusát.
element.style.display = 'none';