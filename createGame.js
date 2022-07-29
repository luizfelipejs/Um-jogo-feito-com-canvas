
export const createGame = (player) => {
  const movePlayer = (command) => {
    const key = command.key;
    const withoutColissionWithHouseRight = player.x != 66 || (player.y > 176 || player.y < 112); 
    const withoutColissionWithHouseDown = player.y != 176 || (player.x > 146 || player.x < 70);
    const withoutColissionWithHouseTop = player.y != 108 || (player.x > 146 || player.x < 70);
    const withoutColissionWithHouseLeft = player.x != 146 || (player.y > 176 || player.y < 108);
    const checkColissionWithBords = () => {
      if (player.y == 40 || player.x == 42 || player.y == 404 || player.x == 404) {
        player.x = 250;
        player.y = 250;
      }
    }
    const acceptedMoves = {
      'ArrowUp': () => {
        if (withoutColissionWithHouseDown) player.y -= 2
      },
      'ArrowDown': () => {
        if (withoutColissionWithHouseTop) player.y += 2
      },
      'ArrowLeft': () => {
        if (withoutColissionWithHouseLeft) player.x -= 2
      },
      'ArrowRight': () => {
        if (withoutColissionWithHouseRight) player.x += 2
      }
    }

    const moveFunction = acceptedMoves[key];
    if (moveFunction) {
      moveFunction();
      checkColissionWithBords();
      console.log(player);
    }
  }

  return {
    movePlayer
  }
}