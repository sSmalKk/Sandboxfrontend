import React, { useState, useEffect } from "react";
import GameLayout from "hud/LayoutContainers/GameLayout";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "hud/Tables/DataTable";
import MaterialFetcher from "./data/material";
import Game from "components/SBGame/Scene/Game";

const serverUrl = "http://localhost:5000"; // URL do servidor

function GamePage() {
  const [universeData, setUniverseData] = useState(null);
  const [chunks, setChunks] = useState([]);

  // Busca dados do universo
  useEffect(() => {
    async function fetchUniverseData() {
      try {
        const response = await fetch(`${serverUrl}/api/universe`);
        const data = await response.json();
        setUniverseData(data); // Certifique-se de que a API retorna os dados esperados
        setChunks(data?.mainSpace?.chunks || []);
      } catch (error) {
        console.error("Erro ao buscar os dados do universo:", error);
      }
    }

    fetchUniverseData();
  }, []);

  // Verificação inicial
  if (!universeData) {
    return (
      <GameLayout>
        <MDTypography variant="h6" color="text">
          Carregando dados do universo...
        </MDTypography>
      </GameLayout>
    );
  }

  return (
    <GameLayout>
      <Game
        customModels={{
          stairs: [
            { position: [0, 0, 0.5], rotation: [0, 0, 0], render: true },
            { position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0], render: true },
          ],
        }}
        blockState={{
          0: { texture: "stone", model: "box" },
          1: { texture: "wood", model: "globe" },
          2: { texture: "brick", model: "stairs" },
        }}
        canPlayerFly
        textures={{
          stone: "/assets/textures/cubes/stone.png",
          wood: "/assets/textures/cubes/wood.png",
          brick: "/assets/textures/cubes/stone.png",
        }}
        chunks={chunks}
        renderDistance={15}
        gravity={[0, -9.81, 0]}
        pointLightPosition={[5, 10, 5]}
        initialPlayerPosition={[2, 20, 2]}
        sunPosition={[150, 50, 150]}
        ambientLightIntensity={1.5}
        pointLightIntensity={0.5}
        fov={60}
        keyboardMap={[
          { name: "forward", keys: ["w", "W"] },
          { name: "backward", keys: ["s", "S"] },
          { name: "left", keys: ["a", "A"] },
          { name: "right", keys: ["d", "D"] },
          { name: "shift", keys: ["Shift"] },
          { name: "jump", keys: ["Space"] },
          { name: "inventory", keys: ["e", "E"] },
          { name: "layerp", keys: ["ArrowUp"] },
          { name: "layerm", keys: ["ArrowDown"] },
          { name: "escape", keys: ["ESC", "Escape"] },
        ]}
      />
      <MDBox pt={6} pb={3}>
        <MaterialFetcher />
        <Grid container spacing={6}>
          {/* Lista de Chunks */}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="success"
              >
                <MDTypography variant="h6" color="white">
                  Lista de Chunks
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns: [
                      { Header: "ID", accessor: "id", align: "left" },
                      { Header: "Coordenadas", accessor: "coordinates", align: "center" },
                      { Header: "Criado em", accessor: "createdAt", align: "center" },
                      { Header: "Atualizado em", accessor: "updatedAt", align: "center" },
                    ],
                    rows: chunks.map((chunk) => ({
                      id: chunk.id,
                      coordinates: `${chunk.x}, ${chunk.y}, ${chunk.z}`,
                      createdAt: new Date(chunk.createdAt).toLocaleDateString(),
                      updatedAt: new Date(chunk.updatedAt).toLocaleDateString(),
                    })),
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </GameLayout>
  );
}

export default GamePage;
