//El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.
//Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener, 
//procesar y manipular datos (tus funciones).

//import athletes from './data/athletes.js';
import athletes from './data/athletes.js';
import data from './data/athletes.js';


//Esta función filtra del set los objetos "athlete" por su propiedad {sport}
export function filterBySport(sport){
    let filteredData = data.athletes.filter(function(athlete){
      return athlete.sport === sport
      });
      
      return filteredData
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
  //orenar alfabéticamente
  let orderAZ =data.athletes.sort(function(sport1, sport2){
    if (sport1.sport > sport2.sport){
      return 1;
 }
    if(sport1.sport < sport2.sport){
    return -1;
 }
     return 0; 
    })
    
  const sportsArr = new Set(sports); // Se crea una variable para asiganr un nuevo set de datos únicos
  let sportsList = [...sportsArr]; // spread operator aplicado al nuevo array "dataArrSports" 

 //console.log(sportsList); // Ahora imprime sólo 34 elementos que responden a la propiedad {sport} en los objetos "athletes" de "data"
 return sportsList;
}

allSportsOnce(data); //Si no pasamos "data" como argumento de la función, ésta no correrá




//Filtra los evento deportivos en los que los medallistas compitieron
export function filterByEvent(athletes){ 
     let eventResult = [];
     for (const i in data.athletes){
     eventResult.push(data.athletes[i].event)
     } 
     //ordenar alfabéticamente
     let orderAZ = data.athletes.sort(function(event1, event2){
      if (event1.event > event2.event){
        return 1;
   }
      if(event1.sport < event2.sport){
      return -1;
   }
       return 0; 
      })
  console.log(eventResult); // Hasta aquí arroja los eventos deportivos repetidos
   const eventArr = new Set(eventResult);
    let eventList = [...eventArr];
   console.log(eventList); // Ahora arroja un set único de eventos deportivos (306)
    
    return eventList;
   }
   
   //filterByEvent(data);

   
  
   //OH CON RAÚL SOBRE MAPEAR LOS EVENTOS DE COMPETICIÓN POR DEPORTE
   export function getEventsBySport(sport) {
     const filteredAthletes = data.athletes.filter(function(athlete){ //filtrado por deporte
      return athlete.sport === sport
     });
     const events = filteredAthletes.map(function(athlete){ // crear un nuevo array con los resultados de filtrar los eventos de cada deporte 
      return athlete.event
     })
    
     const eventsWithoutDuplicate = new Set(events) // crea un array con  datos únicos
     return [...eventsWithoutDuplicate]
   }
     getEventsBySport(data.athletes);
    //console.log("Filtering Events by Sport for Swimmig", getEventsBySport("Swimming"));
  


   //FILTRAR MEDALLISTAS POR EVENTO DEPORTIVO
  export function getMedallistByEvent(event) {
   return data.athletes.filter(function(athlete){ // se filtra por evento
    return athlete.event === event
    
   })
    /*athletes.sort((a,b) => {
      if ( a.medal < b.medal ) {
        return -1;
      }
      if ( a.medal > b.medal ){
        return 1;
      }
      return 0;
    })*/
  }

  //  getMedallistByEvent(data.athletes);
 //console.log("Getting medallist by event for Tennis", getMedallistByEvent("Table Tennis Men's Team") );
 //console.log("Getting medallist by event for Diving", getMedallistByEvent("Diving Women's Platform") );







  //FILTRAR ATLETAS POR GÉNERO
/*  export function getMedallistByGender(athlete){
    const filteredData4 = data.athletes.filter(function(athlete){
     return athlete.gender === gender
    });
 
    const medallist = filteredData3.map(function (athlete){
       return athlete.name
    })
 
    const medallistByEvent = new Set(medallist)
    return [...medallistByEvent]
   }
     getMedallistByEvent(data);

*/

 