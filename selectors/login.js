const appState = state => state.login.data;

export const makeSelectUserName = state => appState(state).username;

export const makeSelectPassword = state => appState(state).password;
