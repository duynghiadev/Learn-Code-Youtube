'use strict';function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

console.clear();

class Settings {}_defineProperty(Settings, "ASSETS_PATH",
'https://assets.codepen.io/430361');_defineProperty(Settings, "MAP",

[
'*........*',
'*.000000S*',
'*.0....00*',
'*.0.00.0X*',
'*....X...*',
'********.*',
'*X.*...*.*',
'*........*',
'*.***L**.*',
'*..**.****',
'**.X*....*',
'*..*****.*',
'*.*....*X*',
'*...##..F*',
'####HH####']);_defineProperty(Settings, "BLOCKS_MAP",


{
  '*': 'block',
  '#': 'grass',
  'H': 'land',
  '0': 'cloud' });_defineProperty(Settings, "WALK",


{
  LEFT: 1,
  RIGHT: 2 });_defineProperty(Settings, "JUMP",

1);_defineProperty(Settings, "POINTER",
1);_defineProperty(Settings, "PIXEL_SIZE",

2);_defineProperty(Settings, "BLOCK_SIZE",
Settings.PIXEL_SIZE * 16);_defineProperty(Settings, "CHARACTER_SIZE",
Settings.PIXEL_SIZE * 12);_defineProperty(Settings, "BUTTON_SIZE",
Settings.PIXEL_SIZE * 24);_defineProperty(Settings, "GRAVITY",

Settings.PIXEL_SIZE * 200);_defineProperty(Settings, "CHARACTER_BOUNCE",

0.3);_defineProperty(Settings, "WALK_SPEED",
Settings.PIXEL_SIZE * 30);_defineProperty(Settings, "JUMP_SPEED",
Settings.PIXEL_SIZE * 380);_defineProperty(Settings, "FONT_SETTINGS",

{
  fontFamily: 'VT323',
  fontSize: 24,
  stroke: '#000000',
  strokeThickness: 4 });_defineProperty(Settings, "SCREEN_WIDTH",


Settings.PIXEL_SIZE * 160);_defineProperty(Settings, "SCREEN_HEIGHT",
Settings.PIXEL_SIZE * 120);_defineProperty(Settings, "MIN_SCREEN_WIDTH",

Settings.SCREEN_WIDTH / 8);_defineProperty(Settings, "MIN_SCREEN_HEIGHT",
Settings.SCREEN_HEIGHT / 8);_defineProperty(Settings, "MAX_SCREEN_WIDTH",

Settings.SCREEN_WIDTH * 4);_defineProperty(Settings, "MAX_SCREEN_HEIGHT",
Settings.SCREEN_HEIGHT * 4);_defineProperty(Settings, "SCREEN_CENTER",

[
Settings.SCREEN_WIDTH / 2,
Settings.SCREEN_HEIGHT / 2]);_defineProperty(Settings, "IS_DEBUG",


false);


class MainScene extends Phaser.Scene {
  constructor() {
    super('Main');
  }

  preload() {
    const path = Settings.ASSETS_PATH;

    this.load.image('character', `${path}/bit-maze-character.png`);
    this.load.image('block', `${path}/bit-maze-block.png`);
    this.load.image('grass', `${path}/bit-maze-grass.png`);
    this.load.image('land', `${path}/bit-maze-land.png`);
    this.load.image('cloud', `${path}/bit-maze-cloud.png`);
    this.load.image('background', `${path}/bit-maze-background.png`);

    this.load.spritesheet('character-run', `${path}/bit-maze-character-run.png`, {
      frameWidth: Settings.CHARACTER_SIZE,
      frameHeight: Settings.CHARACTER_SIZE });

    this.load.spritesheet('character-jump', `${path}/bit-maze-character-jump.png`, {
      frameWidth: Settings.CHARACTER_SIZE,
      frameHeight: Settings.CHARACTER_SIZE });

    this.load.spritesheet('character-idle', `${path}/bit-maze-character-idle.png`, {
      frameWidth: Settings.CHARACTER_SIZE,
      frameHeight: Settings.CHARACTER_SIZE });

    this.load.spritesheet('character-trap', `${path}/bit-maze-character-trap.png`, {
      frameWidth: Settings.CHARACTER_SIZE,
      frameHeight: Settings.CHARACTER_SIZE });

    this.load.spritesheet('buttons', `${path}/bit-maze-buttons.png`, {
      frameWidth: Settings.BUTTON_SIZE,
      frameHeight: Settings.BUTTON_SIZE });

    this.load.spritesheet('trap', `${path}/bit-maze-trap.png`, {
      frameWidth: Settings.BLOCK_SIZE,
      frameHeight: Settings.BLOCK_SIZE });

    this.load.spritesheet('finish', `${path}/bit-maze-finish.png`, {
      frameWidth: Settings.BLOCK_SIZE,
      frameHeight: Settings.BLOCK_SIZE });

  }

