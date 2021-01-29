//El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.
//Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener, 
//procesar y manipular datos (tus funciones).

import data from './data/athletes.js';


//Esta función filtra del set los objetos "athlete" por su propiedad {sport}
export function filterBySport(sport){
    let filteredData1 = data.athletes.filter(function(athlete){
      return athlete.sport === sport
      });
      
      return filteredData1
    }
//console.log("Filtering by Sport for Volleyball", filterBySport("Volleyball"));


//Filtrado de los 34 deportes del set de datos.

export function allSportsOnce(athletes){ //athletes como parámetros
    let sports = []; // Un array vacío en el que se añadirán los elementos que resulten del método push.
    for(const i in data.athletes){ // un loop sobre todo el array de objetos "athletes" en "data" 
      sports.push(data.athletes[i].sport) // por el nombre del array, se aplica el método .push y dentro del paréntesis van los elementos que se
                                          //añadirán al array. En este caso el lenght del array "sports" es 0, por lo que se crea 
                                            // con el loop que itera sobre data.athletes.sport y añade los elemntos a "sports"
   }
   //console.log(sports);//Hasta aquí imprime 2023 objetos "athletes"
    const sportsArr = new Set(sports); // Se crea una variable para asiganr un nuevo set de datos únicos
   let sportsList = [...sportsArr]; // spread operator aplicado al nuevo array "dataArrSports" 
   //let sportArrInOrder = athletes.sort(); // ¿C+omo ordenar alfabéticamente?
   //console.log(sportsList); // Ahora imprime sólo 34 elementos que responden a la propiedad {sport} en los objetos "athletes" de "data"
   return sportsList;
  }
  
  allSportsOnce(data); //Si no pasamos "data" como argumento de la función, ésta no correrá



  
export function filterByEvent(athletes){ 
     let eventResult = [];
     for (const i in data.athletes){
     eventResult.push(data.athletes[i].event)
     } 
     //console.log(eventResult); // Hasta aqu{i arroja los eventos deportivos repetdos
    const eventArr = new Set(eventResult);
    let eventList = [...eventArr];
    //console.log(eventList); // Ahora arroja un set único de eventos deportivos (306)
    
    return eventList;
   }
   
   filterByEvent(data);

   
  
   //OH CON RAÚL SOBRE MAPEAR LOS EVENTOS DE COMPETICIÓN POR DEPORTE
   export function getEventsBySport(sport) {
     const filteredAthletes = data.athletes.filter(function(athlete){ //filtrado por deporte
      return athlete.sport === sport
     });
     const events = filteredAthletes.map(function(athlete){ // crear un nuevo array con los resultados de filtrar los eventos de cada deporte 
      return athlete.event
     })
    
     const eventsWithoutDuplicate = new Set(events) 
     return [...eventsWithoutDuplicate]
   }
     getEventsBySport(data);
    //console.log("Filtering by Sport for Swimmig", getEventsBySport("Swimming"));
  