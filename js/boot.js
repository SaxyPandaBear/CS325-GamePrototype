//boot state of the game

//bootState called from game
myGame.Boot = function(game) {};

myGame.Boot.prototype = {    
    create: function () {
        //start physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //testing whether states actually work
        game.add.text(80,80, "Boot State", {font: '16px Arial', fill: '#ffffff'});
        
        //start the load state
        game.state.start('load');
    }
};