/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { io } from "socket.io-client";

const token = localStorage.getItem("token") || process.env.JWT || "";
const baseUrl = `http://localhost:5000`;

// Única instância de socket
const socket = io(baseUrl, {
  transports: ["websocket", "polling"],
  auth: { token },
});

export default socket;
