import '../styles/index.scss';

import * as THREE from 'three';
import { GUI } from 'dat.gui';
import { Interaction } from 'three.interaction';
import { SpriteText2D, textAlign } from 'three-text2d'
import { Sky } from './objects/sky';
import { OrbitControls } from './contrlos/Orbit';
import StepHelper from './step-helper';

const STEPS = {
  SHOW_HI: 'SHOW_HI',
  POLAR_MOVE_START: 'POLAR_MOVE_START',
  TEXT_TO_BACK: 'TEXT_TO_BACK',
  POLAR_MOVE_END: 'POLAR_MOVE_END',
  ANIMATE_CLICK_BTN: 'ANIMATE_CLICK_BTN',
  START_GAME: 'START_GAME' 
}

class Main {
  // main entities
  camera; controls; scene; renderer;
  // env entity
  sky; sunSphere;
  // innitial text
  sprite1; sprite2; sprite3;

  // positions
  cameraPosition = { x: 40000, y: 40000, z: 40000 }

  // sprite3 position
  sprite3Position = { x: 25000, y: 3000, z: 25000 }

  stepsToCall = {}
  // request animation frames here
  requestsFrames = {}

  constructor() {
    this.step = new StepHelper();
    this.init();
    this.initSky();
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
    this.textSequence()
    // this.DEVINIT()
    this.looper()
  }
  
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  
  init() {
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 100, 2000000);

    this.camera.position.set(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z);
    this.scene = new THREE.Scene();
    // const helper = new THREE.GridHelper(10000, 20, 0xffffff, 0xffffff);

    
    // helper.visible = true;
    // this.scene.add(helper);
    var ambient = new THREE.AmbientLight( 0xffffff, 0.5 );
    this.scene.add( ambient );

    this.spotLight = new THREE.SpotLight( 0xffffff );
    this.spotLight.position.set( -12000, 4000, -1000 );
    this.spotLight.angle = Math.PI / 4;
    this.spotLight.penumbra = 0.05;
    this.spotLight.decay = 2;
    this.spotLight.distance = 40000;
    this.scene.add( this.spotLight );

    var material = new THREE.MeshPhongMaterial( { color: 0x00ff00, dithering: true } );
    var geometry = new THREE.BoxBufferGeometry( 10000, 1000, 10000 );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( 0 , 0, 0 );
    mesh.castShadow = true;
    this.scene.add( mesh );
        


    if(window.innerWidth > 520) {
      this.sprite1 = new SpriteText2D("ANDRII SHTADLER", { align: textAlign.center, font: 'bold 150px Arial', fillStyle: '#ffffff', antialias: false, shadowColor: '#ffffff' })
      this.sprite2 = new SpriteText2D("Interactive portfolio", { align: textAlign.center, font: 'bold 130px Arial', fillStyle: '#ffffff', antialias: false, shadowColor: '#ffffff' })
      this.sprite3 = new SpriteText2D("CLICK TO PLAY", { align: textAlign.center, font: 'bold 150px Arial', fillStyle: '#ffffff', antialias: false, shadowBlur: 5, shadowColor: '#ffffff' })
    } else {
      this.sprite1 = new SpriteText2D("ANDRII SHTADLER", { align: textAlign.center, font: 'bold 120px Arial', fillStyle: '#ffffff', antialias: false, shadowColor: '#ffffff' })
      this.sprite2 = new SpriteText2D("Interactive portfolio", { align: textAlign.center, font: 'bold 100px Arial', fillStyle: '#ffffff', antialias: false, shadowColor: '#ffffff' })
      this.sprite3 = new SpriteText2D("CLICK TO PLAY", { align: textAlign.center, font: 'bold 150px Arial', fillStyle: '#ffffff', antialias: false, shadowBlur: 5, shadowColor: '#ffffff' })
    }


    this.sprite1.scale.set(10, 10, 10)
    this.sprite2.scale.set(10, 10, 10)
    this.sprite3.scale.set(10, 10, 10)
    
    this.sprite1.material.opacity = 0;
    this.sprite2.material.opacity = 0;

    this.scene.add(this.sprite1)
    this.scene.add(this.sprite2)
    this.scene.add(this.sprite3)

    if(window.innerWidth > 520) {
      this.sprite1.position.set(25000, 25000, 25000)
      this.sprite2.position.set(25000, 23000, 25000)
    } else {
      this.sprite1.position.set(25000, 25000, 25000)
      this.sprite2.position.set(25000, 23500, 25000)
    }

