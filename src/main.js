//Para todo tu código que tenga que ver con mostrar los datos en la pantalla. 
//Con esto nos referimos básicamente a la interacción con el DOM. 
//Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), ....

import data from './data/athletes.js';
import {allSportsOnce, filterByEvent, filterBySport, getEventsBySport, getMedalListByEvent} from './data.js';
import athletes from './data/athletes.js';
//import athletes from './data/athletes.js';


let arrayAthletes = data.athletes;
let eventList = filterByEvent(data);




// 1.- Crear tarjetas de deportes con template literals.
function createSportCards(sport){
    let cardItem = `<li id="buttonCard">
        <button id="SportCard" class="SportCard" data-sport="${sport}">
            <img id="sportIcon" src="./resources/icons_cutted/${sport}.png">
        </button>
    </li>
    `;
    
    return cardItem;
}


//2.- Imprimir tarjetas en el navegador 
function setSportCard(){
    let card = document.getElementById("sportsCards"); //asignamos el elmento con ID a la variable "card"
    let arrSports = allSportsOnce(arrayAthletes); // asignamos la función con el set único de "sport" a la varibale "arrSport"
    let html = ""; // declaramos una variable vacía, que guardará el valor de la función createSportCards
    arrSports.forEach(sport => html += createSportCards(sport)) // igualamos la variabel html a la función createSportCards y le pasamos el parámetro sport. 
    card.innerHTML = html; // Imprimimos el resultado de la función createSportCards en el navegador. El resultados son las tarjetas de {iconos}

}

// 3.- Crear lista de eventos por deporte
function createEventList(event) {
    let listItem =  `<li id="eventList" class="eventList">
                        <p id="event">${event}<p>
                     </li>`;
 
     return listItem;
 }


 
 // 4.- Imprimir lista de eventos por deporte 
 function setEventList(events){ // events es un arreglo de eventos
     let containerList = document.getElementById("eventList");
     let html = '';
     events.forEach(event => html += createEventList(event));
     containerList.innerHTML = html;
     
  }


 // 5.- Función que, al cargar el navegador, oculta el FRAME 1 y muestra el FRAME 2
window.addEventListener('DOMContentLoaded', () => {
    setSportCard();
    let buttons = document.getElementsByClassName('SportCard');
    let sportsCard = document.getElementById('sportsCards');
    let eventList = document.getElementById('eventList');
    let title = document.getElementById('titleFrame1');
    eventList.style.display = "none"; // ocultamos la lista de eventos
   // al dar click en la tarjeta de deportes, filtra los eventos de dicho deporte
    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', (event) => {
           // console.log('currentTarget', event.currentTarget)// el currentTarget es el button (el elemento padre, el elemento DETONADOR)
           // console.log('target', event.target) // el target es la imagen anidada al button (es el elemento específico al que se dio click)
        
            const sport = event.currentTarget.dataset.sport
            sportsCard.style.display = "none"; // ocultamos tarjetas de deportes
            eventList.style.display = "block"; // mostramos la lista de eventos
            title.style.display="none"; // ocultamos el título del FRAME 1
            const events = getEventsBySport(sport)
            setEventList(events) // arreglo de eventos 
            //console.log(events);
        });
    }
});


// 6.- Crear fichas de atletas
function createCard(athlete) {
    let card = `
        <div>
            <p>${athlete.name}</p>
            <p>${athlete.gender}</p>
            <p>${athlete.height}</p>
            <p>${athlete.weight}</p>
            <p>${athlete.sport}</p>
            <p>${athlete.team}</p>
            <p>${athlete.noc}</p>
            <p>${athlete.age}</p>
            <p>${athlete.even}</p>
            <p>${athlete.medal}</p>
        </div>    
    `;
 
    return card;
 }


 //7.-Imprimir ficha de atletas
function setAthleteCard() {
    let container = document.getElementById("athletestoken");
    let html = '';
    arrayAthletes.forEach(athlete => html += createCard(athlete));
    container.innerHTML = html;
   }

 console.log(setAthleteCard(data));// si no le pasas el parámetro "data" la función no corre!

//8.- Crear Medallero 
function createMedalTable(athlete){
   let table= `
   <table> 
     <tr>
        <th>Medals</th>
        <th>Athlete´s name</th> 
        <th>Team</th>
     </tr>
     <tr>
        <td>${athlete.medal}
            <img id="medal"  src="./resources/icons_cutted/${athlete.medal}.png">
        </td>
        <td>${athlete.name}</td>
        <td>${athlete.team}</td>
     </tr> 
   </table>`;
   
   return table;
 }
console.log(createMedalTable(athletes));

// 9.- Imprimir medallero en la pantalla
function SetMedalTable(){
    let medallist = document.getElementById("medallists");
    let arrMedals = getMedalListByEvent(arrayAthletes);
    let html= '';
    arrMedals.forEach(medal => html += createMedalTable(medal));
    medallist.innerHTML = html;
 }
 

 console.log("Printing medallist table", SetMedalTable(arrayAthletes));
 












    /*fuction showAthletesToken() { //Mostrar el arreglo de fichas de athletas sin filtrar. Esto debe anclarse al menú de navegación "Athletes"


        let athletesToken = document.getElementById("athletesToken");
        athletesToken.addEventListener("click", () => {
    
            
    
        })  
        
     }
    
}*/
