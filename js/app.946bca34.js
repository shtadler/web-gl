!function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(h&&h(t);p.length;)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={0:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var h=c;r.push([19,1]),n()}([,,,,,function(e,t,n){e.exports=n.p+"src/plate.obj"},function(e,t,n){e.exports=n.p+"src/plate.mtl"},function(e,t,n){e.exports=n.p+"src/mount-stone.obj"},function(e,t,n){e.exports=n.p+"src/mount-stone.mtl"},function(e,t,n){e.exports=n.p+"src/river.obj"},function(e,t,n){e.exports=n.p+"src/river.mtl"},function(e,t,n){e.exports=n.p+"src/pazzles.obj"},function(e,t,n){e.exports=n.p+"src/pazzles.mtl"},function(e,t,n){},,,,,function(e,t,n){e.exports=n.p+"src/Island.png"},function(e,t,n){"use strict";n.r(t);n(13);var o=n(0),a=n(3),r=n(4),i=(n(14),n(5)),s=n.n(i),c=n(6),l=n.n(c),h=n(7),u=n.n(h),p=n(8),m=n.n(p),d=n(9),f=n.n(d),b=n(10),g=n.n(b),v=n(11),y=n.n(v),w=n(12),O=n.n(w),E=(n(18),function(e,t){var n,a,r,i,s;void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new o.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:o.MOUSE.ROTATE,MIDDLE:o.MOUSE.DOLLY,RIGHT:o.MOUSE.PAN},this.touches={ONE:o.TOUCH.ROTATE,TWO:o.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.saveState=function(){c.target0.copy(c.target),c.position0.copy(c.object.position),c.zoom0=c.object.zoom},this.reset=function(){c.target.copy(c.target0),c.object.position.copy(c.position0),c.object.zoom=c.zoom0,c.object.updateProjectionMatrix(),c.dispatchEvent(l),c.update(),m=p.NONE},this.update=(n=new o.Vector3,a=(new o.Quaternion).setFromUnitVectors(e.up,new o.Vector3(0,1,0)),r=a.clone().inverse(),i=new o.Vector3,s=new o.Quaternion,function(){var e=c.object.position;return n.copy(e).sub(c.target),n.applyQuaternion(a),f.setFromVector3(n),c.autoRotate&&m===p.NONE&&k(2*Math.PI/60/60*c.autoRotateSpeed),c.enableDamping?(f.theta+=b.theta*c.dampingFactor,f.phi+=b.phi*c.dampingFactor):(f.theta+=b.theta,f.phi+=b.phi),f.theta=Math.max(c.minAzimuthAngle,Math.min(c.maxAzimuthAngle,f.theta)),f.phi=Math.max(c.minPolarAngle,Math.min(c.maxPolarAngle,f.phi)),f.makeSafe(),f.radius*=g,f.radius=Math.max(c.minDistance,Math.min(c.maxDistance,f.radius)),!0===c.enableDamping?c.target.addScaledVector(v,c.dampingFactor):c.target.add(v),n.setFromSpherical(f),n.applyQuaternion(r),e.copy(c.target).add(n),c.object.lookAt(c.target),!0===c.enableDamping?(b.theta*=1-c.dampingFactor,b.phi*=1-c.dampingFactor,v.multiplyScalar(1-c.dampingFactor)):(b.set(0,0,0),v.set(0,0,0)),g=1,!!(y||i.distanceToSquared(c.object.position)>d||8*(1-s.dot(c.object.quaternion))>d)&&(c.dispatchEvent(l),i.copy(c.object.position),s.copy(c.object.quaternion),y=!1,!0)}),this.dispose=function(){c.domElement.removeEventListener("contextmenu",ee,!1),c.domElement.removeEventListener("mousedown",Z,!1),c.domElement.removeEventListener("wheel",K,!1),c.domElement.removeEventListener("touchstart",J,!1),c.domElement.removeEventListener("touchend",$,!1),c.domElement.removeEventListener("touchmove",Q,!1),document.removeEventListener("mousemove",G,!1),document.removeEventListener("mouseup",W,!1),c.domElement.removeEventListener("keydown",q,!1)};var c=this,l={type:"change"},h={type:"start"},u={type:"end"},p={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},m=p.NONE,d=1e-6,f=new o.Spherical,b=new o.Spherical,g=1,v=new o.Vector3,y=!1,w=new o.Vector2,O=new o.Vector2,E=new o.Vector2,L=new o.Vector2,j=new o.Vector2,x=new o.Vector2,P=new o.Vector2,M=new o.Vector2,T=new o.Vector2;function A(){return Math.pow(.95,c.zoomSpeed)}function k(e){b.theta-=e}function N(e){b.phi-=e}this.rotateLeft=function(e){k(e),console.log("asda"),c.update()},this.rotateUp=function(e){N(e),c.update()};var C,S=(C=new o.Vector3,function(e,t){C.setFromMatrixColumn(t,0),C.multiplyScalar(-e),v.add(C)}),R=function(){var e=new o.Vector3;return function(t,n){!0===c.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(c.object.up,e)),e.multiplyScalar(t),v.add(e)}}(),z=function(){var e=new o.Vector3;return function(t,n){var o=c.domElement;if(c.object.isPerspectiveCamera){var a=c.object.position;e.copy(a).sub(c.target);var r=e.length();r*=Math.tan(c.object.fov/2*Math.PI/180),S(2*t*r/o.clientHeight,c.object.matrix),R(2*n*r/o.clientHeight,c.object.matrix)}else c.object.isOrthographicCamera?(S(t*(c.object.right-c.object.left)/c.object.zoom/o.clientWidth,c.object.matrix),R(n*(c.object.top-c.object.bottom)/c.object.zoom/o.clientHeight,c.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),c.enablePan=!1)}}();function F(e){c.object.isPerspectiveCamera?g/=e:c.object.isOrthographicCamera?(c.object.zoom=Math.max(c.minZoom,Math.min(c.maxZoom,c.object.zoom*e)),c.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),c.enableZoom=!1)}function V(e){c.object.isPerspectiveCamera?g*=e:c.object.isOrthographicCamera?(c.object.zoom=Math.max(c.minZoom,Math.min(c.maxZoom,c.object.zoom/e)),c.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),c.enableZoom=!1)}function U(e){w.set(e.clientX,e.clientY)}function I(e){L.set(e.clientX,e.clientY)}function D(e){if(1==e.touches.length)w.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);w.set(t,n)}}function H(e){if(1==e.touches.length)L.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);L.set(t,n)}}function _(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);P.set(0,o)}function Y(e){if(1==e.touches.length)O.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);O.set(t,n)}E.subVectors(O,w).multiplyScalar(c.rotateSpeed);var o=c.domElement;k(2*Math.PI*E.x/o.clientHeight),N(2*Math.PI*E.y/o.clientHeight),w.copy(O)}function B(e){if(1==e.touches.length)j.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);j.set(t,n)}x.subVectors(j,L).multiplyScalar(c.panSpeed),z(x.x,x.y),L.copy(j)}function X(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);M.set(0,o),T.set(0,Math.pow(M.y/P.y,c.zoomSpeed)),F(T.y),P.copy(M)}function Z(e){if(!1!==c.enabled){switch(e.preventDefault(),c.domElement.focus?c.domElement.focus():window.focus(),e.button){case 0:switch(c.mouseButtons.LEFT){case o.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===c.enablePan)return;I(e),m=p.PAN}else{if(!1===c.enableRotate)return;U(e),m=p.ROTATE}break;case o.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===c.enableRotate)return;U(e),m=p.ROTATE}else{if(!1===c.enablePan)return;I(e),m=p.PAN}break;default:m=p.NONE}break;case 1:switch(c.mouseButtons.MIDDLE){case o.MOUSE.DOLLY:if(!1===c.enableZoom)return;!function(e){P.set(e.clientX,e.clientY)}(e),m=p.DOLLY;break;default:m=p.NONE}break;case 2:switch(c.mouseButtons.RIGHT){case o.MOUSE.ROTATE:if(!1===c.enableRotate)return;U(e),m=p.ROTATE;break;case o.MOUSE.PAN:if(!1===c.enablePan)return;I(e),m=p.PAN;break;default:m=p.NONE}}m!==p.NONE&&(document.addEventListener("mousemove",G,!1),document.addEventListener("mouseup",W,!1),c.dispatchEvent(h))}}function G(e){if(!1!==c.enabled)switch(e.preventDefault(),m){case p.ROTATE:if(!1===c.enableRotate)return;!function(e){O.set(e.clientX,e.clientY),E.subVectors(O,w).multiplyScalar(c.rotateSpeed);var t=c.domElement;k(2*Math.PI*E.x/t.clientHeight),N(2*Math.PI*E.y/t.clientHeight),w.copy(O),c.update()}(e);break;case p.DOLLY:if(!1===c.enableZoom)return;!function(e){M.set(e.clientX,e.clientY),T.subVectors(M,P),T.y>0?F(A()):T.y<0&&V(A()),P.copy(M),c.update()}(e);break;case p.PAN:if(!1===c.enablePan)return;!function(e){j.set(e.clientX,e.clientY),x.subVectors(j,L).multiplyScalar(c.panSpeed),z(x.x,x.y),L.copy(j),c.update()}(e)}}function W(e){!1!==c.enabled&&(document.removeEventListener("mousemove",G,!1),document.removeEventListener("mouseup",W,!1),c.dispatchEvent(u),m=p.NONE)}function K(e){!1===c.enabled||!1===c.enableZoom||m!==p.NONE&&m!==p.ROTATE||(e.preventDefault(),e.stopPropagation(),c.dispatchEvent(h),function(e){e.deltaY<0?V(A()):e.deltaY>0&&F(A()),c.update()}(e),c.dispatchEvent(u))}function q(e){!1!==c.enabled&&!1!==c.enableKeys&&!1!==c.enablePan&&function(e){var t=!1;switch(e.keyCode){case c.keys.UP:z(0,c.keyPanSpeed),t=!0;break;case c.keys.BOTTOM:z(0,-c.keyPanSpeed),t=!0;break;case c.keys.LEFT:z(c.keyPanSpeed,0),t=!0;break;case c.keys.RIGHT:z(-c.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),c.update())}(e)}function J(e){if(!1!==c.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(c.touches.ONE){case o.TOUCH.ROTATE:if(!1===c.enableRotate)return;D(e),m=p.TOUCH_ROTATE;break;case o.TOUCH.PAN:if(!1===c.enablePan)return;H(e),m=p.TOUCH_PAN;break;default:m=p.NONE}break;case 2:switch(c.touches.TWO){case o.TOUCH.DOLLY_PAN:if(!1===c.enableZoom&&!1===c.enablePan)return;!function(e){c.enableZoom&&_(e),c.enablePan&&H(e)}(e),m=p.TOUCH_DOLLY_PAN;break;case o.TOUCH.DOLLY_ROTATE:if(!1===c.enableZoom&&!1===c.enableRotate)return;!function(e){c.enableZoom&&_(e),c.enableRotate&&D(e)}(e),m=p.TOUCH_DOLLY_ROTATE;break;default:m=p.NONE}break;default:m=p.NONE}m!==p.NONE&&c.dispatchEvent(h)}}function Q(e){if(!1!==c.enabled)switch(e.preventDefault(),e.stopPropagation(),m){case p.TOUCH_ROTATE:if(!1===c.enableRotate)return;Y(e),c.update();break;case p.TOUCH_PAN:if(!1===c.enablePan)return;B(e),c.update();break;case p.TOUCH_DOLLY_PAN:if(!1===c.enableZoom&&!1===c.enablePan)return;!function(e){c.enableZoom&&X(e),c.enablePan&&B(e)}(e),c.update();break;case p.TOUCH_DOLLY_ROTATE:if(!1===c.enableZoom&&!1===c.enableRotate)return;!function(e){c.enableZoom&&X(e),c.enableRotate&&Y(e)}(e),c.update();break;default:m=p.NONE}}function $(e){!1!==c.enabled&&(c.dispatchEvent(u),m=p.NONE)}function ee(e){!1!==c.enabled&&e.preventDefault()}c.domElement.addEventListener("contextmenu",ee,!1),c.domElement.addEventListener("mousedown",Z,!1),c.domElement.addEventListener("wheel",K,!1),c.domElement.addEventListener("touchstart",J,!1),c.domElement.addEventListener("touchend",$,!1),c.domElement.addEventListener("touchmove",Q,!1),c.domElement.addEventListener("keydown",q,!1),-1===c.domElement.tabIndex&&(c.domElement.tabIndex=0),this.update()});E.prototype=Object.create(o.EventDispatcher.prototype),E.prototype.constructor=E;var L=function(e,t){E.call(this,e,t),this.mouseButtons.LEFT=o.MOUSE.PAN,this.mouseButtons.RIGHT=o.MOUSE.ROTATE,this.touches.ONE=o.TOUCH.PAN,this.touches.TWO=o.TOUCH.DOLLY_ROTATE};(L.prototype=Object.create(o.EventDispatcher.prototype)).constructor=L;var j=function(e){o.Loader.call(this,e)};j.prototype=Object.assign(Object.create(o.Loader.prototype),{constructor:j,load:function(e,t,n,a){var r=this,i=""===this.path?o.LoaderUtils.extractUrlBase(e):this.path,s=new o.FileLoader(this.manager);s.setPath(this.path),s.load(e,(function(e){t(r.parse(e,i))}),n,a)},setMaterialOptions:function(e){return this.materialOptions=e,this},parse:function(e,t){for(var n=e.split("\n"),o={},a=/\s+/,r={},i=0;i<n.length;i++){var s=n[i];if(0!==(s=s.trim()).length&&"#"!==s.charAt(0)){var c=s.indexOf(" "),l=c>=0?s.substring(0,c):s;l=l.toLowerCase();var h=c>=0?s.substring(c+1):"";if(h=h.trim(),"newmtl"===l)o={name:h},r[h]=o;else if("ka"===l||"kd"===l||"ks"===l||"ke"===l){var u=h.split(a,3);o[l]=[parseFloat(u[0]),parseFloat(u[1]),parseFloat(u[2])]}else o[l]=h}}var p=new j.MaterialCreator(this.resourcePath||t,this.materialOptions);return p.setCrossOrigin(this.crossOrigin),p.setManager(this.manager),p.setMaterials(r),p}}),j.MaterialCreator=function(e,t){this.baseUrl=e||"",this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.side=this.options&&this.options.side?this.options.side:o.FrontSide,this.wrap=this.options&&this.options.wrap?this.options.wrap:o.RepeatWrapping},j.MaterialCreator.prototype={constructor:j.MaterialCreator,crossOrigin:"anonymous",setCrossOrigin:function(e){return this.crossOrigin=e,this},setManager:function(e){this.manager=e},setMaterials:function(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}},convert:function(e){if(!this.options)return e;var t={};for(var n in e){var o=e[n],a={};for(var r in t[n]=a,o){var i=!0,s=o[r],c=r.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(s=[s[0]/255,s[1]/255,s[2]/255]),this.options&&this.options.ignoreZeroRGBs&&0===s[0]&&0===s[1]&&0===s[2]&&(i=!1)}i&&(a[c]=s)}}return t},preload:function(){for(var e in this.materialsInfo)this.create(e)},getIndex:function(e){return this.nameLookup[e]},getAsArray:function(){var e=0;for(var t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray},create:function(e){return void 0===this.materials[e]&&this.createMaterial_(e),this.materials[e]},createMaterial_:function(e){var t=this,n=this.materialsInfo[e],a={name:e,side:this.side};function r(e,n){if(!a[e]){var o,r,i=t.getTextureParams(n,a),s=t.loadTexture((o=t.baseUrl,"string"!=typeof(r=i.url)||""===r?"":/^https?:\/\//i.test(r)?r:o+r));s.repeat.copy(i.scale),s.offset.copy(i.offset),s.wrapS=t.wrap,s.wrapT=t.wrap,a[e]=s}}for(var i in n){var s,c=n[i];if(""!==c)switch(i.toLowerCase()){case"kd":a.color=(new o.Color).fromArray(c);break;case"ks":a.specular=(new o.Color).fromArray(c);break;case"ke":a.emissive=(new o.Color).fromArray(c);break;case"map_kd":r("map",c);break;case"map_ks":r("specularMap",c);break;case"map_ke":r("emissiveMap",c);break;case"norm":r("normalMap",c);break;case"map_bump":case"bump":r("bumpMap",c);break;case"map_d":r("alphaMap",c),a.transparent=!0;break;case"ns":a.shininess=parseFloat(c);break;case"d":(s=parseFloat(c))<1&&(a.opacity=s,a.transparent=!0);break;case"tr":s=parseFloat(c),this.options&&this.options.invertTrProperty&&(s=1-s),s>0&&(a.opacity=1-s,a.transparent=!0)}}return this.materials[e]=new o.MeshPhongMaterial(a),this.materials[e]},getTextureParams:function(e,t){var n,a={scale:new o.Vector2(1,1),offset:new o.Vector2(0,0)},r=e.split(/\s+/);return(n=r.indexOf("-bm"))>=0&&(t.bumpScale=parseFloat(r[n+1]),r.splice(n,2)),(n=r.indexOf("-s"))>=0&&(a.scale.set(parseFloat(r[n+1]),parseFloat(r[n+2])),r.splice(n,4)),(n=r.indexOf("-o"))>=0&&(a.offset.set(parseFloat(r[n+1]),parseFloat(r[n+2])),r.splice(n,4)),a.url=r.join(" ").trim(),a},loadTexture:function(e,t,n,a,r){var i,s=void 0!==this.manager?this.manager:o.DefaultLoadingManager,c=s.getHandler(e);return null===c&&(c=new o.TextureLoader(s)),c.setCrossOrigin&&c.setCrossOrigin(this.crossOrigin),i=c.load(e,n,a,r),void 0!==t&&(i.mapping=t),i}};var x=function(){var e=/^[og]\s*(.+)?/,t=/^mtllib /,n=/^usemtl /,a=/^usemap /;function r(){var e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);var n=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[]},materials:[],smooth:!0,startMaterial:function(e,t){var n=this._finalize(!1);n&&(n.inherited||n.groupCount<=0)&&this.materials.splice(n.index,1);var o={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==n?n.smooth:this.smooth,groupStart:void 0!==n?n.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){var t={index:"number"==typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){var t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(var n=this.materials.length-1;n>=0;n--)this.materials[n].groupCount<=0&&this.materials.splice(n,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},n&&n.name&&"function"==typeof n.clone){var o=n.clone(0);o.inherited=!0,this.object.materials.push(o)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){var n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseNormalIndex:function(e,t){var n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseUVIndex:function(e,t){var n=parseInt(e,10);return 2*(n>=0?n-1:n+t/2)},addVertex:function(e,t,n){var o=this.vertices,a=this.object.geometry.vertices;a.push(o[e+0],o[e+1],o[e+2]),a.push(o[t+0],o[t+1],o[t+2]),a.push(o[n+0],o[n+1],o[n+2])},addVertexPoint:function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){var o=this.normals,a=this.object.geometry.normals;a.push(o[e+0],o[e+1],o[e+2]),a.push(o[t+0],o[t+1],o[t+2]),a.push(o[n+0],o[n+1],o[n+2])},addColor:function(e,t,n){var o=this.colors,a=this.object.geometry.colors;a.push(o[e+0],o[e+1],o[e+2]),a.push(o[t+0],o[t+1],o[t+2]),a.push(o[n+0],o[n+1],o[n+2])},addUV:function(e,t,n){var o=this.uvs,a=this.object.geometry.uvs;a.push(o[e+0],o[e+1]),a.push(o[t+0],o[t+1]),a.push(o[n+0],o[n+1])},addUVLine:function(e){var t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,o,a,r,i,s,c){var l=this.vertices.length,h=this.parseVertexIndex(e,l),u=this.parseVertexIndex(t,l),p=this.parseVertexIndex(n,l);if(this.addVertex(h,u,p),this.colors.length>0&&this.addColor(h,u,p),void 0!==o&&""!==o){var m=this.uvs.length;h=this.parseUVIndex(o,m),u=this.parseUVIndex(a,m),p=this.parseUVIndex(r,m),this.addUV(h,u,p)}if(void 0!==i&&""!==i){var d=this.normals.length;h=this.parseNormalIndex(i,d),u=i===s?h:this.parseNormalIndex(s,d),p=i===c?h:this.parseNormalIndex(c,d),this.addNormal(h,u,p)}},addPointGeometry:function(e){this.object.geometry.type="Points";for(var t=this.vertices.length,n=0,o=e.length;n<o;n++)this.addVertexPoint(this.parseVertexIndex(e[n],t))},addLineGeometry:function(e,t){this.object.geometry.type="Line";for(var n=this.vertices.length,o=this.uvs.length,a=0,r=e.length;a<r;a++)this.addVertexLine(this.parseVertexIndex(e[a],n));var i=0;for(r=t.length;i<r;i++)this.addUVLine(this.parseUVIndex(t[i],o))}};return e.startObject("",!1),e}function i(e){o.Loader.call(this,e),this.materials=null}return i.prototype=Object.assign(Object.create(o.Loader.prototype),{constructor:i,load:function(e,t,n,a){var r=this,i=new o.FileLoader(r.manager);i.setPath(this.path),i.load(e,(function(e){t(r.parse(e))}),n,a)},setMaterials:function(e){return this.materials=e,this},parse:function(i){console.time("OBJLoader");var s=new r;-1!==i.indexOf("\r\n")&&(i=i.replace(/\r\n/g,"\n")),-1!==i.indexOf("\\\n")&&(i=i.replace(/\\\n/g,""));for(var c=i.split("\n"),l="",h="",u=[],p="function"==typeof"".trimLeft,m=0,d=c.length;m<d;m++)if(l=c[m],0!==(l=p?l.trimLeft():l.trim()).length&&"#"!==(h=l.charAt(0)))if("v"===h){var f=l.split(/\s+/);switch(f[0]){case"v":s.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7&&s.colors.push(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]));break;case"vn":s.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":s.uvs.push(parseFloat(f[1]),parseFloat(f[2]))}}else if("f"===h){for(var b=l.substr(1).trim().split(/\s+/),g=[],v=0,y=b.length;v<y;v++){var w=b[v];if(w.length>0){var O=w.split("/");g.push(O)}}var E=g[0];for(v=1,y=g.length-1;v<y;v++){var L=g[v],j=g[v+1];s.addFace(E[0],L[0],j[0],E[1],L[1],j[1],E[2],L[2],j[2])}}else if("l"===h){var x=l.substring(1).trim().split(" "),P=[],M=[];if(-1===l.indexOf("/"))P=x;else for(var T=0,A=x.length;T<A;T++){var k=x[T].split("/");""!==k[0]&&P.push(k[0]),""!==k[1]&&M.push(k[1])}s.addLineGeometry(P,M)}else if("p"===h){var N=l.substr(1).trim().split(" ");s.addPointGeometry(N)}else if(null!==(u=e.exec(l))){var C=(" "+u[0].substr(1).trim()).substr(1);s.startObject(C)}else if(n.test(l))s.object.startMaterial(l.substring(7).trim(),s.materialLibraries);else if(t.test(l))s.materialLibraries.push(l.substring(7).trim());else if(a.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===h){if((u=l.split(" ")).length>1){var S=u[1].trim().toLowerCase();s.object.smooth="0"!==S&&"off"!==S}else s.object.smooth=!0;(G=s.object.currentMaterial())&&(G.smooth=s.object.smooth)}else{if("\0"===l)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}s.finalize();var R=new o.Group;R.materialLibraries=[].concat(s.materialLibraries);for(m=0,d=s.objects.length;m<d;m++){var z=s.objects[m],F=z.geometry,V=z.materials,U="Line"===F.type,I="Points"===F.type,D=!1;if(0!==F.vertices.length){var H=new o.BufferGeometry;H.setAttribute("position",new o.Float32BufferAttribute(F.vertices,3)),F.normals.length>0?H.setAttribute("normal",new o.Float32BufferAttribute(F.normals,3)):H.computeVertexNormals(),F.colors.length>0&&(D=!0,H.setAttribute("color",new o.Float32BufferAttribute(F.colors,3))),F.uvs.length>0&&H.setAttribute("uv",new o.Float32BufferAttribute(F.uvs,2));for(var _,Y=[],B=0,X=V.length;B<X;B++){var Z=V[B],G=void 0;if(null!==this.materials)if(G=this.materials.create(Z.name),!U||!G||G instanceof o.LineBasicMaterial){if(I&&G&&!(G instanceof o.PointsMaterial)){var W=new o.PointsMaterial({size:10,sizeAttenuation:!1});o.Material.prototype.copy.call(W,G),W.color.copy(G.color),W.map=G.map,G=W}}else{var K=new o.LineBasicMaterial;o.Material.prototype.copy.call(K,G),K.color.copy(G.color),G=K}G||((G=U?new o.LineBasicMaterial:I?new o.PointsMaterial({size:1,sizeAttenuation:!1}):new o.MeshPhongMaterial).name=Z.name),G.flatShading=!Z.smooth,G.vertexColors=D?o.VertexColors:o.NoColors,Y.push(G)}if(Y.length>1){for(B=0,X=V.length;B<X;B++){Z=V[B];H.addGroup(Z.groupStart,Z.groupCount,B)}_=U?new o.LineSegments(H,Y):I?new o.Points(H,Y):new o.Mesh(H,Y)}else _=U?new o.LineSegments(H,Y[0]):I?new o.Points(H,Y[0]):new o.Mesh(H,Y[0]);_.name=z.name,R.add(_)}}return console.timeEnd("OBJLoader"),R}}),i}();function P(e,t){return new Promise(n=>{(new j).load(e,e=>{e.preload();var a=new x;a.setMaterials(e),a.load(t,e=>{e.traverse((function(e){e instanceof o.Mesh&&(e.material instanceof Array?e.material.forEach(e=>e.shininess=0):e.material.shininess=0)})),n(e)})})})}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const T=new class{constructor(){M(this,"camera",void 0),M(this,"controls",void 0),M(this,"scene",void 0),M(this,"renderer",void 0),this.init(),window.addEventListener("resize",this.onWindowResize.bind(this),!1),this.looper()}render(){this.renderer.render(this.scene,this.camera)}init(){this.camera=new o.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.set(50,10,15),this.scene=new o.Scene,this.scene.background=new o.Color(12575709),this.scene.add(new o.AmbientLight(4210752)),this.pointLightBottom=new o.DirectionalLight(16777215),this.pointLight=new o.DirectionalLight(16777215),this.scene.fog=new o.FogExp2(12575709,.004),this.pointLight.position.set(-50,70,-50),this.pointLightBottom.position.set(15,-50,-80),this.scene.add(this.pointLight),this.scene.add(this.pointLightBottom);var e=new o.MeshBasicMaterial({color:16777215}),t=new o.DodecahedronGeometry(10,1);this.sun=new o.Mesh(t,e),this.sun.position.copy(this.pointLight.position),this.scene.add(this.sun),P(l.a,s.a).then(e=>{e.scale.set(10,10,10),this.scene.add(e)}),P(O.a,y.a).then(e=>{e.scale.set(10,10,10),this.scene.add(e),this.pazzlessArray=[],e.traverse(e=>{e instanceof o.Mesh&&!e.name.includes("border")&&this.pazzlessArray.push(e)})}).then(()=>{this.pazzlessArray.forEach(e=>{e.on("click",t=>{console.log(e),e.position.y-=.1})})}),P(m.a,u.a).then(e=>{e.scale.set(8,8,8),e.position.set(-15,0,10),this.scene.add(e)}),P(g.a,f.a).then(e=>{e.scale.set(10,10,10),e.position.x=-15,this.scene.add(e)}),this.renderer=new o.WebGLRenderer,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.controls=new E(this.camera,this.renderer.domElement),this.controls.maxPolarAngle=Math.PI/2.05,this.controls.enableZoom=!0,this.controls.enablePan=!1,this.controls.zoomSpeed=2,this.controls.enabled=!0;new r.a(this.renderer,this.scene,this.camera);new a.a}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.render()}looper(){this.render(),requestAnimationFrame(()=>this.looper())}};console.log(T)}]);
//# sourceMappingURL=app.946bca34.js.map