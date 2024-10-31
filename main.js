const arrayDatos = [];

const guardarDatos = () => {
    //Esta funcion va a tomar los datos ingresados en el formulario y los guarda en un array
    
    //tengo que agregar esto porque me precarga la pagina y pierdo los datos del array
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const nota = parseInt(document.getElementById("nota").value);

        if (nombre == "" || apellido == "" || nota == "") {
            //Si alguno de los campos viene vacio
            alert("Debe completar todos los campos")
        } else {
            arrayDatos.push({nombre, apellido, nota});
            console.log("Array actualizado: ", arrayDatos);
            
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("nota").value = "";

        }

}

const mostrarPromedios = () => {
    //Esta funcion recorre el array y muestra el promedio general de todos los alumnos
    let promedio = 0
    let suma = 0;

    event.preventDefault();
    for(let i = 0; i < arrayDatos.length; i++) {
        console.log(arrayDatos[i].nota + " - " + typeof(arrayDatos[i].nota))
        suma += arrayDatos[i].nota
    }
    promedio = parseFloat(suma / arrayDatos.length)
    alert("El promedio de notas de todos los alumnos es " + promedio)

}

const mostrarAlumnos = () => {
    //Esta funcion muestra por pantalla el listado de alumnos ingresados
    let totalAlumnos = "";

    event.preventDefault();
    console.log("mostrando alumnos")

}

const eliminarAlumno = (dni) => {
    //Elimina el alumno desde el parámetro dni ingresado
    
    event.preventDefault();
    console.log("Eliminando alumno")

}