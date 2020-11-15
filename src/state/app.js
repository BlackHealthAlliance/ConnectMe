const initialState = {
  searchValues: {}
};

const SAVE_SEARCH_VALUES = 'SAVE_SEARCH_VALUES';
const SAVE_ORGANIZATION_DATA = 'SAVE_ORGANIZATION_DATA';

export const saveSearchValues = searchValues => ({
  type: SAVE_SEARCH_VALUES, payload: searchValues
});

export const saveOrganizationData = data => ({
  type: SAVE_ORGANIZATION_DATA, payload: data
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH_VALUES:
      return { ...state, searchValues: action.payload}
    case SAVE_ORGANIZATION_DATA:
      return { ...state, organizationData: action.payload}
    default:
      return state;
  }
};

