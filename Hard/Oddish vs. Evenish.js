function oddishOrEvenish(num) {
	var splitted = num.toString().split('');
	var result = splitted.map(function (x) { 
  return parseInt(x, 10); 
});
	result = result.reduce((a, b) => a + b, 0);
	if (result%2 == 0)
		return "Evenish";
	else
		return "Oddish";
}