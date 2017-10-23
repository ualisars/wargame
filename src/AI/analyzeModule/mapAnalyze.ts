import NodeStore from '../store/AIMapStore/NodeStore';
import {
  computersUnits,
  visibleForComputerUnits
} from '../../store/unitStore';
// create instances of AI map stores
let computerControlNodes = new NodeStore();
let playerControlNodes = new NodeStore();
let possiblePlayerControlNodes = new NodeStore();
let neutralNodes = new NodeStore();
let neutralNodesPriorityToExpolore = new NodeStore();
let fightingNodes = new NodeStore();

/*
  add visible for computer nodes into computerControlNodes
  if players' unit is spotted add its nodes into playerControlNodes
  nodes where players units were visible last time add to possiblePlayerControlNodes
  not spotted nodes add to neutralNodes
  neutralNodes divided into nodes with priority to explore
  nodes that both visible for player and computer goes to fightingNodes
*/
export const exploreMap = () => {

}
