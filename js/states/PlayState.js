//play state of the game
//work-horse of the game

//playState called from menu
var PlayState = function () {
    Phaser.State.call(this);
    
    //input fields
    this.player = null;
    this.endGame = false; //bool to let the game know to transition to end state
    this.qKey = null; //use to terminate the game
    this.cursors = null; //arrow keys
    this.uniqueID = 0;
    this.animalsCaptured = false;
    this.dogCaptured = false;
    this.catCaptured = false;
    
};
PlayState.prototype = Object.call(Phaser.State);
PlayState.prototype.constructor = PlayState;

PlayState.prototype.preload = function () {    
    //load assets
    //*********INSERT ASSETS HERE**********
    //animated sprites
    
    game.load.image('player', 'assets/sprites/player.png'); //note, use a sprite for now so we don't have to worry so much about animation
    
    //they should be 32x32
    game.load.spritesheet('animals', 'assets/sprites/animals.png', 32, 32);
    
    game.load.image('fish-cat', 'assets/sprites/fish.png');
    game.load.image('bone-dog', 'assets/sprites/bone.png');
    
    /*
    game.load.spritesheet('cow', 'assets/sprites/cow.png');
    game.load.spritesheet('pig', 'assets/sprites/pig.png');
    game.load.spritesheet('lion', 'assets/sprites/lion.png');
    game.load.spritesheet('goat', 'assets/sprites/goat.png');
    game.load.spritesheet('sheep', 'assets/sprites/sheep.png');
    game.load.spritesheet('tiger', 'assets/sprites/sheep.png');
    game.load.spritesheet('dragon', 'assets/sprites/dragon.png');
    */
    //background images
    //game.load.image('boot', 'assets/images/boot-background.png');
    //game.load.image('menu', 'assets/images/menu-background.png');

    //audio files
    //game.load.audio('titleMusic', 'assets/audio/titleMusic.mp3'); //title screen music
    //game.load.audio('zooMusic', 'assets/audio/zooMusic.mp3'); //music that plays while in the zoo area
    //game.load.audio('meadowMusic', 'assets/audio/meadowMusic.mp3'); //explorable area
    //game.load.audio('caveMusic', 'assets/audio/caveMusic.mp3'); //explorable area
    //.... etc.

    //tilemaps
    
};

PlayState.prototype.create = function () {
    this.qKey = game.input.keyboard.addKey(Phaser.Keyboard.Q); //add 'q'
    this.cursors = this.input.keyboard.createCursorKeys(); //arrow key input
    
    //add the player sprite and define their attributes
    this.player = this.add.sprite(this.game.world.width / 2, this.game.world.height / 2, 'player');
    this.physics.arcade.enable(this.player);
    this.player.inventory = []; //an array of Item objects
    this.player.tamedAnimals = new Array(0); //an array of animals that are tamed
    this.player.checkWorldBounds = true;
    this.player.enableBody = true;
    this.player.body.collideWorldBounds = true;
    
    //Animals in this "region"
    this.cat = this.add.sprite(game.world.width - 100, 40, 'animals', 16);
    this.physics.arcade.enable(this.cat);
    this.cat.name = 'cat';
    this.cat.tamed = false;
    this.cat.tamedItem = 'fish-cat'; //key for the name of the item that tames this animal
    this.cat.checkWorldBounds = true;
    this.cat.enableBody = true;
    this.cat.body.collideWorldBounds = true;
    this.cat.scale.x += 1;
    this.cat.scale.y += 1;
    this.cat.animations.add('move', [15,16,17], 10, true);
    this.cat.animations.play('move');
    
    this.dog = this.add.sprite(game.world.width - 100, game.world.height - 40, 'animals', 13);
    this.physics.arcade.enable(this.dog);
    this.dog.tamed = false;
    this.dog.tamedItem = 'bone-dog'; //key for the name of the item that tames this animal
    this.dog.checkWorldBounds = true;
    this.dog.enableBody = true;
    this.dog.body.collideWorldBounds = true;
    this.dog.scale.x += 1;
    this.dog.scale.y += 1;
    this.dog.animations.add('move', [12,13,14], 5, true);
    this.dog.animations.play('move');
    
    //Items used
    //define our items that we are using and give them properties that they need
    //need: flag for whether the item has been picked up
    this.bone = game.add.sprite(100, 40, 'bone-dog');
    this.physics.arcade.enable(this.bone);
    this.bone.taken = false;
    this.bone.checkWorldBounds = true;
    this.bone.enableBody = true;
    this.bone.body.collideWorldBounds = true;
    
    this.fish = game.add.sprite(100, game.world.height - 40, 'fish-cat');
    this.physics.arcade.enable(this.fish);
    this.fish.taken = false;
    this.fish.checkWorldBounds = true;
    this.fish.enableBody = true;
    this.fish.body.collideWorldBounds = true;
};

