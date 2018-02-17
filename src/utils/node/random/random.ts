import {shuffleNodes} from '../shuffle';

export const getRandomNode = (nodes:any[]):any => {
	let updatedNode:any[] = nodes;
	let sortedNodes:any[] = shuffleNodes(nodes);
	return sortedNodes[0];
}
