function triangle(n) {
	var b = [0]
	for (let i = 1; i <= n; i++)
		{
			b.push(i+b[i-1]);
		}
	return b[n];
}