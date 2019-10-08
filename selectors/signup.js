const appState = state => state.signup.data;

export const makeSelectUserName = state => appState(state).username;

export const makeSelectPhone = state => appState(state).phone;

export const makeSelectPassword = state => appState(state).password;
