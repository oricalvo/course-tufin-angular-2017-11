import {createStore, Dispatch, Reducer, Unsubscribe, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

export interface AppState {
  contacts: Contact[];
  counter: number;
}

const initialState: AppState = {
  contacts: null,
  counter: 0,
};

export interface Contact {
  id: number;
  name: string;
}

function setContacts(state: AppState, contacts: Contact[]): AppState {
  if(state.contacts) {
    return state;
  }

  const newState: AppState = {
    ... state,
    contacts: contacts,
  };

  return newState;
}

const rootReducer = combineReducers(r1, r2);

function rootReducer(state: AppState, action): AppState {
  if(action.type == "SET_CONTACTS") {
    return setContacts(state, action.contacts);
  }
  else if(action.type == "INC") {
    return {
      ... state,
      counter: state.counter + 1,
    }
  }
  else if(action.type == "DEC") {
    return {
      ... state,
      counter: state.counter - 1,
    }
  }

  return state;
}

const appStore = createStore(rootReducer, initialState, applyMiddleware(thunk));

export abstract class AppStore {
  dispatch: Dispatch<AppState>;
  abstract getState(): AppState;
  abstract subscribe(listener: () => void): Unsubscribe;
  abstract replaceReducer(nextReducer: Reducer<AppState>): void;
}

export const APP_STORE_PROVIDER = {
  provide: AppStore,
  useValue: appStore,
};
