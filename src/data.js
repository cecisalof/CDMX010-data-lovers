import athletes from './data/athletes.js';
import data from './data/athletes.js'
/*
for(const key in data.athletes){
  // console.log('athletes name', data.athletes[key].name);
   console.log('sport', data.athletes[key].sport);
 }
  
export default data  

 */
export function filterBySport(sport){
   const filteredData = data.athletes.filter(function(athlete){
       return athlete.sport === sport
   })
   
    return filteredData
}
 
export function filterByEvent(athletes){
 //const filteredData2 = data.athletes.filter(function(athlete){
   //  return athlete.event === event
  console.log(athletes); 
  let eventResult = [];
  for (const i in athletes.athletes){
  eventResult.push(athletes.athletes[i].event)
  } 
 console.log(eventResult);
 const eventArr = new Set(eventResult);
 let eventList = [...eventArr];
 console.log(eventList);
 return eventList;
}
filterByEvent(athletes);

//const sport = filterBySport("Swimming")
//const event = filterByEvent( "Swimming Men's 100 metres Freestyle")
 
//console.log("calling filterBySport for Swimming", filterBySport("Swimming"))
//console.log("calling filterByEvent for  Swimming Men's 100 metres Freestyle", filterByEvent("Swimming Men's 100 metres Freestyle"))
 

 
export function sports(athletes) {
 let sports = [];
 for (const i in athletes){
   sports.push(athletes[i].sport)
 }
 const dataArr = new Set(sports);
 let sportsCards = [...dataArr];
 console.log(sportsCards);
 return sportsCards;
}

