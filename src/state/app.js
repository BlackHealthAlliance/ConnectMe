const initialState = {
  isDarkMode: false,
  searchValues: {}
};

const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
const SAVE_SEARCH_VALUES = 'SAVE_SEARCH_VALUES';

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE, isDarkMode
});

export const saveSearchValues = searchValues => ({
  type: SAVE_SEARCH_VALUES, payload: searchValues
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode };
    case SAVE_SEARCH_VALUES:
      return { ...state, searchValues: action.payload}
    default:
      return state;
  }
};

