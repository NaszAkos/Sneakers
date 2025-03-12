/*sessionStorage.setItem("NAF", "1"); //érték 1
sessionStorage.setItem("AS", "1");
sessionStorage.setItem("YB", "1");
sessionStorage.setItem("EA7t", "1")
sessionStorage.setItem("NAJ4", "1")
sessionStorage.setItem("", "1")
sessionStorage.setItem("YB", "1")
sessionStorage.setItem("YB", "1")
sessionStorage.setItem("YB", "1")*/
tartalom_ell()
function tartalom_ell(){
  let kosar_ft = 0;
  /*if (sessionStorage.getItem("NAF") !== null && sessionStorage.getItem("NAF") !== "0") {
    document.getElementById("NAF").style.display = "block";
    kosar_ft += 49990;
    document.querySelectorAll('#NAF span').forEach(el => {
      el.innerHTML = (" "+sessionStorage.getItem("NAF")+" |");
  });
} else {
    document.getElementById("NAF").style.display = "none";
}*/
// Közös változók
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

cipok.forEach(id => {
  let itemValue = sessionStorage.getItem(id);

  if (itemValue !== null && itemValue !== "0") {
    document.getElementById(id).style.display = "";
    kosar_ft += kosar_arak[id];
    document.querySelectorAll(`#${id} span`).forEach(el => {
      el.innerHTML = ` ${itemValue} |`;
    });
  } else {
    document.getElementById(id).style.display = "none";
  }
});



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
    document.getElementById("fizetes").style.backgroundColor = "#15ff00"
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
// Meghívjuk a tartalom_ell függvényt, ha van változás a sessionStorage-ban
//window.onload = tartalom_ell; // Az oldal betöltésekor is frissíti a megjelenítést