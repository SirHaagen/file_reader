
//UN SOLO ARCHIVO (QUITAR EL ATRIBUTO "multiple" DEL INPUT EN HTML)

/* let archivo= document.querySelector(".archivo");

archivo.addEventListener("change",()=>{leerArchivo(archivo.files[0])});

function leerArchivo(input) {
  console.log(`Nombre del archivo: ${input.name}, Última modificación: ${input.lastModified}`);

  let reader = new FileReader();

  reader.readAsText(input);

  reader.onload = function() {
    console.log(JSON.parse(reader.result));
  };

  reader.onerror = function() {
    console.log(reader.error);
  };

} */

//VARIOS ARCHIVOS

let archivo= document.querySelector(".archivo");

archivo.addEventListener("change",()=>{leerArchivo(archivo.files)});

function leerArchivo(inputs){

  console.log(`${inputs.length== 1 ? "Se ha cargado 1 archivo:" : `Se han cargado ${inputs.length} archivos:`}`);

  let numero= 1;

  for(input of inputs){    

    let reader = new FileReader(); 
    //Se crea nuevo objeto FileReader para leer el archivo cargado (debe estar para cada iteración)

    console.log(`- Nombre del archivo ${numero++}: ${input.name}, Última modificación: ${input.lastModified}`);

    reader.readAsText(input);

    reader.onload = function() {
      console.log(JSON.parse(reader.result));
    };

    reader.onerror = function() {
      console.log(reader.error);
    };

  }
  
}