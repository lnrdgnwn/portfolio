import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Robot3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    const container = canvasRef.current.parentElement;
    renderer.setSize(container.offsetWidth, container.offsetHeight);

    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    controls.enableZoom = false;

    camera.position.set(0, 1, 2);
    controls.update();

    let mixer;
    const loader = new GLTFLoader();
    loader.load(
      "/3d_models/robot_playground.glb",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        model.position.y -= 1;

        mixer = new THREE.AnimationMixer(model);
        if (gltf.animations.length > 0) {
          const action = mixer.clipAction(gltf.animations[0]);
          action.play();
        }
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    const onWindowResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener("resize", onWindowResize);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full cursor-grab h-[700px] bg-[primary]-100 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default Robot3D;
