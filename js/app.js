var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, "game",
    { init: init, preload: preload, create: create, update: update, render: render });

var winMessage;
var gameTile = 'Space Noodle Challenge';

function init() {
    game.world.resize(WORLD_WIDTH, WORLD_HEIGHT);

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 750;
    game.physics.arcade.skipQuadTree = false;
}

function preload() {
    //Load background
    game.load.image('background', '../img/background.png');

    // Load Flag
    game.load.spritesheet('finishLine', '../img/castle.png', 311, 494)

    //Load platforms/scenery
    game.load.image('tiles', '../img/tilesheet.png');

    //Load characters
    game.load.spritesheet('spaceNoodle', '../img/santa.png', 16, 16);

    // Load Floating Tiles
    game.load.spritesheet('floatingTile', '../img/tilesheet.png');

}

function create() {
    background = game.add.tileSprite(0, 0, WORLD_WIDTH, WORLD_HEIGHT, 'background');
    background.fixedToCamera = false;

    platforms = game.add.physicsGroup();
    placeScenery();
    createPlatforms('level1_1');


    platforms.setAll('body.allowGravity', false);
    platforms.setAll('body.immovable', true);

    player = game.add.sprite(2000, 47, 'spaceNoodle');
    winMessage = game.add.text(player.position.x + 100, game.world.centerY - 100, 'Use the arrow keys to move', { font: '30px Arial', fill: 'white' });
    winMessage += game.add.text(player.position.x + 100, game.world.centerY - 150, 'Click space to jump', { font: '30px Arial', fill: 'white' })



    // player.anchor.set(0.5) NOT WORKINg

    game.physics.arcade.enable(player);
    // player.gravity.y = true;
    // player.body.setSize(32, 45, 0, 0);
    player.body.setSize(16, 16);
    player.scale.setTo(2);
    player.anchor.setTo(0.5, 0.5)
    player.facing = 'right';
    player.jumping = false;



    // Draw castle 
    platforms.create(3550, 32, 'finishLine')

    // ledge.setAll('body.allowGravity', false);


    player.animations.add('left', [1, 2, 3, 4, 5], 8, true);
    player.animations.add('right', [1, 2, 3, 4, 5], 10, true);
    player.animations.add('jumpLeft', [5], 8, true);
    player.animations.add('jumpRight', [5], 8, true);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();
}

function update() {

    game.physics.arcade.collide(player, platforms, collidePlatform, null, this);

    //Detect if you fell down a hole
    if (player.body.bottom >= game.world.bounds.bottom) {
        fellDown();
        return;
    }
    // stop at left wall
    else if (player.body.x < 0) {
        player.body.x = 0;
        player.body.velocity.x = 0;
    }
    // Figure out
    else if (player.body.x + player.body.width >= game.world.bounds.right) {
        player.body.x -= 25;
        player.body.velocity.x = 0;
    }
    // figure out
    else if (player.body.y + (player.body.height * 1.5) < 0) {
        player.body.y += 25;
        player.body.velocity.y = 0;
    }

    //Jumping
    if (player.jumping) {
        if (player.facing == 'left') {
            player.play('jumpLeft');
        }
        else {
            player.play('jumpRight');
        }
    }
    else {
        player.body.velocity.x = 0;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        if (!player.jumping) {
            player.jumping = true;
            player.body.velocity.y = -400;
        }
    }

    if (cursors.left.isDown) {
        player.body.velocity.x = -200;
        player.facing = 'left';
        player.scale.x = -2
        if (!player.jumping) {
            player.play('left');
        }
    }
    else if (cursors.right.isDown) {
        player.body.velocity.x = 200;
        player.facing = 'right';
        player.scale.x = 2
        if (!player.jumping) {
            player.play('right');
        }
    }
    else {
        if (!player.jumping) {
            player.animations.stop();

            if (player.facing === 'left') {
                player.frame = 15;
            }
            else {
                player.frame = 16;
            }
        }
    }
}

function render() {
    // game.debug.bodyInfo(layer);
    // game.debug.body(player);

}

function didWin() {
    console.log(counter)
    clearInterval(counter);
    winMessage = game.add.text(player.position.x - 100, game.world.centerY, "You survived ", { font: '30px Arial', fill: 'white' });
    winMessage += game.add.text(player.position.x - 100, game.world.centerY + 100, gameTile, { font: '30px Arial', fill: 'white' })
    game.paused = true
}

function collidePlatform(player, platform) {
    // console.log(player.position.x)
    if (player.position.x >= 2900) {
        didWin()
    }


    //Cancel jump event only if player is on top of platform
    if (player.body.y + player.body.height <= platform.body.y) {
        console.log('app.js:153 What do?')
        player.jumping = false;
    }
}

function fellDown() {
    player.kill();
    gameOver = true;
    winMessage = game.add.text(player.position.x, game.world.centerY, 'YOU LOSE', { font: '30px Arial', fill: 'white' })
    console.log("fell down a hole");
    console.log('TODO: Gameover logic');
}

let timer = 0;
var counter;


function startTimer(e) {
    if (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 32) {
        counter = setInterval(() => {
            console.log(timer)
            timer++
        }, 1000)
    }
}

window.addEventListener('keydown', (e) => {
    startTimer(e)
})