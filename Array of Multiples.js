function arrayOfMultiples (num, length) {
	var arr = [];
	for (let i = 1; i <= length; i++)
		{
			arr.push(i*num);
		}
	return arr;
}