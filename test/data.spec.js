import { filterBySport, data } from '../src/data.js';


describe('filterBySport', () => {
  it('is a function', () => {
    expect(typeof filterBySport().toBe('function'));
  });

  it('returns `filterBySport`', () => {
    expect(filterBySport()).toBe('true');
  });
});


/*describe('anotherExample', () => {

  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
