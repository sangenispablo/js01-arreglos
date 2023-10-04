const arrayDeNumeros = [];

function generarNumeroAlAzar(limiteSuperior = 10) {
  return Math.floor(Math.random() * limiteSuperior) + 1;
}

function armarArray(cantidadDeElementos) {
  for (let i = 0; i < cantidadDeElementos; i++) {
    arrayDeNumeros.push(generarNumeroAlAzar(999));
  }
}

function mostrarArray(array = []) {
  array.map(elemento => {
    console.log(elemento);
  });
  //   for (let i = 0; i < array.length; i++) {
  //     const element = array[i];
  //     console.log(element);
  //   }
}

function mostrarArrayOrdenado(orden = "ASC") {
  let funcionDeOrdenamiento;
  if (orden === "ASC") {
    funcionDeOrdenamiento = (a, b) => a - b;
  } else {
    funcionDeOrdenamiento = (a, b) => b - a;
  }
  const arrayOrdenado = arrayDeNumeros.sort(funcionDeOrdenamiento);
  mostrarArray(arrayOrdenado);
}

let cantidad;
do {
  cantidad = parseInt(
    prompt("Ingresa la cantidad de numero que queres generar (mayor 5)")
  );
  if (isNaN(cantidad)) {
    alert("No estas ingresando un numero");
    cantidad = 0;
  } else {
    if (cantidad < 5) {
      alert("Debe ser un numero menor que 5");
    }
  }
} while (cantidad < 5 || isNaN(cantidad));

// cantidad tiene el valor del array a crear con los valores generados por la funcion
// generarNumeroAlAzar()

armarArray(cantidad);
console.log("Array Original");
mostrarArray(arrayDeNumeros);
console.log("Array Ordenado Asc");
mostrarArrayOrdenado("ASC");
console.log("Array Ordenado Desc");
mostrarArrayOrdenado("DESC");
