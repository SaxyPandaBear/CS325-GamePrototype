//menu state of the game

//menuState is called from boot

//create the object for a MenuState
var MenuState = function () {
    Phaser.State.call(this); //create object of a Phaser State
    
    //input fields necessary for this state to function
    this.iKey = null;
};

MenuState.prototype = Object.create(Phaser.State);
MenuState.prototype.constructor = MenuState;

MenuState.prototype.create = function () {
    //the game begins when the player clicks on the screen to start
    //in here, set background image, and include game title and instructions on how to play, and 
    //instructions that indicate that clicking the mouse starts the game.

    //add game audio for this state
    //*******INSERT MUSIC HERE*******
    var music = titleMusic.play(); //plays music specified for title music
    
    //*******INSERT GAME TITLE HERE*********
    //for now let's use text, we can stylize the title in photoshop later
    //it's not important for this demo
    var titleText = game.add.text(game.world.width / 2, 80, "Exotic Petting Zoo", {font: '48px Arial', fill: '#ffffff'});

    //hitting i will pull up instructions on how to play, so check for that
    var instructionsLabel = game.add.text(80, game.world.height - 80, "Press 'I' for instructions", {font: '16px Arial', fill: '#ffffff'});
    //check for an input with the i key
    iKey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    ikey.onDown.addOnce(this.instructions, this);

    //inform the player that clicking while in this state will start the game
    var startLabel = game.add.text(game.world.width - 80, game.world.height - 80, "Click to start", {font: '16px Arial', fill: '#ffffff'});
    var mouse = game.input.activePointer;
    mouse.onDown.addOnce(this.start, this);
};

MenuState.prototype.instructions = function () {
    //starts the instructions state - can leave music as is for now
    
    //pass in the music object for the music to play for consistency sake for later reference
    //pass in iKey for the player to input it again to return to this state.
    game.state.start('Instructions', true, false, music, iKey);
};

MenuState.prototype.start = function () {
    //start the play state
    game.state.start('Play', true, false);
};