const prompt = require('prompt-sync')();
const fs = require('fs');
const fileName = "parababire.txt";

/*const fileOps = async () => {
  try {
    await fsPromises.writeFile(fileName, 'Ángel Narváez');//Crear archivo.
    const data = await fsPromises.readFile(fileName, 'utf8');//Leer Archivo.
    console.log(data);
    await fsPromises.appendFile(fileName, '\n36\nJavascript');//Agregar contenido.
    const newData = await fsPromises.readFile(fileName, 'utf8');
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
}
fileOps();

const finalArchivo = async () => {
  try {
    await fsPromises.unlink(fileName);//Borrar archivo.
  } catch (error) {
    console.error(error);
  }
}
setTimeout(finalArchivo, 5000);*/

//Extra
let on = true;

while (on) {
  console.log("");
  console.log("1.- Anadir producto");
  console.log("2.- Consultar producto");
  console.log("3.- Actualizar producto");
  console.log("4.- Borrar producto");
  console.log("5.- Calcular venta total");
  console.log("6.- Calcular venta por producto");
  console.log("7.- Salir");

  const operacion = prompt("Elige una opción ");
  switch (operacion) {
    case "1":
      let name = prompt("Nombre del producto");
      let quantity = prompt("Existencia del producto");
      let price = prompt("Precio del producto");
      fs.writeFile(fileName, `${name + quantity + price}`,  (err) => {
        if (err) throw err;
        console.log('Producto creado');
      });
      break;
    case "2":
      
      break;
    case "3":
      
      break;
    case "4":
      
      break;
    case "5":
      
      break;
    case "6":
      
      break;
    case "7":
      
      console.log("Salir del programa");
      on = false;
      break;
  
    default:
      fs.unlink(fileName,  (err) => {
        if (err) throw err;
        console.log('Producto eliminado');
      });
      console.log("Selecciona una opción correcta");
      break;
  }
}
