// Dependências necessárias
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

export default async function userFetchData() {
  const token = localStorage.getItem("token");
  const serverUrl = "http://localhost:5000"; // Substitua pelo seu URL de servidor

  let userData = null;
  try {
    const response = await fetch(`${serverUrl}/device/api/v1/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      userData = data.data;
    } else {
      console.error("Erro ao buscar os dados do usuário:", response.statusText);
    }
  } catch (error) {
    console.error("Erro de conexão com o servidor:", error.message);
  }

  // Função para exibir o avatar e nome do usuário
  const User = ({ avatar, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={avatar || ""} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  // Validação de props para o componente User
  User.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  };

  // Badge para status do usuário
  const Status = ({ isActive }) => (
    <MDBadge
      badgeContent={isActive ? "Ativo" : "Inativo"}
      color={isActive ? "success" : "dark"}
      variant="gradient"
      size="sm"
    />
  );

  // Validação de props para o componente Status
  Status.propTypes = {
    isActive: PropTypes.bool.isRequired,
  };

  if (!userData) {
    return {
      columns: [],
      rows: [],
    };
  }

  return {
    columns: [
      { Header: "Usuário", accessor: "user", width: "30%", align: "left" },
      { Header: "Função", accessor: "function", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Token", accessor: "token", align: "center" },
      { Header: "Criado em", accessor: "createdAt", align: "center" },
    ],

    rows: [
      {
        user: (
          <User
            avatar=""
            name={`${userData.firstName} ${userData.lastName}`}
            email={userData.email}
          />
        ),
        function: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {userData.userType === 1 ? "Administrador" : "Usuário"}
          </MDTypography>
        ),
        status: <Status isActive={userData.isActive} />,
        token: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {token}
          </MDTypography>
        ),
        createdAt: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            {new Date(userData.createdAt).toLocaleDateString()}
          </MDTypography>
        ),
      },
    ],
  };
}
