import {searchFunction} from '../functions';

describe('functions - searchFunction', () => {
  beforeEach(() => {
    // Mock alert
    window.alert = jest.fn();
  })

  test('It should return a value', () => {
    const response = searchFunction("testValue1", "test2");
    expect(response).toEqual("test2");
  });
});
