// inner variables
var home, canvas, title;
var camera, scene, renderer;
var mouse;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var raycaster;

var clock;

var orbit;
var particles = {};
var imageParticlesSystem;
var planeHelperObject = new Array();

var particleCanvas;

var guiParams;


const cameraNearPlane = 0.1;
const cameraFarPlane = 1000;

window.onload = initparticleImage;

function initparticleImage() {

    // creating canvas and context objects
    canvas = document.getElementById('canvas');
    home = document.getElementById('home');

    // preparing scene
    scene = new THREE.Scene();

    // preparing camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, cameraNearPlane, cameraFarPlane);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.position.set(0, 0, 700);
    scene.add(camera);

    mouse = new THREE.Vector2();

    // preparing canvas to get image data
    var coordinateCanvas = document.createElement( 'canvas' );
    var ctx = coordinateCanvas.getContext("2d");

    particleCanvas = {};
  
    particleCanvas.width = 1500;
    particleCanvas.height = 600;
  
    coordinateCanvas.width = particleCanvas.width;
    coordinateCanvas.height = particleCanvas.height;
  
    // translate context to center of canvas
    ctx.translate(0, particleCanvas.height);

    // flip context vertically
    ctx.scale(1, -1);
    
    // write on canvas
    ctx.font = "250pt Times New Roman";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("404", coordinateCanvas.width / 2, coordinateCanvas.height / 2);
  
    
    // get image data
    var data = ctx.getImageData(0, 0, coordinateCanvas.width, coordinateCanvas.height);
    ctx.clearRect(0, 0, coordinateCanvas.width, coordinateCanvas.height);

    // fill our particles coordinate array
    particles.initPositions = new Array();
    particles.minPositions = new Array();
    particles.maxPositions = new Array();
    particles.noiseValues = new Array();
    particles.colors = new Array();

    for (var y = 0, y2 = data.height; y < y2; y++) {
        for (var x = 0, x2 = data.width; x < x2; x++) {
            // if we got a white pixel from our text, create a particle
            if (data.data[(x * 4 + y * 4 * data.width)] > 128) {

                var maxZ = Math.random() * 2000 + (camera.position.z + 10);
                
                // before imploding
                particles.initPositions.push(x);
                particles.initPositions.push(y);
                particles.initPositions.push(maxZ);
                
                // after imploding
                particles.minPositions.push(x);
                particles.minPositions.push(y);
                particles.minPositions.push(0);
                
                // before imploding
                particles.maxPositions.push(x);
                particles.maxPositions.push(y);
                particles.maxPositions.push(maxZ);

                var color = new THREE.Color(0x7f793f);
                particles.colors.push(color.r, color.g, color.b);

                var noiseX = Math.random() * 20 - 10;
                var noiseY = Math.random() * 20 - 10;

                particles.noiseValues.push(noiseX);
                particles.noiseValues.push(noiseY);
            }
        }
    }



    // plane helper for the raycaster
    var planeHelperGeometry = new THREE.PlaneGeometry(10000, 10000);
    var planeHelperMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0,
    });

    var planeHelper = new THREE.Mesh(planeHelperGeometry, planeHelperMaterial);
  
    planeHelperObject.push(planeHelper);
    scene.add(planeHelper);

    // preparing our buffer geometry
    var imageParticlesGeometry = new THREE.BufferGeometry();

    imageParticlesGeometry.addAttribute( 'position', new THREE.Float32BufferAttribute( particles.initPositions, 3 ) );
    imageParticlesGeometry.addAttribute( 'minPosition', new THREE.Float32BufferAttribute( particles.minPositions, 3 ) );
    imageParticlesGeometry.addAttribute( 'maxPosition', new THREE.Float32BufferAttribute( particles.maxPositions, 3 ) );
    imageParticlesGeometry.addAttribute( 'color', new THREE.Float32BufferAttribute( particles.colors, 3 ) );
    imageParticlesGeometry.addAttribute( 'noiseValue', new THREE.Float32BufferAttribute( particles.noiseValues, 2 ) );
    imageParticlesGeometry.addAttribute( 'mouseRepulsion', new THREE.Float32BufferAttribute( particles.mouseRepulsion, 1 ) );
  
    // our uniforms
    var uniforms = {
        uDuration: {
            type: "f",
            value: 180 // 3 seconds
        },
        uElapsedTime: {
            type: "f",
            value: 0
        },
        uSize: {
            type: "f",
            value: 3
        },
        uNoise: {
            type: "f",
            value: 8
        },
        uMousePosition: {
            type: "v2",
            value: new THREE.Vector2()
        },
        uMouseRadius: {
            type: "f",
            value: 100
        },
        uMouseStrength: {
            type: "f",
            value: 0.75
        },
    }

    var imageParticlesMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById('particle-image-vs').textContent,
        fragmentShader: document.getElementById('particle-image-fs').textContent
    });

    // create the particle system
    imageParticlesSystem = new THREE.Points(imageParticlesGeometry, imageParticlesMaterial);

    imageParticlesSystem.position.x = -1 * particleCanvas.width / 2;
    imageParticlesSystem.position.y = -1 * particleCanvas.height / 2;

    // add it to the scene
    scene.add(imageParticlesSystem);


    // preparing new renderer and drawing it
    renderer = new THREE.WebGLRenderer({ alpha:true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio( window.devicePixelRatio );

    canvas.appendChild(renderer.domElement);
    
    // get the main title HTML element
    title = document.getElementById("title").getElementsByTagName("h2")[0];

    // change positions by mouse
    document.addEventListener('mousemove', onMousemove, false);

    // change canvas size on resize
    window.addEventListener('resize', onResize, false);

    clock = new THREE.Clock();
    clock.start();


    // mouse interaction
    raycaster = new THREE.Raycaster();
    
    // ready to go
    document.body.classList.add("renderer-ready");

    animate();
}


function onMousemove(event) {
    // used in the raycaster
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    
    // translate the title
    var titleTranslation = {
      x: -(event.clientX - (window.innerWidth / 2)) / 10,
      y: -(event.clientY - (window.innerHeight / 2)) / 10,
    };
  
    title.style.transform = "translate3d(" + titleTranslation.x + "px, " + titleTranslation.y + "px, 0)";
}

function onResize(event) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function animate() {

    requestAnimationFrame(animate);
  
    var mouseX, mouseY;

    raycaster.setFromCamera( mouse, camera );
    var intersects;
    intersects = raycaster.intersectObjects( planeHelperObject, true );

    if(intersects.length > 0) {

        var intersection = intersects[0];
      mouseX = intersection.point.x + particleCanvas.width / 2;
      mouseY = intersection.point.y + particleCanvas.height / 2;
    }



    // animate here
    if(imageParticlesSystem.material.uniforms) {
        imageParticlesSystem.material.uniforms.uElapsedTime.value++;
      
      imageParticlesSystem.material.uniforms.uMousePosition.value.x = mouseX;
            imageParticlesSystem.material.uniforms.uMousePosition.value.y = mouseY;
    }

    renderer.render(scene, camera);
}