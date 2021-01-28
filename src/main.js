//Para todo tu código que tenga que ver con mostrar los datos en la pantalla. 
//Con esto nos referimos básicamente a la interacción con el DOM. 
//Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), ....

import data from './data/athletes.js';
import {allSportsOnce, filterByEvent, filterBySport, getEventsBySport} from './data.js';

let arrayAthletes = data.athletes;
let eventList = filterByEvent(data);


// 1.- Crear tarjetas de deportes con template literals.
function createSportCards(sport){
    
    let cardItem = `<li id="buttonCard">
    <button id="SportCard" class="SportCard">
        <img id="sportIcon" src="./resources/icons_cutted/${sport}.png">
    </button>
    </li>
    `;
    
    return cardItem;
}

//2.- Imprimir tarjetas en el navegador 
function setSportCard(){
    let card = document.getElementById("sportsCards"); //asignamos el elmento con ID a la variable "card"
    let arrSports = allSportsOnce(arrayAthletes); // asignamos el set de datos a la varibale "arrSport"
    let html = ""; // declaramos una variable vacía, que guardará el valor de la función createSportCards
    arrSports.forEach(sport => html += createSportCards(sport)) // igualamos la variabel html a la función createSportCards y le pasamos el parámetro sport. 
    card.innerHTML = html; // Imprimimos el resultado de la función createSportCards en el navegador. El resultados son las tarjetas de {iconos}

}

// 3.- Crear lista de eventos por deporte
function createEventList(event,sport) {
let listItem =  `<li id="eventList">
     <img id="sportIcon" src="./resources/icons_cutted/${sport}.png">
     <p id="event">${event}</p>
     </li>`;
    
     return listItem;
 }
   
 // 4.- Imprimir lista de eventos por deporte 
 function setEventList(){
     let containerList = document.getElementById("eventList");
     let html2 = '';
     eventList.forEach(event => html2 += createEventList(event));
     containerList.innerHTML = html2;
 }
//console.log(SeteventList);



 // 5.- Función que, al cargar el navegador, oculta el FRAME 1 y muestra el FRAME 2
window.addEventListener('DOMContentLoaded', () => {
    setSportCard();
    let buttons = document.getElementsByClassName('SportCard');
    let sportsCard = document.getElementById('sportsCards');
    let eventList = document.getElementById('eventList');
   
    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', () => {
            sportsCard.style.display = "none"; // ocultamos tarjetas de deportes
            eventList.style.display = "block";
        });
    }
});


/* 6.- Función que, al cargar el navegador, filtra los eventos por deporte
window.addEventListener('DOMContentLoaded', () => {
    setEventList();
    let list = document.getElementsByClassName('eventList');
    let eventList = document.getElementById('eventList');
    //console.log(eventList);
    for(let i = 0; i < list.length ; i++) {
        if (sport.leght =  )    
        list[i].addEventListener('click', () => {

        
            getEventsBySport.style.display= "block"
            eventList.style.display = "none";
        });
    }
    
});

    
*/

// Esta llamada muestra todos eventos deportivos sin filtrarlos por deporte. 
window.addEventListener('DOMContentLoaded', setEventList());
   