  addObject(m, x, y) {
    switch (m) {
      case '*':
      case '#':
      case 'H':
      case '0':
        const block = Settings.BLOCKS_MAP[m];
        this.blocks.create(x, y, block).
        setOrigin(0, 0).
        refreshBody();
        break;
      case 'X':
        this.traps.create(x, y, 'trap').
        setOrigin(0, 0).
        refreshBody();
        break;
      case 'F':
        this.finish.create(x, y, 'finish').
        setName('finish').
        setOrigin(0, 0).
        refreshBody();
        break;
      case 'S':
        this.placeCharacter(x, y);
        break;}

  }

  createMap() {
    this.add.image(
    Settings.SCREEN_WIDTH / 2, Settings.SCREEN_HEIGHT / 2, 'background').
    setScrollFactor(0);

    this.blocks = this.physics.add.staticGroup();
    this.traps = this.physics.add.staticGroup();
    this.finish = this.physics.add.staticGroup();

    for (const y in Settings.MAP) {
      const map = Settings.MAP[y];

      for (const x in map) {
        const m = map[x];
        const b = Settings.BLOCK_SIZE;

        this.addObject(m, x * b, y * b);
      }
    }
  }

  placeCharacter(x, y) {
    this.character = this.physics.add.sprite(x, y, 'character').
    setOrigin(0, 0).
    refreshBody().
    setBounce(Settings.CHARACTER_BOUNCE);

    this.character.setCollideWorldBounds(true);

    const b = Settings.BLOCK_SIZE;
    const width = Settings.MAP[0].length * b;
    const height = Settings.MAP.length * b;

    this.setCollision();
    this.setCharacterCamera(width, height);
    this.setCharacterAnimation();
  }

  setCollision() {
    this.physics.add.collider(this.character, this.blocks);
    this.physics.add.collider(this.character, this.traps, (obj1, obj2) => {
      this.character.anims.play('character-trap');

      obj2.anims.play('trap');

      this.setGameOver('YOU GOT CAUGHT BY A TRAP!');
    });
    this.physics.add.collider(this.character, this.finish, () => {
      this.setGameOver('YOU COMPLETED THE GAME!');
    });
  }

  setGameOver(otherText) {
    this.physics.world.pause();

    this.add.text(
    Settings.SCREEN_WIDTH / 2, 168, otherText, Settings.FONT_SETTINGS).
    setOrigin(0.5, 0.5).
    setScrollFactor(0);
    this.add.text(
    Settings.SCREEN_WIDTH / 2, 192, 'PRESS ANYWHERE TO RETRY', Settings.FONT_SETTINGS).
    setOrigin(0.5, 0.5).
    setScrollFactor(0);

    this.tweens.add({
      targets: [
      this.children.getByName('btn-left'),
      this.children.getByName('btn-right'),
      this.children.getByName('btn-up')],

      alpha: 0,
      tease: 'Sine.easeOut',
      duration: 256 });


    this.input.once('pointerdown', () => {
      this.scene.restart();
    });

    this.input.keyboard.once('keydown', () => {
      this.scene.restart();
    });
  }

  setCharacterCamera(width, height) {
    const boundary = new Phaser.Geom.Rectangle(0, 0, width, height);

    this.character.body.setBoundsRectangle(boundary);

    this.cameras.main.setBounds(0, 0, width, height);
    this.cameras.main.startFollow(this.character, true, 1, 1);
  }

  setCharacterAnimation() {
    this.anims.create({
      key: 'character-run',
      frames: this.anims.generateFrameNumbers('character-run', {
        start: 0,
        end: 7 }),

      frameRate: 10,
      repeat: -1 });

    this.anims.create({
      key: 'character-jump',
      frames: this.anims.generateFrameNumbers('character-jump', {
        start: 0,
        end: 1 }),

      frameRate: 17.5 });

    this.anims.create({
      key: 'character-idle',
      frames: this.anims.generateFrameNumbers('character-idle', {
        start: 0,
        end: 2 }),

      frameRate: 7,
      repeat: -1,
      yoyo: true });

    this.anims.create({
      key: 'character-trap',
      frames: this.anims.generateFrameNumbers('character-trap', {
        start: 0,
        end: 7 }),

      frameRate: 10 });

  }

