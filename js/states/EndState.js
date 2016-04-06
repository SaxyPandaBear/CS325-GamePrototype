//end state of the game.
//elegant transition to completing the game
var EndState = function () {
    Phaser.State.call(this);
    
    //fields required for this state
}

EndState.prototype = Object.call(Phaser.State);
EndState.prototype.constructor = EndState;

EndState.prototype.create = function () {
    //let the player know the game has ended.
    //note: readjust position once game is running
    this.endText = game.add.text(game.centerX, game.centerY, "Game Over", {font: '20px Arial', fill: '#ffffff'});
};