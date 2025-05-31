meretek_id()
let meret = sessionStorage.getItem(nev) !== null ? sessionStorage.getItem(nev) : 0;
if (meret !== "0" && meret !== 0) {
  meret_allit("meret_" + meret);
}

//console.log(meret)
function kosar(nev) {
  if (sessionStorage.getItem(nev) === "0" || sessionStorage.getItem(nev) === null) {

    // Csak akkor irányítson át, ha a méret nem 0 vagy null
    if (meret !== "0" && meret !== null && meret !== 0) {
        sessionStorage.setItem(nev, meret);
        window.top.location.href = "../kosár.html";
        //console.log("kosárra irányít")
    }
  } else {
    //console.log("nem kosárra irányít")
    sessionStorage.setItem(nev, 0);
    document.querySelectorAll('.meretek>div').forEach(el => {
      el.style.backgroundColor = "";
    });
    meret = 0
    szin_ell(nev);
      
  }
  szin_ell(nev);
  document.getElementById("fejlec").contentWindow.postMessage("dbEll", "*");
}

function szin_ell(nev) {
  let gomb = document.getElementById("gomb");

  if (sessionStorage.getItem(nev) !== null && sessionStorage.getItem(nev) !== "0") {
      gomb.innerText = "Törlés a kosárból";
      gomb.style.backgroundColor = "#c62d2d"; // Piros gomb
      gomb.style.height = "120px";
  } else {
      gomb.innerText = "Kosárba";
      gomb.style.height = "70px";

      // Ha a meret 0 vagy null, akkor szürke marad
      if (meret === "0" || meret === null || meret === 0) {
          gomb.style.backgroundColor = "#868686"; // Szürke
          gomb.style.cursor = "no-drop"
      } else {
          gomb.style.backgroundColor = "#15ff00"; // Zöld
          gomb.style.cursor = "pointer"
      }
  }
}

// Az oldal betöltésekor frissíti a gomb állapotát
szin_ell(nev);

function kepkatt(){
      // Az összes olyan elem, aminek class attribútuma "szoveg" vagy "also"
      const elements = document.querySelectorAll('[class*="szoveg"], [class*="also"], [id*="lablec"], [id*="fejlec"], [class*="logo"], [ class*="vonal-vizsz"]');
        elements.forEach(element => {
        element.style.display = 'none'; // Eltüntetjük
        const carousel = document.getElementById('carouselExampleDark'); 
        //carousel.style.backgroundColor="rgba(183, 60, 60, 0.5)";
        carousel.style.width = '100vw';
        carousel.style.height = '100vh';
        carousel.style.top = '0';
        carousel.style.left = '0';
        carousel.style.zIndex = '3';    
    });
    //document.querySelectorAll('class*=kepek').style.height = '100vh'
    closeButton.style.display = 'block';
    //document.querySelectorAll('.kep img').style.width = '40px' 
  }
  function kep_bezar() {
    const carousel = document.getElementById('carouselExampleDark');
    const closeButton = document.getElementById('closeButton');
    
    // Visszaállítjuk az alapértelmezett állapotot
    const elements = document.querySelectorAll('[class*="szoveg"], [class*="also"], [id*="lablec"], [id*="fejlec"], [class*="logo"], [ class*="vonal-vizsz"]');
        elements.forEach(element => {
    element.style.display = '';
    carousel.style.width = '';
    carousel.style.height = '';
    carousel.style.position = '';
    carousel.style.top = '';
    carousel.style.left = '';
    carousel.style.zIndex = '';
    
    
    
        });
        // Elrejtjük a zárás gombot
    
    closeButton.style.display = 'none';
    document.getElementById('fejlec_tak').style.display = 'none'
  }
function meret_allit(id){
  meret = parseInt(id.split("_")[1]);
  //console.log("Kiválasztott méret:", meret);
  document.querySelectorAll('.meretek>div').forEach(el => {
    el.style.backgroundColor = "";
  });
  document.getElementById(id).style.backgroundColor = "#a1a1a1"
  szin_ell(nev)
  if (sessionStorage.getItem(nev) !== null && sessionStorage.getItem(nev) !== "0") {
    sessionStorage.setItem(nev, meret);
  }  
}
function meretek_id(){
  document.querySelectorAll('.meret').forEach(item => {
    const size = item.textContent.trim();
    item.id = `meret_${size}`;
  });
}


function handleClick(event) {
  meret_allit(event.target.id); //függvény fut az id-vel
  }

  document.querySelectorAll('.meret').forEach(item => {
    item.addEventListener('click', handleClick); // Kattintáskor a handleClick függvény lesz meghívva
});