var renderer, scene, camera, world;

// Handle resizing the window so that the aspect ratio is maintained 
window.onresize = function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function clamp(num, min, max){
	return Math.min(Math.max(num, min), max);
}

function World() {
	this.bgColors = [[10, 10, 55], [55, 33, 22], [99, 99, 255]];
	this.obj = new THREE.Group();
	this.dirLight;

	this.init = function() {
		var citySize = 25.373428830842077;

		// Ground
		var mat = new THREE.MeshLambertMaterial({color: 0xffffff, emissive: 0x000000});
		var o = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000), mat.clone());
		o.rotation.x = -Math.PI/2;
		o.receiveShadow = true;
		o.castShadow = false;
		this.obj.add(o);

		var block = new THREE.Mesh(new THREE.BoxGeometry(.8, 1, .8), mat);
		block.castShadow = false;
		block.receiveShadow = true;

		for(var x = 0; x < citySize; x++){
			for(var z = 0; z < citySize; z++){
				var newBlock = block.clone();
				newBlock.position.set(x - citySize/2, 0, z - citySize/2);
				newBlock.scale.y = 0.2703642304216465 * (citySize/((x - citySize/2)*(x - citySize/2) + (z - citySize/2)*(z - citySize/2)));
				newBlock.scale.y = clamp(newBlock.scale.y, .1, 50);	
				
				this.obj.add(newBlock);
			}
        }
        
		scene.add(this.obj);

		var loader = new THREE.FontLoader();
		loader.load( "helvetiker_regular.typeface.json", function ( font ) {
			var color = 0x006699;
			var matLite = new THREE.MeshBasicMaterial( {
				color: color,
				transparent: true,
				opacity: 0.4,
				side: THREE.DoubleSide
			} );
			var message = "HELLO WORLD";
			var shapes = font.generateShapes( message, 100 );
			var geometry = new THREE.ShapeBufferGeometry( shapes );
			geometry.computeBoundingBox();
			xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
			geometry.translate( xMid, 0, 0 );
			text = new THREE.Mesh( geometry, matLite );
			text.position.x = -5;
			text.position.y = 0;
			text.position.z = -5;
			text.scale.x = .025;


			// debug
			var gui = new dat.GUI();

			var textPos = gui.addFolder('text-pos');
			textPos.add(text.position, 'x', -200, 200).listen();
			textPos.add(text.position, 'y', -200, 200).listen();
			textPos.add(text.position, 'z', -200, 200).listen();

			var textRot = gui.addFolder('text-rot');
			textRot.add(text.rotation, 'x', -200, 200).listen();
			textRot.add(text.rotation, 'y', -200, 200).listen();
			textRot.add(text.rotation, 'z', -200, 200).listen();

			var textScale = gui.addFolder('text-scale');
			textScale.add(text.scale, 'x', -10, 10).listen();
			textScale.add(text.scale, 'y', -10, 10).listen();
			textScale.add(text.scale, 'z', -10, 10).listen();

			textPos.open();
			textRot.open();
			textScale.open();

			scene.add( text );
		});

    }
    
	this.init();
}

  
// Set up three js scene
window.onload = function(){
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.shadowMapEnabled = true;
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		20, 
		window.innerWidth / window.innerHeight, 
		0.1, 
		1000
	);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	camera.position.x = 9;
	camera.position.y = 15;
	camera.position.z = 22.5;
	camera.rotation.x = 56.15;
	camera.rotation.y = -6.025;
	camera.rotation.z = 20.5;

	scene.add(new THREE.AmbientLight(0x000000));
	var dirLight = new THREE.DirectionalLight( 0xffffff, 2, 5000);
	dirLight.position.set(-50, 25, 0);
	dirLight.shadow.mapSize.width = 4096;
	dirLight.shadow.mapSize.height = 4096;
	dirLight.castShadow = true;
	
	scene.add(dirLight);

	var dlSub = new THREE.DirectionalLight(0xffffff, .5, 500);
	dlSub.position.set(-5, -5, -5);
	scene.add(dlSub);

	scene.rotation.y = Math.PI/4;

	scene.background = new THREE.Color(0xffffff);

    world = new World();
    
    /* debug
    var gui = new dat.GUI();

    var cam = gui.addFolder('position');
    cam.add(camera.position, 'x', -500, 500).listen();
    cam.add(camera.position, 'y', -500, 500).listen();
    cam.add(camera.position, 'z', -500, 500).listen();
    var rot = gui.addFolder('rotation');
    rot.add(camera.rotation, 'x', -500, 500).listen();
    rot.add(camera.rotation, 'y', -500, 500).listen();
    rot.add(camera.rotation, 'z', -500, 500).listen();
    cam.open();
    cam.open(); */

	render();
}

var render = function (){
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
