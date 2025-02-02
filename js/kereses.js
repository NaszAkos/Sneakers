document.getElementById("kereses_inp").value = localStorage.getItem("kereses_szoveg") || ""; // Betöltés
keres()
function keres() {
    var input = document.getElementById("kereses_inp");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("talalatok");
    var li = ul.getElementsByTagName("li");
  
    // Ha az input üres, akkor minden elem rejtve marad
    if (filter === "") {
      for (let i = 0; i < li.length; i++) {
        li[i].style.display = "none";
      }
      return;
    }
  
    // Ha van érték az inputban, ellenőrizzük a találatokat
    for (let i = 0; i < li.length; i++) {
      let a = li[i];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        a.style.display = "block";
      } else {
        a.style.display = "none";
      }
    }
  }

  // 1. lépés: Szerezd meg az iframe elemet.
  const iframe = document.getElementById('fejlec');

  // 2. lépés: Szerezd meg az iframe tartalmát.
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

  // 3. lépés: Válaszd ki a kívánt elemet az iframe tartalmában.
  const element = iframeDocument.getElementById('keresesikon');

  // 4. lépés: Módosítsd az elem stílusát.
  element.style.display = 'none';