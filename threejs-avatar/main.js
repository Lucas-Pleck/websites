var scene, renderer;
var camera;
var mesh;

var isMouseDown = false;
 
function init() {
    
    //シーンを作成
    scene = new THREE.Scene(); 
    
    //カメラを作成
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 
    camera.position.z = 25; 
    camera.position.y = 15; 
    
    //レンダラーを作成
    renderer = new THREE.WebGLRenderer(); 
    renderer.setSize( window.innerWidth, window.innerHeight ); 
    document.body.appendChild( renderer.domElement ); 
    renderer.setClearColor(0x00ffff, 1); 
    renderer.gammaOutput = true;
    
    var light = new THREE.DirectionalLight("#c1582d", 1);
    var ambient = new THREE.AmbientLight("#ffffff");
    light.position.set( 0, -70, 100 ).normalize();
    scene.add(light);
    scene.add(ambient);

    var texture = new THREE.Texture();
    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {};
    var onProgress = function ( xhr ) {};
    var onError = function ( xhr ) {};

    var loader = new THREE.GLTFLoader();

    loader.load('avatar.glb',
        function ( gltf ) {

                mesh = gltf.scene;
                mesh.scale.set( 10, 10, 10 );
                scene.add( mesh );
        },
        function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        function ( error ) {

                console.log( 'An error happened' );
        }
    );
    
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);

    render();   
}

function render() {
    requestAnimationFrame( render ); 
    renderer.render(scene, camera); 
}


function onMouseDown(event) {
    isMouseDown = true;
}

function onMouseMove(event) {
    if (isMouseDown) {
        if ( mesh ) {
            mesh.rotation.y = getMouseX(event)/50;
            mesh.rotation.x = getMouseY(event)/50;

        }
    }
}


function onMouseUp(event) {
    isMouseDown = false;
}

function getMouseX(event) {
    if (event.type.indexOf("touch") == -1)
        return event.clientX;
    else
        return event.touches[0].clientX;
}

function getMouseY(event) {
    if (event.type.indexOf("touch") == -1)
        return event.clientY;
    else
        return event.touches[0].clientY;
}

window.addEventListener('DOMContentLoaded', init);