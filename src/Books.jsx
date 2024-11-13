import Book from "./Book";

const Books = () => {
    const books = [
        {id:1 , name: 'physics', price: 120},
        {id:2 , name: 'chemistry', price: 180},
        {id:3 , name: 'math', price: 140},
        {id:4 , name: 'biology', price: 150},
        {id:5 , name: 'bangla', price: 170}
    ]

    return (
        <div>
            {
                books.map(book=> <Book key={book.id} book={book}></Book>)
            }
        </div>
    );
};

export default Books;