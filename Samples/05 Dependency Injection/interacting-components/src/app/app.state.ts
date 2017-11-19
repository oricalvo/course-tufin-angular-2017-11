import {Contact} from "./models/contact";

export abstract class AppState {
  filter: string;
  contacts: Contact[];
  all: Contact[];
  refreshing: boolean;
}

const appState: AppState = {
  filter: null,
  contacts: null,
  all: null,
  refreshing: false,
};

export const APP_STATE_PROVIDER = {provide: AppState, useValue: appState};
