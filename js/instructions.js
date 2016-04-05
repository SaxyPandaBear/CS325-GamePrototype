//instructions state of the game
//note: can be accessed at any time
myGame.Instructions = function(game) {};

myGame.Instructions.prototype = {
    
    create: function () {
        
        //list instructions in a formatted manner, including story
        //label = fancy title for section
        //text = content
        
        //game controls
        var controlsLabel = game.add.text();
        var controlsText = game.add.text();
        
        //defines the story of the game
        var storyLabel = game.add.text();
        var storyText = game.add.text();
    }
};