import {searchOrganizations} from '../functions';
import {getLanguages, getCities} from '../data';

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
  
  test('It should return a list of organization when matched by city', () => {
    const searchCriteria = {
      city: ['York', 'north York']
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(3);
    expect(organizations[0].name).toEqual('Frontlines');
  })  

  test('It should return an empty list if not found', () => {
    const searchCriteria = {
      city: ['Nowhere']
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(0);
  })

  test('It should return a list of organization when matched by cost', () => {
    const searchCriteria = {
      cost: 'pAid'
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(7);
    expect(organizations[0].name).toEqual('Access Alliance');
  })

  test('It should return a list of organization when matched by services', () => {
    const searchCriteria = {
      serviceOffered: ['crisis support']
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(3);
    expect(organizations[2].name).toEqual('Our Lady of Victoria School');
  })

  test('It should return a list of organization when matched by population', () => {
    const searchCriteria = {
      populationServed: ["2SLGBTQ+", "Newcomers/Immigrants"]
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(7);
    expect(organizations[2].name).toEqual('Regent Park Community Health Centre');
  })

  test('It should return a list of organization when matched by language', () => {
    const searchCriteria = {
      languageProvided: "French"
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(9);
    expect(organizations[3].name).toEqual('Harriet Tubman Community Organization');
  })

});
