var boton = document.querySelector("#agregar");
boton.addEventListener("click", evaluar);

var alumno = new Array();
var nombre, materia, calificacion,sFechaN, fNacimiento;
function evaluar(){

        let form = document.querySelector("#formulario");
        if (form.checkValidity() === true) {
		 nombre= document.getElementById("nombre").value;
         materia= document.getElementById("materia").value;
		 calificacion= parseFloat(document.getElementById("calificacion").value);
         sFechaN = document.querySelector("#fNacimiento").value;
         sFechaN = sFechaN.split("-");

        fNacimiento = new Date(sFechaN[0], sFechaN[1] - 1, sFechaN[2]);
        
 
		alumno.push({ 'nombre': nombre, 'materia': materia, 'calificacion': calificacion, 'fNacimiento': sFechaN});
        console.log(alumno);
        
		
        mostrarTabla();
        }
        form.classList.add("was-validated");
}

function mostrarTabla(){
    var tabla=document.getElementById("tabla");
    var fila;
    var celda;
    var fila=document.createElement("tr"); 
    for(var i=0;i<alumno.length;i++){       
            
		var celda=document.createElement("td");
 
		celda.appendChild(document.createTextNode(alumno[i].nombre));
		celda.appendChild(document.createTextNode(alumno[i].materia));
        celda.appendChild(document.createTextNode(alumno[i].calificacion));
        celda.appendChild(document.createTextNode(alumno[i].fNacimiento));
        //celda.appendChild(document.createTextNode(alumno[i].edad));
 
		fila.appendChild(celda)
 
		tabla.appendChild(fila);

        
        
        
    }

	document.body.appendChild(tabla);


}