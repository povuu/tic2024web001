document.getElementById("btnCreditos").addEventListener("click", function() {

    alert("Autor: María Álvarez\nCurso y Grupo: 2ºBach B");

});

function ocultarDiv() {

    document.getElementById("section1").style.display = "none";

}

function mostrarDiv() {

    document.getElementById("section1").style.display = "block";

}



function cambiarColorFondo() {

    var backgroundColor = document.getElementById("section1");

    var currentColor = backgroundColor.style.backgroundColor;

    var newColor = getRandomColor();

    backgroundColor.style.backgroundColor = newColor;

}



function getRandomColor() {

    var letters = "0123456789ABCDEF";

    var color = "#";

    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}

  document.getElementById("section1").addEventListener("mouseover", mostrarFechaActual);



  function mostrarFechaActual() {

    var fecha = new Date();

    var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

    alert("La fecha actual es: " + fechaFormateada);

  }



 document.getElementById("ocultarDiv").addEventListener("click", ocultarDiv);

    document.getElementById("mostrarDiv").addEventListener("click", mostrarDiv);

    document.getElementById("cambiarColorFondo").addEventListener("click", cambiarColorFondo);

    document.getElementById("section2").addEventListener("mouseover", cambiarColorFondoSeccion2);

    document.getElementById("section2").addEventListener("mouseout", restaurarColorFondoSeccion2);

    function ocultarDiv() {

      document.getElementById("section1").style.display = "none";

    }


    function mostrarDiv() {

      document.getElementById("section1").style.display = "block";

    }

    function cambiarColorFondo() {

      var body = document.body;

      var currentColor = body.style.backgroundColor;

      var newColor = getRandomColor();

      body.style.backgroundColor = newColor;

    }

    function cambiarColorFondoSeccion2() {

      document.getElementById("section2").style.backgroundColor = getRandomColor();

    }

    function restaurarColorFondoSeccion2() {

      document.getElementById("section2").style.backgroundColor = "#ffffff";

    }

    function getRandomColor() {

      var letters = "0123456789ABCDEF";

      var color = "#";

      for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

      }

      return color;

    }

    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

     function mostrarFechaActual() {
      var fecha = new Date();
      var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
      alert("La fecha actual es: " + fechaFormateada);
    }

  document.getElementById('obtenerUbicacion').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            
            var map = L.map('map').setView([lat, lng], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

   
            L.marker([lat, lng]).addTo(map)
                .bindPopup('Tu ubicación')
                .openPopup();
        }, function(error) {
            console.log(error);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
})