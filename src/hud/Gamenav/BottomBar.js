/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { styled, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// Função para calcular o ritmo e tamanho baseado no BPM
const calculatePulse = (bpm) => {
  const baseScale = Math.min(Math.max(bpm / 120, 0.5), 2); // Escala entre 0.5x e 2x
  const duration = Math.min(Math.max(60 / bpm, 0.3), 2); // Duração entre 0.3s e 2s
  const intensity = Math.min(Math.max(bpm / 200, 0.2), 1); // Intensidade entre 0.2 e 1

  return { baseScale, duration, intensity };
};

// Animação dinâmica para pulsar suavemente
const pulseAnimation = (baseScale, intensity, focusScale) => keyframes`
  0% {
    opacity: ${intensity * focusScale};
    transform: scale(1);
  }
  12.5% {
    opacity: ${intensity * focusScale};
    transform: scale(${1.2 * baseScale});
  }
  25% {
    opacity: 0;
    transform: scale(${1.4 * baseScale});
  }
  37.5% {
    opacity: ${intensity * focusScale};
    transform: scale(${1.2 * baseScale});
  }
  50% {
    opacity: 0; /* Invisível no meio */
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }`;
// Estilo do Background (medindo a vida)
const BackgroundSVG = styled("svg")(({ bpm, active, focus }) => {
  const { baseScale, duration, intensity } = calculatePulse(bpm);
  const focusScale = focus / 100;
  return {
    position: "absolute",
    width: "200%",
    height: "200%",
    top: "-50%",
    left: "-50%",
    animation: active
      ? `${pulseAnimation(baseScale, intensity, focusScale)} ${duration}s infinite`
      : "none",
    opacity: active ? focusScale : 0, // Transparência baseada no focus
    pointerEvents: "none",
    zIndex: 0,
    "& circle": {
      fill: "url(#centerGradient)",
    },
  };
});

const ColoredPulseSVG = styled("svg")(({ color, bpm, active, focus }) => {
  const { baseScale, duration, intensity } = calculatePulse(bpm);
  const focusScale = (focus / 100) * 0.5; // Metade do foco como intensidade
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    animation: active
      ? `${pulseAnimation(baseScale, intensity, focusScale)} ${duration}s infinite`
      : "none",
    opacity: active ? focusScale : 0,
    "& circle": {
      fill: color,
    },
  };
});

// Estilo do Medidor de Sensações com restrição de bolas e imagem de fundo
const SensationMeterRoot = styled(Box)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: "50%", // Transformar o SensationMeter em um círculo
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: theme.spacing(2),
  overflow: "hidden", // Restringir conteúdo ao contêiner
  backgroundImage: 'url("/homevitru.jpg")', // Ajuste o caminho da imagem
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

function SensationMeter({ sensation, active, focus }) {
  return (
    <SensationMeterRoot>
      {sensation.map((s, index) => {
        const { bpm, color, size, x, y } = s;

        // Garantir que as bolas fiquem dentro do contêiner
        const adjustedX = Math.min(Math.max(x, 0), 100); // Limitar entre 0 e 100
        const adjustedY = Math.min(Math.max(y, 0), 100); // Limitar entre 0 e 100

        return (
          <ColoredPulseSVG
            key={index}
            bpm={bpm}
            color={color}
            active={active}
            focus={focus} // Passa o foco
            style={{
              position: "absolute",
              left: `${adjustedX}%`,
              top: `${adjustedY}%`,
              transform: `translate(-${adjustedX}%, -${adjustedY}%)`, // Centralizar no ponto
              width: `${size*0.1}px`,
              height: `${size*0.1}px`,
            }}
          >
            <circle cx="50%" cy="50%" r="50%" />
          </ColoredPulseSVG>
        );
      })}
    </SensationMeterRoot>
  );
}


// Estilo da Barra Inferior
const BottomBarRoot = styled(Box)(({ theme }) => ({
  height: theme.spacing(10),
  background: theme.palette.background.default,
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  boxShadow: theme.shadows[5],
  zIndex: 1100,
  overflow: "hidden",
  transition: theme.transitions.create("background-color", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
}));

// Componente Principal
function BottomBar({ items, selected, onSelect, bpm = 60, sensation, attention = 5000, interval = 3000, focus = 100 }) {
  const [hover, setHover] = useState(false); // Estado de hover
  const [active, setActive] = useState(false); // Estado ativo para pulsar
  const [isMouseOut, setIsMouseOut] = useState(true);

  useEffect(() => {
    let loop;
    if (!isMouseOut) {
      setActive(true); // Pisca continuamente enquanto o mouse está travado
      return;
    }

    const startPulse = () => {
      setActive(true); // Inicia pulsação
      setTimeout(() => setActive(false), attention); // Termina pulsação após "attention"
    };

    startPulse(); // Inicia ciclo imediatamente
    loop = setInterval(() => startPulse(), interval + attention); // Reinicia ciclo

    return () => clearInterval(loop); // Limpeza do intervalo
  }, [isMouseOut, attention, interval]);

  return (
    <BottomBarRoot
      onMouseEnter={() => {
        setHover(true);
        setIsMouseOut(false);
      }}
      onMouseLeave={() => {
        setHover(false);
        setIsMouseOut(true);
      }}
    >
      {/* Fundo SVG */}
      <BackgroundSVG bpm={bpm} active={active} focus={focus}>
        <defs>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(255, 0, 0, 0.6)" />
            <stop offset="70%" stopColor="rgba(255, 0, 0, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 0, 0, 0)" />
          </radialGradient>
        </defs>
        <circle cx="50%" cy="50%" r="40%" />
      </BackgroundSVG>
      {/* Slots */}
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        {items.map((item, index) => (
          <IconButton
            key={index}
            onClick={() => onSelect(index)}
            style={{
              border: selected === index ? "3px solid #007bff" : "1px solid #ccc",
            }}
          >
            {item.content}
          </IconButton>
        ))}
      </Box>
      {/* Medidor de Sensações */}
      <SensationMeter sensation={sensation} active={active} focus={focus} />
    </BottomBarRoot>
  );
}

export default BottomBar;
