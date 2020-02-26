const getTopToys = (
	numToys: number, topToys: number, toys: string[], numQuotes: number, quotes: string[]
): string[] => {
	const toyDict = toys.reduce((map, toy) => map.set(toy, [0, 0]), new Map());

	quotes.forEach(quote => {
		let quoteWords = quote.toLowerCase().replace(/[^a-z]/g, ' ').split(' ');
		let toysFound = new Set();

		// Count and increment number of times toys are found in quotes
		quoteWords.forEach(word => {
			if (toys.includes(word)) {
				toysFound.add(word);
				toyDict.get(word)[0]++;
			}
		});
		
		// Increment the toys that were found in this quote
		toysFound.forEach(toy => toyDict.get(toy)[1]++);
	});

	// Sort array by number of appearances total then by number of counts
	const sortedArr = toys.sort((a, b) => {
		let aCounts = toyDict.get(a);
		let bCounts = toyDict.get(b);

		if (aCounts[0] !== bCounts[0]) {
			return bCounts[0] - aCounts[0];
		} else {
			bCounts[1] - aCounts[1];
		}
	});

	return sortedArr.slice(0, topToys);
}

const toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"];
const quotes = [
"Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
"The new Elmo dolls are super high quality",
"Expect the Elsa dolls to be very popular this year, Elsa!",
"Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
"For parents of older kids, look into buying them a drone",
"Warcraft is slowly rising in popularity ahead of the holiday season"
];

console.log(getTopToys(6, 2, toys, 6, quotes));