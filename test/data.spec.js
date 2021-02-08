import {getEventsBySport, getMedallistByEvent} from '../src/data.js';

//describe crea un bloque para agrupar pruebas relacionadas. No es obligatorio.
//test tiene su alias "it", test el el método que se encarga de ejecutar la prueba.
// expect es la expectativa de test, es una función 
//to be es el resultado que esperamos del test


describe('Testing filters by sport to get a list of olympic events', () => {
  it('should be a function', () => {
    const type = typeof getEventsBySport
    expect(type).toBe('function');
  });
});

  it('should return 5 olympic events for Tennis sport filter', () => {
    const result = getEventsBySport("Tennis")
    const expectedResult = ["Tennis Women's Doubles", "Tennis Men's Singles", "Tennis Mixed Doubles", "Tennis Men's Doubles", "Tennis Women's Singles"]
    expect(result).toStrictEqual(expectedResult);
  });

describe('Filtering medallist by event', () => {
   it('should return the list of medallist of an specific event and sport', () => {
    const result = getMedallistByEvent("Tennis Women's Doubles")
    const expectedResult =  [
      {
        name: 'Timea Bacsinszky',
        gender: 'F',
        height: '170',
        weight: '62',
        sport: 'Tennis',
        team: 'Switzerland',
        noc: 'SUI',
        age: 27,
        event: "Tennis Women's Doubles",
        medal: 'Silver'
      },
      {
        name: 'Martina Hingis (-Hutin)',
        gender: 'F',
        height: '170',
        weight: '59',
        sport: 'Tennis',
        team: 'Switzerland',
        noc: 'SUI',
        age: 35,
        event: "Tennis Women's Doubles",
        medal: 'Silver'
      },
      {
        name: 'Yekaterina Valeryevna Makarova',
        gender: 'F',
        height: '176',
        weight: '65',
        sport: 'Tennis',
        team: 'Russia-2',
        noc: 'RUS',
        age: 28,
        event: "Tennis Women's Doubles",
        medal: 'Gold'
      },
      {
        name: 'Lucie afov',
        gender: 'F',
        height: '177',
        weight: '65',
        sport: 'Tennis',
        team: 'Czech Republic-1',
        noc: 'CZE',
        age: 29,
        event: "Tennis Women's Doubles",
        medal: 'Bronze'
      },
      {
        name: 'Barbora Strcov (-Zhlavov)',
        gender: 'F',
        height: '164',
        weight: '60',
        sport: 'Tennis',
        team: 'Czech Republic-1',
        noc: 'CZE',
        age: 30,
        event: "Tennis Women's Doubles",
        medal: 'Bronze'
      },
      {
        name: 'Yelena Sergeyevna Vesnina',
        gender: 'F',
        height: '180',
        weight: '60',
        sport: 'Tennis',
        team: 'Russia-2',
        noc: 'RUS',
        age: 30,
        event: "Tennis Women's Doubles",
        medal: 'Gold'
      }
    ]

    expect(result).toEqual(expect.arrayContaining(expectedResult))
   })
});

