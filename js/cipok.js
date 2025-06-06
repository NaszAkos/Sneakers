let nev = "";
window.termekNevGlob = nev
let termekNevGlob = "";

  async function betoltTermek() {
    const urlParams = new URLSearchParams(window.location.search);
    const termekId = urlParams.get("id"); // pl. ?id=adidas_superstar_white

    const response = await fetch("../data/cipok.json");
    const termekek = await response.json();
    const termek = termekek.find(cipo => cipo.id === termekId);

    if (!termek) {
      document.body.innerHTML = "<iframe id='fejlec' src='../header.html'></iframe> <iframe id='sutik' src='../sütik.html'></iframe><h1>A termék nem található!</h1>";
      return;
    }

    // Adatok beillesztése
    nev = termek.rid
    document.title = termek.nev;
    document.querySelector("h1").innerHTML = `${termek.nev}<br>${termek.ar.toLocaleString()} Ft`;

    const meretekDiv = document.querySelector(".meretek");
    meretekDiv.innerHTML = termek.meretek.map(m => `<div class="meret">${m}</div>`).join("");

    const carouselInner = document.querySelector(".carousel-inner");
    const carouselIndicators = document.querySelector(".carousel-indicators");
    carouselInner.innerHTML = termek.kepek.map((k, i) => `
      <div class="carousel-item ${i === 0 ? 'active' : ''}" data-bs-interval="${i === 0 ? 10000 : 2000}">
        <img src="${k}" class="d-block w-100" alt="...">
      </div>`).join("");
    carouselIndicators.innerHTML = termek.kepek.map((_, i) => `
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Slide ${i + 1}"></button>
    `).join("");

    document.querySelector(".logo img").src = termek.logo;

    const valtozatok = document.querySelector(".szin_kep");
    valtozatok.innerHTML = termek.valtozatok.map(v => `
      <div class="kep1 col-6" onclick="window.location.href = 'cipok.html?id=${v.url}'">
        <img src="${(termekek.find(cipo => v.url === cipo.id)).kepek[0]}" alt="">
        <div class="cipoleiras">
          <h3>${(termekek.find(cipo => v.url === cipo.id)).nev}</h3>
          <h5 class="extrameret">${(termekek.find(cipo => v.url === cipo.id)).meretek.slice(0, 5).join(" ")} +${(termekek.find(cipo => v.url === cipo.id)).meretek.length - 5}</h5>
          <h4 class="extraara">${((termekek.find(cipo => v.url === cipo.id)).ar).toLocaleString()} Ft</h4>
        </div>
      </div>
    `).join("");
    let script = document.createElement("script");
    script.src = "../js/app.js";
    document.body.appendChild(script);
    script = document.createElement("script");
    script.src = "../js/cipo.js";
    document.body.appendChild(script);

  }

  window.onload = betoltTermek();
  