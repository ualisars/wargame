import {shuffleNodes} from '../shuffle';

export const getRandomNode = (nodes:any[]):any => {
	let sortedNodes:any[] = shuffleNodes(nodes);
	return sortedNodes[0];
}
