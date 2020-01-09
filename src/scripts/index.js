import "../styles/index.scss";

import * as THREE from "three";
import { GUI } from "dat.gui";
import { Interaction } from "three.interaction";
import { SpriteText2D, textAlign } from "three-text2d";
import obj from "../plate.obj";
import mtl from "../plate.mtl";
import stoneOBJ from "../mount-stone.obj";
import stoneMTL from "../mount-stone.mtl";
import riverOBJ from "../river.obj";
import riverMTL from "../river.mtl";
import pazzlesOBJ from "../pazzles.obj";
import pazzlesMTL from "../pazzles.mtl";
import "../Island.png";
import { OBJLoader } from "./objects/OBJLoader";
import { OrbitControls } from "./contrlos/Orbit";
import { MTLLoader } from "./objects/MTLLoader";
import { loadObj } from "./mesh-helper";

class Main {
  // main entities
  camera;
  controls;
  scene;
  renderer;

  constructor() {
    this.init();

    window.addEventListener("resize", this.onWindowResize.bind(this), false);

    this.looper();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  init() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    // this.camera.position.set( 50, 34, 15 );
    this.camera.position.set(50, 10, 15);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xbfe3dd);

    this.scene.add(new THREE.AmbientLight(0x404040));
    this.pointLightBottom = new THREE.DirectionalLight(0xffffff);
    this.pointLight = new THREE.DirectionalLight(0xffffff);
    this.scene.fog = new THREE.FogExp2(0xbfe3dd, 0.004);
    this.pointLight.position.set(-50, 70, -50);
    this.pointLightBottom.position.set(15, -50, -80);
    this.scene.add(this.pointLight);
    this.scene.add(this.pointLightBottom);
    
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var geometry = new THREE.DodecahedronGeometry(10, 1);
    this.sun = new THREE.Mesh(geometry, material);
    this.sun.position.copy(this.pointLight.position);
    this.scene.add(this.sun);

    const plate$ = loadObj(mtl,obj);
    plate$.then(plateMesh => {
      plateMesh.scale.set(10, 10, 10);
      this.scene.add(plateMesh);
    })
    
    const pazzles$ = loadObj(pazzlesMTL, pazzlesOBJ);
    pazzles$.then(pazzlessMesh => {
      pazzlessMesh.scale.set(10, 10, 10);
      this.scene.add(pazzlessMesh);
    })
    
    const stone$ = loadObj(stoneMTL, stoneOBJ);
    stone$.then(stoneMesh => {
      stoneMesh.scale.set(8, 8, 8);
      stoneMesh.position.set(-15, 0, 10);
      this.scene.add(stoneMesh);
    })

    const river$ = loadObj(riverMTL, riverOBJ);
    river$.then(riverMesh => {
      riverMesh.scale.set(10, 10, 10);
      riverMesh.position.x = -15;
      this.scene.add(riverMesh);
    })

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.controls.maxPolarAngle = Math.PI / 2.05;
    // this.controls.addEventListener('change', this.render.bind(this));

    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.zoomSpeed = 2;
    this.controls.enabled = true;
    const interaction = new Interaction(this.renderer, this.scene, this.camera);
    var gui = new GUI();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.render();
  }

  looper() {
    // if(this.controls.getAzimuthalAngle() <= Math.PI/2.05){
    //   this.controls.rotateLeft(-0.006)
    // }
    // if(this.controls.getPolarAngle() >= Math.PI/4.5 ) {
    //   this.controls.rotateUp(0.01)
    // }
    // this.controls.rotateLeft(0.01)

    this.render();
    requestAnimationFrame(() => this.looper());
  }
}

const main = new Main();
console.log(main);
