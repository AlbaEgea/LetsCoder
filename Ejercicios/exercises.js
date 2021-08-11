//1. Compara tu edad (o una cualquiera) con la de Fernando Simón. muestra en consola si eres menor, mayor o tienes la misma edad que él.
//if()
function comparaEdad(nombre, edad){
    const edadFernando = 58;

    if (edad < edadFernando){
        console.log(nombre + " eres menor que Fernando Simón");
    }
    else if (edad > edadFernando){
        console.log(nombre + " eres mayor que Fernando Simón");
    }
    else {
        console.log(nombre + " tienes la misma edad que Fernando Simón")
    }
}

comparaEdad('Juan',72);
comparaEdad('Alba', 21);

//2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una string que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
//if(), %


//3. recorre la array y muestra los valores múltiplos de 3 en consola
//for(), if(), %
let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];


//4. Dada la array, escribe una función que encuentre el número menor. (No utilizar Math.min())
//for(), if()


//5. Utilizando la array anterior, encuentra el número más grande. (No utilizar Math.max())
//for(), if()


//6. Utilizando la array anterior, encontrar los números que se repiten, guardarlos en una array (si aun no existen en esta) y mostrarlos en consola
//for(), if(), push(), includes() || indexOf()


function ejercicio6() {


    let duplicados = [];

    for (let i = 0; i < numeros.length - 1; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] == numeros[j]) {
                if (duplicados.indexOf(numeros[i]) == -1) {
                    duplicados.push(numeros[i]);
                }
            }
        }
    }

    console.log(duplicados);
}

ejercicio6();


//7. Utilizando la array anterior, elimina los numeros pares
//for(), if(), %, splice()



//8. Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random() para obtener números aleatorios 
//entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
//repitiendo 36.000 veces esta operación.
//Math.random(), for(), push()



//9. Haz que el ejercicio anterior pase la array obtenida a la función de este ejercicio. Calcula el promedio de todos los lanzamientos de dados.
//for()



//10. Haz una copia de la array del ejercicio 3, ordenala de forma ascendente, y coloca el siguiente número donde le corresponda.
//Array.from(), sort(), splice(), for(), if()
let numeroNuevo = 7;


//11. Dado el siguiente objeto, muestra en consola una string con el nombre y apellido.
let mentor = {
    nombre: "Lluís",
    apellido: "Garcia",
    edad: 27,
    poblacion: "Sallent",
    empresa: "Let's Coder",
    hobbies: ["futbol", "codigo", "videojuegos"],
    mascotas: [{
            nombre: "Tuca",
            tipo: "perro",
            sexo: "hembra"
        },
        {
            nombre: "Tam",
            tipo: "perro",
            sexo: "macho"
        }
    ]
};



//12. Dado el objecto anterior, crea una array con todas las keys y luego úsala para mostrar en consola todas las values
//Object.keys(), for()


//13. Dado el objeto anterior, añade las edades a las mascotas. Luego muestra cada una de las mascotas en consola por separado

let edadTuca = 4;
let edadTam = 2; 


