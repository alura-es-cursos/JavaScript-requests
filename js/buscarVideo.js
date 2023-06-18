import { conectaAPI } from "./conectaAPI.js";
import construyeCard from "./mostrarVideos.js";

//validaciones

async function buscarVideo(evento){
    evento.preventDefault();
    const datosDeBusqueda=document.querySelector("[data-busqueda]").value;
    const busqueda= await conectaAPI.buscarVideo(datosDeBusqueda);

    const listaDeBusqueda=document.querySelector("[data-lista]");

    /* while(listaDeBusqueda.firstChild){
        console.log(listaDeBusqueda.firstChild)
        listaDeBusqueda.removeChild(listaDeBusqueda.firstChild)
    } */
    listaDeBusqueda.replaceChildren();

    busqueda.forEach(elemento => listaDeBusqueda.
        appendChild(construyeCard(elemento.titulo,elemento.descripcion,elemento.url,elemento.imagen)));

     if(busqueda.length===0){
        listaDeBusqueda.innerHTML=`<h2 class="mensaje__titulo">No encontramos videos para ese filtro</h2>`;
    } 
}

const botonBusqueda=document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click",evento=>buscarVideo(evento))