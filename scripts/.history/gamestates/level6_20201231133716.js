let level6State = {

    create: function() {
        //Adding sprites
        const background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;

        //creating UI
        mechanics.createInterface();

        //Adding texts
        mechanics.createText('Oops, nothing here :(              Level 6 will be available soon', 30, 5, 0, 100);

    },

};