  createController() {
    this.add.image(32, 208, 'buttons').
    setName('btn-left').
    setFrame(0).
    setScrollFactor(0).
    setInteractive().
    addListener('pointerdown', evt => {
      this.walk = Settings.WALK.LEFT;
      this.pointer = Settings.POINTER;
      this.hideInstructions();
    }).addListener('pointerup', evt => {
      this.walk = null;
      this.pointer = null;
    });

    this.add.image(288, 208, 'buttons').
    setName('btn-right').
    setFrame(1).
    setScrollFactor(0).
    setInteractive().
    addListener('pointerdown', evt => {
      this.walk = Settings.WALK.RIGHT;
      this.pointer = Settings.POINTER;
      this.hideInstructions();
    }).addListener('pointerup', evt => {
      this.walk = null;
      this.pointer = null;
    });

    this.add.image(288, 154, 'buttons').
    setName('btn-up').
    setFrame(2).
    setScrollFactor(0).
    setInteractive().
    addListener('pointerdown', evt => {
      this.jump = Settings.JUMP;
      this.pointer = Settings.POINTER;
      this.hideInstructions();
    }).addListener('pointerup', evt => {
      this.jump = null;
      this.pointer = null;
    });
  }

  setObjectAnimation() {
    this.anims.create({
      key: 'trap',
      frames: this.anims.generateFrameNumbers('trap', {
        start: 1,
        end: 4 }),

      frameRate: 10,
      repeat: -1 });

    this.anims.create({
      key: 'finish',
      frames: this.anims.generateFrameNumbers('finish', {
        start: 0,
        end: 2 }),

      frameRate: 7.5,
      repeat: -1,
      yoyo: true });

  }

  create() {
    this.createMap();
    this.createController();
    this.setObjectAnimation();

    this.children.getByName('finish').anims.play('finish');

    this.add.text(
    Settings.SCREEN_WIDTH / 2, 192, 'PRESS ARROW KEYS TO MOVE', Settings.FONT_SETTINGS).
    setName('txt-instructions').
    setOrigin(0.5, 0.5);

    this.walk = null;
    this.jump = null;
    this.pointer = null;
  }

  setControls() {
    const cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
      this.walk = Settings.WALK.LEFT;
      this.hideInstructions();
    } else
    if (cursors.right.isDown) {
      this.walk = Settings.WALK.RIGHT;
      this.hideInstructions();
    } else
    if (this.pointer !== Settings.POINTER) {
      this.walk = null;
    }

    if (cursors.space.isDown || cursors.up.isDown) {
      this.jump = Settings.JUMP;
      this.hideInstructions();
    } else
    if (this.pointer !== Settings.POINTER) {
      this.jump = null;
    }
  }

  animateCharacter() {
    if (this.walk === Settings.WALK.LEFT) {
      this.character.setVelocityX(-Settings.WALK_SPEED);
      this.character.setFlipX(false);
      this.character.anims.play('character-run', true);
    } else
    if (this.walk === Settings.WALK.RIGHT) {
      this.character.setVelocityX(Settings.WALK_SPEED);
      this.character.setFlipX(true);
      this.character.anims.play('character-run', true);
    } else
    {
      this.character.setVelocityX(0);
    }

    if (this.character.body.touching.down && this.character.body.velocity.x === 0) {
      this.character.anims.play('character-idle', true);
    }

    if (this.character.body.touching.down && this.jump === Settings.JUMP) {
      this.character.setVelocityY(Settings.JUMP_SPEED);
    }

    if (
    !this.character.body.touching.down && (


    this.character.anims.currentAnim === null ||

    this.character.anims.currentAnim.key !== 'character-jump'))

    {
      this.character.anims.play('character-jump');
    }
  }

  hideInstructions() {
    const txtInstructions = this.children.getByName('txt-instructions');

    if (txtInstructions === null || this.tweens.getTweensOf(txtInstructions).length > 0) {
      return;
    }

    this.tweens.add({
      targets: txtInstructions,
      alpha: 0,
      tease: 'Sine.easeOut',
      duration: 512,
      onComplete: evt => {
        evt.targets[0].destroy();
      } });

  }

  update() {
    if (this.physics.world.isPaused === true) {
      return;
    }

    this.setControls();
    this.animateCharacter();
  }}


new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'bit-maze',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: Settings.GRAVITY },

      debug: Settings.IS_DEBUG } },


  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: Settings.SCREEN_WIDTH,
    height: Settings.SCREEN_HEIGHT,
    min: {
      width: Settings.MIN_SCREEN_WIDTH,
      height: Settings.MIN_SCREEN_HEIGHT },

    max: {
      width: Settings.MAX_SCREEN_WIDTH,
      height: Settings.MAX_SCREEN_HEIGHT } },


  scene: MainScene });