    this.sprite3.position.set(this.sprite3Position.x, this.sprite3Position.y, this.sprite3Position.z)

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.controls.maxPolarAngle = Math.PI / 2.05;
    this.controls.addEventListener('change', this.render.bind(this));

    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.zoomSpeed = 0.3;
    this.controls.enabled = false;
    const interaction = new Interaction(this.renderer, this.scene, this.camera);
    
  }

  initSky() {
    // Add Sky
    this.sky = new Sky();
    this.sky.scale.setScalar(450000);
    this.scene.add(this.sky);
    // Add Sun Helper
    this.sunSphere = new THREE.Mesh(
      new THREE.SphereBufferGeometry(20000, 16, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    this.sunSphere.position.y = - 700000;
    this.sunSphere.visible = false;
    this.scene.add(this.sunSphere);
    /// GUI
    var effectController = {
      turbidity: 3.8,
      rayleigh: 0.16,
      mieCoefficient: 0.01,
      mieDirectionalG: 0.70,
      luminance: 0.78,
      inclination: 0.03, // elevation / inclination
      azimuth: 0.06, // Facing front,
      sun: true
    };

    var distance = 400000;

    var uniforms = this.sky.material.uniforms;
    uniforms["turbidity"].value = effectController.turbidity;
    uniforms["rayleigh"].value = effectController.rayleigh;
    uniforms["mieCoefficient"].value = effectController.mieCoefficient;
    uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;
    uniforms["luminance"].value = effectController.luminance;

    var theta = Math.PI * (effectController.inclination - 0.5);
    var phi = 2 * Math.PI * (effectController.azimuth - 0.5);
    this.sunSphere.position.x = distance * Math.cos(phi);
    this.sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta);
    this.sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta);
    this.sunSphere.visible = effectController.sun;
    uniforms["sunPosition"].value.copy(this.sunSphere.position);

    this.camera.position.set(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z);

    this.render()
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.render();
  }

  textMovie() {
    let currentPolar = this.controls.getPolarAngle()
    if(currentPolar >= Math.PI / 2.05) {
      this.sprite1.material.opacity > 0 && (this.sprite1.material.opacity -= 0.01);
      this.sprite2.material.opacity > 0 && (this.sprite2.material.opacity -= 0.01);
    } else {
      this.controls.rotateUp(-0.001)
    
      if(this.sprite1.position.y > 19000) {
        this.sprite1.position.y -= 20
        this.sprite2.position.y -= 20
      } else {
        this.sprite1.position.y -= 30
        this.sprite1.position.x -= 80
        this.sprite1.position.z -= 80
        this.sprite2.position.y -= 30
        this.sprite2.position.x -= 80
        this.sprite2.position.z -= 80
        this.sprite1.material.opacity -= 0.001
        this.sprite2.material.opacity -= 0.001
      };
    }
    
    this.render()
    requestAnimationFrame(()=> { this.textMovie()})
  }

  looper() {
    Object.keys(this.stepsToCall).forEach(name => this.stepsToCall[name]())
    this.render()
    requestAnimationFrame(() => this.looper())
  }

  textSequence() {
    this.stepsToCall[STEPS.SHOW_HI] = this.stepShowHi.bind(this, () => {
      delete this.stepsToCall[STEPS.SHOW_HI];
      this.stepsToCall[STEPS.TEXT_TO_BACK] = this.stepTextBack.bind(this)

      this.stepsToCall[STEPS.POLAR_MOVE_START] = this.stepPolarStart.bind(this, () => {
        delete this.stepsToCall[STEPS.TEXT_TO_BACK]
        delete this.stepsToCall[STEPS.POLAR_MOVE_START]
        
        this.stepsToCall[STEPS.POLAR_MOVE_END] = this.stepPolarEnd.bind(this, () => {
          delete this.stepsToCall[STEPS.POLAR_MOVE_END]
        })
        this.stepsToCall[STEPS.ANIMATE_CLICK_BTN] = this.stepAnimateClickBtn.bind(this, () => {
          delete this.stepsToCall[STEPS.ANIMATE_CLICK_BTN]
          this.setClickToPlayEvents()
        })
      })
      
    });
  }

  stepShowHi( finish ) {
    if(this.sprite1.material.opacity >= 1) {
      return finish();
    };

    this.sprite1.material.opacity += 0.007;
    this.sprite2.material.opacity += 0.007;
  }

  stepPolarStart( finish ) {
    let currentPolar = this.controls.getPolarAngle()
    if(currentPolar >= Math.PI / 2.05) {
      return finish()
    }

    this.controls.rotateUp(-0.001)
  }

  stepTextBack() {
    if(this.sprite1.material.opacity <= 0) {
      return;
    }

    if(this.sprite1.position.y > 19000) {
      this.sprite1.position.y -= 20
      this.sprite2.position.y -= 20
    } else {
      this.sprite1.position.y -= 30
      this.sprite1.position.x -= 80
      this.sprite1.position.z -= 80
      this.sprite2.position.y -= 30
      this.sprite2.position.x -= 80
      this.sprite2.position.z -= 80
      this.sprite1.material.opacity -= 0.001
      this.sprite2.material.opacity -= 0.001
    };
  }

  stepPolarEnd( finish ) {
    if(this.sprite1.material.opacity <= 0) {
      return
    }
    this.sprite1.material.opacity > 0 && (this.sprite1.material.opacity -= 0.01);
    this.sprite2.material.opacity > 0 && (this.sprite2.material.opacity -= 0.01);
  }
  
  playColor = new THREE.Color('#ffffff')
  stepAnimateClickBtn( finish ) {
    if(this.playColor.b < 0.5) {
      return finish();
    }
    
    this.playColor.g -= 0.03
    this.playColor.b -= 0.03
    this.sprite3.fillStyle = '#'+this.playColor.getHexString()
  }

  setClickToPlayEvents() {
    const hoverPlay = () => {
      this.sprite3.fillStyle = '#ff5555'
      this.render()
    }
    const leavePlay = () => {
      this.sprite3.fillStyle = '#'+this.playColor.getHexString()
      this.render()
    }
    this.sprite3.on('mouseover', hoverPlay);
    this.sprite3.on('mouseout', leavePlay);

    this.sprite3.on('click', () => {
      this.sprite3.off('mouseover', hoverPlay)
      this.sprite3.off('mouseout', leavePlay)
      this.sprite3.fillStyle = '#ffffff'
      this.render()
      this.startGame()
    })
  }

  DEVINIT() {
    this.controls.rotateLeft(0.8)
    this.controls.rotateUp(-0.2)
    this.camera.position.set(1000, 5000, 20000)
    this.controls.enabled = true;
    this.setClickToPlayEvents()

    //
     var gui = new GUI();
    gui.add(this.spotLight.position, "x", -30000, 20000);
    gui.add(this.spotLight.position, "y", -30000, 20000);
    gui.add(this.spotLight.position, "z", -5000, 0);
    gui.add(this.spotLight, "distance", 0, 30000);
  }

  startGame() {
    console.log('cam', this.camera.position)
    console.log('sprite', this.sprite3.position)

    this.stepsToCall['MoveToBoard'] = this.stepMoveToBoard.bind(this, () => {
      delete this.stepsToCall['MoveToBoard']
      this.scene.remove(this.sprite3)
      this.stepsToCall['BoardRotation'] = this.stepRotateBoard.bind(this, () => {
        delete this.stepsToCall['BoardRotation']
        // this.controls.minDistance = 1000;
        // this.controls.maxDistance = 20000;
        this.controls.enabled = true;
        
      })
    })
  }

  stepMoveToBoard(finish) {
    if (this.camera.position.x <= 24000) {
      return finish()
    }
    this.controls.rotateLeft(0.000001)
    this.camera.position.x -= 200;
    this.camera.position.z -= 200;
  }
  
  rotateBoard = 0;
  stepRotateBoard( finish ) {
// PI/4
    const angle = this.controls.getAzimuthalAngle()
    if(angle > 0) {
      this.controls.rotateLeft(0.006)
      this.controls.rotateUp(0.0035)
      this.rotateBoard < 60 && (this.rotateBoard += 2);
      this.camera.position.y -= this.rotateBoard;
      this.camera.position.z -= (this.rotateBoard * 2);
    } else if(this.camera.position.z > 16000) {
        this.rotateBoard < 120 && (this.rotateBoard += 2);
        // this.camera.position.y -= this.rotateBoard;
        this.camera.position.z -= this.rotateBoard;
    } else {
      finish()
    }
    // if(this.camera.position.x >= 1000) {
    // this.camera.position.x -= 130;
    // this.camera.position.z -= 130;
    // } else if (this.camera.position.x >= 2000) {
    //   this.rotateBoard > 6 && (this.rotateBoard -= 2);
    //   this.camera.position.x -= this.rotateBoard;
    //   this.camera.position.z -= this.rotateBoard;
    // }
  }
}

const main = new Main();
console.log(main)