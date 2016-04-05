//instructions state of the game
//note: can be accessed at any time
var InstructionsState = function () {
    Phaser.State.call(this);
    
    //input variable fields
    this.prevMusic = null;
    this.iKey = null;
}

InstructionsState.prototype = Object.create(Phaser.State);
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
    var music = prevMusic.play();

    //let the user know how to return to the menu state
    //note: pressing 'i' returns them to the MenuState
    var prevStateText = game.add.text();
    
    //game controls
    var controlsLabel = game.add.text();
    var controlsText = game.add.text();

    //defines the story of the game
    var storyLabel = game.add.text();
    var storyText = game.add.text();
    
    //expect an input of 'i', at which point 
};