fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('fejlec').innerHTML = data;
            })
            .catch(error => console.error('Hiba történt:', error));
fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('lablec').innerHTML = data;
            })
            .catch(error => console.error('Hiba történt:', error));
            let lastScrollTop = 0;
            const header = document.getElementById("header");


