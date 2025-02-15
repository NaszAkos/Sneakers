szin_ell(nev)
      function kosar(nev){
        if (localStorage.getItem(nev) === "1") {
          localStorage.setItem(nev, '0');
          szin_ell(nev)
        } else {
          localStorage.setItem(nev, '1');
          window.top.location.href = "../kosár.html";
          szin_ell(nev)
        }
      }
      function szin_ell(nev) {
      if (localStorage.getItem(nev) === "1") {
          document.getElementById("gomb").innerText = "Törlés a kosárból"
          document.getElementById("gomb").style.backgroundColor = "#c62d2d"
          document.getElementById("gomb").style.height="120px"
      } else {
        document.getElementById("gomb").innerText = "Kosárba"
        document.getElementById("gomb").style.backgroundColor = "#15ff00"
        document.getElementById("gomb").style.height="70px"
      }}

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