import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var width = window.innerWidth;
var height = window.innerHeight;


// 1: Set up the scene

var scene = new THREE.Scene();

// 2: Add a camera
var camera = new THREE.PerspectiveCamera(101,width/height,0.1,1000);
camera.position.z = 0;
camera.position.y = 21;
camera.position.x = 0;






// 3: create a renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#141414");
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);






// ********IMPORT 3D MODELS**************************

// add model
    var cerealBowl;
    var mixer;            // THREE.js animation mixer
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('media/models/cereal.glb', (gltf) => {
        
            cerealBowl = gltf.scene;
            cerealBowl.scale.set(3,3,3);
            cerealBowl.position.set(0,0,0);
            scene.add(cerealBowl);


        
        
        
        });



//**********************L I G H T S**********************


// 5: Add lighting to the scene
// adding ambient light
// second parameter is the intensity of the light
var ambientLight = new THREE.AmbientLight(0xffffff,2.8);
scene.add(ambientLight);




// adding orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 0.54


// responsive window size
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});




// FINAL: Render the scene
function animate(){
    requestAnimationFrame(animate);

    
    cerealBowl.rotation.y += 0.001;



    controls.update();


    renderer.render(scene,camera);
}

animate();