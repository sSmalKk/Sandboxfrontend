import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "hud/LayoutContainers/DashboardLayout";
import DashboardNavbar from "hud/Navbars/DashboardNavbar";

function PeriodicTable() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  // Fetch da API pública
  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await fetch("https://neelpatel05.pythonanywhere.com/");
        if (!response.ok) throw new Error("Erro ao buscar os dados da Tabela Periódica.");
        const data = await response.json();
        setElements(data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    fetchElements();
  }, []);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const renderTable = () => {
    return (
      <Grid container spacing={1} justifyContent="center">
        {elements.map((element) => (
          <Grid
            key={element.atomicNumber}
            item
            xs={1}
            style={{
              border: "1px solid #ccc",
              textAlign: "center",
              padding: "8px",
              cursor: "pointer",
              backgroundColor: "#f9f9f9",
              borderRadius: "4px",
            }}
            onClick={() => handleElementClick(element)}
          >
            <strong>{element.symbol}</strong>
            <br />
            {element.atomicNumber}
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <h3 style={{ textAlign: "center" }}>Tabela Periódica</h3>
          {elements.length ? renderTable() : <p>Carregando elementos...</p>}
        </MDBox>
        {selectedElement && (
          <MDBox mt={4} p={2} style={{ border: "1px solid #ccc", borderRadius: "4px" }}>
            <h4>Detalhes do Elemento</h4>
            <pre>{JSON.stringify(selectedElement, null, 2)}</pre>
          </MDBox>
        )}
      </MDBox>
    </DashboardLayout>
  );
}

export default PeriodicTable;
