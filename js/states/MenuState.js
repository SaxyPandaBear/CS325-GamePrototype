//menu state of the game

//menuState is called from boot

//create the object for a MenuState
var MenuState = function () {
    Phaser.State.call(this); //create object of a Phaser State
    
    //input fields necessary for this state to function
    this.iKey = null;
    this.qKey = null;
    this.music = null;
    this.mouse = null;
};

MenuState.prototype = Object.call(Phaser.State);
MenuState.prototype.constructor = MenuState;

MenuState.prototype.preload = function () {
    //load in audio for the menu
    //this.music = this.game.load.audio(insertStuff)
}

MenuState.prototype.create = function () {
    //the game begins when the player clicks on the screen to start
    //in here, set background image, and include game title and instructions on how to play, and 
    //instructions that indicate that clicking the mouse starts the game.

    //add game audio for this state
    //*******INSERT MUSIC HERE*******
    //this.music = titleMusic.play(); //plays music specified for title music
    
    //*******INSERT GAME TITLE HERE*********
    //for now let's use text, we can stylize the title in photoshop later
    //it's not important for this demo
    this.titleText = game.add.text(game.world.centerX, 80, "Exotic Petting Zoo", {font: '48px Arial', fill: '#ffffff'});
    this.titleText.anchor.setTo(0.5);

    //hitting i will pull up instructions on how to play, so check for that
    this.instructionsLabel = game.add.text(40, game.world.height - 80, "Press 'I' for instructions", {font: '16px Arial', fill: '#ffffff'});
    //check for an input with the i key or q key
    this.iKey = game.input.keyboard.addKey(Phaser.Keyboard.I);
    this.qKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);

    //inform the player that clicking while in this state will start the game
    this.startLabel = game.add.text(game.world.width - 140, game.world.height - 80, "Click to start", {font: '16px Arial', fill: '#ffffff'});
    this.mouse = game.input.activePointer;
};

MenuState.prototype.update = function () {
    if (this.mouse.isDown){
        //start the play state (the main game)
        this.game.state.start('Play', true, false);
    }
    
    if (this.iKey.isDown) {
        //transition to instructions state
        //pass in the music object for the music to play for consistency sake for later reference
        //pass in iKey for the player to input it again to return to this state.
        this.game.state.start('Instructions', true, false, this.music, this.iKey, this.qKey);
    }
    
    if (this.qKey.isDown) {
        //quit the game
        this.game.state.start('End', true, false);
    }
};