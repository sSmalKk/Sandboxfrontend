/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import VoxelTerrain from "../Terrain/VoxelTerrain";


export default function FixedView({
  cameraPosition = [10, 10, 10],
  sunPosition = [100, 20, 100],
  ambientLightIntensity = 1,
  pointLightIntensity = 0.5,
  pointLightPosition = [10, 10, 10],
  terrainProps = {},
}) {
  return (
    <Canvas
      shadows
      camera={{ position: cameraPosition, fov: 50 }}
      style={{ position: "fixed", zIndex: -1 }}
      className="top-0 bottom-0 w-full h-full"
    >
      <Sky sunPosition={sunPosition} />
      <ambientLight intensity={ambientLightIntensity} />
      <pointLight intensity={pointLightIntensity} position={pointLightPosition} />
      <Physics gravity={[0, -9, 0]}>
        <VoxelTerrain {...terrainProps} />
      </Physics>
    </Canvas>
  );
}
