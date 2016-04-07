//playtesting with EZGUI
var GUIState = function () {
    Phaser.State.call(this);
    
    this.playerInventory = null;
    this.animalsTamed = null;
};

GUIState.prototype = Object.call(Phaser.State);
GUIState.prototype.constructor = GUIState;

GUIState.prototype.init = function(inventory, animals) {
    this.playerInventory = inventory;
    this.animalsTamed = animals;
};

this.guiObj = {
    id: 'main',
    component: 'Window',
    header: { id: 'ttl', skin: 'blueheader', position: { x: 0, y: 0 }, height: 40, text: 'Title' },
    draggable: true,
    padding: 4,
    position: { x: 0, y: 0 },
    width: 600,
    height: 550,


    layout: [1, 3],
    children: [
        {
            component: 'Layout',
            position: { x: 0, y: 0 },
            width: 500,
            height: 140,
            layout: [2, 1],

            children: [
                  {
                      id: 'btn1',
                      text: 'btn',
                      font: {
                          size : '42px',
                          family: 'Arial'
                      },
                      component: 'Button',
                      skin: 'bluebutton',
                      position: 'center',
                      width: 190,
                      height: 80
                  },
                  {
                      component: 'Layout',
                      position: { x: 0, y: 0 },
                      width: 250,
                      height: 140,
                      layout: [1, 4],
                      children: [
                          { id: 'radio1', text: 'choice 1', component: 'Radio', group: 1, position: 'center', width: 30, height: 30 },
                          { id: 'radio2', text: 'choice 2', component: 'Radio', group: 1, position: 'center', width: 30, height: 30 },
                          { id: 'radio3', text: 'choice 3', component: 'Radio', group: 1, position: 'center', width: 30, height: 30 },
                          { id: 'radio4', text: 'choice 4', component: 'Radio', group: 1, position: 'center', width: 30, height: 30 }
                      ]
                  }
            ]
        },

    {
        id: 'hlist1',
        component: 'List',

        padding: 3,
        position: 'center',
        width: 400,
        height: 150,
        layout: [4, null],
        children: [
            { id: 'sc1', component: 'Button', position: 'center', width: 90, height: 120 },
            null,
            { id: 'sc2', component: 'Button', position: 'center', width: 90, height: 120 },
            { id: 'sc3', component: 'Button', position: 'center', width: 90, height: 120 },
            { id: 'sc4', component: 'Button', position: 'center', width: 90, height: 120 },
            { id: 'sc5', component: 'Button', position: 'center', width: 90, height: 120 }
        ]
    },
      {
          id: 'btn2',
          component: 'Checkbox',

          position: 'center',
          text: 'Checkbox',
          width: 30,
          height: 30

      }
    ]
};

GUIState.prototype.create = function () {
    EZGUI.renderer = game.renderer;
    
    EZGUI.Theme.load(['assets/metalworks-theme/metalworks-theme.json'], function () {
        this.guiContainer = EZGUI.create(guiObj, 'metalworks');
        
        EZGUI.components.btn1.on('click', function (event) {
            console.log('clicked', event);
        });
    });
};