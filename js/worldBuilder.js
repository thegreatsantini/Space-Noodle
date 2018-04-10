// example level
// TODO: Delete and make dynamic
var level = {
  ground: [
    { start: 0 * TILE_WIDTH, end: 3 * TILE_WIDTH },
    { start: 7 * TILE_WIDTH, end: 11 * TILE_WIDTH },
    { start: 14 * TILE_WIDTH, end: 23 * TILE_WIDTH },
    { start: 27 * TILE_WIDTH, end: 35 * TILE_WIDTH },
    { start: 38 * TILE_WIDTH, end: 40 * TILE_WIDTH },
    { start: 43 * TILE_WIDTH, end: 50 * TILE_WIDTH },
    { start: 55 * TILE_WIDTH, end: 64 * TILE_WIDTH },
    { start: 66 * TILE_WIDTH, end: 73 * TILE_WIDTH },
    { start: 75 * TILE_WIDTH, end: 80 * TILE_WIDTH },
    { start: 81 * TILE_WIDTH, end: 87 * TILE_WIDTH },
    { start: 91 * TILE_WIDTH, end: 112 * TILE_WIDTH },
  ],
  bricks: [
    // { start: { x: 10 * TILE_WIDTH, y: 12  * TILE_WIDTH }, end: 15 * TILE_WIDTH }
  ]
};


function createPlatforms(levelText) {
  var x = 0;
  var y = 0;

  level.ground.forEach(function (groundPiece) {
    while (groundPiece.start > x) {
      x += TILE_WIDTH;
    }

    // console.log(groundPiece.end);
    // console.log('x', x);
    while (x <= groundPiece.end) {
      let ground = platforms.create(x, GROUND_HEIGHT, 'tiles');
      ground.anchor.setTo(0, 0);
      x += TILE_WIDTH;
    }

    // platforms.create(232, 300, 'floatingTile')
    // platforms.create(264, 300, 'floatingTile')

  });
  // platforms.create(200, 400, 'floatingTile')
  // platforms.create(232, 400, 'floatingTile')
  // platforms.create(264, 400, 'floatingTile')
  // platforms.create(200, 400, 'floatingTile')
  // platforms.create(232, 300, 'floatingTile')
  // platforms.create(264, 300, 'floatingTile')
  // platforms.create(296, 300, 'floatingTile')
  platforms.create(3000, 0, 'finishLine')

}

function placeScenery() {
  

  level.bricks.forEach(tile => {
    var x = 0 
    while (tile.start.x > x) {
      x += TILE_WIDTH;
    }

    console.log(tile.end);
    console.log('x', x);
    while (x <= tile.end) {
      let ground = platforms.create(x, tile.start.y, 'tiles');
      ground.anchor.setTo(0, 0);
      x += TILE_WIDTH;
    }
    platforms.create(3550, 32, 'finishLine')
    // console.log('TODO: Place scenery');
  })
}