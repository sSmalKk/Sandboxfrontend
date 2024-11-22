import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import {
  CapsuleCollider,
  RigidBody,
  useRapier,
  Physics,
} from "@react-three/rapier";

import PropTypes from "prop-types"; // Certifique-se de importar PropTypes no início do arquivo

Player.propTypes = {
  setChunkPosition: PropTypes.func.isRequired, // Deve ser uma função obrigatória
  initialPosition: PropTypes.arrayOf(PropTypes.number).isRequired, // Deve ser um array de números
  speed: PropTypes.number.isRequired, // Deve ser um número obrigatório
  direction: PropTypes.instanceOf(THREE.Vector3).isRequired, // Deve ser uma instância de THREE.Vector3
  frontVector: PropTypes.instanceOf(THREE.Vector3).isRequired, // Deve ser uma instância de THREE.Vector3
  sideVector: PropTypes.instanceOf(THREE.Vector3).isRequired, // Deve ser uma instância de THREE.Vector3
  rotation: PropTypes.instanceOf(THREE.Euler).isRequired, // Deve ser uma instância de THREE.Euler
  lerp: PropTypes.func.isRequired, // Deve ser uma função obrigatória
  flying: PropTypes.bool, // Deve ser um booleano (opcional)
  interfaceOpen: PropTypes.bool.isRequired, // Deve ser um booleano obrigatório
  setInterfaceOpen: PropTypes.func.isRequired, // Deve ser uma função obrigatória
};

export function Player({
  setChunkPosition,
  initialPosition,
  speed,
  direction,
  frontVector,
  interfaceOpen,
  setInterfaceOpen,
  sideVector,
  rotation,
  lerp = THREE.MathUtils.lerp,
  flying,
}) {
  const [playerPosition, setPlayerPosition] = useState(initialPosition);

  const body = useRef();
  const ref = useRef();
  const rapier = useRapier();
  const [, get] = useKeyboardControls();

  const [currentGravity, setCurrentGravity] = useState([0, 0, 0]);

  useEffect(() => {
    if (!ref.current) return;
    setPlayerPosition(ref.current.translation());
  }, []);

  useFrame((state) => {
    const {
      forward,
      backward,
      left,
      right,
      jump,
      shift,
      inventory,
      escape,
      layerp,
      layerm,
    } = get();
    if (!ref.current) return;
    if (inventory) {
      setInterfaceOpen(true);
    }

    const velocity = ref.current.linvel();

    state.camera.position.set(...ref.current.translation());

    if (body.current && body.current.children[0]) {
      body.current.children[0].rotation.x = lerp(
        body.current.children[0].rotation.x,
        Math.sin((velocity.length() > 1) * state.clock.elapsedTime * 10) / 6,
        0.1
      );

      body.current.rotation.copy(state.camera.rotation);

      const worldDirection = new THREE.Vector3();
      state.camera.getWorldDirection(worldDirection);

      body.current.position
        .copy(state.camera.position)
        .add(worldDirection.multiplyScalar(1));
    }

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(state.camera.rotation);

    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

    const world = rapier.world.raw();
    const ray = world.castRay(
      new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 })
    );
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75;

    if (jump && grounded) {
      ref.current.setLinvel({ x: 0, y: 7.5, z: 0 });
    }
    if (flying) {
      if (shift) {
        ref.current.setLinvel({ x: 0, y: -7.5, z: 0 });
      } else if (jump) {
        ref.current.setLinvel({ x: 0, y: 7.5, z: 0 });
      } else {
        ref.current.setLinvel({ x: direction.x, y: 0, z: direction.z });
      }
    }
    if (!flying && velocity.length() > 0.1) {
      ref.current.setLinvel({ x: 0, y: velocity.y, z: 0 });
    }

    setChunkPosition([
      Math.round(state.camera.position.x / 16),
      0,
      Math.round(state.camera.position.z / 16),
    ]);
    setPlayerPosition(state.camera.position);
  });

  return flying ? (
    <Physics gravity={currentGravity}>
      <RigidBody
        ref={ref}
        colliders={false}
        type="dynamic"
        position={initialPosition}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 1]} position={[0, 1, 0]} />
        <group ref={body}></group>
      </RigidBody>
    </Physics>
  ) : (
    <group ref={body}>
      <RigidBody
        ref={ref}
        colliders={false}
        type="dynamic"
        position={initialPosition}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 1]} position={[0, 1, 0]} />
        <group ref={body}></group>
      </RigidBody>
    </group>
  );
}

Player.defaultProps = {
  speed: 5,
  direction: new THREE.Vector3(),
  frontVector: new THREE.Vector3(),
  sideVector: new THREE.Vector3(),
  rotation: new THREE.Euler(),
};
