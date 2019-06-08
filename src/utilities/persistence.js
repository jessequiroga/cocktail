export const supportsPersistence = () => {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  } catch (exception) {
    return false;
  }
};

export const persistCurrentState = (currentState, saveables) => {
  if (!supportsPersistence()) return;

  const saveableState = saveables.reduce((acc, saveable) => {
    acc[saveable] = currentState[saveable];
    return acc;
  }, {});

  const serializedState = JSON.stringify(saveableState);
  localStorage.setItem("state", serializedState);
};

export const loadPersistedState = () => {
  if (!supportsPersistence()) return {};

  const serializedState = localStorage.getItem("state");
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};
