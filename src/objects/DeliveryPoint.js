// src/objects/Car.js
class Car extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'car'); // 'car' is the key for your image asset
        scene.add.existing(this);  // Add the sprite to the scene
        scene.physics.world.enable(this);  // Enable physics for this sprite
        this.setCollideWorldBounds(true);  // Optionally, prevent car from leaving the world bounds
    }

    update() {
        // Add car movement logic here (e.g., handling input for car movement)
    }
}

export default Car;
