document.getElementById('fejlec').onload=function(){
  ikonEltunt()
}


let cipok = [];

fetch("data/cipok.json")
  .then(response => response.json())
  .then(data => {
    cipok = data;
    generateCipoList(cipok);
    keres(); // már betöltött adatból keresés
  });

function generateCipoList(lista) {
  const ul = document.getElementById("talalatok");
  // Törlés, kivéve a hr1-et
  ul.innerHTML = '<hr id="hr1"><p id="nincs_tal">nincs találat <br><img class="mod_valtas" src="img/logo/nincs-talalat.png" alt=""></p><p id="ures"></p><p id="nincs_ker"><img class="mod_valtas" src="img/logo/nincs-kereses.png" alt=""></p>';
  lista.forEach(cipo => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="../cipok/cipok.html?id=${cipo.id}">${cipo.nev} | ${new Intl.NumberFormat('fr-FR').format(cipo.ar)} Ft</a>
      <p class="talalat">${cipo.nev} ${cipo.ar} ${cipo.meretek}</p>
      <hr>
    `;
    ul.appendChild(li);
  });
}

function ikonEltunt(){
  /*const iframe = document.getElementById('fejlec');
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const element = iframeDocument.getElementById('keresesikon');
  element.style.display = 'none';*/
}
document.getElementById("kereses_inp").value = sessionStorage.getItem("kereses_szoveg") || ""; // Betöltés
keres()
function keres() {
    sessionStorage.setItem("kereses_szoveg", document.getElementById("kereses_inp").value); // Mentés
    if (sessionStorage.getItem("kereses_szoveg")===""||sessionStorage.getItem("kereses_szoveg")===0){
      document.title = "Keresés";
    } else {
      document.title = "Találatok: " + sessionStorage.getItem("kereses_szoveg");
    }
    
    var input = document.getElementById("kereses_inp");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("talalatok");
    var li = ul.getElementsByTagName("li");
    let tal = 0;
  
    // Ha az input üres, akkor minden elem rejtve marad
    if (filter === "") {
      document.getElementById("nincs_ker").style.display = "block";
      for (let i = 0; i < li.length; i++) {
        li[i].style.display = "none";
        document.getElementById("hr1").style.display = "none";
      }
      document.getElementById("nincs_tal").style.display = "none";
      return;
    }
    // Ha van érték az inputban, ellenőrizzük a találatokat
    for (let i = 0; i < li.length; i++) {
      let p = li[i].querySelector("p.talalat");
      let a = li[i];
      if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
        a.style.display = "block";
        tal = tal + 1
      } else {
        a.style.display = "none";

      }
    }
    if (tal>0){
      document.getElementById("hr1").style.display = "block";
      document.getElementById("nincs_ker").style.display = "none";
    } else {
      document.getElementById("hr1").style.display = "none";
    }
  var hr1 = document.getElementById("hr1");
    if (hr1.style.display === "none" && filter !== "" && tal===0) {
      document.getElementById("nincs_tal").style.display = "block";
      document.getElementById("nincs_ker").style.display = "none";
    } else {
      document.getElementById("nincs_tal").style.display = "none";
    }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
      keres();
  }
}

/*const iframe = document.getElementById('fejlec');
const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
const element = iframeDocument.getElementById('keresesikon');
element.style.display = 'none';*/

window.addEventListener("message", function(event) {
  if (event.data === "modvaltas") {
    sleep(100)
      ikonEltunt()
      const iframe = document.getElementById('fejlec');
const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
const element = iframeDocument.getElementById('keresesikon');
element.style.display = 'none';
  }
});
const iframe = document.getElementById('fejlec');

// Az iframe betöltődésekor fut le
iframe.onload = function() {
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  
  // Ellenőrizd, hogy az elem létezik-e
  const element = iframeDocument.getElementById('keresesikon');
  if (element) {
    element.style.display = 'none'; // Elrejtjük az elemet
  } else {
    console.log('A keresés ikon nem található az iframe-ben');
  }
};
