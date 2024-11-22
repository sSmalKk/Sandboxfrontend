/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls, KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Player } from "../Data/Player";
import VoxelTerrain from "../Terrain/VoxelTerrain";

export default function Game({
  customModels,
  blockState,
  canPlayerFly = true,
  flying = true,
  textures,
  chunks,
  renderDistance = 10,
  gravity = [0, -9, 0],
  pointLightPosition = [0, 0, 0],
  initialPlayerPosition = [1, 13, 0],
  sunPosition = [100, 20, 100],
  ambientLightIntensity = 3,
  pointLightIntensity = 0.2,
  fov = 45,
  keyboardMap,
}) {
  const setChunkPosition = useGameStore((state) => state.setChunkPosition);
  const [interfaceOpen, setInterfaceOpen] = useGameStore((state) => [
    state.interfaceOpen,
    state.setInterfaceOpen,
  ]);

  useEffect(() => {
    const handlePointerLockChange = () => {
      const isLocked = document.pointerLockElement !== null;
      setInterfaceOpen(!isLocked); // Open the interface if the mouse is not locked
    };

    document.addEventListener("pointerlockchange", handlePointerLockChange);
    return () => {
      document.removeEventListener("pointerlockchange", handlePointerLockChange);
    };
  }, [setInterfaceOpen]);

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Canvas
          shadows
          camera={{ fov: fov }}
          style={{ position: "fixed", zIndex: -1 }}
          className="top-0 bottom-0 w-full h-full"
        >
          <Sky sunPosition={sunPosition} />
          <ambientLight intensity={ambientLightIntensity} />
          <pointLight
            castShadow
            intensity={pointLightIntensity}
            position={pointLightPosition}
          />
          <Physics gravity={gravity}>
            <Player
              interfaceOpen={interfaceOpen}
              setInterfaceOpen={setInterfaceOpen}
              canPlayerFly={canPlayerFly}
              gravity={gravity}
              setChunkPosition={setChunkPosition}
              initialPosition={initialPlayerPosition}
              flying={flying}
            />
            <VoxelTerrain
              customModels={customModels}
              blockState={blockState}
              fullrender={true}
              chunks={chunks}
              textures={textures}
              clusterWidth={1}
              renderDistance={renderDistance}
            />
          </Physics>
          {!interfaceOpen && <PointerLockControls enabled={true} />}
        </Canvas>
      </KeyboardControls>
    </>
  );
}
