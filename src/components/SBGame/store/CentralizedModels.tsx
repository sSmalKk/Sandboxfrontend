//CentralizedModels.tsx//

export const baseModelosFileBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  link: data.link || "",
  name: data.name || "",
  description: data.description || "",
  type: data.type || 0,
});

// Estrutura de bodyData para o modelo Base_Modelos_Model
export const baseModelosModelBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  type: data.type || 0,
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  modelmap: data.modelmap || {},
  file: data.file || "",
});

// Estrutura de bodyData para o modelo Model_chemistry_Substances
export const modelChemistrySubstancesBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  name: data.name || "",
  description: data.description || "",
  data: data.data || [],
  Rules: data.Rules || [],
  Tags: data.Tags || [],
});

// Estrutura de bodyData para o modelo Model_chemistry_compounds
export const modelChemistryCompoundsBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  name: data.name || "",
  description: data.description || "",
  data: data.data || [],
  Rules: data.Rules || [],
  Tags: data.Tags || [],
});

// Estrutura de bodyData para o modelo Model_chemistry_element
export const modelChemistryElementBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  data: data.data || [],
  Rules: data.Rules || [],
  Tags: data.Tags || [],
});

// Estrutura de bodyData para o modelo Chat_group
export const chatGroupBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  code: data.code || "",
  admin: data.admin || "",
  member: data.member || [],
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  updatedBy: data.updatedBy || null,
  addedBy: data.addedBy || null,
  isDeleted: data.isDeleted || false,
});

// Estrutura de bodyData para o modelo Chat_message
export const chatMessageBodyData = (data) => ({
  _id: data._id || "",
  message: data.message || "",
  sender: data.sender || "",
  recipient: data.recipient || "",
  groupId: data.groupId || null,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  updatedBy: data.updatedBy || null,
  addedBy: data.addedBy || null,
  isDeleted: data.isDeleted || false,
});

// Estrutura de bodyData para o modelo Modelos_Action
export const modelosActionBodyData = (data) => ({
  _id: data._id || "",
  Name: data.Name || "",
  Description: data.Description || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  data: data.data || {},
  required: data.required || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Modelos_Age
export const modelosAgeBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  relativeto: data.relativeto || null,
  year: data.year || null,
  isDeleted: data.isDeleted || false,
  Events: data.Events || [],
  Rules: data.Rules || [],
  Tags: data.Tags || [],
});

// Estrutura de bodyData para o modelo Modelos_Biomes
export const modelosBiomesBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  generation: data.generation || [],
  structures: data.structures || [],
  data: data.data || [],
  entites: data.entites || "",
  size: data.size || 0,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Base_Chunk
export const baseChunkBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  x: data.x || 0,
  y: data.y || 0,
  z: data.z || 0,
  p: data.p || 0,
  settings: data.settings || null,
  chunk: data.chunk || null,
  generated: data.generated || false,
  chat: data.chat || null,
  data: data.data || [],
  size: data.size || null,
  biome: data.biome || null,
  op: data.op || null,
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Base_Cube
export const baseCubeBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  x: data.x || 0,
  y: data.y || 0,
  z: data.z || 0,
  p: data.p || 0,
  universe: data.universe || null,
  chunk: data.chunk || null,
  interface: data.interface || null,
  storage: data.storage || null,
  data: data.data || "",
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Modelos_Entity
export const modelosEntityBodyData = (data) => ({
  _id: data._id || "",
  Name: data.Name || "",
  Description: data.Description || "",
  data: data.data || {},
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  model: data.model || null,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  Size: data.Size || null,
  Location: data.Location || null,
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Modelos_Part
export const modelosPartBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  tag: data.tag || "",
  texture: data.texture || null,
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  data: data.data || [],
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chunk: data.chunk || null,
});

// Estrutura de bodyData para o modelo Modelos_Receita
export const modelosReceitaBodyData = (data) => ({
  _id: data._id || "",
  Name: data.Name || "",
  Description: data.Description || "",
  Item_start: data.Item_start || [],
  Item_end: data.Item_end || [],
  action: data.action || null,
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  data: data.data || [],
  Rules: data.Rules || [],
  Tags: data.Tags || [],
});

// Estrutura de bodyData para o modelo Modelos_Rule
export const modelosRuleBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  descriotion: data.descriotion || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  data: data.data || [],
});

// Estrutura de bodyData para o modelo Modelos_Size
export const modelosSizeBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  realnumb: data.realnumb || "",
  scale: data.scale || "",
  isDeleted: data.isDeleted || false,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
});

// Estrutura de bodyData para o modelo Modelos_Structure
export const modelosStructureBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  x: data.x || 0,
  y: data.y || 0,
  z: data.z || 0,
  chunk: data.chunk || [],
  size: data.size || null,
  Blockstate: data.Blockstate || null,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Modelos_Tag
export const modelosTagBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  descriotion: data.descriotion || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
});

