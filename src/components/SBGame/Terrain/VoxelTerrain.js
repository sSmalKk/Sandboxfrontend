/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from "react";
import Chunk from "./Chunk";
import { VoxelCube } from "./VoxelCube";

const VoxelTerrain = ({
  customModels,
  blockState,
  chunks = [],
  textures,
  clusterWidth,
  fullrender,
}) => {
  return (
    <group>
      {fullrender
        ? chunks.map((chunk, index) => (
            <Chunk
              customModels={customModels}
              blockState={blockState}
              key={index}
              position={chunk.position}
              cubesArray={chunk.cubesArray}
              textures={textures}
              clusterWidth={clusterWidth}
            />
          ))
        : chunks.map((chunk, index) => (
            <VoxelCube
              customModels={customModels}
              blockState={blockState}
              key={index}
              position={chunk.position}
              cubesArray={chunk.cubesArray}
              textures={textures}
              clusterWidth={clusterWidth * 10}
            />
          ))}
    </group>
  );
};

export default VoxelTerrain;
