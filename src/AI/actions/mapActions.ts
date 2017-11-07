const swap = (arr:any[], a:number, b:number) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

export const sortNodesByRandomValue = (nodes:any[]):any[] => {
	for(let i = 0; i < nodes.length - 1; ++i) {
		let min = i;
		for(let j = i + 1; j < nodes.length; ++j) {
			if(nodes[j].randomValue === nodes[min].randomValue) {
					min = j;
			}
			if(nodes[j].randomValue < nodes[min].randomValue) {
				min = j
			}
		}
		if(min !== i) {
			swap(nodes, min, i);
		}
	}
	return nodes;
};

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
