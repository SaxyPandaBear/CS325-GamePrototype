//game is 800 x 600 pixels
var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game');

//add each state, with a convenient name tag
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('instructions', instructionsState);

//start with the boot state
game.state.start('boot');