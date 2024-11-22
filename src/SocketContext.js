/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// SocketContext.js
import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token") || process.env.JWT || "";
    const newSocket = io("http://localhost:5000", {
      transports: ["websocket", "polling"],
      auth: { token },
    });

    newSocket.on("connect", () => console.log("Conectado ao servidor:", newSocket.id));
    newSocket.on("disconnect", () => console.log("Desconectado do servidor"));

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
