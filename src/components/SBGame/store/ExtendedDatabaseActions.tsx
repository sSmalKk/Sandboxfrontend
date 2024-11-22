// ExtendedDatabaseActions.tsx

import {
  createEntry,
  updateEntry,
  deleteEntry,
  fetchById,
  listEntries,
  countEntries,
} from "./CentralizedDatabaseActions";

import {
  baseModelosFileBodyData,
  baseModelosModelBodyData,
  modelChemistrySubstancesBodyData,
  modelChemistryCompoundsBodyData,
  modelChemistryElementBodyData,
  chatGroupBodyData,
  chatMessageBodyData,
  modelosActionBodyData,
  modelosAgeBodyData,
  modelosBiomesBodyData,
  baseChunkBodyData,
  baseCubeBodyData,
  modelosEntityBodyData,
  modelosPartBodyData,
  modelosReceitaBodyData,
  modelosRuleBodyData,
  modelosSizeBodyData,
  modelosStructureBodyData,
  modelosTagBodyData,
  modelosTextureMapBodyData,
  modelosInterfaceBodyData,
  modelosItemBodyData,
  universeAgeBodyData,
  universeBlockstateBodyData,
  universeChunkBodyData,
  universeEntityBodyData,
  universeInterfaceBodyData,
  universeItemBodyData,
  universeSettingsBodyData,
  universeSlotBodyData,
  universeStorageBodyData,
  universeStructureBodyData,
  universeCubeBodyData,
  userBodyData,
  userCharacterBodyData,
  userSectionBodyData,
} from "./CentralizedModels";

// Função para logar todas as variáveis no console quando devmode for true
const debugLog = (message, data, devmode) => {
  if (devmode) {
    console.log(message, data);
  }
};

// Função principal para lidar com todos os tipos de modelo
export const handleModelAction = async (action, mode, modelType, data = {}, id = null, devmode = false) => {
  let bodyData;

  // Determina qual estrutura de bodyData usar com base no tipo de modelo
  switch (modelType) {
    case "Base_Modelos_File":
      bodyData = baseModelosFileBodyData(data);
      break;
    case "Base_Modelos_Model":
      bodyData = baseModelosModelBodyData(data);
      break;
    case "Model_chemistry_Substances":
      bodyData = modelChemistrySubstancesBodyData(data);
      break;
    case "Model_chemistry_compounds":
      bodyData = modelChemistryCompoundsBodyData(data);
      break;
    case "Model_chemistry_element":
      bodyData = modelChemistryElementBodyData(data);
      break;
    case "Chat_group":
      bodyData = chatGroupBodyData(data);
      break;
    case "Chat_message":
      bodyData = chatMessageBodyData(data);
      break;
    case "Modelos_Action":
      bodyData = modelosActionBodyData(data);
      break;
    case "Modelos_Age":
      bodyData = modelosAgeBodyData(data);
      break;
    case "Modelos_Biomes":
      bodyData = modelosBiomesBodyData(data);
      break;
    case "Base_Chunk":
      bodyData = baseChunkBodyData(data);
      break;
    case "Base_Cube":
      bodyData = baseCubeBodyData(data);
      break;
    case "Modelos_Entity":
      bodyData = modelosEntityBodyData(data);
      break;
    case "Modelos_Part":
      bodyData = modelosPartBodyData(data);
      break;
    case "Modelos_Receita":
      bodyData = modelosReceitaBodyData(data);
      break;
    case "Modelos_Rule":
      bodyData = modelosRuleBodyData(data);
      break;
    case "Modelos_Size":
      bodyData = modelosSizeBodyData(data);
      break;
    case "Modelos_Structure":
      bodyData = modelosStructureBodyData(data);
      break;
    case "Modelos_Tag":
      bodyData = modelosTagBodyData(data);
      break;
    case "Modelos_TextureMap":
      bodyData = modelosTextureMapBodyData(data);
      break;
    case "Modelos_interface":
      bodyData = modelosInterfaceBodyData(data);
      break;
    case "Modelos_item":
      bodyData = modelosItemBodyData(data);
      break;
    case "Universe_Age":
      bodyData = universeAgeBodyData(data);
      break;
    case "Universe_Blockstate":
      bodyData = universeBlockstateBodyData(data);
      break;
    case "Universe_Chunk":
      bodyData = universeChunkBodyData(data);
      break;
    case "Universe_Entity":
      bodyData = universeEntityBodyData(data);
      break;
    case "Universe_Interface":
      bodyData = universeInterfaceBodyData(data);
      break;
    case "Universe_Item":
      bodyData = universeItemBodyData(data);
      break;
    case "Universe_Settings":
      bodyData = universeSettingsBodyData(data);
      break;
    case "Universe_Slot":
      bodyData = universeSlotBodyData(data);
      break;
    case "Universe_Storage":
      bodyData = universeStorageBodyData(data);
      break;
    case "Universe_Structure":
      bodyData = universeStructureBodyData(data);
      break;
    case "Universe_cube":
      bodyData = universeCubeBodyData(data);
      break;
    case "user":
      bodyData = userBodyData(data);
      break;
    case "user_character":
      bodyData = userCharacterBodyData(data);
      break;
    case "user_section":
      bodyData = userSectionBodyData(data);
      break;
    default:
      console.error(`Model type ${modelType} is not recognized.`);
      return null;
  }

  // Log do bodyData se devmode for true
  debugLog(`Handling action ${action} for ${modelType}:`, bodyData, devmode);

  let result;

  switch (action) {
    case "create":
      result = await createEntry(mode, modelType, bodyData);
      debugLog(`Created ${modelType}:`, result, devmode);
      break;
    
    case "fetch":
      if (!id) {
        console.error(`ID is required for fetching ${modelType}`);
        return null;
      }
      result = await fetchById(mode, modelType, id);
      debugLog(`Fetched ${modelType}:`, result, devmode);
      break;

    case "update":
      if (!id) {
        console.error(`ID is required for updating ${modelType}`);
        return null;
      }
      result = await updateEntry(mode, modelType, id, bodyData);
      debugLog(`Updated ${modelType}:`, result, devmode);
      break;

    case "partialUpdate":
      if (!id) {
        console.error(`ID is required for partial update of ${modelType}`);
        return null;
      }
      const partialData = Object.keys(data).reduce((acc, key) => {
        if (data[key] !== undefined && data[key] !== null) {
          acc[key] = data[key];
        }
        return acc;
      }, {});
      result = await updateEntry(mode, modelType, id, partialData);
      debugLog(`Partially Updated ${modelType}:`, result, devmode);
      break;

    case "delete":
      if (!id) {
        console.error(`ID is required for deleting ${modelType}`);
        return null;
      }
      result = await deleteEntry(mode, modelType, id);
      debugLog(`Deleted ${modelType}:`, result, devmode);
      break;

    case "list":
      result = await listEntries(mode, modelType, data);
      debugLog(`Listed ${modelType}:`, result, devmode);
      break;

    case "count":
      result = await countEntries(mode, modelType);
      debugLog(`Counted ${modelType}:`, result, devmode);
      break;

    default:
      console.error(`Action ${action} is not recognized.`);
      return null;
  }

  return result;
};