// Estrutura de bodyData para o modelo Modelos_TextureMap
export const modelosTextureMapBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  name: data.name || "",
  description: data.description || "",
  texturemap: data.texturemap || [],
});

// Estrutura de bodyData para o modelo Modelos_interface
export const modelosInterfaceBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  name: data.name || "",
  descrioption: data.descrioption || "",
  data: data.data || [],
  storage: data.storage || [],
  Rules: data.Rules || [],
  Tags: data.Tags || [],
});
// Estrutura de bodyData para o modelo Modelos_item
export const modelosItemBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  name: data.name || "",
  description: data.description || "",
  model: data.model || null,
  texture: data.texture || null,
  interface: data.interface || null,
  data: data.data || [],
  state: data.state || [],
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Universe_Age
export const universeAgeBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  relativeto: data.relativeto || null,
  year: data.year || new Date(),
  isDeleted: data.isDeleted || false,
  Events: data.Events || [],
  PlayerEvents: data.PlayerEvents || [],
  Rules: data.Rules || [],
  Tags: data.Tags || [],
});

// Estrutura de bodyData para o modelo Universe_Blockstate
export const universeBlockstateBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  isDeleted: data.isDeleted || false,
  normal: data.normal || [],
});

// Estrutura de bodyData para o modelo Universe_Chunk
export const universeChunkBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  x: data.x || 0,
  y: data.y || 0,
  z: data.z || 0,
  p: data.p || 0,
  settings: data.settings || null,
  chunk: data.chunk || null,
  generated: data.generated || false,
  chat: data.chat || null,
  data: data.data || [],
  size: data.size || null,
  biome: data.biome || null,
  op: data.op || null,
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Universe_Entity
export const universeEntityBodyData = (data) => ({
  _id: data._id || "",
  Name: data.Name || "",
  Description: data.Description || "",
  Location: data.Location || null,
  X: data.X || "",
  Y: data.Y || "",
  Z: data.Z || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  Universe: data.Universe || null,
  Model: data.Model || null,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Universe_Interface
export const universeInterfaceBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  name: data.name || "",
  descrioption: data.descrioption || "",
  data: data.data || [],
  storage: data.storage || null,
  important: data.important || 0,
  Cube: data.Cube || null,
  Item: data.Item || null,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
});

// Estrutura de bodyData para o modelo Universe_Item
export const universeItemBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  x: data.x || "",
  y: data.y || "",
  z: data.z || "",
  data: data.data || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  slot: data.slot || null,
  cube: data.cube || null,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Universe_Settings
export const universeSettingsBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  isActive: data.isActive || true,
  items: data.items || [],
  biomes: data.biomes || [],
  models: data.models || [],
  textures: data.textures || [],
  entity: data.entity || [],
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  ChatGlobal: data.ChatGlobal || "",
  ClanChat: data.ClanChat || [],
  Blockstate: data.Blockstate || null,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  structures: data.structures || [],
  ChunkLoaded: data.ChunkLoaded || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Universe_Slot
export const universeSlotBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  x: data.x || "",
  y: data.y || "",
  z: data.z || "",
  data: data.data || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Universe_Storage
export const universeStorageBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  Slots: data.Slots || [],
  Interface: data.Interface || null,
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Universe_Structure
export const universeStructureBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  x: data.x || 0,
  y: data.y || 0,
  z: data.z || 0,
  chunk: data.chunk || [],
  size: data.size || null,
  Blockstate: data.Blockstate || null,
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo Universe_cube
export const universeCubeBodyData = (data) => ({
  _id: data._id || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  x: data.x || 0,
  y: data.y || 0,
  z: data.z || 0,
  p: data.p || 0,
  universe: data.universe || null,
  chunk: data.chunk || null,
  interface: data.interface || null,
  storage: data.storage || null,
  data: data.data || "",
  Rules: data.Rules || [],
  Tags: data.Tags || [],
  chemsData: data.chemsData || {},
});

// Estrutura de bodyData para o modelo user
export const userBodyData = (data) => ({
  _id: data._id || "",
  username: data.username || "",
  password: data.password || "",
  email: data.email || "",
  name: data.name || "",
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  FriendList: data.FriendList || [],
  userType: data.userType || 0,
  lastsection: data.lastsection || null,
});

// Estrutura de bodyData para o modelo user_character
export const userCharacterBodyData = (data) => ({
  _id: data._id || "",
  name: data.name || "",
  description: data.description || "",
  data: data.data || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
});

// Estrutura de bodyData para o modelo user_section
export const userSectionBodyData = (data) => ({
  _id: data._id || "",
  user: data.user || null,
  universe: data.universe || "",
  location: data.location || "",
  isDeleted: data.isDeleted || false,
  isActive: data.isActive || true,
  createdAt: data.createdAt || new Date(),
  updatedAt: data.updatedAt || new Date(),
  addedBy: data.addedBy || null,
  updatedBy: data.updatedBy || null,
  data: data.data || "",
});
