function pingPong(arr, win) {
	if (win)
		{
			for (let i = arr.length; i > 0; i--)
				{
					arr.splice(i, 0, "Pong!");
				}
		}
	else
		{
			for (let i = arr.length-1; i > 0; i--)
				{
					arr.splice(i, 0, "Pong!");
				}
		}
	return arr;
}