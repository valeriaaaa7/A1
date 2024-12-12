function cambiarColor(color){
    document.getElementById('btn3').addEventListener('click', () => {
        switch(color){
            case 'boton1' :
        }})
}

function agregarNota(){
    const nota=document.getElementById('rectangulo');
    const div=document.createElement('div');
    div.textContent=nota.value;
    div.classList.add('nota');
    const notas=document.getElementById('notas');
    notas.insertBefore(div, notas.firstChild);

    
    //ocultar mensaje no hay notas
    const mensaje=document.getElementById('h3');
    mensaje.classList.add('oculto');
    
    botonEliminar.classList.remove('oculto'); //para que se eliminar el boton

    rectangulo.value='';

    //eliminarUnaNota
    const botonEliminarUnaNota=document.createElement('button');
    botonEliminarUnaNota.textContent='Eliminar nota';
    botonEliminarUnaNota.addEventListener('click', eliminarUnaNota);
    div.appendChild(botonEliminarNota);
    botonEliminarUnaNota.classList.add('pepe')
}



function eliminarUnaNota(event){
    const lola=event.target.parentElement;
    lola.remove();
}


//crear boton
const botonEliminar=document.createElement('button');
botonEliminar.classList.add('oculto');
botonEliminar.classList.add('estiloBoton');
botonEliminar.textContent='Eliminar todas las notas';
botonEliminar.addEventListener('click', eliminarNotasTodas);
document.body.appendChild(botonEliminar);



function eliminarNotasTodas(){
    const notas=document.getElementById('notas'); //notas es la id
    const mensaje =document.getElementById('h3');
    
    //elimina todas las notas
    while (notas.firstChild){
        notas.removeChild(notas.firstChild);
    }
    //ocultar boton
    botonEliminar.classList.add('oculto');

    //mostrar mensaje de no hay notas
    mensaje.classList.remove('oculto');
}

const h3=document.getElementById('h3');
h3.classList.remove('oculto');


document.getElementById('rectangulo').addEventListener('keydown', function comprobarEnter(event){
    if(event.key==='Enter'){
        event.preventDefault();
        agregarNota();
    }
})