PlayState.prototype.update = function () {
    //player vs items
    //overlapping with an item "picks up" the item
    this.physics.arcade.overlap(this.player, this.bone, function(player, bone) {
        player.inventory.push(bone.key);
        bone.kill();
    }, null, this);
    this.physics.arcade.overlap(this.player, this.fish, function(player, fish) {
        player.inventory.push(fish.key);
        fish.kill();
    }, null, this);
    
    //players should collide with animals, but only if they don't have the item necessary
    
    //cat
    //first function: what happens if the two objects overlap
    //second function: only allows the two objects to overlap if this returns true
    this.physics.arcade.overlap(this.player, this.cat, 
        function() {
            this.player.tamedAnimals.push(this.cat.key); //push the key for the animal to the array
            this.catCaptured = true;
            this.cat.kill();
    },
        function() {
            return this.player.inventory.includes('fish-cat');
    }, this);
    
    //dog
    //first function: what happens if the two objects overlap
    //second function: only allows the two objects to overlap if this returns true
    this.physics.arcade.overlap(this.player, this.dog, 
        function() {
            this.player.tamedAnimals.push(this.dog.key); //push the key for the animal to the array
            this.dogCaptured = true;
            this.dog.kill();
    },
        function() {
            return this.player.inventory.includes('bone-dog');
    }, this);
    
    this.animalsCaptured = this.dogCaptured && this.catCaptured;
    
    //end the game demo if both animals are captured
    /* breaks demo
    if (this.animalsCaptured){
        this.game.state.start('End', true, false);
    }
    */
    //check collision for objects and animals
    this.physics.arcade.collide(this.cat, this.bone);
    //this.physics.arcade.collide(this.cat, this.fish); - let the correct animal 'consume' their taming object to not allow the player to tame them
    //this.physics.arcade.collide(this.dog, this.bone); - let the correct animal 'consume' their taming object to not allow the player to tame them
    this.physics.arcade.collide(this.dog, this.fish);
    
    
    //player movement
    if (this.cursors.up.isDown) {
        this.player.body.velocity.y = -200;
    }
    
    else if (this.cursors.down.isDown) {
        this.player.body.velocity.y = 200;
    }
    
    else {
        this.player.body.velocity.y = 0;
    }
    
    if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -200;
    }
    
    else if (this.cursors.right.isDown) {
        this.player.body.velocity.x = 200;
    }
    
    else {
        this.player.body.velocity.x = 0;
    }
    
    
    //this is for the later development of the game, but for the purposes of this demo we will use a keyboard input 'q' 
    if (this.qKey.isDown) {
        this.endState = true;
    }
    
    if (this.endState) {
        this.game.state.start('End', true, false);
    }
    
    
};

//random x value to spawn items/animals
PlayState.prototype.randomX = function () {
    return 20 + (Math.random() * 600);
};

//random y value to spawn items/animals
PlayState.prototype.randomY = function () {
    return 20 + (Math.random() * 400);
};