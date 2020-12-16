import { createSlice } from '@reduxjs/toolkit';
import { IntlActions } from 'react-redux-multilingual'
const translations= createSlice({
  name: 'Intl',
  initialState: {
    locale:'vi'
  },
  reducers: {
    changeLanguageReducer: (state) => {
      state.locale = "en"
    },
  }
});

const { reducer, actions } = translations
export const {
  changeLanguageReducer
} = actions;
export const changeLanguage = (param) => async dispatch => {
    dispatch(changeLanguageReducer(param));
}

export default reducer;
