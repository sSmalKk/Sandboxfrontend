/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { create } from "zustand"; // Corrija a importação do Zustand

// Correct typing for Zustand store
type BlockState = {
  [key: number]: {
    name: string;
    texture: string;
    model: string;
    textures: string[];
    RigidBody: string;
    RigidBodyType: string;
    type: number;
  };
};

type CustomModel = {
  position: number[];
  rotation: number[];
  render: boolean;
};

type Chunk = {
  position: number[];
  cubesArray: number[][];
};

type GameStore = {
  blockState: BlockState;
  setBlockState: (index: number, newState: BlockState[number]) => void;
  customModels: { [key: string]: CustomModel[] };
  setCustomModels: (modelName: string, newConfig: CustomModel[]) => void;
  chunks: Chunk[];
  setChunks: (x: number, y: number, z: number, cubes: number[][]) => void;
  textures: { [key: string]: string };
  setTextures: (textureName: string, url: string) => void;
  chunkPosition: number[];
  setChunkPosition: (newPosition: number[]) => void;
  interfaceOpen: boolean; // Add interfaceOpen to the store
  setInterfaceOpen: (value: boolean) => void; // Add setInterfaceOpen function
};

export const useGameStore = create<GameStore>((set) => ({
  // Defining initial state
  chunkPosition: [0, 0, 0],
  setChunkPosition: (newPosition) => set({ chunkPosition: newPosition }),

  interfaceOpen: true, // Default value for interfaceOpen
  setInterfaceOpen: (value) => set({ interfaceOpen: value }), // Function to set interfaceOpen

  blockState: {
    0: {
      name: "custombox",
      texture: "stone",
      model: "custombox",
      textures: ["stone", "brick"],
      RigidBody: "fixed",
      RigidBodyType: "cuboid",
      type: 0,
    },
  },
  setBlockState: (index, newState) =>
    set((state) => ({
      blockState: { ...state.blockState, [index]: newState },
    })),

  customModels: {
    custombox: [
      { position: [0, 0, 0.5], rotation: [0, 0, 0], render: true },
      { position: [0, 0, -0.5], rotation: [0, Math.PI, 0], render: true },
      { position: [0, 0.5, 0], rotation: [-Math.PI / 2, 0, 0], render: true },
      { position: [0, -0.5, 0], rotation: [Math.PI / 2, 0, 0], render: true },
      { position: [0.5, 0, 0], rotation: [0, Math.PI / 2, 0], render: true },
      { position: [-0.5, 0, 0], rotation: [0, -Math.PI / 2, 0], render: true },
    ],
  },
  setCustomModels: (modelName, newConfig) =>
    set((state) => ({
      customModels: { ...state.customModels, [modelName]: newConfig },
    })),

  chunks: [
    {
      position: [0, 10, -10],
      cubesArray: [[1, 3, 4, 0]],
    },
  ],
  setChunks: (x, y, z, cubes) =>
    set((state) => ({
      chunks: [
        ...state.chunks,
        {
          position: [x, y, z],
          cubesArray: cubes,
        },
      ],
    })),

  textures: {
    stone: "/assets/textures/cubes/stone.png",
  },
  setTextures: (textureName, url) =>
    set((state) => ({
      textures: { ...state.textures, [textureName]: url },
    })),
}));
