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
    { start: 55 * TILE_WIDTH, end: 63 * TILE_WIDTH },
    { start: 65 * TILE_WIDTH, end: 65 * TILE_WIDTH },
    { start: 66 * TILE_WIDTH, end: 73 * TILE_WIDTH },
    { start: 77 * TILE_WIDTH, end: 78 * TILE_WIDTH },
    { start: 83 * TILE_WIDTH, end: 87 * TILE_WIDTH },
    { start: 91 * TILE_WIDTH, end: 112 * TILE_WIDTH }
  ],
  bricks: [
    { start: { x: 10 * TILE_WIDTH, y: 12 * TILE_WIDTH }, end: 10 * TILE_WIDTH },
    { start: { x: 18 * TILE_WIDTH, y: 10 * TILE_WIDTH }, end: 20 * TILE_WIDTH },
    { start: { x: 10 * TILE_WIDTH, y: 12 * TILE_WIDTH }, end: 13 * TILE_WIDTH },

    // Bridge
    { start: { x: 44 * TILE_WIDTH, y: 13.6 * TILE_WIDTH }, end: 49 * TILE_WIDTH },
    { start: { x: 45 * TILE_WIDTH, y: 12.6 * TILE_WIDTH }, end: 48 * TILE_WIDTH },
    { start: { x: 46 * TILE_WIDTH, y: 11.6 * TILE_WIDTH }, end: 47 * TILE_WIDTH },

    // hill
    { start: { x: 66 * TILE_WIDTH, y: 13.6 * TILE_WIDTH }, end: 73 * TILE_WIDTH },
    { start: { x: 67 * TILE_WIDTH, y: 12.6 * TILE_WIDTH }, end: 73 * TILE_WIDTH },
    { start: { x: 68 * TILE_WIDTH, y: 11.6 * TILE_WIDTH }, end: 73 * TILE_WIDTH },
    { start: { x: 69 * TILE_WIDTH, y: 10.6 * TILE_WIDTH }, end: 73 * TILE_WIDTH },
    { start: { x: 70 * TILE_WIDTH, y: 9.6 * TILE_WIDTH }, end: 73 * TILE_WIDTH },
    { start: { x: 71 * TILE_WIDTH, y: 8.6 * TILE_WIDTH }, end: 73 * TILE_WIDTH },
    { start: { x: 72 * TILE_WIDTH, y: 7.6 * TILE_WIDTH }, end: 73 * TILE_WIDTH },
    { start: { x: 73 * TILE_WIDTH, y: 6.6 * TILE_WIDTH }, end: 73 * TILE_WIDTH },
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
  });

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