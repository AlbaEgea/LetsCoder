let equipos = [];

const url = "https://api.football-data.org/v2/competitions/2014/matches?season=2020"


function getFetch() {
    fetch(url, {
            method: "GET",
            headers: {
                "X-Auth-Token": " 8ba03b8571e54c619b81d5a8e6b292ad"
            }
        })
        .then(response =>
            response.json()


        ).then(data => {
            console.log(data);
            let partidos = data.matches;
            rellenarTop5(partidos);
            // crearTabla(partidos);
        }).catch(error => {
            console.log(error);
        });
}

function rellenarTop5(matches) {
    //como obtener los partidos finalizados
    const partidosTerminados = matches.filter(m => m.status === "FINISHED");

    // bucle para calcular las estadísticas de cada equipo
    for (let index = 0; index < partidosTerminados.length; index++) {
        const match = partidosTerminados[index];
        let datosLocal = {
            id: match.homeTeam.id,
            name: match.homeTeam.name,
            goals: match.score.fullTime.homeTeam,
            matches: 1,
            average: match.score.fullTime.homeTeam

        };
        let datosVisitante = {
            id: match.awayTeam.id,
            name: match.awayTeam.name,
            goals: match.score.fullTime.awayTeam,
            matches: 1,
            average: match.score.fullTime.awayTeam
        };
        actualizarEstadisticas(datosLocal);
        actualizarEstadisticas(datosVisitante);
    }

    // calculo la media de goles
    for (let i = 0; i < equipos.length; i++) {
        let mediaGoles = equipos[i].goals / equipos[i].matches;
        equipos[i].average = mediaGoles;
    }

    //ordenar la media de goles 
    equipos.sort((a, b) => b.average - a.average);

    crearTabla(equipos);


}

function actualizarEstadisticas(datosPartidoEquipo) {

    const equipoGuardado = equipos.find(e => e.id === datosPartidoEquipo.id);
    // console.log(equipos);
    if (equipoGuardado === undefined) {
        //agregarlo a equipos
        equipos.push(datosPartidoEquipo);
    } else {
        //cuando ya se ha encontrado el equipo en el array de equipos
        equipoGuardado.matches++;
        equipoGuardado.goals = equipoGuardado.goals + datosPartidoEquipo.goals;
    }
}

function crearTabla(equipos) {
    let top5 = equipos.slice(0, 5);

    let table = document.getElementById("tabla-top5");
    for (let i = 0; i < top5.length; i++) {
        let fila = document.createElement("tr");

        // agregar escudo
        let escudo = document.createElement("td");
        let imagenEscudo = document.createElement("img");
        imagenEscudo.src = "https://crests.football-data.org/" + top5[i].id + ".svg";
        imagenEscudo.classList.add("escudoImg");
        escudo.appendChild(imagenEscudo);
        fila.appendChild(escudo);


        //agregar nombre del equipo
        //let nombreEquipo = document.createElement("td");
        let nombre = document.createElement("span");
        nombre.innerHTML = top5[i].name;
        escudo.appendChild(nombre);
        //fila.appendChild(nombreEquipo);


        //agregar Goles
        let numeroGoles = document.createElement("td");
        let goles = document.createElement("span");
        goles.innerHTML = top5[i].goals;
        numeroGoles.appendChild(goles);
        fila.appendChild(numeroGoles);


        //agregar Partidos
        let numeroPartidos = document.createElement("td");
        let partidos = document.createElement("span");
        partidos.innerHTML = top5[i].matches;
        numeroPartidos.appendChild(partidos);
        fila.appendChild(numeroPartidos);


        //agregar Media
        let mediaPartidos = document.createElement("td");
        let media = document.createElement("span");
        media.innerHTML = top5[i].average.toFixed(2);
        mediaPartidos.appendChild(media);
        fila.appendChild(mediaPartidos);



        //agregar filas
        var esFilaPar = (i % 2) == 0;

        if (esFilaPar) {
            fila.classList.add("grisClaro");
        } else {
            fila.classList.add("grisOscuro");
        }
        table.appendChild(fila);



    }

}
getFetch();