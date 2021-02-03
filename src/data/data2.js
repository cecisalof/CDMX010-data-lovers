
import data from './data/athletes.js';


export function allMedallistOnce(event){
    const filteredData3 = data.athletes.filter(function(athlete){
     return athlete.event === event
    });
    const medallist = filteredData3.map(function (athlete){
       return athlete.name
    })
    const medallistByEvent = new Set(medallist)
    return [...medallistByEvent]
   }
    getMedalListByEvent(data);
   //console.log("Getting medallist by event for Tennis", getMedalListByEvent("Table Tennis Men's Team") );
   //console.log("Getting medallist by event for Diving", getMedallistByEvent("Diving Women's Platform") );
 