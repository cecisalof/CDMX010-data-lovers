//Para todo tu código que tenga que ver con mostrar los datos en la pantalla. 
//Con esto nos referimos básicamente a la interacción con el DOM. 
//Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), ....

import data from './data/athletes.js';
import {allSportsOnce, filterByEvent, filterBySport, getEventsBySport, getMedallistByEvent} from './data.js';
import athletes from './data/athletes.js';
//import athletes from './data/athletes.js';



let arrayAthletes = data.athletes;
//let eventList = filterByEvent(data);
let sportsCard = document.getElementById('sportsCardsHTML');
let title = document.getElementById('titleFrame1');
let buttons = document.getElementsByClassName('sportCardButton');
let eventsList = document.getElementById('eventsList');
//let tableHeader = document.getElementById("tableHeader");
//let athletesToken = document.getElementById("athletesToken");
let eventsButton = document.getElementsByClassName("eventButton");
let reloadButton = document.getElementById("reload");

// 1.- Crear tarjetas de deportes con template literals.
function createSportCards(sport){
    let cardItem = `<li id="buttonCard">
        <button id="SportCard" class="sportCardButton" data-sport="${sport}">
            <img id="sportIcon" src="./resources/icons_cutted/${sport}.png">
          
        </button>
    </li>
    `;
    
    return cardItem;
}


//2.- Imprimir tarjetas en el navegador 
function setSportCard(){
   // let card = document.getElementById("sportsCards"); //asignamos el elmento con ID a la variable "card"
    let arrSports = allSportsOnce(arrayAthletes); // asignamos la función con el set único de "sport" a la varibale "arrSport"
    let html = ""; // declaramos una variable vacía, que guardará el valor de la función createSportCards
    arrSports.forEach(sport => html += createSportCards(sport)) // igualamos la variabel html a la función createSportCards y le pasamos el parámetro sport. 
    sportsCard.innerHTML = html; // Imprimimos el resultado de la función createSportCards en el navegador. El resultados son las tarjetas de {iconos}

}

// 3.- Crear lista de eventos por deporte
function createEventList(event) {
    let listItem =  `<li id="eventList" class="eventList">
                        <button class="eventButton" data-event="${event}">${event}</button>
                     </li>`;
      return listItem;
 }

  
// 4.- Imprimir lista de eventos por deporte 
 function setEventList(events){ // events es un arreglo de eventos
     let containerList = document.getElementById("eventsList");
     let html = '';
     events.forEach(event => html += createEventList(event));
     containerList.innerHTML = html;
     const eventButtons = document.getElementsByClassName("eventButton");

     for(let i = 0; i < eventButtons.length ; i++) {
        eventsButton[i].addEventListener("click", (event) => {
            const eventAthletes = event.currentTarget.dataset.event
            const athletes = getMedallistByEvent(eventAthletes) // arreglo de eventos 
            console.log('medallist filtered by event', athletes)// imprime los medallistas del deporte que el usuario eligió
            SetMedalTable(athletes)
            console.log("Selected event for medallist", eventAthletes);// Arroja la opción que el usuario elige para filtrar la data
        })
    }
  }


//8.- Crear Medallero 
function createMedalTable(athlete){
   let table= `
     <tr>
        <td>
            <img id="medal"  src="./resources/medals/${athlete.medal}.png">
        </td>
        <td>${athlete.name}</td>
        <td>${athlete.team}</td>
     </tr>`;
   
   return table;
 }

// 9.- Imprimir medallero en la pantalla
function SetMedalTable(medallist){
    //let arrMedals = getMedalListByEvent();
    const container = document.getElementById("medallists");
    let html= '<table>';

    medallist.forEach(athlete => html += createMedalTable(athlete));
    html += '</table>'
    
    container.innerHTML = html;
 }
 
//console.log("Printing medallist table", SetMedalTable(athletes)); // ya se muetsran en la pantalla :)
 


 // Función que, al cargar el navegador, oculta el FRAME 1 y muestra el FRAME 2
 window.addEventListener('DOMContentLoaded', () => {
    setSportCard();
    
    eventsList.style.display = "none"; // ocultamos la lista de eventos
   // athletesToken.style.display = "none"; // ocultar fichero de atletas
   // tableHeader.style.display= "none"; //oculto header de la tabla de atletas. No está creado dinámicamente!

   // EL loop de abajo hacer que al dar click en la tarjeta de deportes, filtra los eventos de dicho deporte
    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', (event) => {
            //console.log('currentTarget', event.currentTarget)// el currentTarget es el button (el elemento padre, el elemento DETONADOR)
            //console.log('target', event.target) // el target es la imagen anidada al button (es el elemento específico al que se dio click)
         
             const sport = event.currentTarget.dataset.sport
             sportsCard.style.display = "none"; // ocultamos tarjetas de deportes
             eventsList.style.display = "block"; // mostramos la lista de eventos
             title.style.display="none"; // ocultamos el título del FRAME 1
             const events = getEventsBySport(sport)
             setEventList(events) // arreglo de eventos 
             //console.log(events);
         });
     }
 });


//5.3 RELOAD en Frame 2 para volver a FRAME 1(Sports Cards) //funciona :)
reloadButton.addEventListener("click", () =>{
    location.reload();
   
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
    let container = document.getElementById("athletesToken"); // Falta hacer commit: Cambió Token con mayúscula
    let html = '';
    arrayAthletes.forEach(athlete => html += createCard(athlete));
    container.innerHTML = html;
 }

//setAthleteCard(data);// MUESTRA LAS FICHAS DE ATLETAS EN EL DOM 
                    //si no le pasas el parámetro "data" la función no corre!










    /*fuction showAthletesToken() { //Mostrar el arreglo de fichas de athletas sin filtrar. Esto debe anclarse al menú de navegación "Athletes"


        let athletesToken = document.getElementById("athletesToken");
        athletesToken.addEventListener("click", () => {
    
            
    
        })  
        
     }
    
}*/
