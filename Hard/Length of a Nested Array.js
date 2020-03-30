function getLength(arr) {
	var stringy = JSON.stringify(arr);
	var matchnum = stringy.match(/\d/g);
	if (matchnum == null)
		return 0;
	else
		return matchnum.length;
}