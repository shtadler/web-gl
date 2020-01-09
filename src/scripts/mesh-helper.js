import { MTLLoader } from "./objects/MTLLoader";
import { OBJLoader } from "./objects/OBJLoader";
import * as THREE from "three";


export function loadObj(mtl, obj) {
  return new Promise((resolve) => {
    var mtlLoader = new MTLLoader();

    mtlLoader.load(mtl, materials => {
      materials.preload();

      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);

      objLoader.load(obj, object => {
        object.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
            if (child.material instanceof Array) {
                child.material.forEach(mat => (mat.shininess = 0));
              } else {
                child.material.shininess = 0;
              }
          }
        });
        resolve(object);
      });
    });
  });
}
