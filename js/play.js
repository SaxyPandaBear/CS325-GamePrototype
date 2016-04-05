//play state of the game
//work-horse of the game

//playState called from menu
myGame.Play = function(game) {};

myGame.Play.prototype = {
    preload: function () {
        //test whether the game actually transitions to the play state
        game.add.text(80, 80, "Play State", {font: '16px Arial', fill: '#ffffff'});
    },
    create: function () {},
    update: function () {},
}