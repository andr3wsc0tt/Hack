function distanceToNearestVowel(str) {
	const vowels = ["a", "e", "i", "o", "u"];
	const dist = [];
	
	console.log(str);
	for (let i = 0; i < str.length; i++)
		{
			for (let j = 0; j < str.length; j++)
				{
					if (i-j >= 0)
						{
							if (vowels.includes(str[i-j]))
								{
								dist.push(Math.abs(j));
								break;
								}
							//check left side
						}
					if (i+j <= str.length)
						{
							if (vowels.includes(str[i+j]))
								{
								dist.push(Math.abs(j));
								break;
								}
							//check right side
						}
				}
		}
	return dist;
}