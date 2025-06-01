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
async function tartalom_ell() {
  const response = await fetch('data/cipok.json');
  const termekek = await response.json();
  const kosarLista = document.getElementById("koras_tartalma");
  //kosarLista.innerHTML = '<hr id="hr1">';
  kosarLista.innerHTML = '<hr id="hr1">';
  let kosar_ft = 0;
  let van_termek = false;

  termekek.forEach(termek => {
    const db = sessionStorage.getItem(termek.rid);
    if (db && db !== "0") {
      van_termek = true;
      const li = document.createElement("li");
      li.id = termek.id;

      li.innerHTML = `
        <a href="cipok/cipok.html?id=${termek.id}">
          <img class="cipokep" src="${termek.kepek[0].slice(3)}" alt="">
          ${termek.nev} | <span class="meret_ki">${db} | </span> <span class="ar_ki">${new Intl.NumberFormat('fr-FR').format(termek.ar)} Ft</span>
        </a>
        <a class="eltavolitas" onclick="sessionStorage.setItem('${termek.rid}', '0'); tartalom_ell();">
          <img class="mod_valtas" src="img/logo/Eltávolítás.png" alt="">
        </a>
        <hr>
      `;

      kosarLista.appendChild(li);
      kosar_ft += termek.ar;
    }
  });

  document.getElementById("ures_kosar").style.display = van_termek ? "none" : "block";
  document.getElementById("hr1").style.display = van_termek ? "block" : "none";
  document.getElementById("fizetes").style.backgroundColor = van_termek ? "#15ff00" : "#868686";

  document.getElementById("ár").innerText = `${new Intl.NumberFormat('fr-FR').format(kosar_ft)} Ft`;
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