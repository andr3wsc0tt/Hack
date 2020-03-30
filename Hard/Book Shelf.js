function Book(title, author) {	
	constructor(title, author)
	{
		this.title = title;
		this.author = author;
	}
	this.getTitle = function()
	{
		return `Title: ${this.title}`;
	}
	this.getAuthor = function()
	{
		return `Author: ${this.author}`;
	}
}

PP = new Book("Pride and Prejudice", "Jane Austen");
H = new Book("Hamlet", "William Shakespeare");
WP = new Book("War and Peace", "Leo Tolstoy");