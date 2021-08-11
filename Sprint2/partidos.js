// console.log(data.matches);

let inputBuscador = document.getElementById("buscador");


const url = "https://api.football-data.org/v2/competitions/2014/matches?season=2020"

function getFetch() {
  fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": " 8ba03b8571e54c619b81d5a8e6b292ad"
      }
    })
    .then(response => {
      return response.json();

    }).then(data => {
      let partidos = data.matches;
    

      inputBuscador.addEventListener("keyup", function () {
        buscador(partidos);
      });
      crearTabla(partidos);
    }).catch(error => {
      console.log(error);
    });
}

function crearTabla(partidos) {
  let tabla = document.getElementById("tabla-partidos");
  tabla.innerText = "";

  const numeroPartidos = partidos.length;

  for (let i = 0; i < numeroPartidos; i++) {
    agregarLineaDePartidoATabla(i);
  }


  function agregarLineaDePartidoATabla(i) {

    var esFilaPar = (i % 2) == 0;

    const fila = document.createElement("tr");
    if (esFilaPar) {
      fila.classList.add("grisClaro");
    } else {
      fila.classList.add("grisOscuro");
    }

    const columnaEscudoLocal = crearColumnaEscudoLocal(i);
    const columnaLocal = crearColumnaLocal(i);
    const columnaResultado = crearColumnaResultado(i);
    const columnaEscudoVisitante = crearColumnaEscudoVisitante(i);
    const columnaVisitante = crearColumnaVisitante(i);
    const columnaFecha = crearColumnaFecha(i);
    const columnaJornada = crearColumnaJornada(i);


    fila.appendChild(columnaEscudoLocal);
    fila.appendChild(columnaLocal);
    fila.appendChild(columnaResultado);
    fila.appendChild(columnaEscudoVisitante);
    fila.appendChild(columnaVisitante);
    fila.appendChild(columnaFecha);
    fila.appendChild(columnaJornada);

    tabla.appendChild(fila);
  }


  function crearColumnaEscudoLocal(i) {
    const columnaEscudoLocal = document.createElement("td");
    const escudoLocal = document.createElement("img");
    escudoLocal.src = "https://crests.football-data.org/" + partidos[i].homeTeam.id + ".svg";
    escudoLocal.classList.add("escudoImg");
    columnaEscudoLocal.appendChild(escudoLocal);
    return columnaEscudoLocal;
  }

  function crearColumnaLocal(index) {
    const columnalocal = document.createElement("td");
    const equipoHome = document.createElement("span");
    equipoHome.innerHTML = partidos[index].homeTeam.name;
    columnalocal.appendChild(equipoHome);
    return columnalocal;
  }

  function crearColumnaResultado(i) {
    const columnaResultado = document.createElement("th");
    const resultadoLocal = document.createElement("span");
    resultadoLocal.innerHTML =
      partidos[i].score.fullTime.homeTeam +
      " - " +
      partidos[i].score.fullTime.awayTeam;
    columnaResultado.appendChild(resultadoLocal);
    return columnaResultado;
  }

  function crearColumnaEscudoVisitante(i) {
    const columnaEscudoVisitante = document.createElement("td");
    const escudoVisitante = document.createElement("img");
    escudoVisitante.src = "https://crests.football-data.org/" + partidos[i].awayTeam.id + ".svg";
    escudoVisitante.classList.add("escudoImg");
    columnaEscudoVisitante.appendChild(escudoVisitante);
    return columnaEscudoVisitante;
  }

  function crearColumnaVisitante(i) {
    const columnaVisitante = document.createElement("th");
    const equipoVisitante = document.createElement("span");
    equipoVisitante.innerHTML = partidos[i].awayTeam.name;
    columnaVisitante.appendChild(equipoVisitante);
    return columnaVisitante;
  }

  function crearColumnaFecha(i) {
    const columnaFecha = document.createElement("th");
    const fechaPartido = document.createElement("span");
    fechaPartido.innerHTML = new Date(partidos[i].utcDate).toLocaleString();
    columnaFecha.appendChild(fechaPartido);
    return columnaFecha;
  }

  function crearColumnaJornada(i) {
    const columnaJornada = document.createElement("th");
    const jornadaPartido = document.createElement("span");
    jornadaPartido.innerHTML = partidos[i].matchday;
    columnaJornada.appendChild(jornadaPartido);
    return columnaJornada;
  }
}


function buscador(partidos) {
  console.log(partidos);
  if (inputBuscador.value == "") {
    crearTabla(partidos);
  }


  let datosFiltrados = partidos.filter((nombres) => {
    return (
      nombres.homeTeam.name.toLowerCase().includes(inputBuscador.value.toLowerCase()) ||
      nombres.awayTeam.name.toLowerCase().includes(inputBuscador.value.toLowerCase())
    );

  });
  // console.log(partidos);
  crearTabla(datosFiltrados);
  console.log(datosFiltrados);
}

getFetch();