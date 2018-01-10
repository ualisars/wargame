import {sortNodesByRandomValue} from '../index';

export const getRandomNode = (nodes:any[]):any => {
	let map:any[] = [];
	for(let node of nodes) {
		let randomValue = Math.random();
		let obj = {randomValue, node};
		map.push(obj);
	}
	let sortedMap:any[] = sortNodesByRandomValue(map);
	return sortedMap[0].node;
}
