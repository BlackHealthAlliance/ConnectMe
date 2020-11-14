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
      city: 'Toronto'
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(4);
  })  

  test('It should return an empty list if not found', () => {
    const searchCriteria = {
      city: 'Nowhere'
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(0);
  })

  test('It should return a list of organization when matched by cost', () => {
    const searchCriteria = {
      cost: 'pAid'
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(3);
    expect(organizations[0].name).toEqual('Access Alliance');
  })

  test('It should return a list of organization when matched by services', () => {
    const searchCriteria = {
      serviceOffered: 'peer support'
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(4);
    expect(organizations[0].name).toEqual('Across Boundaries');
  })

  test('It should return a list of organization when matched by population', () => {
    const searchCriteria = {
      populationServed: ["2SLGBTQ+", "Newcomers/Immigrants"]
    };

    const organizations = searchOrganizations(searchCriteria);
    expect(organizations.length).toEqual(3);
    expect(organizations[2].name).toEqual('Regent Park Community Health Centre');
  })

});
