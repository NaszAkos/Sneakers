document.getElementById("kereses_inp").value = localStorage.getItem("kereses_szoveg") || ""; // Betöltés
keres()
function keres() {
    var input = document.getElementById("kereses_inp");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("talalatok");
    var li = ul.getElementsByTagName("li");
    let tal = 0;
  
    // Ha az input üres, akkor minden elem rejtve marad
    if (filter === "") {
      for (let i = 0; i < li.length; i++) {
        li[i].style.display = "none";
        document.getElementById("hr1").style.display = "none";
      }
      document.getElementById("nincs_tal").style.display = "none";
      return;
    }
  
    // Ha van érték az inputban, ellenőrizzük a találatokat
    for (let i = 0; i < li.length; i++) {
      let a = li[i];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        a.style.display = "block";
        //document.getElementById("hr1").style.display = "block";
        tal = tal + 1
      } else {
        a.style.display = "none";
        
        //document.getElementById("hr1").style.display = "none";

      }
    }
    if (tal>0){
      document.getElementById("hr1").style.display = "block";
    } else {
      document.getElementById("hr1").style.display = "none";
    }
  var hr1 = document.getElementById("hr1");
    if (hr1.style.display === "none" && filter !== "" && tal===0) {
      document.getElementById("nincs_tal").style.display = "block";
    } else {
      document.getElementById("nincs_tal").style.display = "none";
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