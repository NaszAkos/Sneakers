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
  if (kosar_ft < 100000){
    document.getElementById("száll_ár").innerText = 1000+" Ft"
  }
  if (kosar_ft === 0){
    kosar_ft = "-"
    document.getElementById("ár").innerText = kosar_ft
    document.getElementById("fizetes").style.backgroundColor = "#868686"
    document.getElementById("fizetes").innerText = "Nincs termék"
  } else {
    document.getElementById("fizetes").style.backgroundColor = "#53E558"
    document.getElementById("ár").innerText = kosar_ft+" Ft"
  }
}
document.getElementById('fejlec').onload=function(){
  const iframe = document.getElementById('fejlec');
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const element = iframeDocument.getElementById('kosrikon');
  element.style.display = 'none';}
kupon_bev()
function kupon_bev() {
  let productPrice = 5000;
  let shippingCost = 1000;
  let couponInput = document.getElementById("coupon-input").value.trim();
  let discount = 0;
  let couponText = "Nincs megadva";

  // Kuponok definiálása
  if (couponInput === "SALE10") {
      discount = productPrice * 0.1; // 10% kedvezmény
      couponText = "-10% kedvezmény (" + discount.toFixed(0) + " Ft)";
  } else if (couponInput === "FREESHIP") {
      discount = shippingCost; // Ingyenes szállítás
      couponText = "-1000 Ft (Ingyenes szállítás)";
  } else if (couponInput !== "") {
      couponText = "Érvénytelen kód";
  }

  // Frissítés az oldalon
  document.getElementById("coupon-discount").innerText = couponText;
  let totalPrice = productPrice + shippingCost - discount;
  document.getElementById("total-price").innerText = totalPrice + " Ft";
}
// Meghívjuk a tartalom_ell függvényt, ha van változás a localStorage-ban
//window.onload = tartalom_ell; // Az oldal betöltésekor is frissíti a megjelenítést