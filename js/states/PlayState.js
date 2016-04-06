//play state of the game
//work-horse of the game

//playState called from menu
var PlayState = function () {
    Phaser.State.call(this);
    
    //input fields
    this.player = null;
    this.endGame = false; //bool to let the game know to transition to end state
    
};
PlayState.prototype = Object.call(Phaser.State);
PlayState.prototype.constructor = PlayState;

PlayState.prototype.preload = function () {
    //test whether the game actually transitions to the play state
    this.game.add.text(80, 80, "Play State", {font: '16px Arial', fill: '#ffffff'});
};

PlayState.prototype.create = function () {
    
};

PlayState.prototype.update = function () {
    
    
    
    
    
    
    
    
    if (this.endState) {
        this.game.state.start('End', true, false);
    }
};