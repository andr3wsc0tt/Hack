function getHashTags(str) {
	str = str.replace(/[,\.?]/g, "");
	var splitted = str.split(" ");
	splitted.sort((x,y) => y.length - x.length);
	
	var ht = [];
	for (var ele in splitted)
		{
			ht.push(`#${splitted[ele].toLowerCase()}`);
			if (ele == 2)
				break;
		}
	return ht;
}