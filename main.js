// // map
// // filter
// // find
// // every
// // some

// // map retorna un array con la misma cantidad de elemenos que el array original
// // filter retorna un array con menos elementos que el array original *
// // find retorna UN elemento del array original
// // every y some retornan un booleano

// const implicados = ["Wanda", "Icardi", "China", "Vicuña", "Lopez",
//   "Furtado", "Gonzalo Heredia", "La niñera", "Pampita"]

// const arrayConMap = implicados.map((implicado, index, array) => {
//   return implicado + index
// })

// // console.log(arrayConMap)

// // en filter tengo que retornar una ** condicion **
// const arrayConFilter = implicados.filter((implicado, index, array) => {
//   return implicado.length >= 2
// })

// // console.log(arrayConFilter)

// // retorna UN elemento
// const resultadoConFind = implicados.find((implicado, index, array) => {
//   return implicado.length > 7
// })

// // console.log(resultadoConFind)

// // retorna TRUE si todos los elementos responden TRUE a la condicion retornada
// const resultadoConEvery = implicados.every((implicado, index, array) => {
//   return implicado.length > 7
// })

// console.log(resultadoConEvery)

// // retorna TRUE si al menos un elemento responde TRUE a la condicion retornada
// const resultadoConSome = implicados.some((implicado, index, array) => {
//   return implicado.length > 7
// })

// console.log(resultadoConSome)

// ARRAY DE OBJETOS

// const persona = {
//   nombre: "Mauro",
//   apellido: "Icardi",
//   edad: 28,
//   profesion: "Futbolista",
//   esBuenMarido: false,
//   hijos: ["Isabella", "Francesca"]
// }

// const implicados = [
//   {
//     nombre: "Wanda",
//     apellido: "Nara",
//     edad: 34
//   },
//   {
//     nombre: "Mauro",
//     apellido: "Icardi",
//     edad: 28
//   },
//   {
//     nombre: "Eugenia",
//     apellido: "Suarez",
//     edad: 25
//   }
// ]

// console.log(implicados)
// console.log(implicados[0])
// console.log(implicados[0].nombre) // Wanda
// console.log(implicados[1].nombre) // Mauro

// maquetar una tarjeta a partir de un objeto
// const seccion = document.querySelector("section")

// const producto = {
//   tipo: "zapato",
//   nombre: "Zapato azul",
//   descripcion: "Descripcion del zapato azul",
//   precio: 3000,
//   img: "img/zapato-azul.jpg"
// }

// seccion.innerHTML = `
// <div class="card">
// <div class="img"><img src="${producto.img}"></div>
// <div class="descripcion">
//   <h2>${producto.nombre}</h2>
//   <p class="price">${producto.precio}</p>
//   <p>${producto.descripcion}</p>
//   <button>Comprar</button>
// </div>

// `

// maquetar muchas tarjetas a partir de un array de objetos

const productos = [
  {
    tipo: 'zapato',
    nombre: 'zapato azul',
    descripcion: 'Descripcion del zapato azul',
    precio: 3000,
    img: 'img/zapato-azul.jpg',
  },
  {
    tipo: 'zapato',
    nombre: 'zapato negro',
    descripcion: 'Descripcion del zapato negro',
    precio: 2000,
    img: 'img/zapato-negro.jpg',
  },
  {
    tipo: 'zapatilla',
    nombre: 'zapatilla negra',
    descripcion: 'Descripcion de la zapatilla negra',
    precio: 3500,
    img: 'img/zapatilla-negra.jpg',
  },
  {
    tipo: 'zapatilla',
    nombre: 'zapatilla azul',
    descripcion: 'Descripcion de la zapatilla azul',
    precio: 2500,
    img: 'img/zapatilla-azul.jpeg',
  },
  {
    tipo: 'zapatilla',
    nombre: 'zapatilla roja',
    descripcion: 'Descripcion de la zapatilla roja',
    precio: 9000,
    img: 'http://www.placekitten.com/200',
  },
];

const productosListosParaHTML = productos.map(producto => {
  let nuevoProducto = { ...producto };

  const primeraLetra = nuevoProducto.nombre.charAt(0).toUpperCase();
  const restoDelNombre = nuevoProducto.nombre.slice(1).toLowerCase();
  nuevoProducto.nombre = primeraLetra + restoDelNombre;
  let precioNuevo = String(nuevoProducto.precio);
  precioFinal = '$' + precioNuevo + ',00';
  // precioFinal `$ ${precioNuevo}, 00`

  nuevoProducto.precio = precioFinal;

  return nuevoProducto;
});

const seccion = document.querySelector('section');

let acc = '';


productosListosParaHTML.map(producto => {
  acc =
    acc +
    `
  <div class="card">
  <div class="img"><img src="${producto.img}"></div>
  <div class="descripcion">
    <h2>${producto.nombre}</h2>
    <p class="price">${producto.precio}</p>
    <p>${producto.descripcion}</p>
    <button>Comprar</button>
  </div>
  </div>
  `;
});

seccion.innerHTML = acc;

// modificar la copia de un objeto o array modifica el dato original

// const persona = {
//   nombre: "Gabi",  // ----> nombre -->Gabi
//   apellido: "Loyola",  // apellido ---> Loyola
//   edad: 22, // ----> edad ---> 22
//   direccion: "Calle Falsa 123"
// }

// const nombres = ["Naty", "Caro", "Gabi"]

// // COPIA INSEGURA (copia por referencia)
// // const clonObjeto = persona

// // COPIAS SEGURAS
// const clonObjeto = { ... persona }

// const clonArray = [...nombres ]

// clonObjeto.direccion = "Villanueva 239"
// persona.nombre = "LALALAL"

const operaciones = [
  {
    descripcion: 'Descripcion',
    categoria: 'Categoria',
    fecha: '25/09/2021',
    monto: 5000,
    tipo: 'Gasto',
  },
  {
    descripcion: 'Descripcion',
    categoria: 'Categoria',
    fecha: '25/09/2021',
    monto: 5000,
    tipo: 'Gasto',
  },
  {
    descripcion: 'Descripcion',
    categoria: 'Categoria',
    fecha: '25/09/2021',
    monto: 5000,
    tipo: 'Gasto',
  },
];
