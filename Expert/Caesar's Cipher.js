function caesarCipher(s, k) {
	var newCipher = "";
	console.log(k);
	for (let i = 0; i < s.length; i++)
		{
			if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) < 123)
				{
					//((122-97)+26)%26
					var next = (s.charCodeAt(i)-97) + k;
					if (next > 26)
						var nextChar = String.fromCharCode((next%26)+97);
					else
						var nextChar = String.fromCharCode(next+97);
					newCipher += nextChar;
				}
			else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 )
				{
					var next = (s.charCodeAt(i)-65) + k;
					if (next > 26)
						var nextChar = String.fromCharCode((next%26)+65);
					else
						var nextChar = String.fromCharCode(next+65);
					newCipher += nextChar;
				}
			else
				{
					newCipher += s[i];
				}
				
		}
	return newCipher;
}