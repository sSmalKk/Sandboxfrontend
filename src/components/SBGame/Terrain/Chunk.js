/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

  import React from 'react';
import { VoxelCube } from './VoxelCube';

const Chunk = ({ customModels, blockState, position, cubesArray, textures, clusterWidth }) => {
  return (
    <group position={position}>
      {cubesArray.map(([x, y, z, id]) => {
        const isDefaultBlock = blockState[id]?.model === 'box';
        const hasCubeLeft = isDefaultBlock && cubesArray.some(([cx, cy, cz, cid]) => cx === x - 1 && cy === y && cz === z && blockState[cid]?.model === 'box');
        const hasCubeRight = isDefaultBlock && cubesArray.some(([cx, cy, cz, cid]) => cx === x + 1 && cy === y && cz === z && blockState[cid]?.model === 'box');
        const hasCubeTop = isDefaultBlock && cubesArray.some(([cx, cy, cz, cid]) => cx === x && cy === y + 1 && cz === z && blockState[cid]?.model === 'box');
        const hasCubeBottom = isDefaultBlock && cubesArray.some(([cx, cy, cz, cid]) => cx === x && cy === y - 1 && cz === z && blockState[cid]?.model === 'box');
        const hasCubeFront = isDefaultBlock && cubesArray.some(([cx, cy, cz, cid]) => cx === x && cy === y && cz === z + 1 && blockState[cid]?.model === 'box');
        const hasCubeBack = isDefaultBlock && cubesArray.some(([cx, cy, cz, cid]) => cx === x && cy === y && cz === z - 1 && blockState[cid]?.model === 'box');

        return (
          <VoxelCube
            blockState={blockState}
            key={`${x}-${y}-${z}-${id}`} 
            position={[x, y, z]}
            textures={textures}
            hasCubeLeft={hasCubeLeft}
            hasCubeRight={hasCubeRight}
            hasCubeTop={hasCubeTop}
            hasCubeBottom={hasCubeBottom}
            hasCubeFront={hasCubeFront}
            hasCubeBack={hasCubeBack}
            clusterWidth={clusterWidth}
            id={id}
            customModels={customModels}
          />
        );
      })}
    </group>
  );
};

export default Chunk;
