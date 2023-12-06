window.onload = miUbicacion;

function miUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      siHayExito,
      siHayError,
      { enableHighAccuracy: false, timeout: Infinity, maximumAge: 0 }
    );
  } else {
    alert("Los servicios de geolocalización no están disponibles");
  }
}

function siHayExito(posicion) {
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;
  var t = posicion.timestamp;

  const ubicacionData = {
    latitud: latitud,
    longitud: longitud,
    tiempo: t
  };

  // Enviar los datos al servidor
  //enviarUbicacionAlServidor(ubicacionData);

  var output = document.getElementById("ubicacion");
  output.innerHTML =
    "Latitud: " + latitud + "      Longitud: " + longitud + "    Tiempo: " + t;
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitud, lng: longitud },
    zoom: 13,
  });
  var marker = new google.maps.Marker({
    position: { lat: latitud, lng: longitud },
    map: map,
    title: 'Posicion actual'
  });
}

function siHayError(error) {
  var posiblesErrores = {
    0: "Error desconocido",
    1: "Permiso denegado por el usuario.",
    2: "Posición no disponible",
    3: "Desconexión por tiempo"
  };
  var mensajeError = posiblesErrores[error.code];
  // error.message : información adicional
  if (error.code == 0 || error.code == 2) {
    mensajeError = mensajeError + " " + error.message;
  }
  var div = document.getElementById("ubicacion");
  div.innerHTML = mensajeError;
}
/*
function enviarUbicacionAlServidor(ubicacionData) {
    fetch('http://tu-servidor.com/guardar-ubicacion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ubicacionData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
    })
    .catch((error) => {
      console.error('Error al enviar ubicación al servidor:', error);
    });
  }
  */
  