//instructions state of the game
//note: can be accessed at any time
var InstructionsState = function () {
    Phaser.State.call(this);
    
    //input variable fields
    this.prevMusic = null;
    this.iKey = null;
}

InstructionsState.prototype = Object.call(Phaser.State);
InstructionsState.prototype.constructor = InstructionsState;

//passes in a key string for some sound asset which is used to identify which sound to play
InstructionsState.prototype.init = function(prevMusic, iKey) {
    this.prevMusic = prevMusic;
    this.iKey = iKey;
};

InstructionsState.prototype.create = function () {
    //list instructions in a formatted manner, including story
    //label = fancy title for section
    //text = content
    
    //but first, play music
    //check for null for the purposes of this rough draft (and in general)
    if (this.music != null)
        this.music = prevMusic.play();

    //let the user know how to return to the menu state
    //note: pressing 'i' returns them to the MenuState
    this.prevStateText = game.add.text();
    
    //game controls
    this.controlsLabel = game.add.text();
    this.controlsText = game.add.text();

    //defines the story of the game
    this.storyLabel = game.add.text();
    this.storyText = game.add.text();
    
    //expect an input of 'i', at which point return to the previous state
    this.iKey.onDown.addOnce(this.menu, this);
};

InstructionsState.prototype.menu = function () {
    //return to the Menu state
    //don't need to pass information back as it'll just be recreated again
    game.state.start('Menu', true, false);
};