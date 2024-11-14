// src/scenes/BootScene.js
class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        this.load.image('car', '../assets/images/car.png');
        this.load.image('house', '../assets/images/house.png');
        this.load.image('road', '../assets/images/road.png');
        // Load more assets as needed
    }

    create() {
        this.scene.start('MenuScene');
    }
}

export default BootScene;
