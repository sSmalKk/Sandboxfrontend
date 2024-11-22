/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
import axios from "axios";

const fetchUserData = async () => {
  try {
    const token = localStorage.getItem("token") || process.env.JWT || "";
    const { data } = await axios.get(`http://localhost:5000/device/api/v1/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data.status === "SUCCESS") {
      localStorage.setItem("userData", JSON.stringify(data.data));
      console.log("Dados do usuário atualizados:", data.data);
    } else {
      console.error("Erro na atualização:", data.message);
    }
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error.message);
  }
};

const UserDataFetcher = () => {
  useEffect(() => {
    fetchUserData();

    const interval = setInterval(fetchUserData, 15 * 60 * 1000); // 15 minutos

    return () => clearInterval(interval);
  }, []);

  return null; // Componente invisível
};

export default UserDataFetcher;
