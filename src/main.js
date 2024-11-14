// src/main.js
import Phaser from 'phaser';   // Import Phaser
import BootScene from './scenes/BootScene';  // Import BootScene
import MenuScene from './scenes/MenuScene';  // Assuming you have a MenuScene
import GameScene from './scenes/GameScene';  // Assuming you have a GameScene
import EndScene from './scenes/EndScene';  // Assuming you have an EndScene

// Phaser game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [BootScene, MenuScene, GameScene, EndScene]
};

// Initialize the Phaser game
const game = new Phaser.Game(config);

// Preload assets
function preload() {
    this.load.image('car', '/assets/images/car.png');
    this.load.image('house', '/assets/images/house.png');
    
}

// Setup the game scene
function create() {
    // Add the car sprite with physics
    this.car = this.physics.add.sprite(100, 100, 'car');  // Corrected to use this.physics.add.sprite
    this.car.setCollideWorldBounds(true); // Optionally, make the car stay within bounds

    // Create the static house group and add a house to it
    this.house = this.physics.add.staticGroup();  // Static group for non-moving objects
    this.house.create(400, 300, 'house');        // Create the house sprite in the static group

    // Setup keyboard input for car controls
    this.cursors = this.input.keyboard.createCursorKeys();
}


// Update loop for game
function update() {
    // Reset velocity every frame to avoid constant movement
    this.car.setVelocity(0);

    // Move car using arrow keys
    if (this.cursors.left.isDown) {
        this.car.setVelocityX(-160); // Move left
    }
    if (this.cursors.right.isDown) {
        this.car.setVelocityX(160);  // Move right
    }
    if (this.cursors.up.isDown) {
        this.car.setVelocityY(-160); // Move up
    }
    if (this.cursors.down.isDown) {
        this.car.setVelocityY(160);  // Move down
    }
}
