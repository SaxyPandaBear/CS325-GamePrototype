//play state of the game
//work-horse of the game

//playState called from menu
var PlayState = function () {
    Phaser.State.call(this);
    
    //input fields
    var player = null;
    
};
PlayState.prototype = Object.create(Phaser.State);
PlayState.prototype.constructor = PlayState;

PlayState.prototype.preload = {
    //test whether the game actually transitions to the play state
    game.add.text(80, 80, "Play State", {font: '16px Arial', fill: '#ffffff'});
};

PlayState.prototype.create = {
    
};

PlayState.prototype.update = {
    
};