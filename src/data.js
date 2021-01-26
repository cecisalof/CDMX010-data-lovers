//El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.
//Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener, 
//procesar y manipular datos (tus funciones).

import data from './data/athletes.js';

//let arrayAthletes = data.athletes;


/*
for(const key in data.athletes){
  // console.log('athletes name', data.athletes[key].name);
   console.log('sport', data.athletes[key].sport);
 }
  
export default data  

 */

//Esta función filtra del set los objetos "athlete" por su propiedad {sport}
 export function filterBySport(sport){
    let filteredData1 = data.athletes.filter(function(athlete){
      return athlete.sport === sport
      });
      
      return filteredData1
    }
//console.log("Filtering by Sport for Volleyball", filterBySport("Volleyball"));



   function allSportsOnce(athletes){ //athletes como parámetros
    let sports = []; // Un array vacío en el que se añadirán los elementos que resulten del método push.
    for(const i in data.athletes){ // un loop sobre todo el array de objetos "athletes" en "data" 
      sports.push(data.athletes[i].sport) // por el nombre del array, se aplica el método .push y dentro del paréntesis van los elementos que se
                                          //añadirán al array. En este caso el lenght del array "sports" es 0, por lo que se crea 
                                            // con el loop que itera sobre data.athletes.sport y añade los elemntos a "sports"
   }
   //console.log(sports);//Hasta aquí imprime 2023 objetos "athletes"
    const dataArrSports = new Set(sports); // Se crea una variable para asiganr un nuevo set de datos únicos
   let sportsList = [...dataArrSports]; // spread operator aplicado al nuevo array "dataArrSports" 
   console.log(sportsList); // Ahora imprime sólo 34 elementos que responden a la propiedad {sport} en los objetos "athletes" de "data"
   return sportsList;
}
  allSportsOnce(data); //Si no pasamos "data" como argumento de la función, ésta no correrá



  
  