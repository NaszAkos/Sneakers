/*sessionStorage.setItem("NAF", "1"); //érték 1
sessionStorage.setItem("AS", "1");
sessionStorage.setItem("YB", "1");
sessionStorage.setItem("EA7t", "1")
sessionStorage.setItem("NAJ4", "1")
sessionStorage.setItem("", "1")
sessionStorage.setItem("YB", "1")
sessionStorage.setItem("YB", "1")
sessionStorage.setItem("YB", "1")*/

window.onload = () => {
  ajanlasok_bet();
  script = document.createElement("script");
  script.src = "../js/app.js";
  document.body.appendChild(script);
};

termekek = []
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

window.addEventListener("message", function(event) {
  if (event.data === "modvaltas") {
    sleep(100)
      const iframe = document.getElementById('fejlec');
      const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
      const element = iframeDocument.getElementById('kosarikon');
      element.style.display = 'none';
  }
});

setInterval(() => {
  const iframe = document.getElementById('fejlec');
  if (!iframe.contentDocument) return;
  const elem = iframe.contentDocument.getElementById('kosrikon');
  if (elem) elem.style.display = 'none';
}, 300);



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

async function ajanlasok_bet() {
    const response2 = await fetch('data/cipok.json');
    const termekek2 = await response2.json();
    console.log("termekek2 tartalma:", termekek2);
    const ajanlas = document.getElementById("ajanlas");
    const megjelen = ["NAF1", "AS", "YB", "EA7t"];

    termekek2.forEach(termek => {
        const db = termek.rid;
        console.log("RID:", db); // <- ez eddig nem futott le

        if (db && megjelen.includes(db)) {
            console.log("Megjelenítendő:", db);

            const a = document.createElement("a");
            a.className = "col-xs-11 col-sm-11 col-md-11 col-lg-5 col-xl-5 col-xxl-5";
            a.href = `cipok/cipok.html?id=${termek.id}`;
            a.innerHTML = `
                <img class="Cipo" src="${termek.kepek[0].slice(3)}" alt="${termek.nev}">
                <h3>${termek.nev}<br>
                    ${new Intl.NumberFormat('fr-FR').format(termek.ar)} Ft</h3>
            `;

            ajanlas.appendChild(a);

            const hr = document.createElement("hr");
            hr.className = "tel_valaszto";
            ajanlas.appendChild(hr);
        }
    });
  
}


  /* function ajanlasok_bet() {
    console.log("indul")
    fetch('data/cipok.json')
        .then(response => response.json())
        .then(termekek => {
            const kosarLista = document.getElementById("ajanlas");
            const megjelen = ["NAF1", "AS", "YB", "EA7t"];

            termekek.forEach(termek => {
                const db = termek.rid;
                console.log("RID:", db);

                if (db && megjelen.includes(db)) {
                    console.log("Megjelenítendő:", db);

                    const a = document.createElement("a");
                    a.className = "col-xs-11 col-sm-11 col-md-11 col-lg-5 col-xl-5 col-xxl-5";
                    a.href = `cipok/cipok.html?id=${termek.id}`;
                    a.innerHTML = `
                        <img class="Cipo" src="${termek.kepek[0].slice(3)}" alt="${termek.nev}">
                        <h3>${termek.nev}<br>
                            ${new Intl.NumberFormat('fr-FR').format(termek.ar)} Ft</h3>
                    `;

                    kosarLista.appendChild(a);

                    const hr = document.createElement("hr");
                    hr.className = "tel_valaszto";
                    kosarLista.appendChild(hr);
                }
            });
        })
        .catch(error => console.error("Hiba történt a JSON betöltés közben:", error));
} */