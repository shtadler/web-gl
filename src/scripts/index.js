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
  CLICKED_PLAY: 'CLICKED_PLAY' 
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

  // request animation frames here
  requestsFrames = {}

  constructor() {
    this.step = new StepHelper();
    this.init();
    this.initSky();
    window.addEventListener('resize', this.onWindowResize.bind(this), false);
    this.setClickToPlayEvents()
    this.sequence()
  }
  
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  
  init() {
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 100, 2000000);

    this.camera.position.set(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z);
    this.scene = new THREE.Scene();
    const helper = new THREE.GridHelper(10000, 20, 0xffffff, 0xffffff);
    helper.visible = true;
    this.scene.add(helper);
    if(window.innerWidth > 520) {
      this.sprite1 = new SpriteText2D("ANDRII SHTADLER", { align: textAlign.center, font: 'bold 1500px ArialBold', fillStyle: '#ffffff', antialias: false, shadowColor: '#ffffff' })
      this.sprite2 = new SpriteText2D("Interactive portfolio", { align: textAlign.center, font: 'bold 1300px ArialBold', fillStyle: '#ffffff', antialias: false, shadowColor: '#ffffff' })
      this.sprite3 = new SpriteText2D("CLICK TO PLAY", { align: textAlign.center, font: 'bold 1500px ArialBold', fillStyle: '#ffffff', antialias: false, shadowBlur: 50, shadowColor: '#ffffff' })
    } else {
      this.sprite1 = new SpriteText2D("ANDRII SHTADLER", { align: textAlign.center, font: 'bold 1200px ArialBold', fillStyle: '#ffffff', antialias: false, shadowColor: '#ffffff' })
      this.sprite2 = new SpriteText2D("Interactive portfolio", { align: textAlign.center, font: 'bold 1000px ArialBold', fillStyle: '#ffffff', antialias: false, shadowColor: '#ffffff' })
      this.sprite3 = new SpriteText2D("CLICK TO PLAY", { align: textAlign.center, font: 'bold 1500px ArialBold', fillStyle: '#ffffff', antialias: false, shadowBlur: 50, shadowColor: '#ffffff' })
    }
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

    this.sprite3.position.set(25000, 3000, 25000)

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // controls.minDistance = 1000;
    // controls.maxDistance = 20000;

    this.controls.maxPolarAngle = Math.PI / 2.05;
    this.controls.addEventListener('change', this.render.bind(this));

    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.zoomSpeed = 0.3;
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


    // function guiChanged() {
      
    // }

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

    // var gui = new GUI();
    // gui.add(effectController, "luminance", 0.0, 2).onChange(guiChanged);
    // guiChanged();
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

  sequence() {
    this.step.on(STEPS.SHOW_HI, () => {
      this.stepShowHi(() => {
        // start move the polar angle
        this.step.go(STEPS.POLAR_MOVE_START)
        this.step.go(STEPS.TEXT_TO_BACK)
      })
    })
    this.step.on(STEPS.POLAR_MOVE_START, () => {
      this.stepPolarStart(() => this.step.go(STEPS.POLAR_MOVE_END))
    })
    this.step.on(STEPS.TEXT_TO_BACK, () => {
      this.stepTextBack()
    })
    this.step.on(STEPS.POLAR_MOVE_END, () => {
      this.stepPolarEnd()
      this.stepClickToPlay()
    
    })
    this.step.go(STEPS.SHOW_HI)
  }

  stepShowHi(finish) {
    if(this.sprite1.material.opacity >= 1) {
      cancelAnimationFrame(this.requestsFrames[STEPS.SHOW_HI])

      return finish()
    };

    this.sprite1.material.opacity += 0.007;
    this.sprite2.material.opacity += 0.007;

    this.render()
    this.requestsFrames[STEPS.SHOW_HI] = requestAnimationFrame(()=> { this.stepShowHi(finish)})
  }

  stepPolarStart(finish) {
    let currentPolar = this.controls.getPolarAngle()
    if(currentPolar >= Math.PI / 2.05) {
      cancelAnimationFrame(this.requestsFrames[STEPS.POLAR_MOVE_START])
      return finish()
    }

    this.controls.rotateUp(-0.001)
    this.render()
    this.requestsFrames[STEPS.POLAR_MOVE_START] = requestAnimationFrame(()=> { this.stepPolarStart(finish)})
  }

  stepTextBack() {
    if(this.sprite1.material.opacity <= 0) {
      cancelAnimationFrame(this.requestsFrames[STEPS.TEXT_TO_BACK])
      return
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

    this.render()
    this.requestsFrames[STEPS.TEXT_TO_BACK] = requestAnimationFrame(() => { this.stepTextBack()})
  }

  stepPolarEnd() {
    if(this.sprite1.material.opacity <= 0) {
      cancelAnimationFrame(this.requestsFrames[STEPS.POLAR_MOVE_END])
      return
    }
    this.sprite1.material.opacity > 0 && (this.sprite1.material.opacity -= 0.01);
    this.sprite2.material.opacity > 0 && (this.sprite2.material.opacity -= 0.01);

    this.requestsFrames[STEPS.POLAR_MOVE_END] = requestAnimationFrame(() => { this.stepPolarEnd()})
  }
  
  playColor = new THREE.Color('#ffffff')
  stepClickToPlay() {
    console.log(this.playColor) 

    if(this.playColor.b < 0.5) {
      cancelAnimationFrame(this.requestsFrames[STEPS.ANIMATE_CLICK_BTN])
      return;
    }
    this.playColor.g -= 0.03
    this.playColor.b -= 0.03
    this.sprite3.fillStyle = '#'+this.playColor.getHexString()
    this.render()
    this.requestsFrames[STEPS.ANIMATE_CLICK_BTN] = requestAnimationFrame(() => { this.stepClickToPlay()})
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
    })
  }
}

const main = new Main();
console.log(main)