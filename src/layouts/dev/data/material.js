import React, { useState, useEffect } from "react";

export default function MaterialFetcher() {
  const [rodData, setRodData] = useState([]);
  const [nistData, setNistData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar dados do Raman Open Database (ROD)
    const fetchRODData = async () => {
      try {
        const response = await fetch("https://solsa.crystallography.net/rod/api/materials");
        if (response.ok) {
          const data = await response.json();
          setRodData(data);
          console.log("ROD Data:", data);
        } else {
          console.error("Erro ao buscar dados do ROD:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao conectar com ROD:", error.message);
      }
    };

    // Função para buscar dados do NIST Chemistry WebBook
    const fetchNISTData = async () => {
      try {
        const response = await fetch("https://webbook.nist.gov/cgi/cbook.cgi?Format=JSON");
        if (response.ok) {
          const data = await response.json();
          setNistData(data);
          console.log("NIST Data:", data);
        } else {
          console.error("Erro ao buscar dados do NIST:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao conectar com NIST:", error.message);
      }
    };

    // Buscar dados simultaneamente
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchRODData(), fetchNISTData()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Teste de Dados de Materiais</h1>
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <div>
          <h2>ROD Data:</h2>
          <pre>{JSON.stringify(rodData, null, 2)}</pre>
          <h2>NIST Data:</h2>
          <pre>{JSON.stringify(nistData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
