
export const createKeyboardListener = () => {
  const state = { observers: [] };

  const subscribe = (observer) => {
    state.observers.push(observer);
  };

  const notifyAll = (command) => {
    for (let i = 0; i < state.observers.length; i++) {
      state.observers[i](command);
    }
  }

  window.addEventListener("keydown", (e) => {
    e.preventDefault();
    const command = {
      type: 'keyDown',
      key: e.key,
    }

    notifyAll(command)
  })

  return {
    subscribe,
  }
}