const powerSet = (arr: any[]): any[] => {
	if (!arr) return null;

	let listOfSets = [[]];
	for (let i = 0; i < arr.length; i += 1) {
		let listCopy = [...listOfSets];
		listCopy = listCopy.map(set => set.concat([arr[i]]));
		listOfSets = listOfSets.concat(listCopy);
	}

	return listOfSets;
}

// console.log(powerSet([1]));
// console.log(powerSet([1, 2]));
// console.log(powerSet([1, 3, 5]));
// console.log(powerSet([5, -1, 4, 17]));