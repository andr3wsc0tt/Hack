function sevenBoom(arr) {
	for (var ele in arr)
		{
			if (arr[ele].toString().includes(7))
				return "Boom!";
		}
	return "there is no 7 in the array";
}