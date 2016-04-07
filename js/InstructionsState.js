//instructions state of the game
//note: can be accessed at any time
var InstructionsState = function () {
    Phaser.State.call(this);
    
    //input variable fields
    this.prevMusic = null;
    this.iKey = null;
    this.qKey = null;
};

InstructionsState.prototype = Object.call(Phaser.State);
InstructionsState.prototype.constructor = InstructionsState;

//passes in a key string for some sound asset which is used to identify which sound to play
InstructionsState.prototype.init = function(prevMusic, iKey, qKey) {
    this.prevMusic = prevMusic;
    this.iKey = iKey;
    this.qKey = qKey;
};

InstructionsState.prototype.create = function () {
    //list instructions in a formatted manner, including story
    //label = fancy title for section
    //text = content
    
    //but first, play music
    //check for null for the purposes of this rough draft (and in general)
    if (this.music != null)
        this.music = prevMusic.play();
    
    //leave the right side of the game canvas for some art image for now
    //game controls
    this.controlsLabel = game.add.text(20, 20, "Controls:", {font: '20px Arial', fill: "#ffffff"});
    this.controlsText = game.add.text(40, 60, 
    "Use the arrow keys in order to move around in the game\n" + 
    "Hit 'Q' to quit the whole demo at any point (including this screen)\n" + 
    "Hit 'E' to open up your inventory while in the game\n" + 
    "Hit 'I' to return to the Main Menu from this screen", 
    {font: '14px Arial', fill: '#ffffff'});

    //defines the story of the game
    this.storyLabel = game.add.text(20, 160, "Story:", {font: '20px Arial', fill: '#ffffff'});
    this.storyText = game.add.text(40, 190, 
    "Your beloved great-uncle has passed away and in his will\n" +
    "he has left you ownership of something peculiar...\n" +
    "    - A petting zoo?! -\n" +
    "You learn that your great-uncle used to run a\n" +
    "world-renowned exotic petting zoo, but as the\n" +
    "years progressed, the petting zoo declined in\n" +
    "its popularity. In his will, he says that you can\n" +
    "do anything you want with the property, including\n" +
    "tearing it down. In a moment of emotion, you feel\n" +
    "compelled to take it on yourself to restore the zoo\n" +
    "to its former glory... Little do you know, a large\n" +
    "corporation has their eye on your newly inherited\n" +
    "property, and are due to seize it from you if the\n" +
    "zoo continues to perform as poorly as it has.",
    {font: '12px Arial', fill: '#ffffff'});
    
    //expect an input of 'i', at which point return to the previous state
    this.iKey.onDown.addOnce(this.menu, this);
    this.qKey.onDown.addOnce(this.endGame, this);
};

InstructionsState.prototype.menu = function () {
    //return to the Menu state
    //don't need to pass information back as it'll just be recreated again
    this.game.state.start('Menu', true, false);
};

InstructionsState.prototype.endGame = function () {
    //quit the demo
    this.game.state.start("End", true, false);
}