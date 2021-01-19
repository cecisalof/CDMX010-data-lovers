import data from './data/athletes.js';
import {filterBySport, sports, filterByEvent} from './data.js';


let arrayAthletes = data.athletes;
let eventList = filterByEvent(data);
 
// function createCard(athlete) {
//     let containerCard = document.createElement('div');
//     let image = document.createElement('img');
//     let description = document.createElement('p');
 
//     description.innerHTML = athlete.name;
//     image.setAttribute('src', './ruta');
 
//     containerCard.appendChild(image);
//     containerCard.appendChild(description);
 
//     return containerCard;
// };

//filterBySport(arrayAthletes);
//MODIFICAMOS ATHLETE POR "ATHLETES", PARA PRUEBAS. 


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

function setCards(athletes) {
    let container = document.getElementById('container-cards');
    let html = ''; // ¿por qué?
    arrayAthletes.forEach(athlete => html += createCard(athlete));
    container.innerHTML = html;
}
 
function createSportsList(sport) {
    let listItem = `<li>${sport}
    <img src="./resources/flags_png/${sport}.png"></li>`;

    return listItem;
}


function setSportsList(){
    let containerList = document.getElementById("sportsCards");
    let arraySports = sports(arrayAthletes);
    let html = '';
    arraySports.forEach(sport => html += createSportsList(sport));
    containerList.innerHTML = html;
}

function createEventList(event) {
   // let sportIcon = `<img src="./resources/flags_png/${sport}.png">`;
    let listItem = `<li>${event}</li>`;
  // console.log(sportIcon);
   console.log(listItem);

    return listItem;
}


function setEventList(){
    let containerList = document.getElementById("eventList");
    let html2 = '';
    eventList.forEach(event => html2 += createEventList(event));
    containerList.innerHTML = html2;
}
 
//window.addEventListener('DOMContentLoaded', setSportsList());
//window.addEventListener('DOMContentLoaded', setCards());
window.addEventListener('DOMContentLoaded', setEventList());