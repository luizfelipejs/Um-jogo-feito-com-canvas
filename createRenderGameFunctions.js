const createImage = (src) => {
  const image = new Image();
  image.src = src;
  return image
}

export const createRenderGameFunctions = () => {

  let currentPlayerSpriteNumberWidth = 0;
  let currentPlayerSpriteNumberHeight = 0;

  const blocks = {
    '1': {x: 0, y: 0}
  }


  const renderGame = (ctx, player) => {
    const map = createImage('map.png');
    const playerImage = createImage('player.png');
    let playerWidth = playerImage.width / 15;
    let playerHeight = playerImage.height / 10;
    let xPositionSlice = Math.floor(currentPlayerSpriteNumberWidth / 4) * playerWidth;
    let yPositionSlice = playerHeight * currentPlayerSpriteNumberHeight;

    map.onload = () => {
      ctx.drawImage(map, 0, 0);
    }
    playerImage.onload = () => {
      let playerWidth = playerImage.width / 15;
      let playerHeight = playerImage.height / 10;
      let xPositionSlice = playerImage.width * currentPlayerSpriteNumberWidth;
      let yPositionSlice = playerImage.height * currentPlayerSpriteNumberHeight;

      ctx.drawImage(
        playerImage,
        xPositionSlice,
        yPositionSlice,
        playerWidth,
        playerHeight,
        player.x,
        player.y,
        playerWidth,
        playerHeight
      );
    }
    
    ctx.clearRect(0, 0, 480, 480)
    // desenha blocos de colisão

    // desenha cenario
    ctx.drawImage(map, 0, 0)
    ctx.drawImage(
      playerImage,
      xPositionSlice,
      yPositionSlice,
      playerWidth,
      playerHeight,
      player.x,
      player.y,
      playerWidth,
      playerHeight
    );


    // ctx.fillStyle = 'red'
    // ctx.fillRect(85, 110, 70, 80)

    requestAnimationFrame(() => renderGame(ctx, player,))
  }

  const animate = (spriteNumberHeight, directionLeftOrRight) => {
    currentPlayerSpriteNumberHeight = spriteNumberHeight;
    currentPlayerSpriteNumberWidth++

    if (directionLeftOrRight == false) {
      if (currentPlayerSpriteNumberWidth > 24) {
        currentPlayerSpriteNumberWidth = 0;
      }
    }
    if (directionLeftOrRight === 'left' && currentPlayerSpriteNumberWidth < 32) {
      currentPlayerSpriteNumberWidth = 32
    }
    if (directionLeftOrRight === 'right' && currentPlayerSpriteNumberWidth < 32) {
      currentPlayerSpriteNumberWidth = 32
    }
    if (currentPlayerSpriteNumberWidth == 32 && directionLeftOrRight == 'left') {
      currentPlayerSpriteNumberWidth++
    }
    if (currentPlayerSpriteNumberWidth == 56) currentPlayerSpriteNumberWidth = 32;
   
  }

  return {
    renderGame, animate
  }

}