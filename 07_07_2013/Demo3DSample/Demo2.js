/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 7/7/13
 * Time: 4:39 PM
 * To change this template use File | Settings | File Templates.
 */

var renderer = new THREE.WebGLRenderer();
renderer.setSize(900,400);
var container = document.getElementById("container");
container.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45,900/400,1,4000);
camera.position.z=300;
scene.add(camera);

var sphere = new THREE.SphereGeometry(50,16,16);
var sphereMaterial = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh(sphere,sphereMaterial);
scene.add(mesh);


var cube = new THREE.CubeGeometry(100,100,50);
var cubeMaterial = new THREE.MeshPhongMaterial({
    color: "red"
});
//cube.position.x=50;

var cubeMesh = new THREE.Mesh(cube,cubeMaterial);
cubeMesh.position.x=150;
scene.add(cubeMesh);



var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

animate();

function animate (){

    renderer.render(scene,camera);
    cubeMesh.rotation.x +=0.01;
    cubeMesh.rotation.y +=0.01;

    mesh.rotation.z += 0.1;

    requestAnimationFrame(animate);
}







