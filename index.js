const pizzas = [
    {
        id:1,
        Nombre: 'Muzzarella',
        Ingredientes: ['Salsa de tomate', 'Muzzarella'],
        Precio: 400,
    },
    {    
        id:2,
        Nombre: 'Fugazzetta',
        Ingredientes: ['Cebolla', 'Muzzarella'],
        Precio: 550,
    },
    { 
        id:3,
        Nombre:'Calabresa',
        Ingredientes: ['Salsa de tomate', 'Longaniza calabresa', 'Muzzarella'],
        Precio: 650,
    }, 
    {    
        id:4,
        Nombre: 'Tropical',
        Ingredientes: ['Salsa de tomate', 'Ananá', ' Muzzarella'],
        Precio: 650
    }, 
    {    
        id:5,
        Nombre:'Especial',
        Ingredientes: ['Salsa de tomate', 'Jamon cocido', 'Morrones', 'Muzzarella'],
        Precio: 580,
    }, 
    {    
        id:6,
        Nombre: 'Serrana',
        Ingredientes: ['Salsa de tomate', 'Jamón crudo', 'Rúcula', 'Parmesano', 'Muzzarella'],
        Precio: 800
    }];

   
   const form = document.getElementById("form");
   const input = document.getElementById("input");


//Funcion para validar


const validacion = () =>{
    let validado = false;
    const guardarValor = input.value.trim();
    if (vacio(guardarValor)){
        error(input, 'No ingresaste ningun valor')
    }else if (!sinStock(guardarValor)){
        error (input, 'No tenemos esa pizza en stock')
    }else {
        exito (input)
        validado= true;
    }
    return validado;
}


// creamos las variables de la funcion 

const vacio = (id) => id === "";
const sinStock = (id) => {
    const noHay = pizzas.some(pizza => pizza.id === Number(id))
    return noHay;
}

const error = (input, mensaje)=>{
   const campoDeForm = input.parentElement;//Ingreso al Elemento padre
   const errorDeCampo = campoDeForm.querySelector("small");//Ingreso a la etiqueta small
   errorDeCampo.classList.remove("exito");//saco exito
   errorDeCampo.classList.add("error");//agrego error
   errorDeCampo.textContent = mensaje;// muestro el mensaje q puse en la funcion para validar
}


//Misma funcion q error, pero devolviendo el resultado cambiado y la etiqueta vacia

const exito = (input, mensaje)=>{
   const campoDeForm = input.parentElement;
   const errorDeCampo = campoDeForm.querySelector("small");
   errorDeCampo.classList.remove("error");
   errorDeCampo.classList.add("exito");
   errorDeCampo.textContent = "";
}

//------------------------------------------------------------//


//Creo el evento para el boton

form.addEventListener("submit", (e)=>{
    e.preventDefault();// No deja recargar la pagina cuando apreto el boton
    let validado = validacion();// creo una variable para la funcion de validacion del principio
    if (validado){
        const guardarValor = input.value.trim();// constante para el valor del input
        cambiarNombrePizza(guardarValor, form);
        cambiarPrecio(guardarValor, form) ; 
    }else {
        borrarPizzaNombre(form);// Esto es, para q en caso de q sea error, se borre el nombre y el precio q figure
        borrarPizzaPrecio(form);
    }
})

const cambiarNombrePizza = (input, form) =>{
    const campoDeForm = form.parentElement;// accedemos al elemento padre
    const pizza = pizzas.find((e) => e.id == input) ;// va a buscar el objeto con el id q coincida con valor del input
    const nombre = campoDeForm.querySelector("h2");// variable para nuestra etiqueta de HTML
    nombre.textContent = pizza.Nombre;// lo q queremos q se renderice en nuestra etiqueta
}
const cambiarPrecio = (input, form) =>{
    const campoDeForm = form.parentElement;
    const pizza = pizzas.find((e) => e.id == input) ;
    const nombre = campoDeForm.querySelector("h4");
    nombre.textContent = "$"+ pizza.Precio;
}

const borrarPizzaNombre = () => {
    const campoDeForm = form.parentElement;
    const nombre = campoDeForm.querySelector("h2");
    nombre.textContent = "";
}

const borrarPizzaPrecio = () =>{
    const campoDeForm = form.parentElement;
    const nombre = campoDeForm.querySelector("h4");
    nombre.textContent = "";
}