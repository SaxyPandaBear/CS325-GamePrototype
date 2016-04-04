//boot state of the game

//bootState called from game
var bootState = {
    
    create: function () {
        //start physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //start the load state
        game.state.start('load');
    };
};