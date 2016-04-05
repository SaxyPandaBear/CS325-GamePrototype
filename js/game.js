//game is 800 x 600 pixels
var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game');

var myGame = {
    _WIDTH: 800,
    _HEIGHT: 600,
    Player: null,
    Boot: null,
    Load: null,
    Menu: null,
    Instructions: null,
    Play: null
};

//add each state, with a convenient name tag
game.state.add('Boot', myGame.Boot);
game.state.add('Load', myGame.Load);
game.state.add('Menu', myGame.Menu);
game.state.add('Instructions', myGame.Instructions);
game.state.add('Play', myGame.Play);

//start with the boot state
game.state.start('Boot');