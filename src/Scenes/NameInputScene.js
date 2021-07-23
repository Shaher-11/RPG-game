/* eslint-disable no-undef */
import 'phaser';
import { setPlayerName } from '../Score/PlayerName';

export default class NameInputScene extends Phaser.Scene {
  constructor() {
    super('NameInput');
  }

  preload() {
    this.load.html('form', '../assets/form.html');
  }

  create() {
    this.nameInput = this.add.dom(400, 310).createFromCache('form');

    this.message = this.add
      .text(400, 250, 'Enter Your name', {
        color: 'green',
        fontSize: 40,
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    this.returnKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER,
    );

    this.returnKey.on('down', () => {
      const name = this.nameInput.getChildByName('name').value;
      setPlayerName(name);
      this.scene.start('Boot');
    });
  }
}