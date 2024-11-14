// src/scenes/GameScene.js
import Phaser from 'phaser'; // Ensure Phaser is imported
import Car from '../objects/Car.js';
import DeliveryPoint from '../objects/DeliveryPoint.js';
import Timer from '../objects/Timer.js';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('car', 'assets/images/car.png');
        this.load.image('house', 'assets/images/house.png');
    }

    create() {
        // Create map, road, and houses
        this.add.image(400, 300, 'road');
        this.deliveryPoint = new DeliveryPoint(this, 500, 200);

        // Add player's car
        this.car = new Car(this, 100, 100);

        // Add a timer for deliveries
        this.timer = new Timer(this, 30);

        // Set up collision detection and other game rules
        this.physics.add.collider(this.car, this.deliveryPoint, this.handleDelivery, null, this);
    }

    handleDelivery() {
        this.deliveryPoint.reset(); // Reset delivery point
        this.timer.addTime(5); // Add time to the timer
    }

    update(time, delta) {
        this.car.update();
        if (this.timer.time <= 0) {
            this.scene.start('EndScene');
        }
    }
}

export default GameScene;
