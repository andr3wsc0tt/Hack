function bucketize(phrase, n) {
	var buckets = phrase.split(" ");
	console.log(buckets, n);
	var biggest = buckets.reduce((a, b) => a.length >= b.length ? a : b)
	if(biggest.length > n)
		return [];
	
	var final_buckets = [];
	var j = 0;
	for (let i = 0; i < buckets.length; i++)
		{
			if (final_buckets[j] != undefined)
			{
				
				if (final_buckets[j].length + buckets[i].length+1 <= n)
					{
						final_buckets[j] += " "+buckets[i];
					}
				else
					{
					j++;
					final_buckets[j] = buckets[i];
					}
			}
			else
				{
				final_buckets[j] = buckets[i];
				}
				
		}
	return final_buckets;
}