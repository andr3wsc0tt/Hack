function numInStr(arr) {
	var final = [];
	for (var ele in arr)
	{
		for (var let in arr[ele])
			{
				if (parseInt(arr[ele][let]))
					{
						final.push(arr[ele]);
						break;
					}
			}
	}
	return final;
}