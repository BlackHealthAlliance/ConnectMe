const initialState = {
  searchValues: {}
};

const SAVE_SEARCH_VALUES = 'SAVE_SEARCH_VALUES';

export const saveSearchValues = searchValues => ({
  type: SAVE_SEARCH_VALUES, payload: searchValues
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH_VALUES:
      return { ...state, searchValues: action.payload}
    default:
      return state;
  }
};

