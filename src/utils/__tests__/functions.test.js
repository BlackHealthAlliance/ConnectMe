import {searchFunction, searchOrganizations} from '../functions';
import {getCIties, getLanguages} from '../data';

describe('functions - searchFunction', () => {
  beforeEach(() => {
    // Mock alert
    window.alert = jest.fn();
  })

  test('It should return a list of cities', () => {
    const response = getCities();
    const type = typeof response;
    expect(type).toEqual("object");
  });

  test('It should return a list of languages', () => {
    const response = getLanguages();
    expect(response[0]).toEqual("English");
  });
  
  /*
  test('It should return a value', () => {
    const response = searchFunction("testValue1", "test2");
    expect(response).toEqual("test2");
  });
  */

  test('It should return a list of organization', () => {
    const searchCriteria = {
      city: 'Toronto'
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(2);
  })  
});
