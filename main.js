const arrayDatos = [];

const guardarDatos = () => {
    //Esta funcion va a tomar los datos ingresados en el formulario y los guarda en un array
    
    //tengo que agregar esto porque me precarga la pagina y pierdo los datos del array
    event.preventDefault(); 

    const apellido = document.getElementById("apellido").value;
    const dni = parseInt(document.getElementById("dni").value); //parseInt()
    const nota = parseInt(document.getElementById("nota").value);
    ´
        if (apellido == "" || isNaN(dni) || isNaN(nota)) {
            //Si alguno de los campos viene vacio
            alert("Debe completar todos los campos" + '\n' + "Verifique que DNI y NOTA sea numérico " )
        } else {
            arrayDatos.push({apellido, dni, nota});
            console.log("Array actualizado: ", arrayDatos);
            
            document.getElementById("apellido").value = "";
            document.getElementById("dni").value = "";
            document.getElementById("nota").value = "";

        }
        document.getElementById("apellido").focus();

}

const mostrarPromedios = () => {
    //Esta funcion recorre el array y muestra el promedio general de todos los alumnos
    let promedio = 0
    let suma = 0;

    event.preventDefault();

    if (arrayDatos.length == 0) {
        alert("No no hay alumnos cargados")
    } else {
        for(let i = 0; i < arrayDatos.length; i++) {
            console.log(arrayDatos[i].nota + " - " + typeof(arrayDatos[i].nota))
            suma += arrayDatos[i].nota
        }
        promedio = parseFloat(suma / arrayDatos.length)
        alert("El promedio de notas de todos los alumnos es " + promedio)
    }
}

const mostrarAlumnos = () => {
    //Esta funcion muestra por pantalla el listado de alumnos ingresados
    let totalAlumnos = "";

    event.preventDefault();
    console.log("mostrando alumnos")

    if (arrayDatos.length == 0) {
        alert("No hay alumnos cargados")
    } else {
        for (let i = 0; i < arrayDatos.length; i++){
            totalAlumnos = totalAlumnos + '\n' + arrayDatos[i].apellido + " - " + arrayDatos[i].nota
        }
        alert("listado de alumnos" + '\n' + totalAlumnos)
    }

}

const eliminarAlumno = () => {
    //Elimina el alumno
    let dni = 0;
    let baja = false;

    event.preventDefault();
    console.log("Eliminando alumno")

    if (arrayDatos.length == 0) {
        alert("No hay alumnos cargados")
    } else {

        dni = parseInt(prompt("Ingrese el Dni del alumno que desea dar de baja"))
        console.log(dni + " - " + typeof(dni) + " " + arrayDatos.includes(dni))

            for (let i = 0; i < arrayDatos.length && baja == false; i++){
                if (arrayDatos[i].dni == dni) {
                    alert("Se dá de baja al alumno " + arrayDatos[i].apellido)
                    arrayDatos.splice(i,1)
                    baja = true
                } 
            }

            //Si el dni ingresado no se encuentra en el array, entonces se informa
            if (baja == false) {
                alert("No se ha encontrado el alumno " + dni + " para dar de baja")
            }

        }

}