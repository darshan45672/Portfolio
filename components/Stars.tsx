"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const Stars = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(60000), { radius: 3.5 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10;
    ref.current.rotation.y -= delta/15;
  })

  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="$000"
                size={0.001}
                sizeAttenuation={true}
                dethWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => {
    return (
        <StyledCanvasWrapper>
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <Stars />
            </Suspense>
            <Preload all />
          </Canvas>
        </StyledCanvasWrapper>
      );
    // <div className="w-full h-auto fixed inset-0 z-[20]">
    //     <Canvas camera={{position: [0, 0, 1]}}>
    //     <Suspense fallback={null}>
    //         <Stars />
    //     </Suspense>
    //     </Canvas>
    // </div>
}

export default StarsCanvas;