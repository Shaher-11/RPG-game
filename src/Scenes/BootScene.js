/* eslint-disable no-undef */

import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'assets/zenva_logo.png');
    // add background image for the scene
    this.load.image('background', 'assets/background.jpg');
  }

  create() {
    this.scene.start('Preloader');
  }
}
