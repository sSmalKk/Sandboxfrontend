
//CentralizedDatabaseActions.tsx//
const token = localStorage.getItem("token") || process.env.JWT || "";

// Função para criar URL dinamicamente com base no modo (admin, device, client)
const createURL = (mode, model, id = "") => {
  let baseUrl = `http://localhost:5000/${mode}/${model}`;
  if (id) {
    baseUrl += `/${id}`;
  }
  return baseUrl;
};


// Função para buscar por ID (GET)
export const fetchById = async (mode, model, id) => {
  try {
    const response = await fetch(createURL(mode, model, id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${model} by id:`, error);
    return null;
  }
};

// Função para criar (POST)
export const createEntry = async (mode, model, bodyData) => {
  try {
    const response = await fetch(createURL(mode, model, "create"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error creating ${model}:`, error);
    return null;
  }
};

// Função para listar (POST)
export const listEntries = async (mode, model, options = {}) => {
  const defaultOptions = {
    query: {}, // Filtros de pesquisa
    options: {
      select: [],
      collation: "",
      sort: "",
      populate: "",
      projection: "",
      lean: false,
      leanWithId: true,
      offset: 0,
      page: 1, // Página padrão
      limit: 10, // Limite de registros por página
      pagination: true,
      useEstimatedCount: false,
      useCustomCountFn: false,
      forceCountFn: false,
      read: {},
      options: {},
    },
    isCountOnly: false,
  };

  // Combina as opções fornecidas com as opções padrão
  const requestOptions = {
    ...defaultOptions,
    ...options,
  };

  try {
    const response = await fetch(createURL(mode, model, "list"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestOptions),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error listing ${model}:`, error);
    return null;
  }
};

// Função para atualizar (PUT)
export const updateEntry = async (mode, model, id, bodyData) => {
  try {
    const response = await fetch(createURL(mode, model, `update/${id}`), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating ${model}:`, error);
    return null;
  }
};

// Função para deletar (DELETE)
export const deleteEntry = async (mode, model, id) => {
  try {
    const response = await fetch(createURL(mode, model, `delete/${id}`), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error deleting ${model}:`, error);
    return null;
  }
};

// Função para contar (POST)
export const countEntries = async (mode, model) => {
  try {
    const response = await fetch(createURL(mode, model, "count"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error counting ${model}:`, error);
    return null;
  }
};
