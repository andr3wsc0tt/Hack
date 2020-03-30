function additivePersistence(n) {
	sum = (n) =>
	{

	n = n.toString().split("");
	var result = n.map(function (x) { 
  return parseInt(x, 10); });
	result = result.reduce((a, b) => a + b, 0);
	//console.log(result);
	return result;
	}
	var it = 0;
	if (n.toString().length == 1)
		return 0;
	else
	{
		while (n.toString().length > 1 )
			{
				n = sum(n);
				++it;
			}
	}
	return it;
}

function multiplicativePersistence(n) {
	mult = (n) =>
	{

	n = n.toString().split("");
	var result = n.map(function (x) { 
  return parseInt(x, 10); });
	result = result.reduce((a, b) => a * b, 1);
	console.log(result);
	return result;
	}
	var it = 0;
	if (n.toString().length == 1)
		return 0;
	else
	{
		while (n.toString().length > 1 )
			{
				n = mult(n);
				++it;
			}
	}
	return it;
}