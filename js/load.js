//load state of the game

//loadState is called from boot
var loadState = {
    
    preload: function () {
        
        //let the player know the game is actually "loading"
        //center it and format it accordingly
        var loadingText = game.add.text(game.camera.width / 2, game.camera.height / 2, "loading...", {font: "30px Arial", fill: "#ffffff", stroke: '#000000', strokeThickness: 3});
        loadingText.anchor.setTo(0.5, 0.5);
        loadingText.fixedToCamera = true;
        
        //list of assets loaded in this state
        //*********INSERT ASSETS HERE**********
    };
    
    create: function () {
    
        //start the menu state
        game.state.start('menu');
    };
};