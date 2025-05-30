
  async function betoltTermek() {
    const urlParams = new URLSearchParams(window.location.search);
    const termekId = urlParams.get("id"); // pl. ?id=adidas_superstar_white

    const response = await fetch("../data/cipok.json");
    const termekek = await response.json();
    const termek = termekek.find(cipo => cipo.id === termekId);

    if (!termek) {
      document.body.innerHTML = "<h1>Termék nem található</h1>";
      return;
    }

    // Adatok beillesztése
    var nev = termek.rid
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
        <img src="${v.kep}" alt="">
        <div class="cipoleiras">
          <h3>${termek.nevSzin}</h3>
          <h5 class="extrameret">${termek.meretek.slice(0, 5).join(" ")} +${termek.meretek.length - 5}</h5>
          <h4 class="extraara">${termek.ar.toLocaleString()} Ft</h4>
        </div>
      </div>
    `).join("");
  }

  window.onload = betoltTermek();
  
