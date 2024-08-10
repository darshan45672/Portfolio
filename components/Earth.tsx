import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf");
  const memoizedScene = useMemo(() => scene.clone(), [scene]);

  return <primitive object={memoizedScene} scale={3} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows={false}
      frameloop="demand"
      dpr={Math.min(window.devicePixelRatio, 2)}
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<Html><div>Loading...</div></Html>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;