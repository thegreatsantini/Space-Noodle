// example level
// TODO: Delete and make dynamic
var level = {
  ground: [
    { start: 0 * TILE_WIDTH, end: 10 * TILE_WIDTH },
    { start: 12 * TILE_WIDTH, end: 15 * TILE_WIDTH }
  ],
  bricks: [
    { start: { x: 10, y: 2 }, end: 5 }
  ]
};


function createPlatforms(levelText) {
  var x = 0;
  var y = 0;

  level.ground.forEach(function (groundPiece) {

    console.log(groundPiece.end);
    console.log('x', x);

    while (x <= groundPiece.end) {
      let ground = platforms.create(x, GROUND_HEIGHT, 'tiles');
      ground.frame = 0;
      ground.scale.setTo(2);
      ground.anchor.setTo(0, 0);
      x += TILE_WIDTH;
    }

    if (groundPiece.start <= x) {
      x += TILE_WIDTH;
    }
    
    // platforms.create(232, 300, 'floatingTile')
    // platforms.create(264, 300, 'floatingTile')

  });
  platforms.create(200, 300, 'floatingTile')
  platforms.create(232, 300, 'floatingTile')
  platforms.create(264, 300, 'floatingTile')
  
  console.log('Want to turn of collision on bottom of bricks');
}

function placeScenery() {
  console.log('TODO: Place scenery');
}
