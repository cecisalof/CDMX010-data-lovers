//Para todo tu código que tenga que ver con mostrar los datos en la pantalla. 
//Con esto nos referimos básicamente a la interacción con el DOM. 
//Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers), ....

import data from './data/athletes.js';
import {allSportsOnce, filterByEvent, filterBySport, getEventsBySport} from './data.js';


let arrayAthletes = data.athletes;
let eventList = filterByEvent(data);
let buttons = document.getElementsByClassName('SportCard');
//let sportsCard = document.getElementById('sportsCards');




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
    let arrSports = allSportsOnce(arrayAthletes); // asignamos el set de datos a la varibale "arrSport"
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
 function setEventList(events){ // events es un arreglod eeventos
     let containerList = document.getElementById("eventList");
     let html2 = '';
     events.forEach(event => html2 += createEventList(event));
     containerList.innerHTML = html2;
     
  }

// Crear fichas de atletas
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


 //Imprimir ficha de atletas
function setAthleteCard(athletes) {
    let container = document.getElementById("athletestoken");
    let html = '';
    arrayAthletes.forEach(athlete => html += createCard(athlete));
    container.innerHTML = html;
    
}


 // 5.- Función que, al cargar el navegador, oculta el FRAME 1 y muestra el FRAME 2
window.addEventListener('DOMContentLoaded', () => {
    setSportCard();
    let buttons = document.getElementsByClassName('SportCard');
    let sportsCard = document.getElementById('sportsCards');
    let eventList = document.getElementById('eventList');
    let title = document.getElementById('titleFrame1');
    eventList.style.display = "none"; // ocultamos la lista de eventos
   
    for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', (event) => {
            console.log('currentTarget', event.currentTarget)
            console.log('target', event.target)
        
            const sport = event.currentTarget.dataset.sport
            sportsCard.style.display = "none"; // ocultamos tarjetas de deportes
            eventList.style.display = "block"; // mostramos la lista de eventos
            title.style.display="none"; // ocultamos el título del FRAME 1
            const events = getEventsBySport(sport)
            setEventList(events) // arregleo de eventos 
            console.log(events);
        });
    }
});


//6.- Función que, al dar click en la tarjeta de deportes, filtra los eventos de dicho deporte
window.addEventListener('DOMContentLoaded', () => {
    setEventList()
    let allButtons = document.getElementById("SportCard");
    console.log(allButtons);
    allButtons.addEventListener('click', () => {
   
   });
 });
    

//}
//setEventList();
//let li = document.getElementsByClassName('eventList');
//let eventList = document.getElementById('eventList');
  

    /*for(let i = 0; i < list.length ; i++) {
        if (sport.leght =  )    
        list[i].addEventListener('click', () => {

        
            getEventsBySport.style.display= "block"
            eventList.style.display = "none";
        });
    }
    
});
    const allButtons = document.querrySelectorAll(".SportCard");
     allButtons.forEach(button => {
        buttons.addEventListener('click', (event) => {
            const sportSpecific = event.target.dataset.sport;   
            const eventBySport= getEventsBySport(data.athletes, sportSpecific);
            console.log (event.currentTarget);
            console.log(event.target);

    })
 });

   


  let eventsResult = []; 
  for(let i = 0; i < eventList.length ; i++) {
      if (sport.includes(eventList[i])){
          eventsResult += eventList;
      }
      console.log(eventsResult);
  }
*/

// Esta llamada muestra todos eventos deportivos sin filtrarlos por deporte. 
/*window.addEventListener('DOMContentLoaded', setEventList());*/

