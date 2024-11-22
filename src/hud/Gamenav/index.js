/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import SideBar from "./SideBar";
import BottomBar from "./BottomBar";
import Icon from "@mui/material/Icon";

// Definição das rotas do SideBar
const routes = [
  {
    type: "collapse",
    name: "Game Page",
    key: "gamePage",
    icon: "dashboard",
    route: "/game",
  },
  {
    type: "collapse",
    name: "Inventory Page",
    key: "inventoryPage",
    icon: "inventory",
    route: "/inventory",
  },
];
const generateSensations = (count) => {
  const colors = ["blue", "red", "green", "yellow", "purple", "orange"];
  return Array.from({ length: count }, () => ({
    bpm: Math.floor(Math.random() * 200) + 40, // BPM entre 40 e 240
    color: colors[Math.floor(Math.random() * colors.length)], // Cores aleatórias
    size: Math.floor(Math.random() * 50) + 10, // Tamanhos entre 10 e 60px
    x: Math.floor(Math.random() * 101), // Posição horizontal 0-100%
    y: Math.floor(Math.random() * 101), // Posição vertical 0-100%
  }));
};

// Número de sensações
const LOT_SIZE = 22; // Quantidade de sensações no lote
const sensations = generateSensations(LOT_SIZE);

// Definição dos itens do Hotbar (Exemplo)

function GameHUD() {

  return (
    <>
      {/* Barra Lateral */}
      <SideBar routes={routes} />

      {/* Barra Inferior */}
      <BottomBar
        focus={100}
        interval={5000}
        attention={3000}
        items={[
          { content: <Icon>home</Icon> },
          { content: <Icon>settings</Icon> },
          { content: <Icon>settings</Icon> },
          { content: <Icon>settings</Icon> },
          { content: <Icon>settings</Icon> },
        ]}
        selected={0}
        onSelect={(index) => console.log(`Selecionado: ${index}`)}
        bpm={80}
        sensation={sensations} // Lote de sensações gerado dinamicamente
      />


    </>
  );
}

export default GameHUD;
