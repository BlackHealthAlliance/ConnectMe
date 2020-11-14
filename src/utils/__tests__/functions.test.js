import {searchFunction, searchOrganizations} from '../functions';

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

  test('It should return an organization by name', () => {
    const response = getOrganization("Kennedy House Youth Services");
    console.log(response);
    // expect(response.crisis).toEqual(false);
    expect(response.languages[0]).toEqual("English");
    expect(response.address.city).toEqual("Scarborough");
    expect(response.address.postalCode).toEqual("A1B2C3");
    expect(response.address.province).toEqual("ON");
    expect(response.contact.phone).toEqual("(416) 299-3157");
    expect(response.contact.email).toEqual("info@kennedyhouse.org");
    expect(response.contact.web).toEqual("http://www.khys.org/");
    expect(response.blackLed).toEqual(false);
    expect(response.services.length).toEqual(4);
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
