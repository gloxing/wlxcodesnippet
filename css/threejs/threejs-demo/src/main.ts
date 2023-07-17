import './style.css'
import * as THREE from 'three';

// init
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 5;

const scene = new THREE.Scene();
 

const geometry = new THREE.BoxGeometry( 1, 1,1 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true,alpha: true  } );
renderer.setSize( window.innerWidth,window.innerHeight );
renderer.setAnimationLoop( animation );


document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}

