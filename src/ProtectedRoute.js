import React, { useContext } from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validação
import { Navigate } from "react-router-dom";
import SocketContext from "./SocketContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const user = JSON.parse(localStorage.getItem("userData"));
  
    if (!user) {
      console.warn("Usuário não autenticado");
      return <Navigate to="/authentication/sign-in" />;
    }
  
    if (!allowedRoles.includes(user.userType)) {
      console.warn("Acesso negado para esta rota");
      return <Navigate to="/dashboard" />;
    }
  
    return children;
  };
  
// Adiciona validações das propriedades
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired, // children deve ser um nó React
    allowedRoles: PropTypes.arrayOf(PropTypes.number).isRequired, // allowedRoles é um array de números
};

export default ProtectedRoute;
