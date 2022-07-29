
export const createAnimatePlayer = (animate) => {
  function animatePlayer(command) {
    const key = command.key;
    const acceptedMoves = {
      'ArrowUp': () => {
        animate(4, false)
      },
      'ArrowDown': () => {
        animate(1, false);
      },
      'ArrowLeft': () => {
        animate(1, 'left')
      },
      'ArrowRight': () => {
        animate(4, 'right')
      }
    }

    const animateFunction = acceptedMoves[key];
    if (animateFunction) {
      animateFunction();
    }
  }

  return {
    animatePlayer
  }
}
