//end state of the game.
//elegant transition to completing the game
var EndState = function () {
    Phaser.State.call(this);
    
    //fields required for this state
    this.mouse = null;
}

EndState.prototype = Object.call(Phaser.State);
EndState.prototype.constructor = EndState;

EndState.prototype.create = function () {
    //let the player know the game has ended.
    //note: readjust position once game is running
    this.endText = game.add.text(game.world.centerX, game.world.centerY, "Game Over", {font: '32px Arial', fill: '#ffffff'});
    this.endText.anchor.setTo(0.5, 0.5);
    
    this.moreText = game.add.text(game.world.centerX, game.world.centerY + 100, "Click the screen to restart the game", {font: '20px Arial', fill: '#ffffff'});
    this.moreText.anchor.setTo(0.5);
    
    this.mouse = game.input.activePointer;
};

//NOTE: This doesn't actually work yet...
EndState.prototype.update = function () {
    //check for mouse input
    if (this.mouse.isDown){
        this.game.state.start('Boot', true, false);
    }
}