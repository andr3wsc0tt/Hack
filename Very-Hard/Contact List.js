function sortContacts(names, sort) {
	if (names == null)
		return [];
	if (sort == "ASC")
		names.sort((x,y) => {
			if(x.split(" ")[1] < y.split(" ")[1]) {return -1;}
			if(x.split(" ")[1] > y.split(" ")[1]) {return 1;}
		} );
	else
		names.sort((x,y) => {
			if(x.split(" ")[1] < y.split(" ")[1]) {return 1;}
			if(x.split(" ")[1] > y.split(" ")[1]) {return -1;}
		} );
	return names;
}