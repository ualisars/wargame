const swap = (arr:any[], a:number, b:number) => {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

export const sortNodesByRandomValue = (nodes:any[]):any[] => {
	for(let i = 0; i < nodes.length; ++i) {
		let min = i;
		for(let j = i + 1; j < nodes.length; ++j) {
			if(nodes[j].randomValue === nodes[min].randomValue) {
					min = j;
			}
			if(nodes[j].randomValue < nodes[min].randomValue) {
				min = j;
			}
		}
		if(min !== i) {
			swap(nodes, min, i);
		}
	}
	return nodes;
};
