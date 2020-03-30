function reverseLegoYoda(text) {
	var newSpeak_sentence = text.split(".");
	//console.log(newSpeak_sentence);
	var finalSpeak = "";
	for (let i = 0; i < newSpeak_sentence.length-1; i++)
		{
			var newSpeak_comma = newSpeak_sentence[i].split(", ");
			console.log(newSpeak_comma[1]);
			console.log(newSpeak_comma[0]);
			
			if (i > 0)
				{
					newSpeak_comma[1] = " "+newSpeak_comma[1].charAt(0).toUpperCase() + newSpeak_comma[1].slice(1, newSpeak_comma[1].length) ;
					newSpeak_comma[0] = newSpeak_comma[0].slice(1, newSpeak_comma[0].length);
				}
			
			finalSpeak += newSpeak_comma[1].charAt(0).toUpperCase();
			finalSpeak += newSpeak_comma[1].slice(1, newSpeak_comma[1].length);
			finalSpeak += " ";
			finalSpeak += newSpeak_comma[0].charAt(0).toLowerCase();
			finalSpeak += newSpeak_comma[0].slice(1, newSpeak_comma[0].length);
			finalSpeak += ".";
		}
	
	return finalSpeak;
}