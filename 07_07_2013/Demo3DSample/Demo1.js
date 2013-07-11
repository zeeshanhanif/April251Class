/**
 * Created with JetBrains WebStorm.
 * User: zeeshanhanif
 * Date: 7/7/13
 * Time: 4:39 PM
 * To change this template use File | Settings | File Templates.
 */

var renderer = new THREE.WebGLRenderer();
renderer.setSize(500,400);
var container = document.getElementById("container");
container.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45,500/400,1,4000);
camera.position.z=300;
scene.add(camera);

var sphere = new THREE.SphereGeometry(50,16,16);
var sphereMaterial = new THREE.MeshLambertMaterial({
    color: "blue"
});
var mesh = new THREE.Mesh(sphere,sphereMaterial);
scene.add(mesh);

var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

renderer.render(scene,camera);





