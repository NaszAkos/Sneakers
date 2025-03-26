/*sessionStorage.setItem("NAF", "1"); //érték 1
sessionStorage.setItem("AS", "1");
sessionStorage.setItem("YB", "1");
sessionStorage.setItem("EA7t", "1")
sessionStorage.setItem("NAJ4", "1")
sessionStorage.setItem("", "1")
sessionStorage.setItem("YB", "1")
sessionStorage.setItem("YB", "1")
sessionStorage.setItem("YB", "1")*/

let kosar_ft = 0;
tartalom_ell()
function tartalom_ell() {
  const kosar_arak = {
    NAF: 49990,
    YB: 108490,
    AS: 60490,
    NAJ4: 249990,
    EA7t: 49990,
    NR5: 29990,
    YFR: 95390,
    AO: 49490,
    EA7r: 71116
  };

  const cipok = [
    "NAF", "YB", "AS", "NAJ4", "EA7t", "NR5", "YFR", "AO", "EA7r"
  ];

  let kosar_ft = 0;

  cipok.forEach(id => {
    let itemValue = sessionStorage.getItem(id);

    if (itemValue !== null && itemValue !== "0") {
      // Ha a termék nem lett eltávolítva (értéke nem 0), jelenjen meg
      document.getElementById(id).style.display = "";
      kosar_ft += kosar_arak[id];
      document.querySelectorAll(`#${id} .meret_ki`).forEach(el => {
        el.innerHTML = ` ${itemValue} |`;
      });
    } else {
      // Ha a termék eltávolítva lett, ne jelenjen meg
      document.getElementById(id).style.display = "none";
    }

    // Ár frissítése minden esetben
    document.querySelectorAll(`#${id} .ar_ki`).forEach(el => {
      el.innerHTML = ` ${new Intl.NumberFormat('fr-FR').format(kosar_arak[id])} Ft`;
    });
  });

  // Ha a kosár üres, mutasd az üzenetet
  if (kosar_ft === 0) {
    document.getElementById("ures_kosar").style.display = "block";
    document.getElementById("hr1").style.display = "none";
  } else {
    document.getElementById("ures_kosar").style.display = "none";
    document.getElementById("hr1").style.display = "block";
  }

  // Ha a kosár értéke kisebb, mint 100000 Ft, akkor szállítási költség
  if (kosar_ft < 100000) {
    document.getElementById("száll_ár").innerText = 1000 + " Ft";
  }

  // Frissítsük a kosár teljes értékét
  const fizetes = document.getElementById("fizetes");

  if (kosar_ft === 0) {
    kosar_ft = "-";
    document.getElementById("ár").innerText = kosar_ft;
    fizetes.style.backgroundColor = "#868686";
    fizetes.innerText = "Nincs termék";
    fizetes.style.cursor = "no-drop";
  } else {
    fizetes.style.backgroundColor = "#15ff00";
    fizetes.style.cursor = "pointer";
    document.getElementById("ár").innerText = new Intl.NumberFormat('fr-FR').format(kosar_ft) + " Ft";
  }
}

document.getElementById('fejlec').onload=function(){
  const iframe = document.getElementById('fejlec');
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const element = iframeDocument.getElementById('kosrikon');
  element.style.display = 'none';}
kupon_bev()
function kupon_bev() {
  let productPrice = kosar_ft;
  let shippingCost = 1000;
  let couponInput = document.getElementById("coupon-input").value.trim();
  let discount = 0;
  let couponText = "Nincs megadva";

  // Kuponok definiálása
  if (couponInput === "SALE10") {
      discount = productPrice * 0.1; // 10% kedvezmény
      couponText = "-10% kedvezmény (" + new Intl.NumberFormat('fr-FR').format(discount.toFixed(0)) + " Ft)";
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
// Meghívjuk a tartalom_ell függvényt, ha van változás a sessionStorage-ban
//window.onload = tartalom_ell; // Az oldal betöltésekor is frissíti a megjelenítést