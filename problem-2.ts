// Define the Book class
class Book {
    title: string;  
    author: string; 
    isbn: string;   

    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    // Book details method
    getDetails(): string {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}


// Define the Library class
class Library {
    books: Book[]; 

    constructor() {
        this.books = [];
    }

    // Add book method
    addBook(book: Book): void {
        this.books.push(book);
    }

    // find book by isbn method
    findBookByISBN(isbn: string): Book | null {
        const book = this.books.find(b => b.isbn === isbn);
        return book || null;
    }

    // list details of book
    listBooks(): void {
        this.books.forEach(book => {
            console.log(book.getDetails());     //use get details to list
        });
    }
}


// Test
const library = new Library();


const book1 = new Book("The Principles of object oriented JS", "X. Y Z", "12345");
const book2 = new Book("The Basics of TyepScript", "Author", "54321");

// Add books to the library
library.addBook(book1);
library.addBook(book2);

// list added books
console.log("Added Books:");
library.listBooks();

// Find a book by ISBN
const foundBook = library.findBookByISBN("12345");
if (foundBook) {
    console.log(`Found book: ${foundBook.getDetails()}`);
} else {
    console.log("Book not found.");
}