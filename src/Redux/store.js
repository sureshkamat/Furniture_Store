import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
const store = createStore(reducer,applyMiddleware(thunk));





export { store };


if (window.Cypress) {
  window.reduxStore = store;
}
