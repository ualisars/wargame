const swap = (arr:any[], a:number, b:number) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

export const assignRandomValue = (nodes:any[]):any[] => {
	for(let node of nodes) {
		let randomValue = Math.random();
		node.randomValue = randomValue;
	}
	return nodes;
}

export const sortNodesByRandomValue = (nodes:any[]):any[] => {
	let updatedNodes:any[] = Object.assign([], nodes);
	let randomValueNodes:any[] = assignRandomValue(updatedNodes);
	for(let i = 0; i < randomValueNodes.length; ++i) {
		let min = i;
		for(let j = i + 1; j < randomValueNodes.length; ++j) {
			if(randomValueNodes[j].randomValue === randomValueNodes[min].randomValue) {
					min = j;
			}
			if(randomValueNodes[j].randomValue < randomValueNodes[min].randomValue) {
				min = j;
			}
		}
		if(min !== i) {
			swap(randomValueNodes, min, i);
		}
	}
	let shuffledNodes:any[] = [];
	for(let node of randomValueNodes) {
		delete node.randomValue;
		shuffledNodes.push(node);
	}
	return shuffledNodes;
};
