//boot state of the game
//encapsulates the actual initialization of the game, as well as preloading all of the assets required for the game to load

//bootState called from game
var BootState = function () {
    Phaser.State.call(this);
    
    //variable fields
    //....
}

BootState.prototype = Object.create(Phaser.State);
BootState.prototype.constructor = BootState;

BootState.prototype.preload = {
    //let the player know the game is actually "loading"
    //center it and format it accordingly
    var loadingText = game.add.text(game.camera.width / 2, game.camera.height / 2, "loading...", {font: "30px Arial", fill: "#ffffff", stroke: '#000000', strokeThickness: 3});
    loadingText.anchor.setTo(0.5, 0.5);
    loadingText.fixedToCamera = true;

    //list of assets loaded in this state
    //note: don't know the actual availability of these, just outline

    //*********INSERT ASSETS HERE**********
    //animated sprites
    game.load.spritesheet('player', 'assets/sprites/player.png');
    game.load.spritesheet('cat', 'assets/sprites/cat.png');
    game.load.spritesheet('dog', 'assets/sprites/dog.png');
    game.load.spritesheet('cow', 'assets/sprites/cow.png');
    game.load.spritesheet('pig', 'assets/sprites/pig.png');
    game.load.spritesheet('lion', 'assets/sprites/lion.png');
    game.load.spritesheet('goat', 'assets/sprites/goat.png');
    game.load.spritesheet('sheep', 'assets/sprites/sheep.png');
    game.load.spritesheet('tiger', 'assets/sprites/sheep.png');
    game.load.spritesheet('dragon', 'assets/sprites/dragon.png');

    //background images
    game.load.image('boot', 'assets/images/boot-background.png');
    game.load.image('menu', 'assets/images/menu-background.png');

    //audio files
    game.load.audio('titleMusic', 'assets/audio/titleMusic.mp3'); //title screen music
    game.load.audio('zooMusic', 'assets/audio/zooMusic.mp3'); //music that plays while in the zoo area
    game.load.audio('meadowMusic', 'assets/audio/meadowMusic.mp3'); //explorable area
    game.load.audio('caveMusic', 'assets/audio/caveMusic.mp3'); //explorable area
    //.... etc.

    //tilemaps
};

BootState.prototype.create = {
    //start physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //testing whether states actually work
    game.add.text(80,80, "Boot State", {font: '16px Arial', fill: '#ffffff'});

    game.state.start('Menu', true, false);
};