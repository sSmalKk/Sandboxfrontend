import React, { useState, useEffect } from "react";
import DashboardLayout from "hud/LayoutContainers/DashboardLayout";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "hud/Tables/DataTable";
import MaterialFetcher from "./data/material";
const serverUrl = "http://localhost:5000"; // URL do servidor

function DevPage() {
  const [userData, setUserData] = useState(null);
  const [chunks, setChunks] = useState([]);
  const [universeSettings, setUniverseSettings] = useState([]);

  // Fetch inicial para obter dados
  useEffect(() => {
    async function fetchData() {
      try {
        // Obter dados de usuário
        const token = localStorage.getItem("token");
        const response = await fetch(`${serverUrl}/device/api/v1/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) setUserData(data.data);

        // Obter chunks
        const chunksResponse = await fetch(`${serverUrl}/api/chunks`);
        const chunksData = await chunksResponse.json();
        setChunks(chunksData.data);

        // Obter configurações do universo
        const universeResponse = await fetch(`${serverUrl}/api/universe_settings`);
        const universeData = await universeResponse.json();
        setUniverseSettings(universeData.data);
      } catch (error) {
        console.error("Erro ao buscar dados iniciais:", error);
      }
    }

    fetchData();

    // Cleanup
    return () => {
    };
  }, []);

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <MaterialFetcher />
        <Grid container spacing={6}>
          {/* Dados do Usuário */}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Dados do Usuário
                </MDTypography>
              </MDBox>
              <MDBox pt={3} pb={3} px={2}>
                {userData ? (
                  <MDTypography>
                    Nome: {userData.firstName} {userData.lastName}
                    <br />
                    Email: {userData.email}
                    <br />
                    Token: {localStorage.getItem("token")}
                  </MDTypography>
                ) : (
                  <MDTypography>Carregando dados do usuário...</MDTypography>
                )}
              </MDBox>
            </Card>
          </Grid>

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

          {/* Configurações do Universo */}
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="warning"
                borderRadius="lg"
                coloredShadow="warning"
              >
                <MDTypography variant="h6" color="white">
                  Configurações do Universo
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns: [
                      { Header: "Nome", accessor: "name", align: "left" },
                      { Header: "Valor", accessor: "value", align: "center" },
                      { Header: "Ativo", accessor: "isActive", align: "center" },
                      { Header: "Criado em", accessor: "createdAt", align: "center" },
                    ],
                    rows: universeSettings.map((setting) => ({
                      name: setting.name,
                      value: setting.value,
                      isActive: setting.isActive ? "Sim" : "Não",
                      createdAt: new Date(setting.createdAt).toLocaleDateString(),
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
    </DashboardLayout >

  );
}

export default DevPage;
