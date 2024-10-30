const arrayDatos = [];

const guardarDatos = () => {
    //Esta funcion va a tomar los datos ingresados en el formulario y los guarda en un array
    
    //tengo que agregar esto porque me precarga la pagina y pierdo los datos del array
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const nota = document.getElementById("nota").value;

        if (nombre == "" || apellido == "" || nota == "") {
            alert("Debe completar todos los campos")
        } else {
            arrayDatos.push({nombre, apellido, nota});
            console.log("Array actualizado:", arrayDatos);
            
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("nota").value = "";

        }

}

const mostrarPromedios = () => {
    //Esta funcion recorre el array y muestra el promedio general de todos los alumnos

    event.preventDefault();

}

const mostrarAlumnos = () => {
    //Esta funcion muestra por pantalla el listado de alumnos ingresados

    event.preventDefault();

    console.log("mostrando alumnos")
}