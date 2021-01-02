class mainScene extends Phaser.Scene {

    constructor() {
        super({key: "mainScene"});
    }
    
    preload() {
        this.load.image('matchStick', 'assets/Phaser/matchstick.jpeg');
        this.load.image('background', 'assets/Phaser/greenBackground.jpg')
    }
    
    create() {
        
        // How far the matchsticks are placed from each other
        const matchStickOS = 100;
        // How far the left and right matchstick of the bottom row are placed from each other
        const xyOS = 50;
        
        // 
        
        this.image = this.add.image(400, 300, 'background');
        
        
        // First row of 3 match sticks 
        var i = 0;
        for(i = 0; i < 3; i++)
        {
            this.image = this.add.image(300 + i*matchStickOS, 117, 'matchStick'); 
        }
            
        // Second row of 5 match sticks
        for(i = 0; i < 5; i++)
        {
            this.image = this.add.image(200 + i*matchStickOS, 289, 'matchStick'); 
        }    
            
        // Third row of 7 match sticks
        for(i = 0; i < 7; i++)
        {
            this.image = this.add.image(100 + i*matchStickOS, 466, 'matchStick'); 
        }    
    }
}