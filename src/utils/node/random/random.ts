import {sortNodesByRandomValue} from '../index';

export const getRandomNode = (nodes:any[]):any => {
	let updatedNode:any[] = nodes;
	let sortedNodes:any[] = sortNodesByRandomValue(nodes);
	return sortedNodes[0];
}
