
const enviar = document.querySelector('#enviar');

const inputTexto = document.querySelector('#input-texto');
const inputTexto1 = document.querySelector('#input-texto1');
const inputpedido = document.querySelector('#inputpedido');
const parrafo = document.querySelector('#parrafo');
const nopendientes =document.querySelector("#empy");

//funcion concatenar nombre y pedido
function mostrar() {
    const nombre = inputTexto.value
    const apellido = inputTexto1.value
    const pedido = inputpedido.value
    parrafo.textContent = "hola" + " " + nombre + " " + apellido + " tu pedido fue " + pedido
}

enviar.addEventListener('click', mostrar)

//funcion sumar numeros del input

const suma = document.querySelector('#sumar');
const primer_numero = document.querySelector('#primer_numero');
const segundo_numero = document.querySelector('#segundo_numero');
const resultado = document.querySelector('#resultado')

function sumar () {
    const num1 = primer_numero.value
    const num2 = segundo_numero.value

    if (num1 === "" || num2 === "") {
        alert("completa..no te hagas el boludo")
        return

    }

    const num1combertido= parseInt(num1)
    const num2combertido= parseInt(num2)
    resultado.textContent ="el resultado es de : " + (num1combertido + num2combertido)

}

suma.addEventListener('click',sumar)

const cambiotexto = document.querySelector('#textolorem');

//lista de tareas

const nuevaTarea = document.querySelector('#tareaNueva')
const boton_agregar_tarea = document.querySelector('#botonTarea')
const p_tarea_nueva = document.querySelector('#p_tarea')
const ul_tarea_nueva = document.querySelector('#ul_tareas')

boton_agregar_tarea.addEventListener('click', (e) => {
    
    e.preventDefault();//para q no se recarge la pagina

    const texto_input = nuevaTarea.value;//valor del input(nuevatarea)
    const li =document.createElement('li');//crea un elemento nuevo el la lista
    li.classList.add("horizontal")
    const p = document.createElement('p');//crea el parrafo dentro de esa lista
    p.textContent = texto_input;//el texto parrafo es el del texto input
    li.appendChild(p);//unir el li con el parrafo
    ul_tarea_nueva.appendChild(li);
    nuevaTarea.value = "";//borra la tareapendiente anterior
    nopendientes.style.display = "none";//oculta el div con el parrafo de "no tenes pendientes"
    const Btn =document.createElement('button');
    li.appendChild(Btn);
})

function addDeleteBtn () {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
   

    deleteBtn.addEventListener('click',addDeleteBtn)
}


