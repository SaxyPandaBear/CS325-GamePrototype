//load state of the game

//loadState is called from boot
myGame.Load = function(game) {};

myGame.Load.prototype = {
    
    preload: function () {
        
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
        game.load.audio();
        game.load.audio();
        game.load.audio();
        //tilemaps
    },    
    create: function () {
    
        //start the menu state
        game.state.start('menu');
    }
};