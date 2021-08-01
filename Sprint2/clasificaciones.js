console.log(dataClasificaciones.standings);

function crearTabla() {
  let tabla = document.getElementById("tabla-clasificacion");
  const numeroClasificaciones = dataClasificaciones.standings[0].table.length;

  for (let i = 0; i < numeroClasificaciones; i++) {
    agregarLineaDeClasificacionesATabla(i);
  }

  function agregarLineaDeClasificacionesATabla(i) {
    var esFilaPar = (i % 2) ==0;
    
    const fila = document.createElement("tr");
   if (esFilaPar) {
    fila.classList.add("grisClaro");
   } else{
     fila.classList.add("grisOscuro");
   }
    const columnaPosicion = crearColumnaPosicion(i);
    const columnaEscudo = crearColumnaEscudo(i);
    const columnaEquipo = crearColumnaEquipo(i);
    const columnaPartidosJugados = crearColumnaPartidosJugados(i);
    const columnaVictorias = crearColumnaVictorias(i);
    const columnaEmpates = crearColumnaEmpates(i);
    const columnaDerrotas = crearColumnaDerrotas(i);
    const columnaGolesAFavor = crearColumnaGolesAFavor(i);
    const columnaGolesEnContra = crearColumnaGolesEnContra(i);
    const columnaGolesDiferencia = crearColumnaGolesDiferencia(i);
    const columnaPuntos = crearColumnaPuntos(i);

    fila.appendChild(columnaPosicion);
    fila.appendChild(columnaEscudo);
    fila.appendChild(columnaEquipo);
    fila.appendChild(columnaPartidosJugados);
    fila.appendChild(columnaVictorias);
    fila.appendChild(columnaEmpates);
    fila.appendChild(columnaDerrotas);
    fila.appendChild(columnaGolesAFavor);
    fila.appendChild(columnaGolesEnContra);
    fila.appendChild(columnaGolesDiferencia);
    fila.appendChild(columnaPuntos);

    tabla.appendChild(fila);
  }

  function crearFila() {
    return document.createElement("tr");
  }

  function crearColumnaPosicion(i){
      const columnaPosicion = document.createElement("th");
      const posicionEquipo = document.createElement("span");
      posicionEquipo.innerHTML = dataClasificaciones.standings[0].table[i].position;
      columnaPosicion.appendChild(posicionEquipo);
      return columnaPosicion;
  }

  function crearColumnaEscudo(i){
      const columnaEscudo = document.createElement("th");
      const escudoEquipo = document.createElement("img");
      escudoEquipo.src = dataClasificaciones.standings[0].table[i].team.crestUrl;
      escudoEquipo.classList.add("escudoImg");
      columnaEscudo.appendChild(escudoEquipo);
      return columnaEscudo;
      }

      function crearColumnaEquipo(i) {
        const columnaEquipo = document.createElement("th");
        const nombreEquipo = document.createElement("span");
        nombreEquipo.innerHTML = dataClasificaciones.standings[0].table[i].team.name;
        columnaEquipo.appendChild(nombreEquipo);
        return columnaEquipo;
      }

      function crearColumnaPartidosJugados(i){
        const columnaPartidosJugados = document.createElement("th");
        const partidosJugados = document.createElement("span");
        partidosJugados.innerHTML = dataClasificaciones.standings[0].table[i].playedGames;
        columnaPartidosJugados.appendChild(partidosJugados);
        return columnaPartidosJugados;
      }

      function crearColumnaVictorias(i){
      const columnaVictorias = document.createElement("th");
      const victorias = document.createElement("span");
      victorias.innerHTML = dataClasificaciones.standings[0].table[i].won;
      columnaVictorias.appendChild(victorias);
      return columnaVictorias;
    }

    function crearColumnaEmpates(i){
      const columnaEmpates = document.createElement("th");
      const empates = document.createElement("span");
      empates.innerHTML = dataClasificaciones.standings[0].table[i].draw;
      columnaEmpates.appendChild(empates);
      return columnaEmpates;
    }

    function crearColumnaDerrotas(i){
      const columnaDerrotas = document.createElement("th");
      const derrotas = document.createElement("span");
      derrotas.innerHTML = dataClasificaciones.standings[0].table[i].lost;
      columnaDerrotas.appendChild(derrotas);
      return columnaDerrotas;
    }

    function crearColumnaGolesAFavor(i){
      const columnaGolesAFavor = document.createElement("th");
      const golesAFavor = document.createElement("span");
      golesAFavor.innerText = dataClasificaciones.standings[0].table[i].goalsFor;
      columnaGolesAFavor.appendChild(golesAFavor);
      return columnaGolesAFavor;
    }

    function crearColumnaGolesEnContra(i){
      const columnaGolesEnContra = document.createElement("th");
      const golesEnContra = document.createElement("span");
      golesEnContra.innerText = dataClasificaciones.standings[0].table[i].goalsAgainst;
      columnaGolesEnContra.appendChild(golesEnContra);
      return columnaGolesEnContra;
    }

    function crearColumnaGolesDiferencia(i){
      const columnaGolesDiferencia = document.createElement("th");
      const golesDiferencia = document.createElement("span");
      golesDiferencia.innerText = dataClasificaciones.standings[0].table[i].goalDifference;
      columnaGolesDiferencia.appendChild(golesDiferencia);
      return columnaGolesDiferencia;
    }

    function crearColumnaPuntos(i){
      const columnaPuntos = document.createElement("th");
      const puntos = document.createElement("span");
      puntos.innerText = dataClasificaciones.standings[0].table[i].points;
      columnaPuntos.appendChild(puntos);
      return columnaPuntos;
    }
}
