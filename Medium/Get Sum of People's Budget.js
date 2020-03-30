function getBudgets(arr) {
	var sum = 0;
	for (var obj in arr)
		{
			sum += arr[obj].budget;
		}
	return sum;
}