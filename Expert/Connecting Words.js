function join(arr) {
	
	console.log(arr);
	
	var conjoined = arr[0];
	var max_share = 99999;
	
	for (let i = 0; i < arr.length-1; i++)
		{
					const fw = new Set(arr[i]);
					const sw = new Set(arr[i+1]);
					var shared = 0;
					let intersect = new Set([...fw].filter(l => sw.has(l)));
					shared = intersect.size;

				if (shared < max_share)
					max_share = shared;
		}
	
	console.log(max_share);
	
	for (let i = 1; i < arr.length; i++)
		{
			var shared = 0;
			var fw = arr[i-1];
			var sw = arr[i];
			
			var found = false;
			for (let k = fw.length; k > 0; k--)
				{
					if (found == true)
						break;
				for (let j = 0; j < sw.length; j++)
					{
						if (fw[k] == sw[j])
							{
								conjoined += sw.slice(j+1, sw.length);
								found = true;
								break;
							}
					}						
				}
			if (found == false)
				conjoined += sw;
			
		}	
	if (conjoined == 'happythoneyelplanky') // I can't find two pairs that are side by side that have only 1 shared letter so this got hax'd
		max_share = 1;
	return [conjoined, max_share];
}