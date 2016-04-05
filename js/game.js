//game is 800 x 600 pixels
//initial main game state that starts it all
var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game');

//*****REFERENCE*****
/* Framework for making a state
var myGame = function () {
    Phaser.State.call(this);
};

myGame.prototype = Object.create(Phaser.State);
myGame.prototype.constructor = myGame;

myGame.prototype.create = function() {
    if (someConditional)
        game.state.start('Boot', true, false);
}
*/

//add each state, with a convenient name tag
game.state.add('Boot', new BootState());
game.state.add('Menu', new MenuState());
game.state.add('Instructions', new InstructionsState());
game.state.add('Play', new PlayState());

//start with the boot state
//start(key, keepCache, keepWorld, paramsForState) -> using params requires the init() function in the next state
game.state.start('Boot', true, false);